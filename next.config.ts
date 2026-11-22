import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the site has no API routes or dynamic rendering (the
  // planned analytics feature will be a separate Cloudflare Pages Function
  // + D1, not a Next.js API route), so there's nothing a server runtime
  // buys us. Cloudflare Pages serves this natively with zero adapter —
  // no @opennextjs/cloudflare, no next-on-pages, no Workers runtime
  // constraints to work around.
  output: "export",
  images: {
    // The Image Optimization API needs a server, which a static export
    // doesn't have. No loss here: every image already ships pre-sized
    // and pre-compressed (WebP/JPEG at exact display dimensions).
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
