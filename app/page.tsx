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
import NewsCard from "@/app/components/NewsCard";
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
    gradient: "from-sky-200 to-sky-300",
    image: "/aula.jpg",
  },
  {
    href: "/transparencia",
    icon: Scale,
    eyebrow: "Ley 1712 de 2014",
    title: "Transparencia y Ley",
    description: "Informes financieros y rendición de cuentas públicas.",
    gradient: "from-blue-200 to-indigo-300",
    image: "/transparencia.jpg",
  },
  {
    href: "/plataforma",
    icon: LayoutDashboard,
    eyebrow: "Académico",
    title: "Gestión Académica",
    description: "Plataforma académica y calendario escolar.",
    gradient: "from-cyan-200 to-sky-300",
    image: "/gestion-academica.jpg",
  },
  {
    href: "/admisiones",
    icon: School,
    eyebrow: "Matrículas",
    title: "Admisiones y Cupos",
    description: "Procedimiento de inscripción y requisitos de matrícula.",
    gradient: "from-amber-200 to-yellow-300",
    image: "/admisiones.jpg",
  },
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
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-10 pt-40 text-center sm:px-6 sm:pb-14">
          <h1 className="tracking-display mx-auto max-w-4xl text-balance text-3xl font-extrabold uppercase leading-tight text-white drop-shadow sm:text-5xl">
            Institución Educativa
            <span className="block text-gold">Nuestra Señora de la Candelaria</span>
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/90 sm:text-lg">
            Ciencia, virtud y paz para nuestra comunidad.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
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

      {/* Accesos rápidos */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="tracking-display text-2xl font-bold text-navy sm:text-3xl">
          Accesos rápidos
        </h2>
        <p className="mt-1.5 text-sm text-slate-500">
          Lo que más consulta nuestra comunidad educativa.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <QuickAccessCard
            href="/plataforma/notas"
            icon={GraduationCap}
            title="Notas"
            description="Consulta las calificaciones de tus estudiantes."
          />
          <QuickAccessCard
            href="/plataforma/horarios"
            icon={CalendarRange}
            title="Horarios"
            description="Horarios de clases por grado y jornada."
          />
          <QuickAccessCard
            href="/plataforma/guias"
            icon={BookOpenCheck}
            title="Guías docentes"
            description="Material y guías de trabajo de cada área."
          />
          <QuickAccessCard
            href="https://www.sismac.info/"
            icon={Database}
            title="SIMAT"
            description="Sistema Integrado de Matrícula."
          />
          <QuickAccessCard
            href="/pqrsdf"
            icon={MessageSquareWarning}
            title="PQRSDF"
            description="Radica peticiones, quejas, reclamos y sugerencias."
          />
          <QuickAccessCard
            href="/admisiones"
            icon={UserPlus}
            title="Admisiones"
            description="Información de cupos y proceso de inscripción."
          />
          <QuickAccessCard
            href="/documentos/MANUAL-DE-CONVIVENCIA-2025.pdf"
            icon={BookMarked}
            title="Manual de Convivencia"
            description="Manual de convivencia y sistema de evaluación 2025."
          />
          <QuickAccessCard
            href="/transparencia/formatos"
            icon={FileText}
            title="Formatos"
            description="Formatos institucionales para descargar."
          />
          <QuickAccessCard
            href="/transparencia/referentes-de-calidad"
            icon={Award}
            title="Referentes de Calidad"
            description="DBA, estándares, lineamientos y matrices de referencia."
          />
          <QuickAccessCard
            href="/contratacion"
            icon={FileSignature}
            title="Proceso de contratación"
            description="Procesos de contratación por vigencia."
          />
        </div>
      </section>

      {/* Tarjetas principales */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 sm:px-6 md:grid-cols-2">
          {featureCards.map((card) => {
            const Icon = card.icon;
            const onImage = Boolean(card.image);
            return (
              <Link
                key={card.title}
                href={card.href}
                className={`card-hover group relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-apple bg-gradient-to-br ${card.gradient} p-8 ${onImage ? "text-white" : "text-navy"}`}
              >
                {card.image && (
                  <>
                    <Image
                      src={card.image}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
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
                <h3 className="tracking-display relative mt-1 text-2xl font-bold">{card.title}</h3>
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
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="tracking-display text-2xl font-bold text-navy sm:text-3xl">
              Noticias
            </h2>
            <p className="mt-1.5 text-sm text-slate-500">
              Lo último que pasa en nuestra institución.
            </p>
          </div>
          <Link
            href="/noticias"
            className="press hidden items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold-600 sm:flex"
          >
            Ver todas
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {newsItems.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
