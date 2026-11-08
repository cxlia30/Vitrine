import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument",
  display: "swap",
});

const titre = "Vitrine — Tes clients n'ont plus besoin de t'appeler";
const description =
  "Un lien par projet. Ton client voit où ça en est, toi tu restes concentré(e). Pour les pros de la création de contenu.";

export const metadata: Metadata = {
  title: titre,
  description,
  openGraph: { title: titre, description, locale: "fr_FR", type: "website" },
  twitter: { card: "summary_large_image", title: titre, description },
};

export const viewport: Viewport = {
  themeColor: "#f6f1e7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${bricolage.variable} ${instrument.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
