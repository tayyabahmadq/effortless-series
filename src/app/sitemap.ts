import type { MetadataRoute } from "next";
import { rgpvBranches } from "@/lib/rgpv/branches-data";

export const dynamic = "force-static";

/**
 * Full sitemap for the static export — every landing page plus all
 * 40 branches, their semesters and every subject page (~1,850 URLs).
 * Next.js emits this as out/sitemap.xml.
 */
const BASE = "https://effortless-series.pages.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/branches",
    "/certifications",
    "/jobs",
    "/rgpv",
  ].map((p) => ({
    url: `${BASE}${p}`,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.8,
  }));

  const pages: MetadataRoute.Sitemap = [];
  for (const b of rgpvBranches) {
    pages.push({
      url: `${BASE}/rgpv/${b.slug}`,
      changeFrequency: "weekly",
      priority: 0.7,
    });
    for (const sem of b.semesters) {
      pages.push({
        url: `${BASE}/rgpv/${b.slug}/${sem.number}`,
        changeFrequency: "weekly",
        priority: 0.6,
      });
      for (const s of sem.subjects) {
        pages.push({
          url: `${BASE}/rgpv/${b.slug}/${sem.number}/${s.slug}`,
          changeFrequency: "monthly",
          priority: 0.5,
        });
      }
    }
  }

  return [...staticPages, ...pages];
}
