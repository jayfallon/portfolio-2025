"use server";

import { readFile } from "fs/promises";
import { redisPool } from "@/lib/redisPool";
import path from "path";

export async function uploadHomepageToRedis() {
  if (!redisPool) {
    throw new Error("Redis pool is not available on the client side");
  }

  let redisClient;
  const startTime = Date.now();

  try {
    console.log(`[${new Date().toISOString()}] Starting portfolio homepage upload process`);

    // Read portfolio data
    const portfolioPath = path.join(process.cwd(), "data/portfolio.json");
    console.log(`[${new Date().toISOString()}] Reading portfolio file...`);
    const portfolioContent = await readFile(portfolioPath, "utf8");
    const portfolioData = JSON.parse(portfolioContent);

    console.log(`[${new Date().toISOString()}] Successfully read portfolio file`);
    console.log(`[${new Date().toISOString()}] Establishing Redis connection...`);

    redisClient = await redisPool.getConnection();
    console.log(`[${new Date().toISOString()}] Redis connection established`);

    // Get existing data
    const key = "portfolio:homepage";
    const existingData = await redisClient.get(key);
    const existingPortfolio = existingData ? JSON.parse(existingData) : null;

    // Check if data has changed
    const hasChanged =
      !existingPortfolio || JSON.stringify(portfolioData) !== JSON.stringify(existingPortfolio);

    if (hasChanged) {
      await redisClient.set(key, JSON.stringify(portfolioData));
      console.log(`[${new Date().toISOString()}] Portfolio data updated successfully`);
    } else {
      console.log(`[${new Date().toISOString()}] No changes detected, skipping update`);
    }

    // Verify stored data
    const verification = await redisClient.get(key);
    console.log(`\nVerification Results:`);
    console.log(`- Data stored successfully: ${verification !== null}`);

    const duration = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`\n[${new Date().toISOString()}] Process completed in ${duration} seconds`);

    return { success: true };
  } catch (error) {
    console.error(`[${new Date().toISOString()}] Error uploading portfolio:`, error);
    throw error;
  } finally {
    if (redisClient) {
      await redisPool.releaseConnection(redisClient);
    }
    console.log(`[${new Date().toISOString()}] Redis connection released`);
  }
}
