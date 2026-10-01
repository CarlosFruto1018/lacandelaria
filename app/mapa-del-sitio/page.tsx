import Link from "next/link";
import { Map as MapIcon } from "lucide-react";
import pages from "@/lib/transparencia-pages.json";

type Page = { title: string };
const data = pages as Record<string, Page>;

const t = (slug: string) => ({ label: data[slug]?.title ?? slug, href: `/transparencia/${slug}` });

type Group = { title: string; href?: string; links: { label: string; href: string }[] };

const groups: Group[] = [
  {
    title: "Principal",
    links: [
      { label: "Inicio", href: "/" },
      { label: "Conoce nuestra institución", href: "/institucional" },
      { label: "Admisiones", href: "/admisiones" },
      { label: "PQRSDF", href: "/pqrsdf" },
      { label: "Calendario", href: "/calendario" },
      { label: "Manual de Convivencia 2025", href: "/documentos/MANUAL-DE-CONVIVENCIA-2025.pdf" },
      { label: "Formatos", href: "/transparencia/formatos" },
      { label: "Referentes de Calidad", href: "/transparencia/referentes-de-calidad" },
      { label: "Política de privacidad", href: "/politica-de-privacidad" },
      { label: "Política de derechos de autor", href: "/politica-derechos-autor" },
      { label: "Términos y condiciones", href: "/terminos-y-condiciones" },
    ],
  },
  {
    title: "1. Información de la entidad",
    href: "/transparencia#informacion-entidad",
    links: [
      "mision-vision",
      "organigrama",
      "mapa-procesos",
      "directorio-institucional",
      "directorio-servidores",
      "directorio-entidades-sector",
      "directorio-agremiaciones",
      "servicio-al-publico",
      "procedimientos-toma-decisiones",
      "formulario-solicitudes",
      "calendario-actividades",
      "decisiones-que-afectan-publico",
      "entes-y-autoridades-que-nos-vigilan",
    ].map(t),
  },
  {
    title: "2. Normatividad de la entidad",
    href: "/transparencia#normatividad",
    links: ["normativa-entidad", "busqueda-normas", "proyectos-de-normas"].map(t),
  },
  {
    title: "3. Contratación",
    href: "/contratacion",
    links: [
      t("publicacion-contractual"),
      { label: "Proceso de contratación (por vigencia)", href: "/contratacion" },
      ...[2022, 2021, 2020, 2019, 2018].map((y) => ({
        label: `Contratación ${y}`,
        href: `/transparencia/contratacion-${y}`,
      })),
    ],
  },
  {
    title: "3. Planeación",
    href: "/transparencia#planeacion",
    links: ["plan-accion-inversiones", "informes-trimestrales-pqrsf"].map(t),
  },
  {
    title: "4. Trámites",
    href: "/transparencia#tramites",
    links: [t("tramites-institucionales")],
  },
  {
    title: "5. Participa",
    href: "/transparencia#participa",
    links: [
      "participacion-ciudadana",
      "estructura-participacion-ciudadana",
      "convocatoria-participacion-ciudadana",
      "calendario-participacion-ciudadana",
    ].map(t),
  },
];

export const metadata = { title: "Mapa del sitio | I.E. Nuestra Señora de la Candelaria" };

export default function MapaDelSitioPage() {
  return (
    <>
      <section className="bg-govco-dark">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white">
            <MapIcon className="h-3.5 w-3.5 text-gold" />
            Navegación
          </span>
          <h1 className="tracking-display mt-4 text-3xl font-bold text-white sm:text-4xl">Mapa del sitio</h1>
          <p className="mt-3 max-w-2xl text-white/80">Todas las secciones y páginas del portal institucional.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-5 px-4 py-12 sm:px-6 md:grid-cols-2">
        <div className="rounded-apple border border-slate-200/80 bg-white p-6 shadow-card md:col-span-2">
          <h2 className="border-b-2 border-gold pb-2 text-lg font-bold text-govco-dark">
            <Link href="/transparencia" className="hover:underline">
              Transparencia y acceso a la información pública
            </Link>
          </h2>
          <p className="mt-3 text-sm text-slate-500">
            Secciones 1 a 5 de la matriz de información pública, con todas sus páginas.
          </p>
        </div>

        {groups.map((group) => (
          <div key={group.title} className="rounded-apple border border-slate-200/80 bg-white p-6 shadow-card">
            <h2 className="border-b-2 border-gold pb-2 text-lg font-bold text-govco-dark">
              {group.href ? (
                <Link href={group.href} className="hover:underline">
                  {group.title}
                </Link>
              ) : (
                group.title
              )}
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {group.links.map((link) => (
                <li key={link.href + link.label} className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <Link href={link.href} className="font-medium text-govco hover:text-gold-600 hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}
