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
  "Ristrutturazioni complete": "Complete renovations", "Bagni e interni": "Bathrooms and interiors", "Tetti e facciate": "Roofs and facades", "Strutture e impermeabilizzazioni": "Structural work and waterproofing",
  "Appartamenti e ville ripensati in ogni dettaglio, dalla demolizione alle finiture.": "Apartments and villas redesigned in every detail, from demolition to finishes.",
  "Spazi funzionali e curati, impianti aggiornati e materiali scelti per durare.": "Functional, carefully finished spaces, updated systems and durable materials.",
  "Interventi sicuri per proteggere, isolare e valorizzare l'edificio nel tempo.": "Safe work to protect, insulate and enhance the building over time.",
  "Soluzioni mirate per umidità, crepe, fondazioni e consolidamento strutturale.": "Targeted solutions for damp, cracks, foundations and structural reinforcement.",
  "Prima e dopo": "Before and after", "Il cambiamento che": "The change that", "si vede.": "you can see.",
  "Nuovo bagno": "New bathroom", "Impianti, rivestimenti e superfici completamente rinnovati.": "Systems, wall coverings and surfaces completely renewed.",
  "Prima": "Before", "Dopo": "After",
  "Una soluzione precisa per ogni edificio.": "The right solution for every building.",
  "Servizi edili e ristrutturazioni a Pisa e in Toscana.": "Building and renovation services in Pisa and across Tuscany.",
  "Dal piccolo intervento alla ristrutturazione completa, affrontiamo ogni lavoro partendo dalle reali condizioni dell'immobile.": "From small repairs to complete renovations, every project starts with the building's actual condition.",
  "Appartamenti e ville": "Apartments and villas", "Comfort su misura": "Tailored comfort", "Protezione e valore": "Protection and value", "Contro acqua e umidità": "Against water and damp", "Sicurezza dell'edificio": "Building safety", "Continuità per l'attività": "Business continuity",
  "Demolizioni, distribuzione degli spazi, impianti, pavimenti, tinteggiature e finiture coordinati da un unico referente.": "Demolition, layouts, systems, floors, painting and finishes coordinated by one contact.",
  "Rifacimento completo del bagno, docce, rivestimenti, cartongesso e soluzioni personalizzate per gli ambienti interni.": "Complete bathroom renovation, showers, wall finishes, plasterboard and tailored interior solutions.",
  "Rifacimento coperture, isolamento, grondaie, intonaci e facciate per migliorare sicurezza, efficienza ed estetica.": "Roof replacement, insulation, gutters, render and facade work to improve safety, efficiency and appearance.",
  "Interventi su fondazioni, seminterrati, terrazze e coperture, con sistemi scelti in base alla causa del problema.": "Work on foundations, basements, terraces and roofs, using systems selected for the cause of the problem.",
  "Riparazione di crepe, rinforzi, cordoli, stabilizzazione e miglioramento statico con il supporto di tecnici qualificati.": "Crack repairs, reinforcement, ring beams, stabilisation and structural improvement with qualified specialists.",
  "Manutenzioni, adeguamenti e interventi per negozi, magazzini e immobili a uso commerciale.": "Maintenance, upgrades and construction work for shops, warehouses and commercial properties.",
  "Lavori realizzati": "Completed projects", "Prima e dopo. Risultati concreti.": "Before and after. Tangible results.",
  "Cantieri reali, trasformazioni visibili e spazi pensati per essere vissuti ogni giorno.": "Real construction sites, visible transformations and spaces designed for everyday living.",
  "Ristrutturazione bagno": "Bathroom renovation", "Demolizione, rifacimento degli impianti, nuove superfici e doccia contemporanea.": "Demolition, new systems, contemporary surfaces and a modern shower.",
  "Trasformazione zona giorno": "Living area transformation", "Nuova distribuzione, impianti, pavimenti e cucina per uno spazio più luminoso e funzionale.": "A new layout, systems, flooring and kitchen for a brighter, more functional space.",
  "Ristrutturazione camera da letto": "Bedroom renovation", "Superfici, finiture e dettagli rinnovati per creare un ambiente più accogliente e contemporaneo.": "Renewed surfaces, finishes and details create a more welcoming and contemporary room.",
  "Ristrutturazione della camera": "Bedroom renovation", "Rifacimento degli impianti, nuove finiture e posa del pavimento per uno spazio più accogliente.": "New systems, finishes and flooring create a more welcoming room.",
  "Rifacimento della facciata": "Facade renovation", "Ripristino degli intonaci, tinteggiatura e riqualificazione dell’esterno dell’edificio.": "Render repairs, repainting and refurbishment of the building exterior.",
  "Rifacimento del tetto": "Roof renovation", "Rimozione del manto esistente, impermeabilizzazione e riposizionamento della copertura.": "Removal of the existing roof covering, waterproofing and installation of the renewed covering.",
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
  "Ristrutturazione completa": "Complete renovation", "Bagno e interni": "Bathroom and interiors", "Tetto o facciata": "Roof or facade", "Impermeabilizzazione": "Waterproofing", "Impermeabilizzazioni": "Waterproofing", "Consolidamento strutturale": "Structural reinforcement", "Edilizia commerciale": "Commercial construction", "Intervento strutturale": "Structural work",
  "Trasparenza e dati personali": "Transparency and personal data", "Titolare del trattamento": "Data controller", "Dati trattati e finalità": "Data processed and purposes", "Base giuridica e conferimento": "Legal basis and provision of data", "Modalità, sicurezza e conservazione": "Methods, security and retention", "Destinatari e Web3Forms": "Recipients and Web3Forms", "Navigazione e cookie": "Browsing and cookies", "Diritti dell'interessato": "Data subject rights",
  "Questo sito non utilizza cookie analitici, pubblicitari o di profilazione. Ultimo aggiornamento: 10 agosto 2026.": "This website does not use analytics, advertising or profiling cookies. Last updated: 10 August 2026.",
  "Il sito utilizza esclusivamente le risorse tecniche necessarie a mostrare le pagine, garantire la sicurezza e permettere la corretta navigazione. Non vengono installati cookie per analizzare il comportamento degli utenti, creare profili o mostrare pubblicità personalizzata.": "The website uses only the technical resources required to display pages, ensure security and enable correct navigation. No cookies are installed to analyse behaviour, create profiles or display personalised advertising.",
  "Avviso \"Ho capito\"": "‘I understand’ notice",
  "Il sito non incorpora automaticamente mappe, video, social widget o altri contenuti che possano installare strumenti di tracciamento. Un servizio esterno viene contattato solo quando l'utente sceglie di aprire un collegamento esterno.": "The website does not automatically embed maps, videos, social widgets or other content that may install tracking tools. An external service is contacted only when the user chooses to open an external link.",
  "Quando invii volontariamente il modulo di contatto, i dati vengono trasmessi a Web3Forms per recapitare la richiesta. Questo trattamento è descritto nell'informativa privacy e non dipende dai cookie.": "When you voluntarily submit the contact form, data is sent to Web3Forms to deliver your request. This processing is described in the privacy notice and does not depend on cookies.",
  "Se in futuro saranno introdotti analytics, contenuti incorporati o altri strumenti facoltativi, questi resteranno bloccati fino alla scelta dell'utente e le informative saranno aggiornate prima dell'attivazione.": "If analytics, embedded content or other optional tools are introduced in future, they will remain blocked until the user makes a choice and the notices will be updated before activation.",
  "Come lavoriamo": "How we work", "Un processo ordinato. Un referente presente.": "A well-managed process. One dedicated point of contact.",
  "La qualità non nasce soltanto dal lavoro in cantiere, ma da ascolto, organizzazione e comunicazione in ogni fase.": "Quality comes not only from the work on site, but also from listening, planning and clear communication at every stage.",
  "Ascolto e sopralluogo": "Consultation and site inspection", "Incontriamo il cliente, osserviamo l'immobile e raccogliamo tutte le informazioni necessarie.": "We meet the client, inspect the property and gather all the information required.",
  "Valutazione e proposta": "Assessment and proposal", "Definiamo priorità, lavorazioni, materiali, tempi e costi in modo comprensibile.": "We set out priorities, work specifications, materials, timescales and costs clearly.",
  "Pianificazione": "Planning", "Organizziamo il cantiere e coordiniamo artigiani, tecnici e forniture.": "We organise the site and coordinate tradespeople, specialists and supplies.",
  "Realizzazione": "Construction", "Seguiamo le lavorazioni con presenza costante e aggiornamenti chiari.": "We oversee the work closely and provide clear, regular updates.",
  "Controllo e consegna": "Final checks and handover", "Verifichiamo le finiture e consegniamo uno spazio pronto da vivere.": "We inspect the finishes and hand over a space ready to use.",
  "Cosa puoi aspettarti": "What you can expect", "Chiarezza dall'inizio alla fine.": "Clarity from start to finish.",
  "Un contatto diretto, preventivi dettagliati, attenzione alla sicurezza e rispetto degli ambienti. Quando emergono imprevisti, li affrontiamo con trasparenza e proponiamo soluzioni concrete prima di procedere.": "A direct point of contact, detailed quotations, careful attention to safety and respect for the property. If unforeseen issues arise, we explain them clearly and propose practical solutions before proceeding.",
  "Cominciamo da un sopralluogo.": "Let's begin with a site inspection.",
  "Gestisci cookie": "Cookie settings", "Questo sito non usa cookie di profilazione.": "This website does not use profiling cookies.",
  "Utilizziamo solo strumenti tecnici indispensabili. Leggi la nostra": "We use only essential technical tools. Read our", "cookie policy": "cookie policy", "Ho capito": "I understand",
  "Modulo in anteprima: attivazione Web3Forms in attesa della chiave.": "Form preview: Web3Forms activation is awaiting the access key.",
  "La casella registra la presa visione, non il consenso a finalità promozionali.": "This checkbox records acknowledgement and does not constitute consent to marketing communications.",
  "Indirizzo: VIA GIACOMO BRODOLINI 14 - 56017 - SAN GIULIANO TERME (PI)": "Address: VIA GIACOMO BRODOLINI 14 - 56017 - SAN GIULIANO TERME (PI)",
  "Partita IVA: 02226750509 - Codice Fiscale: 02226750509": "VAT number: 02226750509 - Tax code: 02226750509", "Vat Europeo: IT02226750509": "EU VAT number: IT02226750509", "Dipendenti: 12 (2026)": "Employees: 12 (2026)",
  "Informativa resa ai sensi dell'art. 13 del Regolamento UE 2016/679 (GDPR). Ultimo aggiornamento: 10 agosto 2026.": "Notice provided under Article 13 of EU Regulation 2016/679 (GDPR). Last updated: 10 August 2026.",
  "Contatti:": "Contact details:",
  "Attraverso il modulo di contatto trattiamo nome e cognome, indirizzo e-mail, eventuale numero di telefono, servizio richiesto e contenuto del messaggio. I dati sono usati esclusivamente per ricevere la richiesta, rispondere, organizzare un sopralluogo e predisporre un eventuale preventivo.": "Through the contact form we process your full name, email address, optional telephone number, requested service and message. The data is used solely to receive and respond to your enquiry, arrange a site inspection and prepare a quotation where requested.",
  "Non inserire nel messaggio dati sanitari, credenziali, documenti, coordinate bancarie o altre informazioni particolarmente riservate.": "Do not include health data, login credentials, documents, bank details or other highly confidential information in your message.",
  "I dati non vengono diffusi. Possono essere comunicati a enti pubblici, consulenti o altri soggetti quando necessario per obblighi di legge o per la gestione del rapporto.": "Your data is not made public. It may be disclosed to public authorities, advisers or other parties where required by law or to manage the business relationship.",
  "Per esercitare i diritti scrivi a": "To exercise your rights, write to", "oppure invia una raccomandata A/R alla sede del Titolare.": "or send a registered letter with acknowledgement of receipt to the Data Controller's registered office.",
  "Il Titolare è": "The Data Controller is", ", con sede in Via Giacomo Brodolini 14, 56017 San Giuliano Terme (PI), P. IVA e Codice Fiscale 02226750509, in persona del legale rappresentante Ermal Shiba.": ", with registered office at Via Giacomo Brodolini 14, 56017 San Giuliano Terme (PI), VAT and Tax Code 02226750509, represented by Ermal Shiba.",
  "La base giuridica è l'esecuzione di misure precontrattuali adottate su richiesta dell'interessato, ai sensi dell'art. 6, par. 1, lett. b) GDPR. I campi obbligatori sono necessari per poter rispondere. La casella nel modulo attesta la presa visione dell'informativa e non costituisce consenso a comunicazioni promozionali.": "The legal basis is the performance of pre-contractual measures taken at the data subject's request under Article 6(1)(b) GDPR. Required fields are necessary for us to respond. The checkbox confirms that the privacy notice has been read and does not constitute consent to marketing communications.",
  "Il trattamento avviene con strumenti informatici e, quando necessario, manuali, nel rispetto dei principi di liceità, correttezza, trasparenza, minimizzazione e sicurezza. Le richieste sono conservate per il tempo necessario a gestire il contatto e gli eventuali rapporti conseguenti; i dati connessi a obblighi amministrativi, fiscali o contrattuali sono conservati per i termini previsti dalla legge.": "Data is processed using electronic and, where necessary, manual means in accordance with the principles of lawfulness, fairness, transparency, minimisation and security. Enquiries are retained for the time required to manage the contact and any resulting business relationship; data connected with administrative, tax or contractual obligations is retained for the periods required by law.",
  "I dati possono essere conosciuti da personale e collaboratori autorizzati e da fornitori tecnici che operano per l'erogazione del servizio. Il modulo è fornito da Web3Forms: i dati inseriti vengono trasmessi tramite il suo servizio per recapitare la richiesta a Costruzioni Edili Shiba. Consulta anche l'": "Data may be accessed by authorised staff and collaborators and by technical providers involved in delivering the service. The form is provided by Web3Forms: the information entered is transmitted through its service to deliver the enquiry to Costruzioni Edili Shiba. Please also read the",
  "informativa privacy di Web3Forms": "Web3Forms privacy policy", "per conoscere modalità, conservazione ed eventuali trasferimenti internazionali gestiti dal fornitore.": "for details of processing methods, retention and any international transfers managed by the provider.",
  "Il sito non utilizza cookie analitici, pubblicitari o di profilazione. La chiusura dell'avviso informativo viene ricordata nel browser mediante localStorage, esclusivamente per non riproporlo a ogni pagina. Per i dettagli consulta la": "The website does not use analytics, advertising or profiling cookies. Closing the information notice is remembered in the browser through localStorage solely to prevent it appearing on every page. For details, please read the",
  "Puoi esercitare i diritti previsti dagli artt. 15-22 GDPR, tra cui accesso, rettifica, cancellazione, limitazione, portabilità, opposizione e revoca del consenso quando il trattamento si basa sul consenso. Puoi inoltre proporre reclamo al Garante per la protezione dei dati personali.": "You may exercise the rights provided for in Articles 15–22 GDPR, including access, rectification, erasure, restriction, portability, objection and withdrawal of consent where processing is based on consent. You may also lodge a complaint with the Italian Data Protection Authority.",
  "Al primo accesso viene mostrato un avviso puramente informativo. Il pulsante \"Ho capito\" non raccoglie un consenso, perché non vengono attivati strumenti facoltativi. La chiusura dell'avviso viene memorizzata nel localStorage del browser con la chiave": "On your first visit, a purely informational notice is displayed. The ‘I understand’ button does not collect consent because no optional tools are activated. Closing the notice is stored in the browser's localStorage using the key",
  ". Questa informazione resta sul dispositivo finché non viene cancellata tramite le impostazioni del browser.": ". This information remains on the device until it is deleted through the browser settings.",
  "Ho letto l'": "I have read the", "e la": "and the",
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
      <img className="flag-icon" src={`${basePath}/images/uk-flag-small.jpg`} alt="" width="130" height="82" loading="lazy" decoding="async" aria-hidden="true" />
    </button>
    <button className={`language-toggle${language === "it" ? " is-active" : ""}`} type="button" onClick={() => choose("it")} aria-label="Traduci il sito in italiano" aria-pressed={language === "it"}>
      <span className="flag-icon flag-it" aria-hidden="true" />
    </button>
  </div>;
}
