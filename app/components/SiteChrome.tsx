import { basePath } from "../basePath";
import { CookieSettingsButton } from "./CookieNotice";

export const siteUrl = (path: string) => `${basePath}${path}`;

export function SiteHeader() {
  return (
    <>
      <div className="announcement"><span>La risposta professionale dell&apos;edilizia</span><div className="announcement-contacts"><a href="tel:+393420926964">+39 342 092 6964</a><a href="mailto:info@shibacostruzioni.it">info@shibacostruzioni.it</a></div></div>
      <header className="site-header">
        <a className="brand" href={siteUrl("/")} aria-label="Shiba Costruzioni, torna alla Home"><img src={siteUrl("/images/logo-shiba-v2.png")} alt="Shiba Costruzioni" /></a>
        <nav className="desktop-nav" aria-label="Navigazione principale">
          <a href={siteUrl("/")}>Home</a><a href={siteUrl("/chi-siamo/")}>Chi siamo</a><a href={siteUrl("/servizi/")}>Servizi</a><a href={siteUrl("/progetti/")}>Progetti</a>
          <a href={siteUrl("/come-lavoriamo/")}>Come lavoriamo</a><a href={siteUrl("/blog/")}>Blog</a>
        </nav>
        <a className="button button-small" href={siteUrl("/contatti/")}>Richiedi un sopralluogo gratuito</a>
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
        <a className="footer-logo" href={siteUrl("/")}><img src={siteUrl("/images/logo-shiba-v2.png")} alt="Shiba Costruzioni" /></a>
        <div className="footer-company"><strong>COSTRUZIONI EDILI SHIBA DI SHIBA ERMAL &amp; C. S.A.S.</strong><span>Indirizzo: VIA GIACOMO BRODOLINI 14 - 56017 - SAN GIULIANO TERME (PI)</span></div>
        <div className="footer-legal-data">
          <span>Partita IVA: 02226750509 - Codice Fiscale: 02226750509</span><span>Vat Europeo: IT02226750509</span>
          <span>Rea: 190962</span><a href="mailto:ershiba@pec.it">PEC: ershiba@pec.it</a><span>Dipendenti: 12 (2026)</span>
        </div>
        <div className="footer-bottom"><nav aria-label="Collegamenti legali"><a href={siteUrl("/privacy/")}>Privacy</a><a href={siteUrl("/cookie-policy/")}>Cookie</a><CookieSettingsButton /></nav><span>© 2016-2026 Costruzioni Edili Shiba</span></div>
      </footer>
      <div className="mobile-actions" aria-label="Azioni rapide"><a href="tel:+393420926964">Chiama</a><a href={siteUrl("/contatti/")}>Preventivo</a></div>
    </>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="page-hero"><p className="eyebrow light">{eyebrow}</p><h1>{title}</h1><p>{text}</p></section>;
}
