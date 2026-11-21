import type { NextConfig } from "next";

// The site is 100% static (no API routes, no server components) — every build
// produces a full static export in `out/`, which keeps the static deployment
// (wrangler pages_build_output_dir = "out") working unchanged.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
