import { notFound } from "next/navigation";
import ContentPage from "@/app/components/ContentPage";
import pages from "@/lib/transparencia-pages.json";

type TransparenciaPage = { slug: string; title: string; updated: string; html: string };

const data = pages as Record<string, TransparenciaPage>;

export function generateStaticParams() {
  return Object.keys(data).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const page = data[params.slug];
  return { title: page ? `${page.title} | I.E. Nuestra Señora de la Candelaria` : undefined };
}

export default function TransparenciaDetallePage({ params }: { params: { slug: string } }) {
  const page = data[params.slug];
  if (!page) notFound();

  return (
    <ContentPage
      title={page.title}
      updated={page.updated}
      html={page.html}
      backHref="/transparencia"
      backLabel="Transparencia y acceso a la información pública"
    />
  );
}
