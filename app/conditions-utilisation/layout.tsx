import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo"

const DATE_PUBLISHED = "2024-01-01"
const DATE_MODIFIED = "2026-04-10"

export const metadata: Metadata = {
  title: "Conditions d'utilisation",
  description:
    "Conditions générales d'utilisation de l'application Immo+ (Immo Plus) — plateforme de gestion immobilière en Côte d'Ivoire.",
  openGraph: {
    title: "Conditions d'utilisation | Immo+",
    description:
      "Conditions générales d'utilisation de l'application Immo+ (Immo Plus).",
    url: `${SITE_URL}/conditions-utilisation`,
    type: "article",
    modifiedTime: DATE_MODIFIED,
    publishedTime: DATE_PUBLISHED,
  },
  alternates: {
    canonical: `${SITE_URL}/conditions-utilisation`,
  },
  other: {
    "article:published_time": DATE_PUBLISHED,
    "article:modified_time": DATE_MODIFIED,
  },
}

export default function ConditionsUtilisationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
