import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo"

const DATE_PUBLISHED = "2024-01-01"
const DATE_MODIFIED = "2026-04-10"

export const metadata: Metadata = {
  title: "Suppression des données",
  description:
    "Comment demander la suppression de vos données personnelles sur Immo+ (Immo Plus) — droit à l'effacement RGPD.",
  openGraph: {
    title: "Suppression des données | Immo+",
    description:
      "Demande de suppression de vos données personnelles sur Immo+ (Immo Plus).",
    url: `${SITE_URL}/suppression-donnees`,
    type: "article",
    modifiedTime: DATE_MODIFIED,
    publishedTime: DATE_PUBLISHED,
  },
  alternates: {
    canonical: `${SITE_URL}/suppression-donnees`,
  },
  other: {
    "article:published_time": DATE_PUBLISHED,
    "article:modified_time": DATE_MODIFIED,
  },
}

export default function SuppressionDonneesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
