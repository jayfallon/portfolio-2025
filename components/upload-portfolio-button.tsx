"use client";

import { useState } from "react";
import { uploadHomepageToRedis } from "@/app/actions/upload-homepage-to-redis";

export default function UploadPortfolioButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleUpload = async () => {
    try {
      setIsLoading(true);
      setStatus("idle");
      await uploadHomepageToRedis();
      setStatus("success");
    } catch (error) {
      console.error("Upload failed:", error);
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleUpload}
      disabled={isLoading}
      className={`px-4 py-2 rounded-md font-medium text-sm transition-colors ${
        isLoading
          ? "bg-gray-300 cursor-not-allowed"
          : status === "success"
            ? "bg-green-500 hover:bg-green-600 text-white"
            : status === "error"
              ? "bg-red-500 hover:bg-red-600 text-white"
              : "bg-blue-500 hover:bg-blue-600 text-white"
      }`}
    >
      {isLoading
        ? "Uploading..."
        : status === "success"
          ? "Upload Complete!"
          : status === "error"
            ? "Upload Failed"
            : "Upload Portfolio"}
    </button>
  );
}
