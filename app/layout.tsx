import type { Metadata } from "next";
import "./globals.css";
import { CookieNotice } from "./components/CookieNotice";
import { SITE_URL } from "./seo";

const publicBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Costruzioni Edili Shiba | Ristrutturazioni ed edilizia a Pisa",
    template: "%s | Costruzioni Edili Shiba",
  },
  description: "Ristrutturazioni, impermeabilizzazioni e interventi strutturali a Pisa, Lucca e Livorno. Sopralluoghi e preventivi gratuiti.",
  applicationName: "Costruzioni Edili Shiba",
  category: "Edilizia e ristrutturazioni",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Costruzioni Edili Shiba",
    title: "Costruzioni Edili Shiba — La tua casa, fatta per durare",
    description: "Ristrutturazioni e interventi edili a Pisa, Lucca e Livorno.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Costruzioni Edili Shiba — La tua casa, fatta per durare" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Costruzioni Edili Shiba — La tua casa, fatta per durare",
    description: "Ristrutturazioni e interventi edili a Pisa, Lucca e Livorno.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: `${publicBase}/images/logo-shiba-v2-400.png`,
    shortcut: `${publicBase}/images/logo-shiba-v2-400.png`,
    apple: `${publicBase}/images/logo-shiba-v2-400.png`,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="it"><body>{children}<CookieNotice /></body></html>;
}
