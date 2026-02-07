import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { RentBuySection } from "@/components/rent-buy-section"
import { PilotezBiensSection } from "@/components/pilotez-biens-section"
import { SecuriteSection } from "@/components/securite-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaAdventureSection } from "@/components/cta-adventure-section"
import { CtaDownloadSection } from "@/components/cta-download-section"
import { Footer } from "@/components/footer"
import { SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Immo+ — Gestion immobilière intelligente | Côte d'Ivoire",
  description:
    "Application de gestion immobilière Immo+ (Immo Plus). Gérez biens, clients, contrats et paiements. Louez et vendez en toute confiance. Téléchargez sur App Store et Google Play.",
  openGraph: {
    url: SITE_URL,
    title: "Immo+ — Gestion immobilière intelligente",
    description:
      "Gérez biens, clients, contrats et paiements. Application immobilière pour la Côte d'Ivoire.",
  },
  alternates: {
    canonical: SITE_URL,
  },
}

export default function Page() {
  return (
    <main className="min-h-screen" role="main">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <RentBuySection />
      <CtaDownloadSection />
      <PilotezBiensSection />
      <SecuriteSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CtaAdventureSection />
      <Footer />
    </main>
  )
}
