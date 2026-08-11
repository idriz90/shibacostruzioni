import { PageHero, SiteFooter, SiteHeader } from "../components/SiteChrome";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata("Cookie Policy", "Informazioni sugli strumenti tecnici utilizzati dal sito Costruzioni Edili Shiba.", "/cookie-policy/", false);

export default function CookiePolicy() { return <><SiteHeader/><main><PageHero eyebrow="Navigazione trasparente" title="Cookie Policy" text="Questo sito non utilizza cookie analitici, pubblicitari o di profilazione. Ultimo aggiornamento: 10 agosto 2026."/><article className="legal-page content-section">
  <section><h2>Cosa utilizza il sito</h2><p>Il sito utilizza esclusivamente le risorse tecniche necessarie a mostrare le pagine, garantire la sicurezza e permettere la corretta navigazione. Non vengono installati cookie per analizzare il comportamento degli utenti, creare profili o mostrare pubblicità personalizzata.</p></section>
  <section><h2>Avviso “Ho capito”</h2><p>Al primo accesso viene mostrato un avviso puramente informativo. Il pulsante “Ho capito” non raccoglie un consenso, perché non vengono attivati strumenti facoltativi. La chiusura dell’avviso viene memorizzata nel localStorage del browser con la chiave <code>shiba-cookie-notice-seen</code>. Questa informazione resta sul dispositivo finché non viene cancellata tramite le impostazioni del browser.</p></section>
  <section><h2>Servizi esterni</h2><p>Il sito non incorpora automaticamente mappe, video, social widget o altri contenuti che possano installare strumenti di tracciamento. Un servizio esterno viene contattato solo quando l’utente sceglie di aprire un collegamento esterno.</p><p>Quando invii volontariamente il modulo di contatto, i dati vengono trasmessi a Web3Forms per recapitare la richiesta. Questo trattamento è descritto nell’<a href="../privacy/">informativa privacy</a> e non dipende dai cookie.</p></section>
  <section><h2>Modifiche future</h2><p>Se in futuro saranno introdotti analytics, contenuti incorporati o altri strumenti facoltativi, questi resteranno bloccati fino alla scelta dell’utente e le informative saranno aggiornate prima dell’attivazione.</p></section>
</article></main><SiteFooter/></> }
