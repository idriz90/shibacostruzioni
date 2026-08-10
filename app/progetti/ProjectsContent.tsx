"use client";

import { useState } from "react";
import { BeforeAfterSlider } from "../components/BeforeAfterSlider";
import { PageHero, siteUrl } from "../components/SiteChrome";

const copy = {
  it: {
    eyebrow: "Lavori realizzati",
    title: "Prima e dopo. Risultati concreti.",
    intro: "Cantieri reali, trasformazioni visibili e spazi pensati per essere vissuti ogni giorno.",
    before: "Prima",
    after: "Dopo",
    compare: "Confronto fotografico",
    cta: "Il prossimo progetto può essere il tuo.",
    contact: "Contattaci",
    projects: [
      ["Ristrutturazione bagno", "Demolizione, rifacimento degli impianti, nuove superfici e doccia contemporanea.", "Bagno prima della ristrutturazione", "Bagno completato dopo la ristrutturazione"],
      ["Trasformazione zona giorno", "Nuova distribuzione, impianti, pavimenti e cucina per uno spazio più luminoso e funzionale.", "Zona giorno durante i lavori", "Zona giorno rinnovata"],
      ["Ristrutturazione camera da letto", "Superfici, finiture e dettagli rinnovati per creare un ambiente più accogliente e contemporaneo.", "Camera da letto prima della ristrutturazione", "Camera da letto completata dopo la ristrutturazione"],
    ],
  },
  en: {
    eyebrow: "Completed projects",
    title: "Before and after. Tangible results.",
    intro: "Real construction sites, visible transformations and spaces designed for everyday living.",
    before: "Before",
    after: "After",
    compare: "Photo comparison",
    cta: "Your project could be next.",
    contact: "Contact us",
    projects: [
      ["Bathroom renovation", "Demolition, new systems, contemporary surfaces and a modern shower.", "Bathroom before renovation", "Bathroom after renovation"],
      ["Living area transformation", "A new layout, systems, flooring and kitchen for a brighter, more functional space.", "Living area during renovation", "Renovated living area"],
      ["Bedroom renovation", "Renewed surfaces, finishes and details create a more welcoming and contemporary room.", "Bedroom before renovation", "Bedroom after renovation"],
    ],
  },
};

const images = [
  ["/images/bagno-prima.jpeg", "/images/bagno-dopo.jpeg"],
  ["/images/soggiorno-prima.jpeg", "/images/soggiorno-dopo.jpeg"],
  ["/images/camera-prima.jpeg", "/images/camera-dopo.jpeg"],
];

export function ProjectsContent() {
  const [language, setLanguage] = useState<"it" | "en">("it");
  const text = copy[language];

  return <main>
    <PageHero eyebrow={text.eyebrow} title={text.title} text={text.intro} />
    <section className="projects content-section">
      <div className="language-switcher" aria-label="Seleziona la lingua">
        <button type="button" aria-pressed={language === "it"} onClick={() => setLanguage("it")}><span aria-hidden="true">🇮🇹</span> Italiano</button>
        <button type="button" aria-pressed={language === "en"} onClick={() => setLanguage("en")}><span aria-hidden="true">🇬🇧</span> English</button>
      </div>
      {text.projects.map(([title, description, beforeAlt, afterAlt], index) => <article className="project-case" key={images[index][0]}>
        <div className="project-title"><span>{String(index + 1).padStart(2, "0")}</span><div><h2>{title}</h2><p>{description}</p></div></div>
        <BeforeAfterSlider before={siteUrl(images[index][0])} after={siteUrl(images[index][1])} beforeAlt={beforeAlt} afterAlt={afterAlt} beforeLabel={text.before} afterLabel={text.after} />
      </article>)}
    </section>
    <section className="cta-band"><h2>{text.cta}</h2><a className="button" href={siteUrl("/contatti/")}>{text.contact}</a></section>
  </main>;
}
