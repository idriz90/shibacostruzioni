import type { Metadata } from "next";

export const SITE_URL = "https://shibacostruzioni.it";
export const SITE_NAME = "Costruzioni Edili Shiba";

export function pageMetadata(title: string, description: string, path: string, index = true): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: { index, follow: true },
    openGraph: {
      type: "website",
      locale: "it_IT",
      siteName: SITE_NAME,
      title: `${title} | ${SITE_NAME}`,
      description,
      url: path,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: `${SITE_NAME} - impresa edile a Pisa` }],
    },
    twitter: { card: "summary_large_image", title: `${title} | ${SITE_NAME}`, description, images: ["/og.png"] },
  };
}

