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
  Landmark,
  Scale,
  LayoutDashboard,
  School,
  FlaskConical,
  Sparkles,
  HandHeart,
  type LucideIcon,
} from "lucide-react";
import QuickAccessCard from "@/app/components/QuickAccessCard";
import { newsItems } from "@/lib/data";

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

const tones = ["green", "gold", "red"] as const;

const values: { title: string; text: string; icon: LucideIcon; style: string }[] = [
  { title: "Ciencia", text: "Pensamiento crítico, tecnología e innovación.", icon: FlaskConical, style: "bg-govco text-white" },
  { title: "Virtud", text: "Formación humana, ética y espiritual.", icon: Sparkles, style: "bg-gold text-navy" },
  { title: "Paz", text: "Convivencia, respeto y comunidad.", icon: HandHeart, style: "bg-malambo-red text-white" },
];

const highlights: {
  href: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}[] = [
  {
    href: "/institucional",
    icon: Landmark,
    eyebrow: "Institucional",
    title: "Conoce el colegio",
    description: "Misión, visión, valores y equipo directivo.",
    image: "/aula.jpg",
  },
  {
    href: "/transparencia",
    icon: Scale,
    eyebrow: "Ley 1712 de 2014",
    title: "Transparencia",
    description: "Información pública, informes y rendición de cuentas.",
    image: "/transparencia.jpg",
  },
  {
    href: "/plataforma",
    icon: LayoutDashboard,
    eyebrow: "Académico",
    title: "Gestión Académica",
    description: "Plataforma académica y calendario escolar.",
    image: "/gestion-academica.jpg",
  },
  {
    href: "/admisiones",
    icon: School,
    eyebrow: "Matrículas",
    title: "Admisiones y Cupos",
    description: "Requisitos y proceso de inscripción.",
    image: "/admisiones.jpg",
  },
];

const interestLinks = [
  { name: "Humano - Volantes de Pago", href: "https://rrhh.gestionsecretariasdeeducacion.gov.co/humanoEL/Ingresar.aspx?Ent=Malambo", image: "/paginas-interes/volantepago.png", width: 150, height: 83 },
  { name: "Colombia Aprende", href: "http://www.colombiaaprende.edu.co/", image: "/paginas-interes/colombia_aprende_logo.gif", width: 150, height: 59 },
  { name: "Supérate con el Saber 2.0", href: "http://superate.edu.co/", image: "/paginas-interes/superate.png", width: 150, height: 95 },
  { name: "Ministerio de Educación Nacional", href: "http://www.mineducacion.gov.co/", image: "/paginas-interes/men.jpg", width: 150, height: 63 },
  { name: "Secretaría de Educación de Malambo", href: "http://www.mineducacion.gov.co/", image: "/paginas-interes/semmalambo.png", width: 150, height: 50 },
  { name: "SAC - Sistema de Atención al Ciudadano", href: "http://sac2.gestionsecretariasdeeducacion.gov.co/app_Login/?sec=51", image: "/paginas-interes/sac.png", width: 418, height: 120 },
];

const sortedNews = [...newsItems].sort((a, b) => b.date.localeCompare(a.date));
const [featured, ...others] = sortedNews;

function formatNewsDate(dateString: string) {
  return new Intl.DateTimeFormat("es-CO", { day: "2-digit", month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(dateString),
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="inline-flex items-center gap-2 rounded-full bg-govco/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-govco">
        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
        {eyebrow}
      </span>
      <h2 className="tracking-display mt-3 text-3xl font-extrabold text-navy sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-base text-navy/60">{description}</p>}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-govco-dark via-govco to-govco-dark">
        <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-gold/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-malambo-red/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-28 pt-14 sm:px-6 lg:grid-cols-2 lg:pb-36 lg:pt-20">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur">
              <MapPin className="h-4 w-4 text-gold" />
              Malambo, Atlántico
            </span>
            <h1 className="tracking-display mt-6 text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Institución Educativa
              <span className="mt-1 block text-gold">Nuestra Señora de la Candelaria</span>
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-lg text-white/85 lg:mx-0">
              Formamos niños, niñas y jóvenes con ciencia, virtud y paz para transformar su entorno.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Link
                href="/institucional"
                className="press inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-navy shadow-hard transition-colors duration-200 hover:bg-gold-300"
              >
                Conoce nuestra institución
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/admisiones"
                className="press inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-3.5 text-sm font-bold text-white ring-1 ring-white/30 backdrop-blur transition-colors duration-200 hover:bg-white/20"
              >
                Admisiones
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] border-[6px] border-white/90 shadow-card-hover">
              <Image
                src="/estudiantes.jpg"
                alt="Estudiantes de la I.E. Nuestra Señora de la Candelaria"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover object-[55%_25%]"
              />
            </div>
            <div className="absolute -bottom-6 -left-2 flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-card-hover sm:-left-6">
              <Image
                src="/logos/escudo-colegio.png"
                alt=""
                width={400}
                height={524}
                className="h-12 w-auto"
              />
              <span>
                <span className="block text-xs font-semibold text-navy/60">Nuestro lema</span>
                <span className="block font-display text-sm font-bold text-navy">Educamos para la Paz</span>
              </span>
            </div>
            <div className="absolute -right-2 -top-4 rounded-full bg-gold px-4 py-2 text-xs font-bold text-navy shadow-card-hover sm:-right-4">
              Ciencia · Virtud · Paz
            </div>
          </div>
        </div>

        {/* Onda inferior */}
        <svg
          className="absolute bottom-0 left-0 h-16 w-full text-surface sm:h-24"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path fill="currentColor" d="M0,64 C240,120 480,120 720,80 C960,40 1200,20 1440,60 L1440,120 L0,120 Z" />
        </svg>
      </section>

      {/* Datos de contacto */}
      <section className="relative z-10 mx-auto -mt-4 max-w-6xl px-4 sm:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { icon: Clock, label: "Horario de atención", text: "Lunes a viernes, 7:00 a.m. a 3:00 p.m.", tone: "bg-govco/10 text-govco" },
            { icon: Phone, label: "Llamadas y WhatsApp", text: "+57 304 202 6613", tone: "bg-gold/20 text-gold-600" },
            { icon: MapPin, label: "Sede principal", text: "Calle 10 #6sur-01, Malambo", tone: "bg-malambo-red/10 text-malambo-red" },
          ].map(({ icon: Icon, label, text, tone }) => (
            <div key={label} className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-card">
              <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${tone}`}>
                <Icon className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-xs font-semibold text-navy/50">{label}</span>
                <span className="block font-bold text-navy">{text}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Accesos rápidos */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Servicios"
          title="Accesos rápidos"
          description="Los trámites y recursos que más consulta nuestra comunidad educativa."
          center
        />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {quickAccess.map((item, index) => (
            <QuickAccessCard key={item.title} {...item} tone={tones[index % tones.length]} />
          ))}
        </div>
      </section>

      {/* Valores del escudo */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid overflow-hidden rounded-[2rem] shadow-card md:grid-cols-3">
          {values.map(({ title, text, icon: Icon, style }) => (
            <div key={title} className={`flex items-center gap-4 p-7 ${style}`}>
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20">
                <Icon className="h-7 w-7" />
              </span>
              <span>
                <span className="block font-display text-2xl font-extrabold">{title}</span>
                <span className="block text-sm opacity-90">{text}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Destacados con foto */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow="Explora" title="Todo sobre nuestra institución" />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.title}
                href={card.href}
                className="card-hover group relative flex min-h-[340px] flex-col justify-end overflow-hidden rounded-3xl p-6 text-white shadow-card"
              >
                <Image
                  src={card.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-govco-dark via-govco-dark/60 to-transparent" />
                <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 text-govco shadow-card">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="relative text-xs font-bold uppercase tracking-wider text-gold">{card.eyebrow}</span>
                <h3 className="relative mt-1 text-xl font-extrabold">{card.title}</h3>
                <p className="relative mt-2 text-sm text-white/85">{card.description}</p>
                <span className="relative mt-4 inline-flex items-center gap-1.5 text-sm font-bold">
                  Ver más
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Noticias */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Comunidad"
              title="Noticias y comunicados"
              description="Lo último que pasa en nuestra institución."
            />
            <Link
              href="/noticias"
              className="press inline-flex items-center gap-2 rounded-full bg-govco/10 px-5 py-2.5 text-sm font-bold text-govco transition-colors duration-200 hover:bg-govco hover:text-white"
            >
              Ver todas
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5">
            {featured && (
              <article className="card-hover group overflow-hidden rounded-3xl border border-navy/5 bg-surface shadow-card lg:col-span-3">
                <div className="relative h-64 overflow-hidden sm:h-80">
                  <Image
                    src="/noticia-destacada.jpg"
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-gold px-3 py-1 text-xs font-bold text-navy shadow-card">
                    Destacado · {featured.category}
                  </span>
                </div>
                <div className="p-7">
                  <span className="flex items-center gap-1.5 text-sm text-navy/50">
                    <CalendarDays className="h-4 w-4" />
                    {formatNewsDate(featured.date)}
                  </span>
                  <h3 className="mt-2 text-2xl font-extrabold leading-snug text-navy">{featured.title}</h3>
                  <p className="mt-2 text-navy/70">{featured.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-govco">
                    Leer más
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            )}

            <div className="flex flex-col gap-5 lg:col-span-2">
              {others.map((item) => {
                const date = new Date(item.date);
                return (
                  <article
                    key={item.id}
                    className="card-hover group flex flex-1 gap-4 rounded-3xl border border-navy/5 bg-surface p-5 shadow-card"
                  >
                    <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-white text-govco shadow-card">
                      <span className="font-display text-2xl font-extrabold leading-none">
                        {String(date.getUTCDate()).padStart(2, "0")}
                      </span>
                      <span className="mt-0.5 text-[11px] font-bold uppercase text-malambo-red">
                        {new Intl.DateTimeFormat("es-CO", { month: "short", timeZone: "UTC" })
                          .format(date)
                          .replace(".", "")}
                      </span>
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-gold-600">{item.category}</span>
                      <h3 className="mt-0.5 font-bold leading-snug text-navy">{item.title}</h3>
                      <p className="mt-1 line-clamp-2 text-sm text-navy/60">{item.excerpt}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Páginas de interés */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="flex items-center gap-4">
          <h2 className="tracking-display shrink-0 text-2xl font-extrabold text-navy sm:text-3xl">Páginas de interés</h2>
          <span className="h-px flex-1 bg-navy/15" aria-hidden="true" />
        </div>
        <div className="mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {interestLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              title={link.name}
              className="press flex items-center justify-center rounded-2xl p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-card"
            >
              <Image
                src={link.image}
                alt={link.name}
                width={link.width}
                height={link.height}
                className="h-auto max-h-24 w-auto max-w-full object-contain"
              />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
