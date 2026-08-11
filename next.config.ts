import type { NextConfig } from "next";

const deployBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: process.env.GITHUB_ACTIONS === "true" ? "export" : undefined,
  basePath: deployBasePath,
  assetPrefix: deployBasePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
