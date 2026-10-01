import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

type Tone = "green" | "gold" | "red";

type QuickAccessCardProps = {
  href: string;
  icon: LucideIcon;
  title: string;
  description: string;
  tone?: Tone;
};

const toneStyles: Record<Tone, string> = {
  green: "bg-govco/10 text-govco group-hover:bg-govco group-hover:text-white",
  gold: "bg-gold/20 text-gold-600 group-hover:bg-gold group-hover:text-navy",
  red: "bg-malambo-red/10 text-malambo-red group-hover:bg-malambo-red group-hover:text-white",
};

export default function QuickAccessCard({ href, icon: Icon, title, description, tone = "green" }: QuickAccessCardProps) {
  const className =
    "card-hover group relative flex flex-col rounded-3xl border border-navy/5 bg-white p-6 shadow-card";
  const external = /^https?:\/\//.test(href) || href.startsWith("/documentos/");

  const content = (
    <>
      <span
        className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-300 ${toneStyles[tone]}`}
      >
        <Icon className="h-7 w-7" />
      </span>
      <ArrowUpRight className="absolute right-5 top-5 h-5 w-5 text-navy/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-govco" />
      <h3 className="mt-5 text-base font-bold leading-snug text-navy">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-navy/60">{description}</p>
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
