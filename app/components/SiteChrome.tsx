import { basePath } from "../basePath";

export const siteUrl = (path: string) => `${basePath}${path}`;

export function SiteHeader() {
  return (
    <>
      <div className="announcement"><span>Ristrutturazioni e interventi edili in Toscana</span><a href="tel:+393420926964">+39 342 092 6964</a></div>
      <header className="site-header">
        <a className="brand" href={siteUrl("/")} aria-label="Shiba Costruzioni, torna alla Home"><img src={siteUrl("/images/logo-shiba.webp")} alt="Shiba Costruzioni" /></a>
        <nav className="desktop-nav" aria-label="Navigazione principale">
          <a href={siteUrl("/chi-siamo/")}>Chi siamo</a><a href={siteUrl("/servizi/")}>Servizi</a><a href={siteUrl("/progetti/")}>Progetti</a>
          <a href={siteUrl("/come-lavoriamo/")}>Come lavoriamo</a><a href={siteUrl("/blog/")}>Blog</a>
        </nav>
        <a className="button button-small" href={siteUrl("/contatti/")}>Richiedi un sopralluogo</a>
        <details className="mobile-menu"><summary aria-label="Apri il menu">Menu</summary><nav aria-label="Navigazione mobile">
          <a href={siteUrl("/")}>Home</a><a href={siteUrl("/chi-siamo/")}>Chi siamo</a><a href={siteUrl("/servizi/")}>Servizi</a><a href={siteUrl("/progetti/")}>Progetti</a>
          <a href={siteUrl("/come-lavoriamo/")}>Come lavoriamo</a><a href={siteUrl("/blog/")}>Blog</a><a href={siteUrl("/contatti/")}>Contatti</a>
        </nav></details>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <>
      <footer>
        <a href={siteUrl("/")}><img src={siteUrl("/images/logo-shiba.webp")} alt="Shiba Costruzioni" /></a>
        <div><strong>Shiba Costruzioni</strong><span>P. IVA 02226750509</span></div>
        <nav aria-label="Collegamenti legali"><a href="#">Privacy</a><a href="#">Cookie</a></nav>
        <span>© {new Date().getFullYear()} Shiba Costruzioni</span>
      </footer>
      <div className="mobile-actions" aria-label="Azioni rapide"><a href="tel:+393420926964">Chiama</a><a href={siteUrl("/contatti/")}>Preventivo</a></div>
    </>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="page-hero"><p className="eyebrow light">{eyebrow}</p><h1>{title}</h1><p>{text}</p></section>;
}
