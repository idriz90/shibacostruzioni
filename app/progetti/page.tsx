import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { BreadcrumbJsonLd } from "../components/SeoJsonLd";
import { pageMetadata } from "../seo";
import { ProjectsContent } from "./ProjectsContent";
export const metadata = pageMetadata("Ristrutturazioni e lavori realizzati a Pisa", "Guarda fotografie prima e dopo di bagni, zone giorno e camere ristrutturati da Costruzioni Edili Shiba.", "/progetti/");
export default function Progetti(){return <><SiteHeader/><BreadcrumbJsonLd items={[["Home", "/"], ["Progetti", "/progetti/"]]}/><ProjectsContent/><SiteFooter/></>}
