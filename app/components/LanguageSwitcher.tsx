"use client";

import { useEffect, useState } from "react";
import { basePath } from "../basePath";

const translations: Record<string, string> = {
  "La risposta professionale nell'edilizia": "The professional answer in construction",
  "anni sul territorio": "years serving", "toscano": "Tuscany",
  "Servizi": "Services", "Progetti": "Projects", "Chi siamo": "About us", "Contatti": "Contact",
  "Richiedi un sopralluogo gratuito": "Request a free site inspection", "Menu": "Menu",
  "Costruiamo valore, proteggiamo ciò che conta": "We build value and protect what matters",
  "La tua casa,": "Your home,", "fatta per durare.": "built to last.",
  "Ristrutturazioni, impermeabilizzazioni e interventi strutturali a Pisa, Lucca e Livorno. Un referente diretto, un lavoro fatto a regola d'arte.": "Renovations, waterproofing and structural work in Pisa, Lucca and Livorno. One direct contact and work completed to the highest standards.",
  "Richiedi un preventivo": "Request a quote", "Guarda i lavori": "View our work",
  "Impresa familiare, competenza concreta": "Family business, proven expertise",
  "Seguiamo ogni progetto come se fosse casa nostra.": "We look after every project as if it were our own home.",
  "Costruzioni Edili Shiba unisce esperienza artigiana, tecnici fidati e una conoscenza profonda degli edifici toscani. Dal primo sopralluogo alla consegna sarete seguiti direttamente dal titolare, con comunicazione trasparente e soluzioni su misura.": "Costruzioni Edili Shiba combines craftsmanship, trusted specialists and in-depth knowledge of Tuscan buildings. From the first inspection to delivery, the owner follows your project directly with clear communication and tailored solutions.",
  "Scopri il nostro metodo": "Discover our approach", "I nostri servizi": "Our services",
  "Soluzioni solide.": "Solid solutions.", "Dalla struttura alle finiture.": "From structure to finishes.",
  "Ristrutturazioni complete": "Complete renovations", "Bagni e interni": "Bathrooms and interiors", "Tetti e facciate": "Roofs and façades", "Strutture e impermeabilizzazioni": "Structures and waterproofing",
  "Appartamenti e ville ripensati in ogni dettaglio, dalla demolizione alle finiture.": "Apartments and villas redesigned in every detail, from demolition to finishes.",
  "Spazi funzionali e curati, impianti aggiornati e materiali scelti per durare.": "Functional, carefully finished spaces, updated systems and durable materials.",
  "Interventi sicuri per proteggere, isolare e valorizzare l'edificio nel tempo.": "Safe work to protect, insulate and enhance the building over time.",
  "Soluzioni mirate per umidità, crepe, fondazioni e consolidamento strutturale.": "Targeted solutions for damp, cracks, foundations and structural reinforcement.",
  "Prima e dopo": "Before and after", "Il cambiamento che": "The change that", "si vede.": "you can see.",
  "Nuova zona giorno": "New living area", "Spazi, impianti e superfici trasformati per una casa più luminosa.": "Spaces, systems and surfaces transformed into a brighter home.",
  "Prima": "Before", "Dopo": "After",
  "Una soluzione precisa per ogni edificio.": "The right solution for every building.",
  "Dal piccolo intervento alla ristrutturazione completa, affrontiamo ogni lavoro partendo dalle reali condizioni dell'immobile.": "From small repairs to complete renovations, every project starts with the building's actual condition.",
  "Appartamenti e ville": "Apartments and villas", "Comfort su misura": "Tailored comfort", "Protezione e valore": "Protection and value", "Contro acqua e umidità": "Against water and damp", "Sicurezza dell'edificio": "Building safety", "Continuità per l'attività": "Business continuity",
  "Demolizioni, distribuzione degli spazi, impianti, pavimenti, tinteggiature e finiture coordinati da un unico referente.": "Demolition, layouts, systems, floors, painting and finishes coordinated by one contact.",
  "Rifacimento completo del bagno, docce, rivestimenti, cartongesso e soluzioni personalizzate per gli ambienti interni.": "Complete bathroom renovation, showers, wall finishes, plasterboard and tailored interior solutions.",
  "Rifacimento coperture, isolamento, grondaie, intonaci e facciate per migliorare sicurezza, efficienza ed estetica.": "Roofing, insulation, gutters, plaster and façades to improve safety, efficiency and appearance.",
  "Interventi su fondazioni, seminterrati, terrazze e coperture, con sistemi scelti in base alla causa del problema.": "Work on foundations, basements, terraces and roofs, using systems selected for the cause of the problem.",
  "Riparazione di crepe, rinforzi, cordoli, stabilizzazione e miglioramento statico con il supporto di tecnici qualificati.": "Crack repairs, reinforcement, ring beams, stabilisation and structural improvement with qualified specialists.",
  "Manutenzioni, adeguamenti e interventi per negozi, magazzini e immobili a uso commerciale.": "Maintenance, upgrades and construction work for shops, warehouses and commercial properties.",
  "Lavori realizzati": "Completed projects", "Prima e dopo. Risultati concreti.": "Before and after. Tangible results.",
  "Cantieri reali, trasformazioni visibili e spazi pensati per essere vissuti ogni giorno.": "Real construction sites, visible transformations and spaces designed for everyday living.",
  "Ristrutturazione bagno": "Bathroom renovation", "Demolizione, rifacimento degli impianti, nuove superfici e doccia contemporanea.": "Demolition, new systems, contemporary surfaces and a modern shower.",
  "Trasformazione zona giorno": "Living area transformation", "Nuova distribuzione, impianti, pavimenti e cucina per uno spazio più luminoso e funzionale.": "A new layout, systems, flooring and kitchen for a brighter, more functional space.",
  "Ristrutturazione camera da letto": "Bedroom renovation", "Superfici, finiture e dettagli rinnovati per creare un ambiente più accogliente e contemporaneo.": "Renewed surfaces, finishes and details create a more welcoming and contemporary room.",
  "Il prossimo progetto può essere il tuo.": "Your project could be next.", "Contattaci": "Contact us",
  "Esperienza artigiana. Presenza diretta.": "Craft experience. Direct presence.", "La nostra storia": "Our story", "Costruiamo relazioni prima ancora degli spazi.": "We build relationships before spaces.",
  "Trasparenza": "Transparency", "Competenza": "Expertise", "Cura": "Care", "Responsabilità": "Responsibility", "Hai un progetto da raccontarci?": "Do you have a project to tell us about?", "Parliamone": "Let's talk",
  "Dal cantiere": "From the building site", "Conoscere aiuta a costruire meglio.": "Knowledge helps us build better.", "In preparazione": "Coming soon", "Newsletter Substack": "Substack newsletter", "Nuovi consigli direttamente nella tua email.": "New advice delivered to your inbox.", "La pubblicazione ufficiale di Costruzioni Edili Shiba verrà configurata prossimamente.": "The official Costruzioni Edili Shiba publication will be set up soon.", "Vai a Substack": "Go to Substack",
  "Raccontaci il tuo progetto.": "Tell us about your project.", "Recapiti": "Contact details", "Parliamone direttamente.": "Let's talk directly.", "Nome e cognome": "Full name", "Telefono": "Phone", "Servizio": "Service", "Seleziona": "Select", "Altro": "Other", "Raccontaci il progetto": "Tell us about your project", "Invia la richiesta": "Send request",
  "Informativa privacy": "Privacy notice", "Cookie Policy": "Cookie Policy", "Privacy": "Privacy", "Cookie": "Cookies", "Impostazioni cookie": "Cookie settings",
  "Navigazione trasparente": "Transparent browsing", "Cosa utilizza il sito": "What the website uses", "Servizi esterni": "External services", "Modifiche future": "Future changes",
  "Indirizzo:": "Address:", "Partita IVA:": "VAT number:", "Codice Fiscale:": "Tax code:", "Dipendenti:": "Employees:",
  "Un'impresa familiare, una rete di professionisti fidati e un unico obiettivo: realizzare lavori solidi, trasparenti e capaci di durare.": "A family business, a network of trusted professionals and one goal: solid, transparent work built to last.",
  "Shiba Costruzioni nasce a Pisa oltre dieci anni fa dalla passione e dalla tenacia di Vaid Shiba. In seguito, anche il figlio Ermal ha scelto di affiancarlo, contribuendo alla crescita dell'impresa familiare. Con dedizione, trasparenza e costanza, l'azienda ha superato le difficoltà e le incertezze incontrate lungo il percorso, ampliandosi fino a raggiungere l'attuale organico di 12 persone.": "Shiba Costruzioni was founded in Pisa over ten years ago through the passion and determination of Vaid Shiba. His son Ermal later joined him, contributing to the growth of the family business. With dedication, transparency and perseverance, the company has overcome challenges and uncertainty, expanding to its current team of 12 people.",
  "Da oltre dieci anni ci occupiamo di ristrutturazione, impermeabilizzazione e manutenzione strutturale degli edifici in Toscana. Ogni incarico nasce dall'ascolto delle esigenze del cliente e da un sopralluogo svolto direttamente dal titolare. Coordiniamo artigiani e tecnici selezionati nel tempo, scegliendo materiali e lavorazioni adatti all'immobile, al contesto e agli obiettivi del progetto.": "For over ten years we have specialised in renovation, waterproofing and structural maintenance for buildings across Tuscany. Every project begins by listening to the client's needs and with an inspection carried out directly by the owner. We coordinate carefully selected tradespeople and specialists, choosing materials and methods suited to the property, its setting and the project's goals.",
  "Preventivi comprensibili, comunicazione diretta e nessuna sorpresa.": "Clear quotations, direct communication and no surprises.",
  "Soluzioni valutate con attenzione tecnica e conoscenza del territorio.": "Solutions assessed with technical care and local knowledge.",
  "Rispettiamo la casa, le persone e ogni dettaglio della lavorazione.": "We respect the home, the people and every detail of the work.",
  "Privilegiamo interventi efficaci, durevoli e consapevoli.": "We favour effective, durable and responsible solutions.",
  "Guide pratiche, spiegazioni semplici e consigli maturati sul campo. La pubblicazione sarà collegata a Substack.": "Practical guides, straightforward explanations and advice gained on site. The publication will be connected to Substack.",
  "Umidità in casa": "Damp in the home", "Ristrutturare il bagno": "Renovating a bathroom", "Crepe nei muri": "Cracks in walls", "Manutenzione del tetto": "Roof maintenance",
  "Come riconoscere i segnali e capire quando serve un intervento professionale.": "How to recognise the signs and understand when professional work is needed.",
  "Scelte, fasi e dettagli da valutare prima di iniziare i lavori.": "Choices, stages and details to assess before work begins.",
  "Quando sono soltanto superficiali e quando richiedono una valutazione tecnica.": "When they are merely superficial and when they require technical assessment.",
  "Controlli utili per prevenire infiltrazioni e danni più importanti.": "Useful checks to prevent leaks and more serious damage.",
  "Il collegamento alla pubblicazione verrà attivato appena disponibile.": "The publication link will be activated as soon as it is available.",
  "Descrivi l'intervento di cui hai bisogno. Ti ricontatteremo per organizzare un primo confronto e, quando necessario, un sopralluogo.": "Describe the work you need. We will contact you to arrange an initial discussion and, when necessary, a site inspection.",
  "Ho letto l'informativa privacy. La casella registra la presa visione, non il consenso a finalità promozionali.": "I have read the privacy notice. This checkbox records acknowledgement and is not consent to marketing communications.",
  "Ristrutturazione completa": "Complete renovation", "Bagno e interni": "Bathroom and interiors", "Tetto o facciata": "Roof or façade", "Impermeabilizzazione": "Waterproofing", "Intervento strutturale": "Structural work",
  "Trasparenza e dati personali": "Transparency and personal data", "Titolare del trattamento": "Data controller", "Dati trattati e finalità": "Data processed and purposes", "Base giuridica e conferimento": "Legal basis and provision of data", "Modalità, sicurezza e conservazione": "Methods, security and retention", "Destinatari e Web3Forms": "Recipients and Web3Forms", "Navigazione e cookie": "Browsing and cookies", "Diritti dell'interessato": "Data subject rights",
  "Questo sito non utilizza cookie analitici, pubblicitari o di profilazione. Ultimo aggiornamento: 10 agosto 2026.": "This website does not use analytics, advertising or profiling cookies. Last updated: 10 August 2026.",
  "Il sito utilizza esclusivamente le risorse tecniche necessarie a mostrare le pagine, garantire la sicurezza e permettere la corretta navigazione. Non vengono installati cookie per analizzare il comportamento degli utenti, creare profili o mostrare pubblicità personalizzata.": "The website uses only the technical resources required to display pages, ensure security and enable correct navigation. No cookies are installed to analyse behaviour, create profiles or display personalised advertising.",
  "Avviso \"Ho capito\"": "‘I understand’ notice",
  "Il sito non incorpora automaticamente mappe, video, social widget o altri contenuti che possano installare strumenti di tracciamento. Un servizio esterno viene contattato solo quando l'utente sceglie di aprire un collegamento esterno.": "The website does not automatically embed maps, videos, social widgets or other content that may install tracking tools. An external service is contacted only when the user chooses to open an external link.",
  "Quando invii volontariamente il modulo di contatto, i dati vengono trasmessi a Web3Forms per recapitare la richiesta. Questo trattamento è descritto nell'informativa privacy e non dipende dai cookie.": "When you voluntarily submit the contact form, data is sent to Web3Forms to deliver your request. This processing is described in the privacy notice and does not depend on cookies.",
  "Se in futuro saranno introdotti analytics, contenuti incorporati o altri strumenti facoltativi, questi resteranno bloccati fino alla scelta dell'utente e le informative saranno aggiornate prima dell'attivazione.": "If analytics, embedded content or other optional tools are introduced in future, they will remain blocked until the user makes a choice and the notices will be updated before activation.",
};

const originals = new WeakMap<Text, string>();

function translatePage(language: "it" | "en") {
  document.documentElement.lang = language;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode() as Text | null;
  while (node) {
    const parent = node.parentElement;
    if (parent && !parent.closest("script, style, noscript, [data-no-translate]")) {
      if (!originals.has(node)) originals.set(node, node.nodeValue ?? "");
      const original = originals.get(node) ?? "";
      const trimmed = original.trim();
      const normalized = trimmed.replace(/[’‘]/g, "'").replace(/[“”]/g, '"');
      const numbered = normalized.match(/^(\d+\.\s*)(.+)$/);
      const direct = translations[trimmed] ?? translations[normalized];
      const translated = language === "en" ? (direct ?? (numbered && translations[numbered[2]] ? `${numbered[1]}${translations[numbered[2]]}` : undefined)) : undefined;
      node.nodeValue = trimmed && translated ? original.replace(trimmed, translated) : original;
    }
    node = walker.nextNode() as Text | null;
  }
}

export function LanguageSwitcher() {
  const [language, setLanguage] = useState<"it" | "en">("it");

  useEffect(() => {
    const saved = localStorage.getItem("shiba-language") === "en" ? "en" : "it";
    setLanguage(saved);
    translatePage(saved);
    const observer = new MutationObserver(() => translatePage(localStorage.getItem("shiba-language") === "en" ? "en" : "it"));
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  const choose = (next: "it" | "en") => {
    localStorage.setItem("shiba-language", next);
    setLanguage(next);
    translatePage(next);
  };

  return <div className="language-switcher" role="group" aria-label="Seleziona la lingua" data-no-translate>
    <button className={`language-toggle${language === "en" ? " is-active" : ""}`} type="button" onClick={() => choose("en")} aria-label="Translate website into English" aria-pressed={language === "en"}>
      <img className="flag-icon" src={`${basePath}/images/uk-flag.jpg`} alt="" aria-hidden="true" />
    </button>
    <button className={`language-toggle${language === "it" ? " is-active" : ""}`} type="button" onClick={() => choose("it")} aria-label="Traduci il sito in italiano" aria-pressed={language === "it"}>
      <span className="flag-icon flag-it" aria-hidden="true" />
    </button>
  </div>;
}
