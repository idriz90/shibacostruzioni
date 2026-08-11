import { basePath } from "./basePath";
import { CookieSettingsButton } from "./components/CookieNotice";
import { FloatingContacts } from "./components/SiteChrome";
import { BeforeAfterSlider } from "./components/BeforeAfterSlider";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { MobileMenu } from "./components/MobileMenu";

const url = (path: string) => `${basePath}${path}`;

const services = [
  {
    number: "01",
    title: "Ristrutturazioni complete",
    text: "Appartamenti e ville ripensati in ogni dettaglio, dalla demolizione alle finiture.",
  },
  {
    number: "02",
    title: "Bagni e interni",
    text: "Spazi funzionali e curati, impianti aggiornati e materiali scelti per durare.",
  },
  {
    number: "03",
    title: "Tetti e facciate",
    text: "Interventi sicuri per proteggere, isolare e valorizzare l’edificio nel tempo.",
  },
  {
    number: "04",
    title: "Strutture e impermeabilizzazioni",
    text: "Soluzioni mirate per umidità, crepe, fondazioni e consolidamento strutturale.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Costruzioni Edili Shiba",
  url: "https://shibacostruzioni.it",
  telephone: "+393420926964",
  email: "info@shibacostruzioni.it",
  taxID: "02226750509",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Giacomo Brodolini 14",
    addressLocality: "San Giuliano Terme",
    addressRegion: "PI",
    addressCountry: "IT",
  },
  areaServed: ["Pisa", "Lucca", "Livorno", "San Giuliano Terme"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="announcement">
        <span>La risposta professionale nell&apos;edilizia</span>
      </div>

      <header className="site-header">
        <a className="brand" href="#inizio" aria-label="Shiba Costruzioni, torna all’inizio">
          <img src={url("/images/logo-shiba-v2.png")} alt="Shiba Costruzioni" />
          <span className="experience-badge"><strong>10+</strong><small>anni sul<br />territorio</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Navigazione principale">
          <a href={url("/")}>Home</a>
          <a href={url("/servizi/")}>Servizi</a>
          <a href={url("/progetti/")}>Progetti</a>
          <a href={url("/chi-siamo/")}>Chi siamo</a>
          <a href="https://substack.com/" target="_blank" rel="noopener noreferrer">Blog</a>
        </nav>
        <div className="header-actions"><a className="button button-small" href={url("/contatti/")}>Richiedi un sopralluogo gratuito</a><LanguageSwitcher /></div>
        <MobileMenu />
      </header>

      <main id="inizio">
        <section className="hero">
          <img className="hero-image" src={url("/images/pisa-hero.jpg")} alt="Veduta di Pisa, territorio in cui opera Costruzioni Edili Shiba" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow light">Costruiamo valore, proteggiamo ciò che conta</p>
            <h1>La tua casa,<br />fatta per durare.</h1>
            <p className="hero-copy">
              Ristrutturazioni, impermeabilizzazioni e interventi strutturali a Pisa,
              Lucca e Livorno. Un referente diretto, un lavoro fatto a regola d’arte.
            </p>
            <div className="hero-actions">
              <a className="button" href={url("/contatti/")}>Richiedi un preventivo</a>
              <a className="text-link light-link" href={url("/progetti/")}>Guarda i lavori <span>↘</span></a>
            </div>
          </div>
        </section>

        <section className="intro section" id="chi-siamo">
          <div>
            <p className="eyebrow">Impresa familiare, competenza concreta</p>
            <h2>Seguiamo ogni progetto come se fosse casa nostra.</h2>
          </div>
          <div className="intro-copy">
            <p>
              Costruzioni Edili Shiba unisce esperienza artigiana, tecnici fidati e una conoscenza
              profonda degli edifici toscani. Dal primo sopralluogo alla consegna sarete seguiti
              direttamente dal titolare, con comunicazione trasparente e soluzioni su misura.
            </p>
            <a className="text-link" href={url("/come-lavoriamo/")}>Scopri il nostro metodo <span>→</span></a>
          </div>
        </section>

        <section className="projects section" id="progetti">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Prima e dopo</p>
              <h2>Il cambiamento che<br />si vede.</h2>
            </div>
          </div>

          <article className="project-case">
            <div className="project-title project-title-no-number">
              <div><h3>Nuova zona giorno</h3><p>Spazi, impianti e superfici trasformati per una casa più luminosa.</p></div>
            </div>
            <BeforeAfterSlider before={url("/images/soggiorno-prima.jpeg")} after={url("/images/soggiorno-dopo.jpeg")} beforeAlt="Zona giorno durante la ristrutturazione" afterAlt="Zona giorno rinnovata con nuova cucina" initialPosition={30} />
          </article>
        </section>

        <section className="services section" id="servizi">
          <div className="section-heading">
            <p className="eyebrow">I nostri servizi</p>
            <h2>Soluzioni solide.<br />Dalla struttura alle finiture.</h2>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

      </main>

      <footer>
        <div className="footer-company"><strong>COSTRUZIONI EDILI SHIBA DI SHIBA ERMAL &amp; C. S.A.S.</strong><span>Indirizzo: VIA GIACOMO BRODOLINI 14 - 56017 - SAN GIULIANO TERME (PI)</span></div>
        <div className="footer-legal-data"><span>Partita IVA: 02226750509 - Codice Fiscale: 02226750509</span><span>Vat Europeo: IT02226750509</span><span>Rea: 190962</span><a href="mailto:ershiba@pec.it">PEC: ershiba@pec.it</a><span>Dipendenti: 12 (2026)</span></div>
        <div className="footer-bottom"><nav aria-label="Collegamenti legali"><a href={url("/privacy/")}>Privacy</a><a href={url("/cookie-policy/")}>Cookie</a><CookieSettingsButton /></nav><span>© 2016-2026 COSTRUZIONI EDILI SHIBA DI SHIBA ERMAL &amp; C. S.A.S.</span></div>
      </footer>

      <FloatingContacts />
    </>
  );
}
