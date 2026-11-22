import type { MetadataRoute } from "next";
import { profile } from "@/data/resume";

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
