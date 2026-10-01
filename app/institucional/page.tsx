import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Eye,
  FlaskConical,
  Sparkles,
  HandHeart,
  Users,
  MapPin,
  Clock,
  Phone,
  BookOpen,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import pages from "@/lib/transparencia-pages.json";

type Page = { html: string };
const mision = pages["mision-vision"] as Page;

// Extrae las listas numeradas (Funciones y Deberes) de la página oficial de Misión y Visión.
function listItems(html: string, heading: string): string[] {
  const start = html.indexOf(`<strong>${heading}</strong>`);
  if (start === -1) return [];
  const ol = html.slice(start).match(/<ol>([\s\S]*?)<\/ol>/);
  if (!ol) return [];
  return [...ol[1].matchAll(/<p>([\s\S]*?)<\/p>/g)].map((m) => m[1].trim());
}

const funciones = listItems(mision.html, "Funciones");
const deberes = listItems(mision.html, "Deberes");

const pilares: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Ciencia", text: "Formación académica y técnica con innovación pedagógica y uso de las TIC.", icon: FlaskConical },
  { title: "Virtud", text: "Formación ética, espiritual y humana para la vida en comunidad.", icon: Sparkles },
  { title: "Paz", text: "Convivencia pacífica, respeto, inclusión y corresponsabilidad. Educamos para la Paz.", icon: HandHeart },
];

const directivos = [
  { nombre: "Alfonso Rafael Ariza Carrillo", cargo: "Rector" },
  { nombre: "Diana Isabel Coronado Lebolo", cargo: "Coordinadora" },
  { nombre: "Genny del Socorro Caballero Rúa", cargo: "Coordinadora" },
  { nombre: "Keyna Paola Fernández Ariza", cargo: "Coordinadora" },
];

const apoyo = [
  { nombre: "Alba María Rodríguez Castellar", cargo: "Psicoorientadora" },
  { nombre: "Anyelith Naranjo Paternina", cargo: "Docente de apoyo" },
  { nombre: "Isbelia Arlenys Mejía Cordero", cargo: "Tutora PTA" },
  { nombre: "Fabiola del Carmen Martínez Bobadilla", cargo: "Técnico administrativo" },
  { nombre: "Leyne Concepción Mejía Cabrera", cargo: "Administrativa" },
  { nombre: "Jaison Alfonso Gutiérrez Suárez", cargo: "Administrativo" },
];

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <span className="text-xs font-semibold uppercase tracking-wide text-gold-600">{eyebrow}</span>
      <h2 className="tracking-display mt-1 text-2xl font-bold text-navy sm:text-3xl">{title}</h2>
    </div>
  );
}

function IconBox({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-govco text-white ring-2 ring-gold/70">
      <Icon className="h-6 w-6" />
    </span>
  );
}

export default function InstitucionalPage() {
  return (
    <>
      <section className="bg-govco-dark">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-14 sm:px-6 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white">
              <BookOpen className="h-3.5 w-3.5 text-gold" />
              Conoce nuestra institución
            </span>
            <h1 className="tracking-display mt-4 max-w-2xl text-balance text-3xl font-extrabold text-white sm:text-4xl">
              Institución Educativa <span className="text-gold">Nuestra Señora de la Candelaria</span>
            </h1>
            <p className="mt-3 max-w-xl text-white/80">
              Servicio educativo oficial humanista en Malambo, Atlántico. Ciencia, virtud y paz.
            </p>
          </div>
          <Image
            src="/logos/escudo-colegio.png"
            alt="Escudo de la I.E. Nuestra Señora de la Candelaria"
            width={400}
            height={524}
            className="h-44 w-auto drop-shadow-lg"
          />
        </div>
      </section>

      {/* Misión y visión */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionTitle eyebrow="Quiénes somos" title="Misión y visión" />
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-apple border border-slate-200/80 bg-white p-8 shadow-card">
            <IconBox icon={Target} />
            <h3 className="mt-5 text-xl font-bold text-govco-dark">Misión</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              La Institución Educativa Nuestra Señora de la Candelaria ofrece servicio educativo oficial
              humanista a niños, niñas y jóvenes del municipio de Malambo, a través de una propuesta
              académica cognitivo-social, una formación técnica y un proyecto espiritual que promuevan su
              desarrollo integral y le permitan generar transformaciones en su entorno.
            </p>
          </div>
          <div className="rounded-apple border border-slate-200/80 bg-white p-8 shadow-card">
            <IconBox icon={Eye} />
            <h3 className="mt-5 text-xl font-bold text-govco-dark">Visión</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              La Institución Educativa Nuestra Señora de la Candelaria del municipio de Malambo se
              visualiza a sí misma para el 2026 como una escuela líder, reconocida a nivel departamental
              por su disciplina, fortalecimiento del inglés como segunda lengua, mejoramiento continuo en
              los resultados de las pruebas saber y la utilización de ambientes que privilegien el uso de
              las Tics. Además, se proyecta como una escuela que fomenta el emprendimiento entre sus
              estudiantes y las relaciones cercanas con los padres de familia.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle eyebrow="Lema del escudo" title="Nuestros valores" />
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {pilares.map(({ title, text, icon }) => (
              <div key={title} className="rounded-apple border border-slate-200/80 bg-surface p-8 text-center">
                <div className="flex justify-center">
                  <IconBox icon={icon} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-govco-dark">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo directivo */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionTitle eyebrow="Liderazgo" title="Equipo directivo" />
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {directivos.map((p) => (
            <div key={p.nombre} className="rounded-apple border border-slate-200/80 bg-white p-6 text-center shadow-card">
              <div className="flex justify-center">
                <IconBox icon={Users} />
              </div>
              <h3 className="mt-4 text-base font-bold leading-snug text-navy">{p.nombre}</h3>
              <p className="mt-1 text-sm font-semibold text-gold-600">{p.cargo}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-12 text-lg font-bold text-govco-dark">Apoyo pedagógico y administrativo</h3>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {apoyo.map((p) => (
            <div key={p.nombre} className="rounded-2xl border border-slate-200/80 bg-white px-5 py-4">
              <p className="text-sm font-semibold text-navy">{p.nombre}</p>
              <p className="text-xs text-slate-500">{p.cargo}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-slate-500">
          El directorio completo del personal está en{" "}
          <Link href="/transparencia/directorio-servidores" className="font-medium text-govco hover:underline">
            Transparencia
          </Link>
          .
        </p>
      </section>

      {/* Organigrama */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionTitle eyebrow="Estructura" title="Organigrama" />
          <div className="mt-8 overflow-hidden rounded-apple border border-slate-200/80 bg-white p-4 shadow-card">
            <Image
              src="/documentos/ORGANIGRAMA.png"
              alt="Organigrama de la Institución Educativa Nuestra Señora de la Candelaria"
              width={1160}
              height={800}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Funciones y deberes */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionTitle eyebrow="Marco legal" title="Funciones y deberes" />
        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {[
            { title: "Funciones", items: funciones },
            { title: "Deberes", items: deberes },
          ].map((block) => (
            <div key={block.title} className="rounded-apple border border-slate-200/80 bg-white p-8 shadow-card">
              <h3 className="border-b-2 border-gold pb-2 text-xl font-bold text-govco-dark">{block.title}</h3>
              <ol className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
                {block.items.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-govco text-xs font-semibold text-white">
                      {i + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      {/* Sedes y contacto */}
      <section className="bg-govco-dark py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 text-white sm:px-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: MapPin, label: "Sede principal", text: "Calle 10 #6sur-01, Malambo, Atlántico (Barrio Miraflores)" },
            { icon: MapPin, label: "Sede Roberto Mendoza", text: "Calle 10 #1C-24, Malambo, Atlántico (Barrio Bellavista)" },
            { icon: Clock, label: "Horario de atención", text: "Lunes a viernes de 7:00 a.m. a 3:00 p.m. Jornada continua." },
            { icon: Phone, label: "Contacto", text: "+57 304 202 6613 · contacto@colegiolacandelaria.edu.co" },
          ].map(({ icon: Icon, label, text }) => (
            <div key={label} className="flex gap-3">
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <div>
                <p className="text-sm font-semibold">{label}</p>
                <p className="mt-1 text-sm text-white/80">{text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-7xl px-4 sm:px-6">
          <Link
            href="/transparencia"
            className="press inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy transition-all duration-200 hover:bg-gold-300"
          >
            Transparencia y acceso a la información pública
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
