import Link from "next/link";
import { ShieldCheck, ExternalLink } from "lucide-react";

const BASE = "https://www.colegiolacandelaria.edu.co";

function localHref(href: string) {
  if (href.startsWith(`${BASE}/wp-content/uploads/`)) {
    return { href: `/documentos/${href.split("/uploads/")[1]}`, external: true };
  }
  if (href.startsWith(BASE)) {
    return { href: `/transparencia/${href.replace(/\/$/, "").split("/").pop()}`, external: false };
  }
  return { href, external: true };
}

type Item = { label: string; href?: string; note?: string };
type Section = { id: string; title: string; subtitle?: string; items: Item[] };

const sections: Section[] = [
  {
    id: "informacion-entidad",
    title: "1. Información de la entidad",
    items: [
      { label: "Misión, Visión, Funciones y Deberes", href: `${BASE}/mision-vision/` },
      { label: "Estructura Orgánica – Organigrama", href: `${BASE}/inicio/transparencia-y-acceso/informacion-entidad/organigrama/` },
      { label: "Mapas y cartas descriptivas de los procesos", href: `${BASE}/inicio/transparencia-y-acceso/mapa-procesos/` },
      { label: "Directorio institucional", href: `${BASE}/inicio/transparencia-y-acceso/directorio-institucional/` },
      { label: "Directorio de servidores públicos, empleados o contratistas", href: `${BASE}/inicio/transparencia-y-acceso__trashed/directorio-servidores/` },
      { label: "Directorio de entidades del sector", href: `${BASE}/inicio/transparencia-y-acceso/directorio-entidades-sector/` },
      { label: "Directorio de agremiaciones, asociaciones y otros grupos de interés", href: `${BASE}/inicio/transparencia-y-acceso/directorio-agremiaciones/` },
      { label: "Servicio al público, normas, formularios y protocolos de atención", href: `${BASE}/inicio/transparencia-y-acceso/servicio-al-publico/` },
      { label: "Procedimientos que se siguen para tomar decisiones en las diferentes áreas", href: `${BASE}/inicio/transparencia-y-acceso/procedimientos-toma-decisiones/` },
      { label: "Mecanismo de presentación directa de solicitudes, quejas y reclamos.", href: `${BASE}/inicio/transparencia-y-acceso__trashed/formulario-solicitudes/` },
      { label: "Calendario de actividades", href: `${BASE}/calendario-actividades/` },
      { label: "Información sobre decisiones que puede afectar al público", href: `${BASE}/decisiones-que-afectan-publico/` },
      { label: "Entes y autoridades que nos vigilan", href: `${BASE}/entes-y-autoridades-que-nos-vigilan/` },
      {
        label: "Publicación de hojas de vida.",
        note: "(La Institución Educativa Nuestra Señora de la Candelaria no está obligada a la publicación de hojas de vida para cargos de libre nombramiento y remoción, por cuanto no se enmarca en el ámbito de aplicación del Artículo 2.2.13.2.3 del Decreto 1083 de 2015.)",
      },
    ],
  },
  {
    id: "normatividad",
    title: "2. Normatividad de la entidad",
    items: [
      { label: "Normativa de la entidad", href: `${BASE}/normativa-entidad/` },
      { label: "Búsqueda de normas", href: `${BASE}/busqueda-normas/` },
      { label: "Proyectos de normas para comentarios", href: `${BASE}/proyectos-de-normas/` },
    ],
  },
  {
    id: "contratacion",
    title: "3. Contratación",
    subtitle: "Vigencia Fiscal 2025",
    items: [
      { label: "Plan anual de adquisiciones", href: "https://community.secop.gov.co/Public/App/AnnualPurchasingPlanEditPublic/View?id=635362" },
      { label: "Publicación de la información contractual", href: `${BASE}/publicacion-contractual/` },
      { label: "Publicación de la ejecución de los contratos", href: "https://docs.google.com/spreadsheets/d/12Ww_tR2pnjJszzmXeAgWQtb_lSnYjL9UJtEKO5jAXdE/edit?usp=sharing" },
      { label: "Manual de Contratación Vigente", href: `${BASE}/wp-content/uploads/MANUAL-DE-CONTRATACION-2023.pdf` },
      { label: "Formato Modelo de Contratos", href: `${BASE}/wp-content/uploads/MODELO-CONTRATOS.docx` },
    ],
  },
  {
    id: "planeacion",
    title: "3. Planeación",
    items: [
      { label: "Presupuesto general de ingresos, gastos e inversión", href: `${BASE}/wp-content/uploads/ACUERDO-006-DE-2024-PRESUPUESTO-2025.pdf` },
      { label: "Acuerdo 001 de 2025: Adición presupuestal por superávit de la vigencia 2024.", href: `${BASE}/wp-content/uploads/ACUERDO-001-DE-2025_merged.pdf` },
      { label: "Acuerdo 002 de 2025: Adición presupuestal por gratuidad y otros convenios.", href: `${BASE}/wp-content/uploads/ACUERDO-002-DE-2025_merged.pdf` },
      { label: "Acuerdo 003 de 2025: Traslado presupuestal para compra de aires acondicionados.", href: `${BASE}/wp-content/uploads/ACUERDO-003-DE-2025_merged.pdf` },
      { label: "Ejecución Presupuestal." },
      { label: "Ejecución Primer Trimestre 2025", href: `${BASE}/wp-content/uploads/INFORME-FINANCIERO-PRIMER-TRIMESTRE-2025.pdf` },
      { label: "Ejecución Segundo Trimestre 2025", href: `${BASE}/wp-content/uploads/INFORME-FINANCIERO-SEGUNDO-TRIMESTRE-2025.pdf` },
      { label: "Plan de Acción y de inversiones", href: `${BASE}/plan-accion-inversiones/` },
      { label: "Informe de empalmes", note: "(No hay informes vigentes)" },
      { label: "Información pública y/o relevante", note: "(No hay información pública y/o relevante vigente)" },
      { label: "Informes de gestión, evaluación y auditoría", href: `${BASE}/wp-content/uploads/INFORME-DE-GESTION-Y-RENDICION-DE-CUENTAS-2024.pdf` },
      { label: "Informes de la Oficina de Control Interno", note: "(No hay informes vigentes)" },
      { label: "Informe sobre Defensa Pública y Prevención del Daño Antijurídico", href: "https://ekogui.defensajuridica.gov.co/Pages/NEW/index.aspx" },
      { label: "Informes trimestrales sobre acceso a información, quejas y reclamos", href: `${BASE}/informes-trimestrales-pqrsf/` },
    ],
  },
  {
    id: "tramites",
    title: "4. Trámites",
    items: [{ label: "Trámites institucionales.", href: `${BASE}/tramites-institucionales/` }],
  },
  {
    id: "participa",
    title: "5. Participa",
    items: [
      { label: "Descripción General de Participación ciudadana", href: `${BASE}/participacion-ciudadana/` },
      { label: "Estructura para la participación ciudadana", href: `${BASE}/estructura-participacion-ciudadana/` },
    ],
  },
];

export default function TransparenciaPage() {
  return (
    <>
      <section className="bg-govco-dark">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white">
            <ShieldCheck className="h-3.5 w-3.5 text-gold" />
            Ley 1712 de 2014
          </span>
          <h1 className="tracking-display mt-5 max-w-3xl text-balance text-3xl font-bold text-white sm:text-4xl">
            Transparencia y acceso a la información pública
          </h1>
          <p className="mt-3 text-sm text-white/80">Última actualización 30 septiembre, 2025</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-6 px-4 py-12 sm:px-6">
        {sections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            className="scroll-mt-24 rounded-apple border border-slate-200/80 bg-white p-6 shadow-card sm:p-8"
          >
            <h2 className="tracking-display border-b-2 border-gold pb-3 text-xl font-bold text-govco-dark sm:text-2xl">
              {section.title}
            </h2>
            {section.subtitle && (
              <p className="mt-4 text-sm font-semibold text-navy">{section.subtitle}</p>
            )}
            <ul className="mt-4 space-y-2.5 text-sm leading-relaxed">
              {section.items.map((item) => (
                <li key={item.label} className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span className="text-slate-700">
                    {item.href ? (
                      (() => {
                        const link = localHref(item.href);
                        const className =
                          "inline-flex items-center gap-1.5 font-medium text-govco transition-colors duration-200 hover:text-gold-600 hover:underline";
                        return link.external ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={className}
                          >
                            {item.label}
                            <ExternalLink className="h-3 w-3 shrink-0" />
                          </a>
                        ) : (
                          <Link href={link.href} className={className}>
                            {item.label}
                          </Link>
                        );
                      })()
                    ) : (
                      item.label
                    )}
                    {item.note && <span className="text-slate-500"> {item.note}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}
