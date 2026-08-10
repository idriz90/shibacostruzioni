import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { ProjectsContent } from "./ProjectsContent";
export const metadata: Metadata = { title: "Progetti e lavori realizzati", description: "Guarda i lavori prima e dopo realizzati da Costruzioni Edili Shiba." };
export default function Progetti(){return <><SiteHeader/><ProjectsContent/><SiteFooter/></>}
