import { createClient } from "redis";

interface RedisClient {
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  on: (event: string, callback: (err: Error) => void) => void;
  get: (key: string) => Promise<string | null>;
  setEx: (key: string, seconds: number, value: string) => Promise<void>;
  sendCommand: (args: string[]) => Promise<any>;
  sMembers: (key: string) => Promise<string[]>;
  hGetAll: (key: string) => Promise<Record<string, string>>;
  set: (key: string, value: string, options?: { EX?: number }) => Promise<void>;
  hSet: (key: string, fields: Record<string, string>) => Promise<number>;
  expire: (key: string, seconds: number) => Promise<boolean>;
  zRange: (key: string, start: number, stop: number) => Promise<string[]>;
  zAdd: (key: string, score: { score: number; value: string }) => Promise<number>;
  zRemRangeByScore: (key: string, min: number, max: number) => Promise<number>;
  keys: (pattern: string) => Promise<string[]>;
  del: (key: string) => Promise<number>;
  rPush: (key: string, value: string) => Promise<number>;
  HMGET: (key: string, ...fields: string[]) => Promise<(string | null)[]>;
  hGet: (key: string, field: string) => Promise<string | null>;
}

class RedisPool {
  private connections: RedisClient[] = [];
  private maxConnections: number;
  private inUse: Set<RedisClient> = new Set();

  constructor(maxConnections: number = 10) {
    this.maxConnections = maxConnections;
  }

  async getConnection(): Promise<RedisClient> {
    // First try to find an available existing connection
    const availableConnection = this.connections.find((conn) => !this.inUse.has(conn));
    if (availableConnection) {
      this.inUse.add(availableConnection);
      return availableConnection;
    }

    // If we haven't reached max connections, create a new one
    if (this.connections.length < this.maxConnections) {
      const client = await this.createConnection();
      this.connections.push(client);
      this.inUse.add(client);
      return client;
    }

    // If we're at max connections, wait for one to become available
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        const conn = this.connections.find((c) => !this.inUse.has(c));
        if (conn) {
          clearInterval(interval);
          this.inUse.add(conn);
          resolve(conn);
        }
      }, 100);
    });
  }

  private async removeConnection(client: RedisClient) {
    // Remove from tracking first
    this.inUse.delete(client);
    this.connections = this.connections.filter((c) => c !== client);

    try {
      // @ts-ignore - checking internal state
      if (client.isOpen || client.connected) {
        await client.disconnect();
      }
    } catch (error) {
      // Just log and continue since we've already removed from tracking
      console.error("Error during Redis disconnect:", error);
    }
  }

  async releaseConnection(client: RedisClient): Promise<void> {
    // Skip if connection is already removed
    if (!this.connections.includes(client)) {
      return;
    }

    try {
      // @ts-ignore - checking internal state
      if (!client.isOpen || !client.connected) {
        await this.removeConnection(client);
      } else {
        // Just mark as not in use if connection is still healthy
        this.inUse.delete(client);
      }
    } catch (error) {
      // Ensure connection is removed from tracking even if check fails
      await this.removeConnection(client);
    }
  }

  private async createConnection(): Promise<RedisClient> {
    const client = createClient({
      password: process.env.REDIS_PASSWORD,
      socket: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
        connectTimeout: 5000,
        keepAlive: 10000,
      },
      // Add connection name
      name: `takostan-app-${Date.now()}`,
      // Command retry strategy
      commandsQueueMaxLength: 100,
      disableOfflineQueue: true,
      readonly: false,
    });

    client.on("error", async (err) => {
      console.error("Redis client error:", err);
      await this.releaseConnection(client as unknown as RedisClient);
    });

    await client.connect();
    return client as unknown as RedisClient;
  }

  async cleanupIdleConnections() {
    const results: {
      killed: number;
      connections: Array<{
        id: string;
        addr: string;
        age: string;
        idle: string;
        name?: string;
      }>;
    } = { killed: 0, connections: [] };

    try {
      // Get a connection to run CLIENT LIST
      const client = await this.getConnection();

      try {
        // Fix: Use proper array format for sendCommand
        const clientList = await client.sendCommand(["CLIENT", "LIST"]);
        const clients = clientList.toString().split("\n");

        for (const clientInfo of clients) {
          if (!clientInfo.trim()) continue;

          const info: Record<string, string> = {};
          clientInfo.split(" ").forEach((pair: string) => {
            const [key, value] = pair.split("=");
            if (key && value) info[key] = value;
          });

          // Add to results if idle for more than 60 seconds
          if (parseInt(info.idle || "0") > 60) {
            results.connections.push({
              id: info.id || "unknown",
              addr: info.addr || "unknown",
              age: info.age || "unknown",
              idle: info.idle || "unknown",
              name: info.name,
            });

            // Fix: Use proper array format for CLIENT KILL command
            try {
              await client.sendCommand(["CLIENT", "KILL", "ID", info.id]);
              results.killed++;

              // Clean up our internal tracking
              const idleConn = this.connections.find(
                (c) =>
                  // @ts-ignore - accessing internal property
                  c.options?.name === info.name
              );
              if (idleConn) {
                await this.removeConnection(idleConn);
              }
            } catch (killError) {
              console.error("Failed to kill client:", info.id, killError);
            }
          }
        }

        return {
          success: true,
          ...results,
          message: `Successfully killed ${results.killed} idle connections`,
          poolStats: {
            totalConnections: this.connections.length,
            inUseConnections: this.inUse.size,
            availableConnections: this.connections.length - this.inUse.size,
          },
        };
      } finally {
        // Always release the connection we used for cleanup
        await this.releaseConnection(client);
      }
    } catch (error) {
      console.error("Error in cleanupIdleConnections:", error);
      return {
        success: false,
        ...results,
        error: (error as Error).message,
        poolStats: {
          totalConnections: this.connections.length,
          inUseConnections: this.inUse.size,
          availableConnections: this.connections.length - this.inUse.size,
        },
      };
    }
  }

  // Change from private to public
  public startAutoCleanup(intervalMinutes: number = 5) {
    setInterval(
      async () => {
        try {
          const result = await this.cleanupIdleConnections();
        } catch (error) {
          console.error("Error in auto cleanup:", error);
        }
      },
      intervalMinutes * 60 * 1000
    );
  }
}

// Create the pool instance with auto cleanup
export const redisPool = new RedisPool(2000);
// Now this will work:
redisPool.startAutoCleanup(5);
