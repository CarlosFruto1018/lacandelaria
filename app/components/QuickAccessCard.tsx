import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

type QuickAccessCardProps = {
  href: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function QuickAccessCard({
  href,
  icon: Icon,
  title,
  description,
}: QuickAccessCardProps) {
  const className =
    "card-hover group flex flex-col rounded-apple border border-slate-200/80 bg-white p-6 shadow-card";
  const external = /^https?:\/\//.test(href) || href.startsWith("/documentos/");

  const content = (
    <>
      <div className="flex items-center justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-govco text-white ring-2 ring-gold/70">
          <Icon className="h-6 w-6" />
        </span>
        <ArrowUpRight className="h-5 w-5 text-slate-300 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
      </div>
      <h3 className="mt-5 text-base font-semibold tracking-tight text-navy">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{description}</p>
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
