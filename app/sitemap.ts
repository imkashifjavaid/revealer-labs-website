import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/site-content";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return [
    {
      url: siteUrl.toString(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...caseStudies.map((caseStudy) => ({
      url: new URL(`/work/${caseStudy.slug}`, siteUrl).toString(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
