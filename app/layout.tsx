import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shibacostruzioni.it"),
  title: {
    default: "Shiba Costruzioni | Ristrutturazioni ed edilizia a Pisa",
    template: "%s | Shiba Costruzioni",
  },
  description: "Ristrutturazioni, impermeabilizzazioni e interventi strutturali a Pisa, Lucca e Livorno. Sopralluoghi e preventivi gratuiti.",
  keywords: ["ristrutturazioni Pisa", "impresa edile Pisa", "ristrutturazione bagno Pisa", "impermeabilizzazioni Toscana", "consolidamento strutturale"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Shiba Costruzioni",
    title: "Shiba Costruzioni — La tua casa, fatta per durare",
    description: "Ristrutturazioni e interventi edili a Pisa, Lucca e Livorno.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Shiba Costruzioni — La tua casa, fatta per durare" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiba Costruzioni — La tua casa, fatta per durare",
    description: "Ristrutturazioni e interventi edili a Pisa, Lucca e Livorno.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="it"><body>{children}</body></html>;
}
