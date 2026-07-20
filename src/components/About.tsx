"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/Section";
import { about } from "@/lib/content";

export function About() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="about" title={about.title} lead={about.lead} eyebrow="Who we are">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <motion.div
          className="space-y-5 text-base leading-relaxed text-fg-muted sm:text-lg"
          initial={reduceMotion ? false : { y: 16 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </motion.div>

        <motion.dl
          className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2"
          initial={reduceMotion ? false : { y: 16 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.12 }}
        >
          {about.facts.map((fact) => (
            <div key={fact.label} className="bg-bg-elevated px-5 py-5">
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-fg-subtle">
                {fact.label}
              </dt>
              <dd className="mt-2 font-display text-lg font-semibold text-fg">{fact.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </Section>
  );
}
