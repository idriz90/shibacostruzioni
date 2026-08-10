import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = { title: "Chi siamo", description: "Conosci Shiba Costruzioni, impresa familiare attiva a Pisa, Lucca e Livorno." };

export default function ChiSiamo() {
  return <><SiteHeader /><main><PageHero eyebrow="Chi siamo" title="Esperienza artigiana. Presenza diretta." text="Un’impresa familiare, una rete di professionisti fidati e un unico obiettivo: realizzare lavori solidi, trasparenti e capaci di durare." />
    <section className="content-section two-columns"><div><p className="eyebrow">La nostra storia</p><h2>Costruiamo relazioni prima ancora degli spazi.</h2></div><div className="rich-copy"><p>Da oltre dieci anni lavoriamo nella ristrutturazione, nell’impermeabilizzazione e nella manutenzione strutturale degli edifici toscani. Ogni incarico comincia con l’ascolto e con un sopralluogo svolto direttamente dal titolare.</p><p>Coordiniamo artigiani e tecnici selezionati nel tempo, scegliendo materiali e lavorazioni adatti all’immobile, al contesto e agli obiettivi del cliente.</p></div></section>
    <section className="values-grid content-section"><article><span>01</span><h3>Trasparenza</h3><p>Preventivi comprensibili, comunicazione diretta e nessuna sorpresa.</p></article><article><span>02</span><h3>Competenza</h3><p>Soluzioni valutate con attenzione tecnica e conoscenza del territorio.</p></article><article><span>03</span><h3>Cura</h3><p>Rispettiamo la casa, le persone e ogni dettaglio della lavorazione.</p></article><article><span>04</span><h3>Responsabilità</h3><p>Privilegiamo interventi efficaci, durevoli e consapevoli.</p></article></section>
    <section className="cta-band"><h2>Hai un progetto da raccontarci?</h2><a className="button" href="/contatti">Parliamone</a></section>
  </main><SiteFooter /></>;
}
