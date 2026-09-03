import type { NextConfig } from "next";

const basePath = "";

const nextConfig: NextConfig = {
  output: "export",
  // Site is served from the domain root, so no path prefix is needed
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
