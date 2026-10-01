import { CalendarDays, ArrowUpRight } from "lucide-react";
import type { NewsItem } from "@/lib/data";

const categoryStyles: Record<NewsItem["category"], string> = {
  Circular: "bg-navy/5 text-navy",
  Noticia: "bg-gold/10 text-gold-600",
  Comunicado: "bg-emerald-50 text-emerald-700",
};

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("es-CO", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));
}

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="card-hover group rounded-apple border border-slate-200/80 bg-white p-6 shadow-card">
      <div className="flex items-center justify-between">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${categoryStyles[item.category]}`}
        >
          {item.category}
        </span>
        <span className="flex items-center gap-1.5 text-xs text-slate-400">
          <CalendarDays className="h-3.5 w-3.5" />
          {formatDate(item.date)}
        </span>
      </div>

      <h3 className="mt-4 text-base font-semibold leading-snug tracking-tight text-navy">
        {item.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.excerpt}</p>

      <a
        href="#"
        className="press mt-4 inline-flex items-center gap-1 text-sm font-medium text-navy transition-colors duration-200 group-hover:text-gold-600"
      >
        Leer más
        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </article>
  );
}
