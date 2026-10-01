import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap,
  CalendarRange,
  BookOpenCheck,
  Database,
  MessageSquareWarning,
  UserPlus,
  BookMarked,
  Clock,
  CalendarDays,
  Phone,
  MapPin,
  FileText,
  Award,
  FileSignature,
  ArrowRight,
  type LucideIcon,
  Landmark,
  Scale,
  LayoutDashboard,
  School,
} from "lucide-react";
import QuickAccessCard from "@/app/components/QuickAccessCard";
import { newsItems } from "@/lib/data";

const featureCards: {
  href: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  gradient: string;
  image?: string;
}[] = [
  {
    href: "/institucional",
    icon: Landmark,
    eyebrow: "Institucional",
    title: "Institucional",
    description: "Misión, visión, manual de convivencia y equipo directivo.",
    gradient: "from-green-200 to-green-300",
    image: "/aula.jpg",
  },
  {
    href: "/transparencia",
    icon: Scale,
    eyebrow: "Ley 1712 de 2014",
    title: "Transparencia y Ley",
    description: "Informes financieros y rendición de cuentas públicas.",
    gradient: "from-yellow-200 to-yellow-300",
    image: "/transparencia.jpg",
  },
  {
    href: "/plataforma",
    icon: LayoutDashboard,
    eyebrow: "Académico",
    title: "Gestión Académica",
    description: "Plataforma académica y calendario escolar.",
    gradient: "from-emerald-200 to-green-300",
    image: "/gestion-academica.jpg",
  },
  {
    href: "/admisiones",
    icon: School,
    eyebrow: "Matrículas",
    title: "Admisiones y Cupos",
    description: "Procedimiento de inscripción y requisitos de matrícula.",
    gradient: "from-red-200 to-rose-300",
    image: "/admisiones.jpg",
  },
];

const sortedNews = [...newsItems].sort((a, b) => b.date.localeCompare(a.date));
const [featured, ...others] = sortedNews;

function formatNewsDate(dateString: string) {
  return new Intl.DateTimeFormat("es-CO", { day: "2-digit", month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(dateString),
  );
}

const quickAccess = [
  { href: "/plataforma/notas", icon: GraduationCap, title: "Notas", description: "Consulta las calificaciones de tus estudiantes." },
  { href: "/plataforma/horarios", icon: CalendarRange, title: "Horarios", description: "Horarios de clases por grado y jornada." },
  { href: "/plataforma/guias", icon: BookOpenCheck, title: "Guías docentes", description: "Material y guías de trabajo de cada área." },
  { href: "https://www.sismac.info/", icon: Database, title: "SIMAT", description: "Sistema Integrado de Matrícula." },
  { href: "/pqrsdf", icon: MessageSquareWarning, title: "PQRSDF", description: "Radica peticiones, quejas, reclamos y sugerencias." },
  { href: "/admisiones", icon: UserPlus, title: "Admisiones", description: "Información de cupos y proceso de inscripción." },
  { href: "/documentos/MANUAL-DE-CONVIVENCIA-2025.pdf", icon: BookMarked, title: "Manual de Convivencia", description: "Manual de convivencia y sistema de evaluación 2025." },
  { href: "/transparencia/formatos", icon: FileText, title: "Formatos", description: "Formatos institucionales para descargar." },
  { href: "/transparencia/referentes-de-calidad", icon: Award, title: "Referentes de Calidad", description: "DBA, estándares, lineamientos y matrices de referencia." },
  { href: "/contratacion", icon: FileSignature, title: "Proceso de contratación", description: "Procesos de contratación por vigencia." },
];
const accents = ["gold", "green", "red"] as const;

// Distribución tipo "bento": la primera tarjeta es grande y la última ocupa todo el ancho.
const bento = [
  "md:col-span-2 md:row-span-2 md:min-h-[460px]",
  "",
  "",
  "md:col-span-3 md:min-h-[200px]",
];

export default function HomePage() {
  return (
    <>
      {/* Hero: estudiantes de fondo + nombre del colegio */}
      <section className="relative flex min-h-[560px] items-end overflow-hidden bg-govco-dark sm:min-h-[640px]">
        <Image
          src="/estudiantes.jpg"
          alt="Estudiantes de la I.E. Nuestra Señora de la Candelaria"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-govco-dark via-govco-dark/80 via-35% to-transparent to-65%" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-40 text-center sm:px-6 sm:pb-28 md:text-left">
          <h1 className="tracking-display max-w-4xl text-balance text-3xl font-extrabold uppercase leading-tight text-white drop-shadow sm:text-5xl">
            Institución Educativa
            <span className="block text-gold">Nuestra Señora de la Candelaria</span>
          </h1>
          <p className="mt-3 max-w-xl text-base text-white/90 sm:text-lg">
            Ciencia, virtud y paz para nuestra comunidad.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <Link
              href="/institucional"
              className="press inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy shadow-card transition-all duration-200 hover:bg-gold-300"
            >
              Conoce nuestra institución
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/transparencia"
              className="press inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-200 hover:bg-white/20"
            >
              Transparencia
            </Link>
          </div>
        </div>
      </section>


      {/* Franja de datos de contacto sobre el hero */}
      <section className="relative z-10 mx-auto -mt-12 max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 divide-y divide-slate-100 rounded-apple border border-slate-200/80 bg-white shadow-card-hover md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            { icon: Clock, label: "Horario de atención", text: "Lunes a viernes, 7:00 a.m. a 3:00 p.m." },
            { icon: Phone, label: "Línea de atención y WhatsApp", text: "+57 304 202 6613" },
            { icon: MapPin, label: "Sede principal", text: "Calle 10 #6sur-01, Malambo, Atlántico" },
          ].map(({ icon: Icon, label, text }) => (
            <div key={label} className="flex items-center gap-4 p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-govco text-white ring-2 ring-gold/70">
                <Icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wide text-gold-600">{label}</span>
                <span className="block text-sm font-medium text-navy">{text}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Accesos rápidos */}
      <section className="relative overflow-hidden bg-govco-dark py-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 90% 10%, rgba(245,197,24,0.45), transparent 40%), radial-gradient(circle at 5% 95%, rgba(214,40,40,0.35), transparent 40%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-wide text-gold">Servicios</span>
            <h2 className="tracking-display mt-1 text-2xl font-bold text-white sm:text-3xl">Accesos rápidos</h2>
            <p className="mx-auto mt-1.5 max-w-xl text-sm text-white/80">
              Lo que más consulta nuestra comunidad educativa.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {quickAccess.map((item, index) => (
              <QuickAccessCard key={item.title} {...item} accent={accents[index % accents.length]} />
            ))}
          </div>
        </div>
      </section>

      {/* Tarjetas principales */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 sm:px-6 md:grid-cols-3">
          {featureCards.map((card, index) => {
            const Icon = card.icon;
            const onImage = Boolean(card.image);
            return (
              <Link
                key={card.title}
                href={card.href}
                className={`card-hover group relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-apple bg-gradient-to-br ${card.gradient} p-8 ${onImage ? "text-white" : "text-navy"} ${bento[index]}`}
              >
                {card.image && (
                  <>
                    <Image
                      src={card.image}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 66vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-govco-dark/90 via-govco-dark/55 to-govco/30" />
                  </>
                )}
                <span className="absolute right-6 top-6 z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-govco ring-2 ring-gold">
                  <Icon className="h-7 w-7 text-white" />
                </span>
                <span className={`relative text-xs font-semibold uppercase tracking-wide ${onImage ? "text-gold" : "text-govco-dark"}`}>
                  {card.eyebrow}
                </span>
                <h3 className={`tracking-display relative mt-1 font-bold ${index === 0 ? "text-3xl" : "text-2xl"}`}>{card.title}</h3>
                <p className={`relative mt-2 max-w-sm text-sm ${onImage ? "text-white/90" : "text-slate-600"}`}>
                  {card.description}
                </p>
                <span className={`relative mt-4 inline-flex items-center gap-1.5 text-sm font-semibold ${onImage ? "text-white" : "text-govco-dark"}`}>
                  Ver más
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Noticias */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-gold-600">Comunidad</span>
              <h2 className="tracking-display mt-1 text-2xl font-bold text-navy sm:text-3xl">
                Noticias y comunicados
              </h2>
              <p className="mt-1.5 text-sm text-slate-500">Lo último que pasa en nuestra institución.</p>
            </div>
            <Link
              href="/noticias"
              className="press hidden items-center gap-1.5 rounded-full border border-govco/30 px-5 py-2.5 text-sm font-semibold text-govco transition-all duration-200 hover:bg-govco hover:text-white sm:inline-flex"
            >
              Ver todas
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-5">
            {/* Noticia destacada */}
            {featured && (
              <article className="card-hover group relative flex flex-col justify-end overflow-hidden rounded-apple bg-govco-dark p-8 text-white lg:col-span-3 lg:min-h-[420px]">
                <Image
                  src="/noticia-destacada.jpg"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-govco-dark via-govco-dark/80 via-45% to-govco-dark/10" />
                <span className="relative inline-flex w-fit items-center rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-navy">
                  Destacado · {featured.category}
                </span>
                <h3 className="tracking-display relative mt-4 text-2xl font-bold leading-tight sm:text-3xl">
                  {featured.title}
                </h3>
                <p className="relative mt-3 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
                  {featured.excerpt}
                </p>
                <div className="relative mt-6 flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1.5 text-white/80">
                    <CalendarDays className="h-4 w-4 text-gold" />
                    {formatNewsDate(featured.date)}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-semibold text-gold">
                    Leer más
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            )}

            {/* Lista del resto */}
            <div className="flex flex-col gap-4 lg:col-span-2">
              {others.map((item) => {
                const date = new Date(item.date);
                return (
                  <article
                    key={item.id}
                    className="card-hover group flex flex-1 gap-4 rounded-apple border border-slate-200/80 bg-surface p-5"
                  >
                    <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-govco text-white ring-2 ring-gold/70">
                      <span className="text-xl font-extrabold leading-none">
                        {String(date.getUTCDate()).padStart(2, "0")}
                      </span>
                      <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-gold">
                        {new Intl.DateTimeFormat("es-CO", { month: "short", timeZone: "UTC" })
                          .format(date)
                          .replace(".", "")}
                      </span>
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wide text-gold-600">
                        {item.category}
                      </span>
                      <h3 className="mt-0.5 text-base font-bold leading-snug text-navy">{item.title}</h3>
                      <p className="mt-1 line-clamp-2 text-sm text-slate-600">{item.excerpt}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <Link
            href="/noticias"
            className="press mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-govco sm:hidden"
          >
            Ver todas
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
