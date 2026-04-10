import Image from "next/image"
import Link from "next/link"
import {
  APP_STORE_URL,
  PLAY_STORE_URL,
  CLIENT_APP_STORE_URL,
  CLIENT_PLAY_STORE_URL,
} from "@/lib/app-links"
import { SaxCryptoAppleLinear, SaxCryptoGooglePlayLinear } from "@meysam213/iconsax-react"
import { Star, Shield, CheckCircle2, ArrowRight } from "lucide-react"

const STATS = [
  { value: "10 000+", label: "Annonces actives" },
  { value: "4.8 ★", label: "Note App Store" },
  { value: "50 000+", label: "Utilisateurs" },
  { value: "100%", label: "Gratuit" },
]

const CLIENT_FEATURES = [
  {
    icon: "🔍",
    title: "Recherche avancée",
    desc: "Filtrez par commune, type de bien, budget, superficie et nombre de chambres.",
  },
  {
    icon: "🗺️",
    title: "Vue carte interactive",
    desc: "Visualisez tous les biens géolocalisés et explorez quartier par quartier à Abidjan.",
  },
  {
    icon: "💬",
    title: "Messagerie directe",
    desc: "Échangez en temps réel avec les agences et propriétaires, partagez documents et photos.",
  },
  {
    icon: "❤️",
    title: "Favoris & alertes",
    desc: "Sauvegardez vos biens préférés et recevez des notifications pour les nouvelles annonces.",
  },
  {
    icon: "📅",
    title: "Visite en 1 clic",
    desc: "Planifiez une visite gratuite ou express payante directement depuis la fiche du bien.",
  },
  {
    icon: "💳",
    title: "Paiement sécurisé",
    desc: "Réservez et payez via le wallet intégré — Mobile Money, Orange Money, Wave acceptés.",
  },
]

const PRO_FEATURES = [
  {
    icon: "📣",
    title: "Publication rapide",
    desc: "Mettez en ligne un bien en moins de 3 minutes : photos, description, prix, localisation.",
  },
  {
    icon: "🏠",
    title: "Tableau de bord",
    desc: "Suivez l'état de tous vos logements, réservations et demandes en un seul endroit.",
  },
  {
    icon: "📋",
    title: "Contrats & locataires",
    desc: "Créez et stockez vos contrats de bail, gérez vos locataires et leurs documents.",
  },
  {
    icon: "💰",
    title: "Encaissement & wallet",
    desc: "Recevez les loyers et honoraires, consultez l'historique et exportez en PDF/Excel.",
  },
  {
    icon: "📊",
    title: "Statistiques détaillées",
    desc: "Analysez les vues, contacts et conversions de chaque annonce en temps réel.",
  },
  {
    icon: "🤝",
    title: "Gestion des demandes",
    desc: "Triez et traitez les demandes de visite et de contact depuis votre espace dédié.",
  },
]

const PROFILES = [
  {
    emoji: "👤",
    title: "Je cherche un logement",
    desc: "Location meublée, longue durée, achat ou terrain",
    app: "client",
    cta: "Télécharger Immo+ Client",
  },
  {
    emoji: "🏢",
    title: "Je suis professionnel",
    desc: "Agence, promoteur ou propriétaire qui publie",
    app: "pro",
    cta: "Télécharger Immo+ Pro",
  },
]

function AppStoreButtons({
  ios,
  android,
}: {
  ios: string
  android: string
}) {
  return (
    <div className="flex flex-col gap-3">
      <Link
        href={ios}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center gap-3 rounded-xl bg-[#111827] py-3.5 px-5 text-sm font-bold text-white shadow-sm transition hover:bg-black active:scale-95"
      >
        <SaxCryptoAppleLinear className="h-5 w-5 shrink-0" />
        <span>
          Télécharger sur{" "}
          <span className="opacity-70 font-normal">App Store</span>
        </span>
        <ArrowRight className="ml-auto h-4 w-4 opacity-0 -translate-x-1 transition group-hover:opacity-100 group-hover:translate-x-0" />
      </Link>
      <Link
        href={android}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center gap-3 rounded-xl border-2 border-[#156EE4] py-3.5 px-5 text-sm font-bold text-[#156EE4] transition hover:bg-[#EBF2FD] active:scale-95"
      >
        <SaxCryptoGooglePlayLinear className="h-5 w-5 shrink-0" />
        <span>
          Télécharger sur{" "}
          <span className="opacity-70 font-normal">Google Play</span>
        </span>
        <ArrowRight className="ml-auto h-4 w-4 opacity-0 -translate-x-1 transition group-hover:opacity-100 group-hover:translate-x-0" />
      </Link>
    </div>
  )
}

function FeatureList({ features }: { features: typeof CLIENT_FEATURES }) {
  return (
    <ul className="space-y-4">
      {features.map((f) => (
        <li key={f.title} className="flex items-start gap-3 group">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-base transition group-hover:bg-[#EBF2FD]">
            {f.icon}
          </span>
          <div>
            <p className="text-sm font-semibold text-[#111827]">{f.title}</p>
            <p className="text-xs text-gray-500 leading-relaxed mt-0.5">{f.desc}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default function TelechargerPage() {
  return (
    <div className="min-h-screen bg-[#F4F7FB]">

      {/* Hero */}
      <div className="relative overflow-hidden bg-white border-b border-gray-100">
        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #156EE4 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-4 py-14 text-center lg:px-8">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl shadow-md border border-gray-100">
            <Image
              src="/logo.png"
              alt="Immo+ logo"
              width={64}
              height={64}
              className="object-cover w-full h-full"
              priority
            />
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#EBF2FD] px-3 py-1 text-xs font-semibold text-[#156EE4] mb-4">
            🇨🇮 Application immobilière n°1 en Côte d&apos;Ivoire
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl">
            Votre immobilier,{" "}
            <span className="text-[#156EE4]">dans votre poche</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 max-w-lg mx-auto leading-relaxed">
            Que vous cherchiez un logement ou gériez un portefeuille de biens,
            Immo+ a l&apos;application qu&apos;il vous faut — gratuite, rapide et sécurisée.
          </p>

          {/* Stats strip */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-xl bg-[#F4F7FB] px-4 py-3 text-center"
              >
                <p className="text-lg font-extrabold text-[#111827]">{s.value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-12 lg:px-8 space-y-12">

        {/* "Qui êtes-vous ?" quick selector */}
        <div>
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-gray-400">
            Choisissez votre profil
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {PROFILES.map((p) => (
              <a
                key={p.app}
                href={`#${p.app}`}
                className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition hover:border-[#156EE4] hover:shadow-md"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F4F7FB] text-2xl transition group-hover:bg-[#EBF2FD]">
                  {p.emoji}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-[#111827]">{p.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{p.desc}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-300 shrink-0 transition group-hover:text-[#156EE4] group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>

        {/* App Cards */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* Immo+ Client */}
          <div
            id="client"
            className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm scroll-mt-8"
          >
            {/* Card Header */}
            <div className="relative overflow-hidden px-6 pt-8 pb-6 bg-[#EBF2FD]">
              <div
                className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-[#156EE4]/10"
              />
              <div
                className="absolute -right-2 top-10 h-16 w-16 rounded-full bg-[#156EE4]/10"
              />
              <span className="relative inline-flex items-center gap-1.5 rounded-full bg-[#156EE4]/10 px-3 py-1 text-xs font-semibold text-[#156EE4] mb-3">
                👤 Pour les particuliers
              </span>
              <h2 className="relative text-2xl font-extrabold text-[#111827]">
                Immo<span className="text-[#156EE4]">+</span>{" "}
                <span className="text-[#156EE4]">Client</span>
              </h2>
              <p className="relative mt-2 text-sm text-gray-600 leading-relaxed max-w-xs">
                Trouvez, louez ou achetez votre bien idéal en Côte d&apos;Ivoire
                — sans intermédiaire, en toute confiance.
              </p>

              {/* App rating */}
              <div className="relative mt-4 inline-flex items-center gap-1.5 rounded-lg bg-white/60 px-3 py-1.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className={`h-3.5 w-3.5 ${i <= 4 ? "fill-amber-400 text-amber-400" : "fill-amber-200 text-amber-200"}`}
                  />
                ))}
                <span className="text-xs font-semibold text-gray-700 ml-1">
                  4.8 · 1 200+ avis
                </span>
              </div>
            </div>

            {/* Features */}
            <div className="flex-1 px-6 py-6">
              <p className="mb-5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Ce que vous pouvez faire
              </p>
              <FeatureList features={CLIENT_FEATURES} />
            </div>

            {/* Trust badge */}
            <div className="mx-6 mb-4 flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3">
              <Shield className="h-4 w-4 text-green-500 shrink-0" />
              <p className="text-xs text-green-700 font-medium">
                Annonces vérifiées par notre équipe · Paiements sécurisés
              </p>
            </div>

            {/* Buttons */}
            <div className="border-t border-gray-100 px-6 py-5">
              <AppStoreButtons
                ios={CLIENT_APP_STORE_URL}
                android={CLIENT_PLAY_STORE_URL}
              />
            </div>
          </div>

          {/* Immo+ Pro */}
          <div
            id="pro"
            className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm scroll-mt-8"
          >
            {/* Card Header */}
            <div className="relative overflow-hidden px-6 pt-8 pb-6 bg-[#FFF7ED]">
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-orange-200/30" />
              <div className="absolute -right-2 top-10 h-16 w-16 rounded-full bg-orange-200/30" />
              <span className="relative inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600 mb-3">
                🏢 Pour les professionnels
              </span>
              <h2 className="relative text-2xl font-extrabold text-[#111827]">
                Immo<span className="text-[#156EE4]">+</span>{" "}
                <span className="text-orange-500">Pro</span>
              </h2>
              <p className="relative mt-2 text-sm text-gray-600 leading-relaxed max-w-xs">
                Publiez vos biens, gérez vos clients et encaissez vos revenus
                depuis une seule application mobile.
              </p>

              {/* Validation badge */}
              <div className="relative mt-4 inline-flex items-center gap-1.5 rounded-lg bg-white/60 px-3 py-1.5">
                <CheckCircle2 className="h-4 w-4 text-orange-500" />
                <span className="text-xs font-semibold text-gray-700">
                  Validation du compte sous 48 h
                </span>
              </div>
            </div>

            {/* Features */}
            <div className="flex-1 px-6 py-6">
              <p className="mb-5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Ce que vous pouvez faire
              </p>
              <FeatureList features={PRO_FEATURES} />
            </div>

            {/* Commission info */}
            <div className="mx-6 mb-4 rounded-xl border border-orange-100 bg-orange-50 px-4 py-3">
              <p className="text-xs font-semibold text-orange-700 mb-1">
                💡 Modèle de commission transparent
              </p>
              <p className="text-xs text-orange-600 leading-relaxed">
                25 % du mois d&apos;agence pour la location · 2,5–10 % sur les ventes.
                Écrivez à{" "}
                <a
                  href="mailto:support@immoplus.ci"
                  className="underline underline-offset-2"
                >
                  support@immoplus.ci
                </a>{" "}
                pour une offre personnalisée.
              </p>
            </div>

            {/* Buttons */}
            <div className="border-t border-gray-100 px-6 py-5">
              <AppStoreButtons ios={APP_STORE_URL} android={PLAY_STORE_URL} />
            </div>
          </div>
        </div>

        {/* Bottom trust strip */}
        <div className="rounded-2xl border border-gray-100 bg-white shadow-sm px-6 py-6">
          <p className="mb-5 text-center text-xs font-semibold uppercase tracking-wider text-gray-400">
            Pourquoi choisir Immo+ ?
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: "🛡️",
                title: "Annonces certifiées",
                desc: "Chaque bien est validé par notre équipe avant publication.",
              },
              {
                icon: "💳",
                title: "Paiements sécurisés",
                desc: "Wallet intégré avec Mobile Money, Orange Money et Wave.",
              },
              {
                icon: "🇨🇮",
                title: "100 % ivoirien",
                desc: "Conçu pour le marché immobilier de Côte d'Ivoire.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F4F7FB] text-lg">
                  {item.icon}
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#111827]">{item.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ link */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            Des questions sur l&apos;application ?{" "}
            <Link
              href="/faq"
              className="font-semibold text-[#156EE4] hover:underline"
            >
              Consultez notre FAQ →
            </Link>
          </p>
        </div>
      </div>

      {/* Back link */}
      <div className="mx-auto max-w-3xl px-4 pb-10 pt-4 text-center lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#156EE4] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
            <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
          </svg>
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  )
}