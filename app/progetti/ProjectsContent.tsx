import { BeforeAfterSlider } from "../components/BeforeAfterSlider";
import { PageHero, siteUrl } from "../components/SiteChrome";

const projects = [
  ["Ristrutturazione bagno", "Demolizione, rifacimento degli impianti, nuove superfici e doccia contemporanea.", "/images/bagno-prima.jpeg", "/images/bagno-dopo.jpeg", "Bagno prima della ristrutturazione", "Bagno completato dopo la ristrutturazione"],
  ["Trasformazione zona giorno", "Nuova distribuzione, impianti, pavimenti e cucina per uno spazio più luminoso e funzionale.", "/images/soggiorno-prima.jpeg", "/images/soggiorno-dopo.jpeg", "Zona giorno durante i lavori", "Zona giorno rinnovata"],
  ["Ristrutturazione camera da letto", "Superfici, finiture e dettagli rinnovati per creare un ambiente più accogliente e contemporaneo.", "/images/camera-prima.jpeg", "/images/camera-dopo.jpeg", "Camera da letto prima della ristrutturazione", "Camera da letto completata dopo la ristrutturazione"],
];

export function ProjectsContent() {
  return <main>
    <PageHero eyebrow="Lavori realizzati" title="Prima e dopo. Risultati concreti." text="Cantieri reali, trasformazioni visibili e spazi pensati per essere vissuti ogni giorno." />
    <section className="projects content-section">
      {projects.map(([title, description, before, after, beforeAlt, afterAlt], index) => <article className="project-case" key={before}>
        <div className="project-title"><span>{String(index + 1).padStart(2, "0")}</span><div><h2>{title}</h2><p>{description}</p></div></div>
        <BeforeAfterSlider before={siteUrl(before)} after={siteUrl(after)} beforeAlt={beforeAlt} afterAlt={afterAlt} imagePosition={index === 2 ? "center 25%" : undefined} />
      </article>)}
    </section>
    <section className="cta-band"><h2>Il prossimo progetto può essere il tuo.</h2><a className="button" href={siteUrl("/contatti/")}>Contattaci</a></section>
  </main>;
}
