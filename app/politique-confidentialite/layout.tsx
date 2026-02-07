import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité d'Immo+ (Immo Plus) — comment nous collectons, utilisons et protégeons vos données personnelles.",
  openGraph: {
    title: "Politique de confidentialité | Immo+",
    description:
      "Politique de confidentialité de l'application Immo+ (Immo Plus).",
    url: `${SITE_URL}/politique-confidentialite`,
  },
  alternates: {
    canonical: `${SITE_URL}/politique-confidentialite`,
  },
}

export default function PolitiqueConfidentialiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
