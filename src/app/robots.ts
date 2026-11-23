import type { MetadataRoute } from "next";
import { profile } from "@/data/resume";

// Required for `output: "export"` — there's no server to generate this on
// demand, so it must be emitted once at build time as a static file.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = `https://${profile.domain}`;
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
