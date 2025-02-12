"use server";

import { redisPool } from "@/lib/redisPool";

export async function getHomepageFromRedis() {
  if (!redisPool) {
    throw new Error("Redis pool is not available on the client side");
  }

  let redisClient;

  try {
    redisClient = await redisPool.getConnection();
    const key = "portfolio:homepage";

    // Get data from Redis
    const data = await redisClient.get(key);

    if (!data) {
      console.log(`No data found for key: ${key}`);
      return null;
    }

    // Parse the JSON data
    const portfolioData = JSON.parse(data);
    return portfolioData;
  } catch (error) {
    console.error("Error fetching portfolio from Redis:", error);
    throw error;
  } finally {
    if (redisClient) {
      await redisPool.releaseConnection(redisClient);
    }
  }
}
