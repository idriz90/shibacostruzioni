import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = { title: "Servizi edili e ristrutturazioni", description: "Ristrutturazioni, bagni, tetti, facciate, impermeabilizzazioni e consolidamento strutturale a Pisa e in Toscana." };
const items = [
  ["Ristrutturazioni complete", "Appartamenti e ville", "Demolizioni, distribuzione degli spazi, impianti, pavimenti, tinteggiature e finiture coordinati da un unico referente."],
  ["Bagni e interni", "Comfort su misura", "Rifacimento completo del bagno, docce, rivestimenti, cartongesso e soluzioni personalizzate per gli ambienti interni."],
  ["Tetti e facciate", "Protezione e valore", "Rifacimento coperture, isolamento, grondaie, intonaci e facciate per migliorare sicurezza, efficienza ed estetica."],
  ["Impermeabilizzazioni", "Contro acqua e umidità", "Interventi su fondazioni, seminterrati, terrazze e coperture, con sistemi scelti in base alla causa del problema."],
  ["Consolidamento strutturale", "Sicurezza dell’edificio", "Riparazione di crepe, rinforzi, cordoli, stabilizzazione e miglioramento statico con il supporto di tecnici qualificati."],
  ["Edilizia commerciale", "Continuità per l’attività", "Manutenzioni, adeguamenti e interventi per negozi, magazzini e immobili a uso commerciale."],
];
export default function Servizi() { return <><SiteHeader /><main><PageHero eyebrow="I nostri servizi" title="Una soluzione precisa per ogni edificio." text="Dal piccolo intervento alla ristrutturazione completa, affrontiamo ogni lavoro partendo dalle reali condizioni dell’immobile." />
  <section className="service-list content-section">{items.map(([title,kicker,text],i)=><article key={title}><span>{String(i+1).padStart(2,"0")}</span><div><p>{kicker}</p><h2>{title}</h2></div><p>{text}</p><a href="/contatti">Richiedi informazioni →</a></article>)}</section>
  <section className="cta-band"><h2>Serve un sopralluogo?</h2><a className="button" href="/contatti">Richiedi un preventivo</a></section>
  </main><SiteFooter /></>; }
