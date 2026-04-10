import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Télécharger Immo+ — App Client & Pro",
  description:
    "Téléchargez Immo+ sur iPhone ou Android. Application immobilière pour particuliers et professionnels en Côte d'Ivoire — disponible sur App Store et Google Play.",
  openGraph: {
    title: "Télécharger Immo+ | App Client & Pro",
    description:
      "Téléchargez Immo+ Client ou Immo+ Pro sur votre mobile. Disponible sur App Store et Google Play.",
    url: `${SITE_URL}/download`,
  },
  alternates: {
    canonical: `${SITE_URL}/download`,
  },
}

export default function TelechargerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
