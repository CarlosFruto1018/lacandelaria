"use client";

import Link from "next/link";
import { MapPin, Mail, Clock, Phone, ShieldAlert, ArrowUp } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative">
      <div className="flex h-1.5 w-full" aria-hidden="true">
        <span className="flex-1 bg-gold" />
        <span className="flex-1 bg-govco" />
        <span className="flex-1 bg-malambo-red" />
      </div>
      {/* Bloque institucional estilo GOV.CO */}
      <div className="bg-[#025DC3] text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3 md:text-left">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                Institución Educativa
                <br />
                La Candelaria
              </h3>

              <ul className="mt-5 space-y-4 text-base text-white/85">
                <li className="flex flex-col items-center gap-1 md:items-start">
                  <span className="flex items-center gap-2 font-semibold">
                    <MapPin className="h-4 w-4 shrink-0 text-gold" />
                    Dirección
                  </span>
                  <span className="text-white/75">
                    Calle 10 #6sur-01, Malambo, Atlántico, Colombia.
                  </span>
                </li>
                <li className="flex flex-col items-center gap-1 md:items-start">
                  <span className="flex items-center gap-2 font-semibold">
                    <Clock className="h-4 w-4 shrink-0 text-gold" />
                    Horario de atención
                  </span>
                  <span className="text-white/75">
                    Lunes a viernes de 7:00 a.m. a 3:00 p.m. Jornada continua.
                  </span>
                </li>
                <li className="flex flex-col items-center gap-1 md:items-start">
                  <span className="flex items-center gap-2 font-semibold">
                    <Mail className="h-4 w-4 shrink-0 text-gold" />
                    Correo institucional
                  </span>
                  <a
                    href="mailto:contacto@colegiolacandelaria.edu.co"
                    className="text-white/75 hover:text-gold transition-colors duration-200"
                  >
                    contacto@colegiolacandelaria.edu.co
                  </a>
                </li>
                <li className="flex flex-col items-center gap-1 md:items-start">
                  <span className="flex items-center gap-2 font-semibold">
                    <Phone className="h-4 w-4 shrink-0 text-gold" />
                    Línea de atención (llamadas y WhatsApp)
                  </span>
                  <span className="text-white/75">+57 304 202 6613</span>
                </li>
                <li className="flex flex-col items-center gap-1 md:items-start">
                  <span className="flex items-center gap-2 font-semibold">
                    <ShieldAlert className="h-4 w-4 shrink-0 text-gold" />
                    Línea anticorrupción
                  </span>
                  <span className="text-white/75">+57 01 8000 940 808</span>
                </li>
                <li className="flex flex-col items-center gap-1 md:items-start">
                  <span className="font-semibold">Código postal</span>
                  <span className="text-white/75">083027</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-base font-semibold uppercase tracking-wide text-white">
                Acerca del sitio
              </h4>
              <ul className="mt-5 space-y-3 text-base text-white/80">
                <li>
                  <Link href="/mapa-del-sitio" className="hover:text-gold transition-colors duration-200">
                    Mapa del sitio
                  </Link>
                </li>
                <li>
                  <Link href="/politica-de-privacidad" className="hover:text-gold transition-colors duration-200">
                    Política de privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/politica-derechos-autor" className="hover:text-gold transition-colors duration-200">
                    Política de derechos de autor
                  </Link>
                </li>
                <li>
                  <Link href="/terminos-y-condiciones" className="hover:text-gold transition-colors duration-200">
                    Términos y condiciones
                  </Link>
                </li>
                <li>
                  <Link href="/transparencia" className="hover:text-gold transition-colors duration-200">
                    Transparencia y acceso a la información pública
                  </Link>
                </li>
                <li>
                  <Link href="/pqrsdf" className="hover:text-gold transition-colors duration-200">
                    PQRSDF
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-base font-semibold uppercase tracking-wide text-white">
                Redes sociales
              </h4>
              <ul className="mt-5 space-y-3 text-base text-white/80">
                <li>
                  <a
                    href="https://www.facebook.com/colegiolacande/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors duration-200"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.whatsapp.com/channel/0029VaMH4m8KGGGA0qVXHE1V"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors duration-200"
                  >
                    Canal de WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/15 pt-8 sm:flex-row">
            <Image
              src="/logos/co-colombia.png"
              alt="CO Colombia"
              width={400}
              height={369}
              className="h-20 w-auto"
            />
            <Image
              src="/logos/escudo-colegio.png"
              alt="Escudo de la I.E. Nuestra Señora de la Candelaria"
              width={400}
              height={524}
              className="h-24 w-auto"
            />
          </div>
        </div>
      </div>

      <ScrollToTopButton />
    </footer>
  );
}

function ScrollToTopButton() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Volver arriba"
      className="press fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-navy text-gold shadow-card-hover transition-all duration-200 hover:bg-navy-600"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
