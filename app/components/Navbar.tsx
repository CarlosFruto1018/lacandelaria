"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, MessageSquareText } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/transparencia", label: "Transparencia y acceso a la información pública" },
  { href: "/institucional", label: "Conoce nuestra institución" },
  { href: "/calendario", label: "Calendario" },
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

      {/* Franja tricolor de Malambo */}
      <div className="flex h-1 w-full" aria-hidden="true">
        <span className="flex-1 bg-gold" />
        <span className="flex-1 bg-govco" />
        <span className="flex-1 bg-malambo-red" />
      </div>

      {/* Header principal */}
      <header className="glass sticky top-0 z-50 shadow-[0_8px_30px_-20px_rgba(18,38,26,0.35)]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/" className="press shrink-0" aria-label="I.E. Nuestra Señora de la Candelaria - Inicio">
            <Image
              src="/logos/logo-colegio.png"
              alt="I.E. Nuestra Señora de la Candelaria - Educamos para la Paz"
              width={2017}
              height={721}
              priority
              className="h-12 w-auto sm:h-14"
            />
          </Link>

          <div className="hidden items-center gap-2 lg:flex">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-[15px] font-semibold transition-colors duration-200 after:absolute after:inset-x-3 after:-bottom-0.5 after:h-[3px] after:origin-left after:rounded-full after:transition-transform after:duration-300 ${
                    isActive
                      ? "text-govco after:scale-x-100 after:bg-govco"
                      : "text-navy/70 after:scale-x-0 after:bg-gold hover:text-navy hover:after:scale-x-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <Link
              href="/pqrsdf"
              className="press inline-flex items-center gap-2 rounded-full bg-malambo-red px-5 py-3 text-sm font-bold text-white shadow-hard transition-colors duration-200 hover:bg-malambo-red-dark"
            >
              <MessageSquareText className="h-4 w-4" />
              Radicar PQRSDF
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="press rounded-full bg-surface p-2.5 text-navy lg:hidden"
            aria-label="Abrir menú"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {open && (
          <div className="border-t border-navy/10 bg-white lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
              {navLinks.map((link) => {
                const isActive = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-sm font-semibold transition-colors duration-200 ${
                      isActive ? "bg-govco/10 text-govco" : "text-navy/80 hover:bg-surface"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/pqrsdf"
                onClick={() => setOpen(false)}
                className="press mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-malambo-red px-5 py-3 text-sm font-bold text-white"
              >
                <MessageSquareText className="h-4 w-4" />
                Radicar PQRSDF
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
