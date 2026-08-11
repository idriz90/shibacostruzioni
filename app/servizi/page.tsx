import { PageHero, siteUrl, SiteFooter, SiteHeader } from "../components/SiteChrome";
import { BreadcrumbJsonLd } from "../components/SeoJsonLd";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata("Servizi edili e ristrutturazioni a Pisa", "Ristrutturazioni complete, bagni, tetti, facciate, impermeabilizzazioni e consolidamento strutturale a Pisa e in Toscana.", "/servizi/");
const items = [
  ["Ristrutturazioni complete", "Appartamenti e ville", "Demolizioni, distribuzione degli spazi, impianti, pavimenti, tinteggiature e finiture coordinati da un unico referente."],
  ["Bagni e interni", "Comfort su misura", "Rifacimento completo del bagno, docce, rivestimenti, cartongesso e soluzioni personalizzate per gli ambienti interni."],
  ["Tetti e facciate", "Protezione e valore", "Rifacimento coperture, isolamento, grondaie, intonaci e facciate per migliorare sicurezza, efficienza ed estetica."],
  ["Impermeabilizzazioni", "Contro acqua e umidità", "Interventi su fondazioni, seminterrati, terrazze e coperture, con sistemi scelti in base alla causa del problema."],
  ["Consolidamento strutturale", "Sicurezza dell’edificio", "Riparazione di crepe, rinforzi, cordoli, stabilizzazione e miglioramento statico con il supporto di tecnici qualificati."],
  ["Edilizia commerciale", "Continuità per l’attività", "Manutenzioni, adeguamenti e interventi per negozi, magazzini e immobili a uso commerciale."],
];
export default function Servizi() { return <><SiteHeader /><main><BreadcrumbJsonLd items={[["Home", "/"], ["Servizi", "/servizi/"]]} /><PageHero eyebrow="I nostri servizi" title="Servizi edili e ristrutturazioni a Pisa e in Toscana." text="Dal piccolo intervento alla ristrutturazione completa, affrontiamo ogni lavoro partendo dalle reali condizioni dell’immobile." backgroundImage={siteUrl("/images/progetto-tetto-dopo-privacy.jpeg")} backgroundPosition="center 30%" />
  <section className="content-section"><div className="service-grid service-page-grid">{items.map(([title,kicker,text],i)=><article className="service-card" key={title}><span>{String(i+1).padStart(2,"0")}</span><p className="service-kicker">{kicker}</p><h2>{title}</h2><p>{text}</p></article>)}</div></section>
  </main><SiteFooter /></>; }
