import { basePath } from "../basePath";
import { CookieSettingsButton } from "./CookieNotice";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";
import { DesktopNav } from "./DesktopNav";

export const siteUrl = (path: string) => `${basePath}${path}`;

export function SiteHeader() {
  return (
    <>
      <div className="announcement"><span>La risposta professionale nell&apos;edilizia</span><LanguageSwitcher /></div>
      <header className="site-header">
        <a className="brand" href={siteUrl("/")} aria-label="Shiba Costruzioni, torna alla Home"><img src={siteUrl("/images/logo-shiba-v2.png")} alt="Shiba Costruzioni" /><span className="experience-badge"><strong>10+</strong><small>anni sul territorio<br/>toscano</small></span></a>
        <DesktopNav />
        <div className="header-actions"><a className="button button-small" href={siteUrl("/contatti/")}>Richiedi un sopralluogo gratuito</a></div>
        <MobileMenu />
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
        <div className="footer-bottom"><nav aria-label="Collegamenti legali"><a href={siteUrl("/privacy/")}>Privacy</a><a href={siteUrl("/cookie-policy/")}>Cookie</a><CookieSettingsButton /></nav><div className="footer-signature"><span>© 2016-2026 COSTRUZIONI EDILI SHIBA DI SHIBA ERMAL &amp; C. S.A.S.</span><a className="footer-credit" href="https://www.linkedin.com/in/idris-sinaj-24697397" target="_blank" rel="noopener noreferrer">Powered by IS</a></div></div>
      </footer>
      <FloatingContacts />
    </>
  );
}

export function FloatingContacts() {
  return <nav className="floating-contacts" aria-label="Contatti rapidi">
    <a className="quick-call" href="tel:+393420926964" aria-label="Chiama Costruzioni Edili Shiba"><svg className="icon-phone" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0 1 22 16.92z"/></svg></a>
    <a className="quick-email" href="mailto:info@shibacostruzioni.it" aria-label="Invia una email"><span className="icon-email" aria-hidden="true" /></a>
    <a className="quick-whatsapp" href="https://wa.me/393420926964" target="_blank" rel="noreferrer" aria-label="Scrivi su WhatsApp"><img className="icon-whatsapp" src={siteUrl("/images/whatsapp.svg")} alt="" aria-hidden="true" /></a>
  </nav>;
}

export function PageHero({ eyebrow, title, text, backgroundImage, compact = false }: { eyebrow: string; title: string; text: string; backgroundImage?: string; compact?: boolean }) {
  const style = backgroundImage ? { backgroundImage: `linear-gradient(90deg, rgba(20,36,31,.88), rgba(20,36,31,.42)), url("${backgroundImage}")` } : undefined;
  return <section className={`page-hero${compact ? " page-hero-compact" : ""}`} style={style}><p className="eyebrow light">{eyebrow}</p><h1>{title}</h1><p>{text}</p></section>;
}
