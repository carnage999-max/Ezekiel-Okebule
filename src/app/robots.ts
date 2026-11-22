import type { MetadataRoute } from "next";
import { profile } from "@/data/resume";

export default function robots(): MetadataRoute.Robots {
  const base = `https://${profile.domain}`;
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
