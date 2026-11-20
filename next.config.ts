import type { NextConfig } from "next";

const isStaticExport = process.env.NEXT_EXPORT === "1";

const nextConfig: NextConfig = {
  // Static export only activates via `npm run build:cf` (Cloudflare Pages).
  // Plain `npm run build` / `next dev` behave exactly as before.
  output: isStaticExport ? "export" : undefined,
  ...(isStaticExport ? { images: { unoptimized: true } } : {}),
  reactStrictMode: false,
};

export default nextConfig;
