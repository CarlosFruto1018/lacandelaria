import Link from "next/link";
import {
  Info,
  ClipboardCheck,
  FileText,
  CheckCircle2,
  CalendarDays,
  ClipboardList,
  School,
  Phone,
  Mail,
  ChevronDown,
  Check,
  type LucideIcon,
} from "lucide-react";

const proceso: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Información", text: "Conozca la institución y nuestro modelo educativo", icon: Info },
  { title: "Requisitos", text: "Verifique los documentos necesarios para la inscripción", icon: ClipboardCheck },
  { title: "Inscripción", text: "Realice el formulario de pre-inscripción", icon: FileText },
  { title: "Resultado", text: "Reciba la respuesta y finalize la matrícula", icon: CheckCircle2 },
];

const base = [
  "Registro civil de nacimiento",
  "Fotocopia cédula del acudiente",
];
const cierre = ["Certificado de salud", "Fotos tamaño carnet (4)", "Formulario de inscripción diligenciado"];
const notas = "Certificado de notas grado anterior";
const libreta = "Fotocopia de la libreta de notas";

const requisitos = [
  { nivel: "Preescolar", items: [...base, ...cierre] },
  { nivel: "Primaria (1° - 5°)", items: [...base, notas, ...cierre] },
  { nivel: "Secundaria (6° - 9°)", items: [...base, notas, libreta, ...cierre] },
  { nivel: "Bachillerato (10° - 11°)", items: [...base, notas, libreta, ...cierre] },
];

const fechas: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Inscripciones", text: "Fechas por comunicar oficialmente", icon: CalendarDays },
  { title: "Evaluación", text: "Pruebas de conocimiento y entrevista", icon: ClipboardList },
  { title: "Matrícula", text: "Formalización de la inscripción", icon: School },
];

const preguntas = [
  "¿Cuál es el valor de la matrícula?",
  "¿Hay cupos disponibles?",
  "¿Aceptan transferencias de otros colegios?",
  "¿Cuál es el horario de clases?",
];

function IconBox({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-govco text-white ring-2 ring-gold/70">
      <Icon className="h-6 w-6" />
    </span>
  );
}

function SectionTitle({ title }: { title: string }) {
  return <h2 className="tracking-display text-2xl font-bold text-navy sm:text-3xl">{title}</h2>;
}

export default function AdmisionesPage() {
  return (
    <>
      <section className="bg-govco-dark">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <h1 className="tracking-display text-4xl font-extrabold text-white sm:text-5xl">Admisiones</h1>
          <p className="mt-3 max-w-2xl text-white/80">
            Conozca el proceso de inscripción y los requisitos para formar parte de nuestra comunidad
            educativa.
          </p>
        </div>
      </section>

      {/* Proceso */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionTitle title="Proceso de Admisión" />
        <ol className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {proceso.map(({ title, text, icon }, i) => (
            <li key={title} className="relative rounded-apple border border-slate-200/80 bg-white p-6 shadow-card">
              <span className="absolute right-5 top-4 text-3xl font-extrabold text-gold/70">{i + 1}</span>
              <IconBox icon={icon} />
              <h3 className="mt-4 text-lg font-bold text-govco-dark">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Requisitos */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle title="Requisitos por Grado" />
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {requisitos.map((nivel) => (
              <div key={nivel.nivel} className="rounded-apple border border-slate-200/80 bg-surface p-6">
                <h3 className="border-b-2 border-gold pb-2 text-lg font-bold text-govco-dark">{nivel.nivel}</h3>
                <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
                  {nivel.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-govco text-white">
                        <Check className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fechas clave */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionTitle title="Fechas Clave" />
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {fechas.map(({ title, text, icon }) => (
            <div key={title} className="rounded-apple border border-slate-200/80 bg-white p-6 shadow-card">
              <IconBox icon={icon} />
              <h3 className="mt-4 text-lg font-bold text-govco-dark">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Formulario */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <SectionTitle title="Formulario de Pre-inscripción" />
          <div className="mt-8 rounded-apple border border-gold/50 bg-gold-50 p-8">
            <h3 className="text-xl font-bold text-govco-dark">Disponible Próximamente</h3>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-600">
              El formulario de pre-inscripción en línea estará disponible pronto. Mientras tanto, puede
              contactar admisiones para iniciar el proceso.
            </p>
            <a
              href="tel:+573042026613"
              className="press mt-6 inline-flex items-center gap-2 rounded-full bg-govco px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-govco-dark"
            >
              <Phone className="h-4 w-4" />
              Contactar Admisiones
            </a>
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <SectionTitle title="Preguntas Frecuentes" />
        <div className="mt-8 space-y-3">
          {preguntas.map((pregunta) => (
            <details key={pregunta} className="group rounded-2xl border border-slate-200/80 bg-white px-5 py-4 shadow-card">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-navy">
                {pregunta}
                <ChevronDown className="h-4 w-4 shrink-0 text-govco transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Para esta información comuníquese con nuestro equipo de admisiones al{" "}
                <a href="tel:+573042026613" className="font-medium text-govco hover:underline">
                  +57 304 202 6613
                </a>{" "}
                o escriba a{" "}
                <a href="mailto:admisiones@colegiolacandelaria.edu.co" className="font-medium text-govco hover:underline">
                  admisiones@colegiolacandelaria.edu.co
                </a>
                .
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Ayuda */}
      <section className="bg-govco-dark py-14">
        <div className="mx-auto max-w-3xl px-4 text-center text-white sm:px-6">
          <h2 className="tracking-display text-2xl font-bold sm:text-3xl">¿Necesita ayuda?</h2>
          <p className="mt-2 text-white/80">Comuníquese con nuestro equipo de admisiones</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+573042026613"
              className="press inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy transition-all duration-200 hover:bg-gold-300"
            >
              <Phone className="h-4 w-4" />
              +57 304 202 6613
            </a>
            <a
              href="mailto:admisiones@colegiolacandelaria.edu.co"
              className="press inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10"
            >
              <Mail className="h-4 w-4" />
              admisiones@colegiolacandelaria.edu.co
            </a>
          </div>
          <Link href="/institucional" className="mt-6 inline-block text-sm text-white/80 underline-offset-2 hover:text-gold hover:underline">
            Conoce nuestra institución
          </Link>
        </div>
      </section>
    </>
  );
}
