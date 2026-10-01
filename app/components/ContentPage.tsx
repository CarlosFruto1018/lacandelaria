import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type ContentPageProps = {
  title: string;
  updated?: string;
  html: string;
  backHref: string;
  backLabel: string;
};

export default function ContentPage({ title, updated, html, backHref, backLabel }: ContentPageProps) {
  return (
    <>
      <section className="bg-govco-dark">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
          <Link
            href={backHref}
            className="press inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" />
            {backLabel}
          </Link>
          <h1 className="tracking-display mt-4 text-balance text-3xl font-bold text-white sm:text-4xl">{title}</h1>
          {updated && <p className="mt-3 text-sm text-white/80">{updated}</p>}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <article
          className="contenido-ita rounded-apple border border-slate-200/80 bg-white p-6 shadow-card sm:p-10"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </section>
    </>
  );
}
