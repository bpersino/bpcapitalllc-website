"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { hero, site } from "@/lib/content";

export function Hero() {
  const reduceMotion = useReducedMotion();

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

      {!reduceMotion ? (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[18%] h-px w-[min(70vw,42rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/50 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      ) : null}

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.p
          className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-accent sm:text-base"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          {hero.brand}
        </motion.p>

        <motion.h1
          id="hero-heading"
          className="mt-5 max-w-4xl font-display text-[clamp(2.6rem,8vw,5.5rem)] font-bold leading-[0.95] tracking-tight text-fg"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted sm:text-xl"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.22 }}
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
        >
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
        </motion.div>

        <p className="mt-10 text-xs uppercase tracking-[0.22em] text-fg-subtle">
          {site.entity} · {site.location}
        </p>
      </div>
    </section>
  );
}
