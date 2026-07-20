import Link from "next/link";
import { site } from "@/lib/content";

type LogoProps = {
  className?: string;
  href?: string;
};

/** Text mark with a small geometric glyph — easy to swap for a custom SVG later. */
export function Logo({ className = "", href = "#top" }: LogoProps) {
  const mark = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden="true"
        className="relative grid h-8 w-8 place-items-center border border-accent/40 bg-accent-soft"
      >
        <span className="absolute inset-[3px] border border-accent-blue/35" />
        <span className="h-2 w-2 rotate-45 bg-accent" />
      </span>
      <span className="font-display text-lg font-semibold tracking-tight text-fg sm:text-xl">
        {site.shortName}
      </span>
    </span>
  );

  if (!href) return mark;

  return (
    <Link
      href={href}
      aria-label={site.name}
      className="group outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-accent/60"
    >
      {mark}
    </Link>
  );
}
