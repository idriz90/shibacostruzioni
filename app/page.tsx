import { basePath } from "./basePath";
import { CookieSettingsButton } from "./components/CookieNotice";

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

const steps = [
  ["01", "Sopralluogo", "Ascoltiamo le esigenze e valutiamo l’immobile direttamente sul posto."],
  ["02", "Proposta chiara", "Definiamo lavorazioni, materiali, tempi e costi senza sorprese."],
  ["03", "Cantiere seguito", "Coordiniamo artigiani e tecnici con un referente sempre presente."],
  ["04", "Consegna", "Verifichiamo ogni dettaglio e lasciamo spazi pronti da vivere."],
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
        <span>La risposta professionale dell&apos;edilizia</span>
        <div className="announcement-contacts"><a href="tel:+393420926964">+39 342 092 6964</a><a href="mailto:info@shibacostruzioni.it">info@shibacostruzioni.it</a></div>
      </div>

      <header className="site-header">
        <a className="brand" href="#inizio" aria-label="Shiba Costruzioni, torna all’inizio">
          <img src={url("/images/logo-shiba-v2.png")} alt="Shiba Costruzioni" />
        </a>
        <nav className="desktop-nav" aria-label="Navigazione principale">
          <a href={url("/")}>Home</a>
          <a href={url("/chi-siamo/")}>Chi siamo</a>
          <a href={url("/servizi/")}>Servizi</a>
          <a href={url("/progetti/")}>Progetti</a>
          <a href={url("/come-lavoriamo/")}>Come lavoriamo</a>
          <a href={url("/blog/")}>Blog</a>
        </nav>
        <a className="button button-small" href={url("/contatti/")}>Richiedi un sopralluogo gratuito</a>
        <details className="mobile-menu">
          <summary aria-label="Apri il menu">Menu</summary>
          <nav aria-label="Navigazione mobile">
            <a href={url("/chi-siamo/")}>Chi siamo</a>
            <a href={url("/servizi/")}>Servizi</a>
            <a href={url("/progetti/")}>Progetti</a>
            <a href={url("/come-lavoriamo/")}>Come lavoriamo</a>
            <a href={url("/blog/")}>Blog</a>
            <a href={url("/contatti/")}>Contatti</a>
          </nav>
        </details>
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
              <a className="button" href="#contatti">Richiedi un preventivo</a>
              <a className="text-link light-link" href={url("/progetti/")}>Guarda i lavori <span>↘</span></a>
            </div>
          </div>
          <div className="hero-proof">
            <strong>10+</strong>
            <span>anni di esperienza<br />sul territorio</span>
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
                <a href={url("/contatti/")} aria-label={`Richiedi informazioni su ${service.title}`}>Parliamone →</a>
              </article>
            ))}
          </div>
        </section>

        <section className="projects section" id="progetti">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Prima e dopo</p>
              <h2>Il cambiamento<br />si vede.</h2>
            </div>
            <p>Due interventi reali raccontano meglio di tante parole la cura che mettiamo nel lavoro.</p>
          </div>

          <article className="project-case">
            <div className="project-title">
              <span>01</span>
              <div><h3>Ristrutturazione bagno</h3><p>Demolizione, nuovi impianti e finiture contemporanee.</p></div>
            </div>
            <div className="before-after">
              <figure><img src={url("/images/bagno-prima.jpeg")} alt="Bagno prima della ristrutturazione" /><figcaption>Prima</figcaption></figure>
              <figure><img src={url("/images/bagno-dopo.jpeg")} alt="Bagno completato dopo la ristrutturazione" /><figcaption>Dopo</figcaption></figure>
            </div>
          </article>

          <article className="project-case">
            <div className="project-title">
              <span>02</span>
              <div><h3>Nuova zona giorno</h3><p>Spazi, impianti e superfici trasformati per una casa più luminosa.</p></div>
            </div>
            <div className="before-after">
              <figure><img src={url("/images/soggiorno-prima.jpeg")} alt="Zona giorno durante la ristrutturazione" /><figcaption>Prima</figcaption></figure>
              <figure><img src={url("/images/soggiorno-dopo.jpeg")} alt="Zona giorno rinnovata con nuova cucina" /><figcaption>Dopo</figcaption></figure>
            </div>
          </article>
        </section>

        <section className="method section" id="metodo">
          <div className="section-heading">
            <p className="eyebrow light">Come lavoriamo</p>
            <h2>Un percorso chiaro,<br />dall’idea alla consegna.</h2>
          </div>
          <div className="steps">
            {steps.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span><h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="local-seo section">
          <div>
            <p className="eyebrow">Radicati nel territorio</p>
            <h2>Conosciamo le case della Toscana.</h2>
          </div>
          <div>
            <p>
              Umidità, caratteristiche del terreno e vincoli architettonici richiedono esperienza
              locale. Operiamo principalmente nelle province di Pisa, Lucca e Livorno, con interventi
              a San Giuliano Terme, Cascina, Calci, Vecchiano, Pontedera e nei comuni vicini.
            </p>
            <div className="place-list" aria-label="Principali zone servite">
              <span>Pisa</span><span>Lucca</span><span>Livorno</span><span>San Giuliano Terme</span>
            </div>
          </div>
        </section>

        <section className="blog section" id="blog">
          <div className="blog-card">
            <p className="eyebrow light">Dal cantiere — Il blog</p>
            <h2>Consigli utili per ristrutturare con più consapevolezza.</h2>
            <p>Guide pratiche su umidità, crepe, materiali, manutenzione e ristrutturazioni. La pubblicazione Substack è in preparazione.</p>
            <span className="coming-soon">Substack · prossimamente</span>
          </div>
        </section>

        <section className="contact section" id="contatti">
          <div className="contact-copy">
            <p className="eyebrow">Parliamo del tuo progetto</p>
            <h2>Da dove vuoi<br />cominciare?</h2>
            <p>Raccontaci cosa serve alla tua casa. Ti ricontatteremo per organizzare un primo confronto.</p>
            <div className="contact-details">
              <a href="tel:+393420926964">+39 342 092 6964</a>
              <a href="mailto:info@shibacostruzioni.it">info@shibacostruzioni.it</a>
              <span>Via Giacomo Brodolini 14<br />San Giuliano Terme, Pisa</span>
            </div>
          </div>
          <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? ""} />
            <input type="hidden" name="subject" value="Nuova richiesta dal sito Costruzioni Edili Shiba" />
            <label>Nome e cognome<input name="name" type="text" autoComplete="name" required /></label>
            <label>Email<input name="email" type="email" autoComplete="email" required /></label>
            <label>Telefono<input name="phone" type="tel" autoComplete="tel" /></label>
            <label>Di cosa hai bisogno?
              <select name="service" defaultValue="">
                <option value="" disabled>Seleziona un servizio</option>
                <option>Ristrutturazione completa</option><option>Bagno e interni</option>
                <option>Tetto o facciata</option><option>Impermeabilizzazione</option><option>Intervento strutturale</option><option>Altro</option>
              </select>
            </label>
            <label>Raccontaci il progetto<textarea name="message" rows={4} maxLength={2000} required /></label>
            <label className="consent"><input type="checkbox" name="privacy_notice_read" required />
              <span>Ho letto l’<a href={url("/privacy/")}>informativa privacy</a>. La casella registra la presa visione, non il consenso a finalità promozionali.</span>
            </label>
            <button className="button submit-button" type="submit" disabled={!process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY}>
              Invia la richiesta
            </button>
            {!process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY && <p className="form-note">Modulo in anteprima: attivazione Web3Forms in attesa della chiave.</p>}
          </form>
        </section>
      </main>

      <footer>
        <a className="footer-logo" href={url("/")}><img src={url("/images/logo-shiba-v2.png")} alt="Shiba Costruzioni" /></a>
        <div className="footer-company"><strong>COSTRUZIONI EDILI SHIBA DI SHIBA ERMAL &amp; C. S.A.S.</strong><span>Indirizzo: VIA GIACOMO BRODOLINI 14 - 56017 - SAN GIULIANO TERME (PI)</span></div>
        <div className="footer-legal-data"><span>Partita IVA: 02226750509 - Codice Fiscale: 02226750509</span><span>Vat Europeo: IT02226750509</span><span>Rea: 190962</span><a href="mailto:ershiba@pec.it">PEC: ershiba@pec.it</a><span>Dipendenti: 12 (2026)</span></div>
        <div className="footer-bottom"><nav aria-label="Collegamenti legali"><a href={url("/privacy/")}>Privacy</a><a href={url("/cookie-policy/")}>Cookie</a><CookieSettingsButton /></nav><span>© 2016-2026 Costruzioni Edili Shiba</span></div>
      </footer>

      <div className="mobile-actions" aria-label="Azioni rapide">
        <a href="tel:+393420926964">Chiama</a><a href={url("/contatti/")}>Preventivo</a>
      </div>
    </>
  );
}
