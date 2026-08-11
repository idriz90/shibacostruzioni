import type { MetadataRoute } from "next";
import { SITE_URL } from "./seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/servizi", "/progetti", "/chi-siamo", "/come-lavoriamo", "/contatti"];
  return routes.map((route, index) => ({
    url: `${SITE_URL}${route}/`,
    changeFrequency: index === 0 ? "monthly" : "yearly",
    priority: index === 0 ? 1 : route === "/servizi" || route === "/progetti" ? 0.9 : 0.7,
  }));
}
