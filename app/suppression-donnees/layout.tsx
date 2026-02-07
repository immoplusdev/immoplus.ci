import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Suppression des données",
  description:
    "Comment demander la suppression de vos données personnelles sur Immo+ (Immo Plus) — droit à l'effacement RGPD.",
  openGraph: {
    title: "Suppression des données | Immo+",
    description:
      "Demande de suppression de vos données personnelles sur Immo+ (Immo Plus).",
    url: `${SITE_URL}/suppression-donnees`,
  },
  alternates: {
    canonical: `${SITE_URL}/suppression-donnees`,
  },
}

export default function SuppressionDonneesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
