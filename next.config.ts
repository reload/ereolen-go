import type { NextConfig } from "next";

const basePath = process.env.NODE_ENV === "production" ? "/ereolen-go" : "";

const nextConfig: NextConfig = {
  output: "export",
  // Prefix routes and assets for GitHub Pages under /ereolen-go
  basePath: basePath,
  assetPrefix: basePath,
  // Ensure static export generates trailing slashes for directories
  trailingSlash: true,
  // Disable Next.js image optimization for static exports
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
