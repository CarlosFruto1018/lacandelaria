import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

type Accent = "gold" | "green" | "red";

type QuickAccessCardProps = {
  href: string;
  icon: LucideIcon;
  title: string;
  description: string;
  accent?: Accent;
};

const accentBorder: Record<Accent, string> = {
  gold: "border-l-gold",
  green: "border-l-govco",
  red: "border-l-malambo-red",
};

export default function QuickAccessCard({
  href,
  icon: Icon,
  title,
  description,
  accent = "gold",
}: QuickAccessCardProps) {
  const className = `card-hover group flex items-center gap-4 rounded-2xl border-l-8 bg-white p-4 shadow-card ${accentBorder[accent]}`;
  const external = /^https?:\/\//.test(href) || href.startsWith("/documentos/");

  const content = (
    <>
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-govco text-white">
        <Icon className="h-6 w-6" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-base font-bold leading-snug tracking-tight text-navy">{title}</span>
        <span className="mt-0.5 block truncate text-sm text-slate-500">{description}</span>
      </span>
      <ArrowRight className="h-5 w-5 shrink-0 text-slate-300 transition-all duration-200 group-hover:translate-x-1 group-hover:text-govco" />
    </>
  );

  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {content}
    </a>
  ) : (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
