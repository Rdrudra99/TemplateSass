/* eslint-disable */
import type { NextConfig } from "next";

const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = withPWA({
  eslint: {
    dirs: ["src"],
    ignoreDuringBuilds: true,
  },
  images: {
    // domains: ["shadcnblocks.com", "images.unsplash.com"],
    remotePatterns: [
      "https://shadcnblocks.com/**",
      "https://images.unsplash.com/**",
    ]
  },
});

export default nextConfig;
