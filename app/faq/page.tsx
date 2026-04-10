"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronUp, MapPin, Phone, Mail, MessageCircle } from "lucide-react"
import { SaxCryptoAppleLinear, SaxCryptoGooglePlayLinear } from "@meysam213/iconsax-react"
import {
  APP_STORE_URL,
  PLAY_STORE_URL,
  CLIENT_APP_STORE_URL,
  CLIENT_PLAY_STORE_URL,
} from "@/lib/app-links"

const CATEGORIES = [
  {
    id: "general",
    emoji: "🏠",
    title: "Général",
    questions: [
      {
        q: "Qu'est-ce qu'Immo+ ?",
        a: "Immo+ est une plateforme immobilière ivoirienne qui met en relation des particuliers et des professionnels de l'immobilier (agences, promoteurs) pour la location, la vente et la gestion de biens immobiliers en Côte d'Ivoire.",
      },
      {
        q: "Immo+ est-il disponible dans toute la Côte d'Ivoire ?",
        a: "Oui, Immo+ est disponible sur tout le territoire ivoirien. La plateforme est accessible via l'application mobile (iOS et Android) ainsi que sur le web.",
      },
      {
        q: "Comment contacter le support Immo+ ?",
        a: "Vous pouvez nous joindre par email à support@immoplus.ci, par téléphone au 07 01 16 04 50 ou au +225 07 20 15 46 35, ou via WhatsApp sur ces mêmes numéros. Nous sommes situés à Cocody Riviera 3, Abidjan, Côte d'Ivoire.",
      },
    ],
  },
  {
    id: "compte",
    emoji: "👤",
    title: "Compte & Inscription",
    questions: [
      {
        q: "Comment créer un compte ?",
        a: "Téléchargez l'application Immo+ sur l'App Store ou Google Play, puis appuyez sur « S'inscrire ». Renseignez vos informations (nom, email, numéro de téléphone) et validez votre compte par SMS ou email.",
      },
      {
        q: "Puis-je utiliser Immo+ sans créer de compte ?",
        a: "Vous pouvez consulter les annonces sans compte. En revanche, pour contacter un professionnel, enregistrer des favoris ou publier une annonce, un compte est requis.",
      },
      {
        q: "Comment réinitialiser mon mot de passe ?",
        a: "Sur la page de connexion, appuyez sur « Mot de passe oublié ? », saisissez votre adresse email et suivez les instructions envoyées par email ou SMS.",
      },
    ],
  },
  {
    id: "annonces",
    emoji: "📋",
    title: "Annonces",
    questions: [
      {
        q: "Comment publier une annonce ?",
        a: "Les annonces sont réservées aux professionnels partenaires (agences et promoteurs). Si vous êtes professionnel, rendez-vous dans l'application Immo+ Pro et créez votre annonce depuis votre espace dédié.",
      },
      {
        q: "Les annonces sont-elles vérifiées ?",
        a: "Oui, chaque annonce publiée par un professionnel est soumise à une vérification de notre équipe avant d'être visible par les utilisateurs, afin de garantir la fiabilité des informations.",
      },
      {
        q: "Comment signaler une annonce incorrecte ?",
        a: "Sur la page de l'annonce, appuyez sur l'icône « Signaler » et précisez le motif. Notre équipe traitera votre signalement dans les plus brefs délais.",
      },
    ],
  },
  {
    id: "pro",
    emoji: "💼",
    title: "Espace Professionnel",
    questions: [
      {
        q: "Comment devenir partenaire professionnel ?",
        a: "Téléchargez l'application Immo+ Pro, créez un compte professionnel et complétez les informations de votre agence (RCCM, siège social, etc.). Notre équipe validera votre dossier sous 48 h.",
      },
      {
        q: "Quels sont les tarifs pour les professionnels ?",
        a: "Consultez notre page de tarification dans l'application Immo+ Pro ou contactez notre équipe commerciale à support@immoplus.ci pour obtenir une offre personnalisée.",
      },
      {
        q: "Quelle commission Immo+ prélève-t-il sur les transactions ?",
        a: "Immo+ prélève 25 % du mois d'agence pour la gestion locative, et entre 2,5 % et 10 % des honoraires perçus pour les ventes, selon les termes du contrat d'adhésion.",
      },
    ],
  },
  {
    id: "securite",
    emoji: "🔒",
    title: "Sécurité & Confidentialité",
    questions: [
      {
        q: "Comment mes données personnelles sont-elles protégées ?",
        a: "Vos données sont stockées de manière sécurisée et ne sont jamais revendues à des tiers. Consultez notre politique de confidentialité pour plus de détails.",
      },
      {
        q: "Comment supprimer mon compte et mes données ?",
        a: "La suppression de compte se fait depuis votre application mobile. Rendez-vous dans les paramètres de l'application pour effectuer cette action.",
      },
    ],
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: CATEGORIES.flatMap((cat) =>
    cat.questions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    }))
  ),
}

export default function FaqPage() {
  const [openItem, setOpenItem] = useState<string | null>(null)

  const toggle = (key: string) => setOpenItem(openItem === key ? null : key)

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8F9FA" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto flex max-w-6xl gap-8 px-4 py-8 lg:px-8">
        {/* Sommaire sticky */}
        <aside className="hidden shrink-0 lg:block lg:w-56">
          <nav className="sticky top-24 space-y-1 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
              Catégories
            </p>
            {CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-[#333] transition-colors hover:bg-gray-100 hover:text-[#156EE4]"
              >
                {cat.title}
              </a>
            ))}
            <div className="my-2 border-t border-gray-100" />
            <a
              href="#coordonnees"
              className="block rounded-lg px-3 py-2 text-sm font-medium text-[#333] transition-colors hover:bg-gray-100 hover:text-[#156EE4]"
            >
              📍 Coordonnées
            </a>
            <a
              href="#telecharger"
              className="block rounded-lg px-3 py-2 text-sm font-medium text-[#333] transition-colors hover:bg-gray-100 hover:text-[#156EE4]"
            >
              📲 Télécharger
            </a>
          </nav>
        </aside>

        {/* Contenu */}
        <main className="min-w-0 flex-1">
          <div className="pb-6">
            <h1 className="text-2xl font-bold text-[#333] sm:text-3xl">
              Questions fréquentes
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Tout ce que vous devez savoir sur Immo+
            </p>
          </div>

          <div className="space-y-8">
            {CATEGORIES.map((cat) => (
              <section key={cat.id} id={cat.id} className="scroll-mt-24">
                <h2 className="mb-4 text-base font-bold text-[#333]">
                  {cat.title}
                </h2>
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                  {cat.questions.map((item, idx) => {
                    const key = `${cat.id}-${idx}`
                    const isOpen = openItem === key
                    return (
                      <div
                        key={key}
                        className="border-b border-gray-100 last:border-0"
                      >
                        <button
                          type="button"
                          onClick={() => toggle(key)}
                          className={`flex w-full items-center justify-between px-5 py-4 text-left transition-colors ${
                            isOpen ? "bg-[#EBF2FD]" : "hover:bg-gray-50"
                          }`}
                        >
                          <span className={`text-sm font-semibold ${isOpen ? "text-[#156EE4]" : "text-[#111827]"}`}>
                            {item.q}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="ml-4 h-4 w-4 shrink-0 text-[#156EE4]" />
                          ) : (
                            <ChevronDown className="ml-4 h-4 w-4 shrink-0 text-gray-400" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-4 text-sm leading-relaxed text-gray-600">
                            {item.a}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </section>
            ))}
          </div>

          {/* Coordonnées */}
          <div id="coordonnees" className="mt-10 scroll-mt-24 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-base font-bold text-[#333]">Coordonnées</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-[#333]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#156EE4]" />
                Cocody Riviera 3, Abidjan, Côte d&apos;Ivoire
              </li>
              
              <li className="flex items-center gap-3 text-sm text-[#333]">
                <Phone className="h-4 w-4 shrink-0 text-[#156EE4]" />
                <a href="tel:+2250720154635" className="hover:text-[#156EE4] hover:underline">
                  +225 07 20 15 46 35
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#333]">
                <MessageCircle className="h-4 w-4 shrink-0 text-[#25D366]" />
                <a
                  href="https://wa.me/2250720154635"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] hover:underline"
                >
                  +225 07 20 15 46 35
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#333]">
                <Mail className="h-4 w-4 shrink-0 text-[#156EE4]" />
                <a href="mailto:support@immoplus.ci" className="hover:text-[#156EE4] hover:underline">
                  support@immoplus.ci
                </a>
              </li>
            </ul>
          </div>

          {/* Téléchargement */}
          <div id="telecharger" className="mt-10 scroll-mt-24 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-base font-bold text-[#333]">Télécharger l&apos;application</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Client */}
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                <p className="mb-3 text-sm font-semibold text-[#333]">Immo+ Client</p>
                <div className="flex flex-col gap-2">
                  <a
                    href={CLIENT_APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-[#333] shadow-sm hover:border-[#156EE4] hover:text-[#156EE4]"
                  >
                    <SaxCryptoAppleLinear className="h-4 w-4" />
                    App Store
                  </a>
                  <a
                    href={CLIENT_PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-[#333] shadow-sm hover:border-[#156EE4] hover:text-[#156EE4]"
                  >
                    <SaxCryptoGooglePlayLinear className="h-4 w-4" />
                    Google Play
                  </a>
                </div>
              </div>
              {/* Pro */}
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                <p className="mb-3 text-sm font-semibold text-[#333]">Immo+ Pro</p>
                <div className="flex flex-col gap-2">
                  <a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-[#333] shadow-sm hover:border-[#156EE4] hover:text-[#156EE4]"
                  >
                    <SaxCryptoAppleLinear className="h-4 w-4" />
                    App Store
                  </a>
                  <a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-[#333] shadow-sm hover:border-[#156EE4] hover:text-[#156EE4]"
                  >
                    <SaxCryptoGooglePlayLinear className="h-4 w-4" />
                    Google Play
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-500">
              Vous n&apos;avez pas trouvé votre réponse ?{" "}
              <a
                href="mailto:support@immoplus.ci"
                className="font-medium text-[#156EE4] hover:underline"
              >
                Contactez-nous
              </a>
            </p>
            <Link
              href="/"
              className="text-center text-sm font-medium text-[#156EE4] hover:underline"
            >
              Retour à l&apos;accueil
            </Link>
          </div>
        </main>
      </div>
    </div>
  )
}
