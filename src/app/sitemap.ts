import type { MetadataRoute } from "next";
import { profile } from "@/data/resume";

// Required for `output: "export"` — there's no server to generate this on
// demand, so it must be emitted once at build time as a static file.
// `lastModified` below becomes a fixed build-time timestamp as a result,
// which is the correct behaviour for a static export: it refreshes on
// every deploy, same as the rest of the page content.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${profile.domain}`;
  const sections = ["", "#about", "#skills", "#resume", "#projects", "#contact"];
  return sections.map((section) => ({
    url: `${base}/${section}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: section === "" ? 1 : section === "#projects" ? 0.9 : 0.8,
  }));
}
