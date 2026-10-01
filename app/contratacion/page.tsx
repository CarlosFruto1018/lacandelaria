import Link from "next/link";
import { FileSignature, FolderOpen, ArrowRight, ExternalLink } from "lucide-react";
import pages from "@/lib/transparencia-pages.json";

type Page = { title: string; updated: string };
const data = pages as Record<string, Page>;

const years = [2022, 2021, 2020, 2019, 2018];

export const metadata = { title: "Proceso de contratación | I.E. Nuestra Señora de la Candelaria" };

export default function ContratacionPage() {
  return (
    <>
      <section className="bg-govco-dark">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white">
            <FileSignature className="h-3.5 w-3.5 text-gold" />
            Transparencia
          </span>
          <h1 className="tracking-display mt-4 text-3xl font-bold text-white sm:text-4xl">
            Proceso de contratación
          </h1>
          <p className="mt-3 max-w-2xl text-white/80">
            Procesos de contratación para cuantías inferiores a 20 salarios mínimos legales vigentes,
            organizados por vigencia.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {years.map((year) => {
            const page = data[`contratacion-${year}`];
            return (
              <Link
                key={year}
                href={`/transparencia/contratacion-${year}`}
                className="card-hover group flex items-center gap-4 rounded-apple border border-slate-200/80 bg-white p-6 shadow-card"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-govco text-white ring-2 ring-gold/70">
                  <FolderOpen className="h-6 w-6" />
                </span>
                <span className="flex-1">
                  <span className="block text-lg font-bold text-navy">{page?.title ?? `Contratación ${year}`}</span>
                  {page?.updated && <span className="block text-xs text-slate-500">{page.updated}</span>}
                </span>
                <ArrowRight className="h-5 w-5 text-slate-300 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-gold" />
              </Link>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <a
            href="/documentos/MANUAL-DE-CONTRATACION-2023.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-govco hover:underline"
          >
            Manual de contratación vigente
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <a
            href="https://community.secop.gov.co/Public/App/AnnualPurchasingPlanEditPublic/View?id=635362"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-govco hover:underline"
          >
            Plan anual de adquisiciones (SECOP)
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>
    </>
  );
}
