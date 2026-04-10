import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo"

const DATE_PUBLISHED = "2024-01-01"
const DATE_MODIFIED = "2026-04-10"

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité d'Immo+ (Immo Plus) — comment nous collectons, utilisons et protégeons vos données personnelles.",
  openGraph: {
    title: "Politique de confidentialité | Immo+",
    description:
      "Politique de confidentialité de l'application Immo+ (Immo Plus).",
    url: `${SITE_URL}/politique-confidentialite`,
    type: "article",
    modifiedTime: DATE_MODIFIED,
    publishedTime: DATE_PUBLISHED,
  },
  alternates: {
    canonical: `${SITE_URL}/politique-confidentialite`,
  },
  other: {
    "article:published_time": DATE_PUBLISHED,
    "article:modified_time": DATE_MODIFIED,
  },
}

export default function PolitiqueConfidentialiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
