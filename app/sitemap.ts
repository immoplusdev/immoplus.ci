import { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-04-10")

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/download`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/conditions-utilisation`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/politique-confidentialite`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/suppression-donnees`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ]
}
