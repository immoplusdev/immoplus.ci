import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "FAQ – Questions fréquentes",
  description:
    "Retrouvez les réponses aux questions les plus fréquentes sur l'application Immo+ (Immo Plus) — plateforme immobilière en Côte d'Ivoire.",
  openGraph: {
    title: "FAQ | Immo+",
    description:
      "Réponses aux questions fréquentes sur Immo+, la plateforme immobilière en Côte d'Ivoire.",
    url: `${SITE_URL}/faq`,
  },
  alternates: {
    canonical: `${SITE_URL}/faq`,
  },
}

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
