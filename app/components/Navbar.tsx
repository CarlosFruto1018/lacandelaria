"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/transparencia", label: "Transparencia y acceso a la información pública" },
  { href: "/institucional", label: "Conoce nuestra institución" },
  { href: "/noticias", label: "Noticias" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Franja superior oficial GOV.CO */}
      <div className="w-full bg-[#025DC3] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6">
          <a
            href="https://www.gov.co"
            target="_blank"
            rel="noopener noreferrer"
            className="press"
            aria-label="Portal del Estado Colombiano GOV.CO"
          >
            <Image
              src="/logos/govco-header.png"
              alt="GOV.CO"
              width={3559}
              height={871}
              priority
              className="h-8 w-auto"
            />
          </a>
        </div>
      </div>

      {/* Header principal translúcido */}
      <header className="sticky top-0 z-50 glass">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="press" aria-label="I.E. Nuestra Señora de la Candelaria - Inicio">
            <Image
              src="/logos/logo-colegio.png"
              alt="I.E. Nuestra Señora de la Candelaria - Educamos para la Paz"
              width={2017}
              height={721}
              priority
              className="h-12 w-auto sm:h-14"
            />
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-gold-600"
                      : "text-navy/80 hover:bg-navy/5 hover:text-navy"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Link
              href="/pqrsdf"
              className="press inline-flex items-center rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white shadow-card transition-all duration-200 hover:bg-navy-600"
            >
              Radicar PQRSDF
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="press rounded-full p-2 text-navy md:hidden"
            aria-label="Abrir menú"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {open && (
          <div className="border-t border-slate-200/80 glass md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
              {navLinks.map((link) => {
                const isActive = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                      isActive ? "bg-gold/10 text-gold-600" : "text-navy/80 hover:bg-navy/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/pqrsdf"
                onClick={() => setOpen(false)}
                className="press mt-1 inline-flex items-center justify-center rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white"
              >
                Radicar PQRSDF
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
