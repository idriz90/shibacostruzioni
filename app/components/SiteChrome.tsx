import { basePath } from "../basePath";
import { CookieSettingsButton } from "./CookieNotice";

export const siteUrl = (path: string) => `${basePath}${path}`;

export function SiteHeader() {
  return (
    <>
      <div className="announcement"><span>La risposta professionale dell&apos;edilizia</span></div>
      <header className="site-header">
        <a className="brand" href={siteUrl("/")} aria-label="Shiba Costruzioni, torna alla Home"><img src={siteUrl("/images/logo-shiba-v2.png")} alt="Shiba Costruzioni" /><span className="experience-badge"><strong>10+</strong><small>anni sul<br/>territorio</small></span></a>
        <nav className="desktop-nav" aria-label="Navigazione principale">
          <a href={siteUrl("/")}>Home</a><a href={siteUrl("/servizi/")}>Servizi</a><a href={siteUrl("/progetti/")}>Progetti</a><a href={siteUrl("/chi-siamo/")}>Chi siamo</a><a href={siteUrl("/blog/")}>Blog</a>
        </nav>
        <a className="button button-small" href={siteUrl("/contatti/")}>Richiedi un sopralluogo gratuito</a>
        <details className="mobile-menu"><summary aria-label="Apri il menu">Menu</summary><nav aria-label="Navigazione mobile">
          <a href={siteUrl("/")}>Home</a><a href={siteUrl("/servizi/")}>Servizi</a><a href={siteUrl("/progetti/")}>Progetti</a><a href={siteUrl("/chi-siamo/")}>Chi siamo</a><a href={siteUrl("/blog/")}>Blog</a><a href={siteUrl("/contatti/")}>Contatti</a>
        </nav></details>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <>
      <footer>
        <div className="footer-company"><strong>COSTRUZIONI EDILI SHIBA DI SHIBA ERMAL &amp; C. S.A.S.</strong><span>Indirizzo: VIA GIACOMO BRODOLINI 14 - 56017 - SAN GIULIANO TERME (PI)</span></div>
        <div className="footer-legal-data">
          <span>Partita IVA: 02226750509 - Codice Fiscale: 02226750509</span><span>Vat Europeo: IT02226750509</span>
          <span>Rea: 190962</span><a href="mailto:ershiba@pec.it">PEC: ershiba@pec.it</a><span>Dipendenti: 12 (2026)</span>
        </div>
        <div className="footer-bottom"><nav aria-label="Collegamenti legali"><a href={siteUrl("/privacy/")}>Privacy</a><a href={siteUrl("/cookie-policy/")}>Cookie</a><CookieSettingsButton /></nav><span>© 2016-2026 COSTRUZIONI EDILI SHIBA DI SHIBA ERMAL &amp; C. S.A.S.</span></div>
      </footer>
      <FloatingContacts />
    </>
  );
}

export function FloatingContacts() {
  return <nav className="floating-contacts" aria-label="Contatti rapidi">
    <a className="quick-call" href="tel:+393420926964" aria-label="Chiama Costruzioni Edili Shiba"><span className="icon-mobile" aria-hidden="true" /></a>
    <a className="quick-email" href="mailto:info@shibacostruzioni.it" aria-label="Invia una email"><span className="icon-email" aria-hidden="true" /></a>
    <a className="quick-whatsapp" href="https://wa.me/393420926964" target="_blank" rel="noreferrer" aria-label="Scrivi su WhatsApp"><img className="icon-whatsapp" src={siteUrl("/images/whatsapp.svg")} alt="" aria-hidden="true" /></a>
  </nav>;
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="page-hero"><p className="eyebrow light">{eyebrow}</p><h1>{title}</h1><p>{text}</p></section>;
}
