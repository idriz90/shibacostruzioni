"use client";

import { usePathname } from "next/navigation";
import { basePath } from "../basePath";

const url = (path: string) => `${basePath}${path}`;
const normalize = (path: string) => path.replace(/\/+$/, "") || "/";

export function MobileMenu() {
  const pathname = usePathname();
  const route = basePath && pathname.startsWith(basePath) ? pathname.slice(basePath.length) || "/" : pathname;
  const current = (path: string) => normalize(route) === normalize(path);

  return <details className="mobile-menu">
    <summary aria-label="Apri il menu"><span className="menu-icon" aria-hidden="true" /></summary>
    <nav aria-label="Navigazione mobile">
      <a href={url("/")} aria-current={current("/") ? "page" : undefined}>Home</a>
      <a href={url("/servizi/")} aria-current={current("/servizi/") ? "page" : undefined}>Servizi</a>
      <a href={url("/progetti/")} aria-current={current("/progetti/") ? "page" : undefined}>Progetti</a>
      <a href={url("/chi-siamo/")} aria-current={current("/chi-siamo/") ? "page" : undefined}>Chi siamo</a>
      <a href="https://substack.com/" target="_blank" rel="noopener noreferrer">Blog</a>
    </nav>
  </details>;
}
