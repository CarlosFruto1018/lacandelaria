"use client";

import { useState } from "react";
import { ChevronDown, FileText, Link2 } from "lucide-react";
import type { ItaCategory } from "@/lib/data";

export default function ItaCard({ category }: { category: ItaCategory }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = category.icon;

  return (
    <div className="card-hover rounded-apple border border-slate-200/80 bg-white p-6 shadow-card">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-govco text-white ring-2 ring-gold/70">
            <Icon className="h-5 w-5" />
          </span>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-gold-600">
              Categoría {category.numero}
            </span>
            <h3 className="mt-0.5 text-base font-semibold tracking-tight text-navy">
              {category.titulo}
            </h3>
          </div>
        </div>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-slate-600">{category.descripcion}</p>

      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="press mt-4 flex items-center gap-1.5 text-sm font-medium text-navy transition-colors duration-200 hover:text-gold-600"
      >
        {expanded ? "Ocultar documentos" : `Ver documentos (${category.documentos.length})`}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
        />
      </button>

      {expanded && (
        <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
          {category.documentos.map((doc) => (
            <li key={doc.title}>
              <a
                href="#"
                className="flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm transition-all duration-200 hover:bg-navy/5"
              >
                <span className="flex items-center gap-2.5 text-slate-700">
                  {doc.type === "PDF" ? (
                    <FileText className="h-4 w-4 shrink-0 text-navy/60" />
                  ) : (
                    <Link2 className="h-4 w-4 shrink-0 text-navy/60" />
                  )}
                  {doc.title}
                </span>
                <span className="shrink-0 text-xs text-slate-400">
                  {doc.type}
                  {doc.size ? ` · ${doc.size}` : ""}
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
