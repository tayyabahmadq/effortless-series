import type { NextConfig } from "next";

// The site is 100% static (no API routes, no server components), so every
// build produces a full static export in `out/`. This works for plain
// `npm run build`, `npm run build:cf`, and Cloudflare's build pipeline alike.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: false,
};

export default nextConfig;
