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

const tones: Record<Tone, { icon: string; border: string; text: string }> = {
  green: {
    icon: "bg-govco/10 text-govco group-hover:bg-govco group-hover:text-white",
    border: "hover:border-govco",
    text: "group-hover:text-govco",
  },
  gold: {
    icon: "bg-gold/25 text-gold-600 group-hover:bg-gold group-hover:text-navy",
    border: "hover:border-gold",
    text: "group-hover:text-gold-600",
  },
  red: {
    icon: "bg-malambo-red/10 text-malambo-red group-hover:bg-malambo-red group-hover:text-white",
    border: "hover:border-malambo-red",
    text: "group-hover:text-malambo-red",
  },
};

export default function QuickAccessCard({ href, icon: Icon, title, description, tone = "green" }: QuickAccessCardProps) {
  const external = /^https?:\/\//.test(href) || href.startsWith("/documentos/");
  const style = tones[tone];

  const className = `group flex min-w-0 items-center gap-4 border-b border-navy/10 py-4 transition-colors duration-200 ${style.border}`;

  const content = (
    <>
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-200 ${style.icon}`}
      >
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <span className="min-w-0 flex-1">
        <span className={`block text-base font-semibold text-navy transition-colors duration-200 ${style.text}`}>
          {title}
        </span>
        <span className="block truncate text-sm text-navy/50">{description}</span>
      </span>
      <ArrowUpRight
        className={`h-5 w-5 shrink-0 text-navy/25 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${style.text}`}
      />
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
