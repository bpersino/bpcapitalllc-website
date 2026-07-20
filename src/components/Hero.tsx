import { ArrowDownRight } from "lucide-react";
import { hero, site } from "@/lib/content";

/** Static hero — no client motion hooks, so SSR and client HTML always match. */
export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 sm:items-center sm:pb-24 sm:pt-32"
    >
      <div aria-hidden="true" className="hero-glow pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="grid-overlay pointer-events-none absolute inset-0 opacity-80" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent"
      />
      <div
        aria-hidden="true"
        className="hero-accent-line pointer-events-none absolute left-1/2 top-[18%] h-px w-[min(70vw,42rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/50 to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-accent sm:text-base">
          {hero.brand}
        </p>

        <h1
          id="hero-heading"
          className="mt-5 max-w-4xl font-display text-[clamp(2.6rem,8vw,5.5rem)] font-bold leading-[0.95] tracking-tight text-fg"
        >
          {hero.headline}
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted sm:text-xl">{hero.subheadline}</p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={hero.primaryCta.href}
            className="inline-flex items-center justify-center gap-2 bg-accent px-6 py-3.5 text-sm font-bold tracking-wide text-bg transition-transform hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 active:scale-[0.98]"
          >
            {hero.primaryCta.label}
            <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={hero.secondaryCta.href}
            className="inline-flex items-center justify-center border border-line-strong px-6 py-3.5 text-sm font-semibold text-fg transition-colors hover:border-accent-blue/50 hover:bg-bg-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/40"
          >
            {hero.secondaryCta.label}
          </a>
        </div>

        <p className="mt-10 text-xs uppercase tracking-[0.22em] text-fg-subtle">
          {site.entity} · {site.location}
        </p>
      </div>
    </section>
  );
}
