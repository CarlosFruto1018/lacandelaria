import ContentPage from "@/app/components/ContentPage";
import pages from "@/lib/transparencia-pages.json";

const page = pages["politica-derechos-autor"];

export const metadata = { title: `${page.title} | I.E. Nuestra Señora de la Candelaria` };

export default function Page() {
  return (
    <ContentPage
      title={page.title}
      updated={page.updated}
      html={page.html}
      backHref="/"
      backLabel="Inicio"
    />
  );
}
