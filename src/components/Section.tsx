"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  lead: string;
  children: ReactNode;
  eyebrow?: string;
};

export function Section({ id, title, lead, children, eyebrow }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="section-pad scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={false}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">{eyebrow}</p>
          ) : null}
          <h2
            id={`${id}-heading`}
            className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl md:text-5xl"
          >
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">{lead}</p>
        </motion.div>

        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
