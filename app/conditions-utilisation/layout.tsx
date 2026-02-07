import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Conditions d'utilisation",
  description:
    "Conditions générales d'utilisation de l'application Immo+ (Immo Plus) — plateforme de gestion immobilière en Côte d'Ivoire.",
  openGraph: {
    title: "Conditions d'utilisation | Immo+",
    description:
      "Conditions générales d'utilisation de l'application Immo+ (Immo Plus).",
    url: `${SITE_URL}/conditions-utilisation`,
  },
  alternates: {
    canonical: `${SITE_URL}/conditions-utilisation`,
  },
}

export default function ConditionsUtilisationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
