import { BeforeAfterSlider } from "../components/BeforeAfterSlider";
import { PageHero, siteUrl } from "../components/SiteChrome";

const projects = [
  ["Ristrutturazione bagno", "Demolizione, rifacimento degli impianti, nuove superfici e doccia contemporanea.", "/images/bagno-prima.jpeg", "/images/bagno-dopo.jpeg", "Bagno prima della ristrutturazione", "Bagno completato dopo la ristrutturazione"],
  ["Trasformazione zona giorno", "Nuova distribuzione, impianti, pavimenti e cucina per uno spazio più luminoso e funzionale.", "/images/soggiorno-prima.jpeg", "/images/soggiorno-dopo.jpeg", "Zona giorno durante i lavori", "Zona giorno rinnovata"],
  ["Ristrutturazione camera da letto", "Superfici, finiture e dettagli rinnovati per creare un ambiente più accogliente e contemporaneo.", "/images/camera-prima.jpeg", "/images/camera-dopo.jpeg", "Camera da letto prima della ristrutturazione", "Camera da letto completata dopo la ristrutturazione"],
  ["Ristrutturazione della camera", "Rifacimento degli impianti, nuove finiture e posa del pavimento per uno spazio più accogliente.", "/images/progetto-camera-prima.jpeg", "/images/progetto-camera-dopo.jpeg", "Camera durante la ristrutturazione", "Camera completata dopo la ristrutturazione"],
  ["Rifacimento della facciata", "Ripristino degli intonaci, tinteggiatura e riqualificazione dell’esterno dell’edificio.", "/images/progetto-facciata-prima.jpeg", "/images/progetto-facciata-dopo.jpeg", "Facciata durante i lavori con ponteggio", "Facciata completata dopo la riqualificazione"],
  ["Rifacimento del tetto", "Rimozione del manto esistente, impermeabilizzazione e riposizionamento della copertura.", "/images/progetto-tetto-prima.jpeg", "/images/progetto-tetto-dopo-privacy.jpeg", "Tetto durante la rimozione della vecchia copertura", "Tetto dopo il rifacimento della copertura"],
  ["Ristrutturazione bagno effetto marmo", "Rifacimento degli impianti e posa di nuovi rivestimenti scuri per un bagno contemporaneo.", "/images/home-bagno-prima-2.jpeg", "/images/home-bagno-dopo-2.jpeg", "Bagno durante il rifacimento degli impianti", "Bagno rinnovato con rivestimenti effetto marmo"],
];

export function ProjectsContent() {
  return <main>
    <PageHero eyebrow="Lavori realizzati" title="Prima e dopo. Risultati concreti." text="Cantieri reali, trasformazioni visibili e spazi pensati per essere vissuti ogni giorno." compact />
    <section className="projects content-section">
      {projects.map(([title, description, before, after, beforeAlt, afterAlt], index) => <article className={`project-case${index === 6 ? " project-case-portrait" : ""}`} key={before}>
        <div className="project-title"><span>{String(index + 1).padStart(2, "0")}</span><div><h2>{title}</h2><p>{description}</p></div></div>
        <BeforeAfterSlider before={siteUrl(before)} after={siteUrl(after)} beforeAlt={beforeAlt} afterAlt={afterAlt} />
      </article>)}
    </section>
    <section className="cta-band project-cta"><h2>Il prossimo progetto può essere il tuo.</h2><a className="button" href={siteUrl("/contatti/")}>Contattaci</a></section>
  </main>;
}
