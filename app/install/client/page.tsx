import Image from "next/image"
import Link from "next/link"
import { CLIENT_APP_STORE_URL, CLIENT_PLAY_STORE_URL } from "@/lib/app-links"
import type { Metadata } from "next"
import { SaxCryptoAppleLinear } from '@meysam213/iconsax-react'
import { SaxCryptoGooglePlayLinear } from '@meysam213/iconsax-react'
export const metadata: Metadata = {
  title: "Télécharger Immo+ — App Store & Google Play",
  description:
    "Téléchargez Immo+ sur iPhone ou Android. Trouvez, louez ou achetez votre bien immobilier en Côte d'Ivoire depuis votre mobile.",
  robots: { index: false },
}

const FEATURES = [
  { icon: "🔍", title: "Recherchez un bien", desc: "Parcourez des centaines d'annonces." },
  { icon: "📍", title: "Localisez facilement", desc: "Trouvez près de chez vous." },
  { icon: "💬", title: "Contactez en direct", desc: "Échangez avec les propriétaires." },
  { icon: "🔔", title: "Alertes & favoris", desc: "Ne ratez aucune opportunité." },
]

export default function InstallClientPage() {
  return (
    <main className="h-dvh flex flex-col items-center bg-gradient-to-b from-[hsl(216,85%,97%)] to-white px-4 overflow-hidden">
      <div className="flex flex-col items-center w-full max-w-sm flex-1 py-8 gap-5">

        {/* Logo + badge */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-20 h-20 rounded-2xl shadow-md overflow-hidden border-4 border-white shrink-0">
            <Image src="/logo.png" alt="Immo+ logo" width={80} height={80} className="object-cover w-full h-full" priority />
          </div>
          <span className="text-[10px] font-semibold tracking-widest uppercase text-[hsl(216,85%,49%)]">
            Application officielle
          </span>
        </div>

        {/* Titre & slogan */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-[hsl(222,47%,11%)] leading-tight mb-2">
            Immo<span className="text-[hsl(216,85%,49%)]">+</span>
          </h1>
          <p className="text-sm text-[hsl(215,16%,40%)] leading-relaxed max-w-xs">
            Trouve, loue ou achète ton bien immobilier en toute simplicité.
            Avec <strong>Immo+</strong>, l&apos;immobilier en Côte&nbsp;d&apos;Ivoire est à portée de main.
          </p>
        </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 w-full">

{/* iOS */}
<Link
  href={CLIENT_APP_STORE_URL}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-3 bg-[hsl(216,85%,49%)] hover:bg-[hsl(216,85%,42%)] active:scale-95 text-white font-bold text-base rounded-2xl py-4 px-6 shadow-md transition-all duration-200"
>
<SaxCryptoAppleLinear className="w-6 h-6" />
  Télécharger sur iPhone
</Link>

{/* Android */}
<Link
  href={CLIENT_PLAY_STORE_URL}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-3 bg-[hsl(142,71%,45%)] hover:bg-[hsl(142,71%,38%)] active:scale-95 text-white font-bold text-base rounded-2xl py-4 px-6 shadow-md transition-all duration-200"
>
<SaxCryptoGooglePlayLinear className="w-6 h-6" />
  Télécharger sur Android
</Link>


</div>

        {/* Features
        <div className="grid grid-cols-2 gap-2 w-full mt-1">
          {FEATURES.map((f) => (
            <div key={f.title} className="bg-white rounded-xl p-3 shadow-sm border border-[hsl(214,32%,91%)] flex flex-col gap-0.5">
              <span className="text-xl">{f.icon}</span>
              <p className="text-xs font-semibold text-[hsl(222,47%,11%)]">{f.title}</p>
              <p className="text-[11px] text-[hsl(215,16%,47%)] leading-snug">{f.desc}</p>
            </div>
          ))}
        </div> */}

        <div className="flex-1" />

        {/* Sous-texte + retour */}
        <div className="flex flex-col items-center gap-1">
          <p className="text-[11px] text-[hsl(215,16%,60%)] text-center">
            Gratuit · App Store & Google Play · Côte d&apos;Ivoire 🇨🇮
          </p>
          <Link href="/" className="text-[11px] text-[hsl(216,85%,49%)] underline underline-offset-2 hover:opacity-70 transition-opacity">
            ← Retour au site
          </Link>
        </div>

      </div>
    </main>
  )
}
