import { BeforeAfterSlider } from "../components/BeforeAfterSlider";
import { PageHero, siteUrl } from "../components/SiteChrome";

const projects = [
  ["Ristrutturazione della camera", "Rifacimento degli impianti, nuove finiture e posa del pavimento per uno spazio più accogliente.", "/images/progetto-camera-prima.jpeg", "/images/progetto-camera-dopo.jpeg", "Camera durante la ristrutturazione", "Camera completata dopo la ristrutturazione"],
  ["Rifacimento della facciata", "Ripristino degli intonaci, tinteggiatura e riqualificazione dell’esterno dell’edificio.", "/images/progetto-facciata-prima.jpeg", "/images/progetto-facciata-dopo.jpeg", "Facciata durante i lavori con ponteggio", "Facciata completata dopo la riqualificazione"],
  ["Rifacimento del tetto", "Rimozione del manto esistente, impermeabilizzazione e riposizionamento della copertura.", "/images/progetto-tetto-prima.jpeg", "/images/progetto-tetto-dopo.jpeg", "Tetto durante la rimozione della vecchia copertura", "Tetto dopo il rifacimento della copertura"],
];

export function ProjectsContent() {
  return <main>
    <PageHero eyebrow="Lavori realizzati" title="Prima e dopo. Risultati concreti." text="Cantieri reali, trasformazioni visibili e spazi pensati per essere vissuti ogni giorno." compact />
    <section className="projects content-section">
      {projects.map(([title, description, before, after, beforeAlt, afterAlt], index) => <article className="project-case" key={before}>
        <div className="project-title"><span>{String(index + 1).padStart(2, "0")}</span><div><h2>{title}</h2><p>{description}</p></div></div>
        <BeforeAfterSlider before={siteUrl(before)} after={siteUrl(after)} beforeAlt={beforeAlt} afterAlt={afterAlt} />
      </article>)}
    </section>
    <section className="cta-band project-cta"><h2>Il prossimo progetto può essere il tuo.</h2><a className="button" href={siteUrl("/contatti/")}>Contattaci</a></section>
  </main>;
}
