"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { BarChart3, Code2, Shield, Zap, type LucideIcon } from "lucide-react";
import { Section } from "@/components/Section";
import { approach } from "@/lib/content";

const icons: Record<(typeof approach.items)[number]["icon"], LucideIcon> = {
  code: Code2,
  chart: BarChart3,
  shield: Shield,
  zap: Zap,
};

function withComposerLink(text: string): ReactNode {
  const marker = "Composer’s";
  const idx = text.indexOf(marker);
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <a
        href="https://www.composer.trade"
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-accent-blue underline-offset-4 hover:underline"
      >
        Composer’s
      </a>
      {text.slice(idx + marker.length)}
    </>
  );
}

export function Approach() {
  return (
    <Section id="approach" title={approach.title} lead={approach.lead} eyebrow="How we work">
      <ul className="grid gap-4 sm:grid-cols-2 lg:gap-5">
        {approach.items.map((item, index) => {
          const Icon = icons[item.icon];
          return (
            <motion.li
              key={item.title}
              className="group border border-line bg-bg-elevated/60 p-6 transition-colors hover:border-accent/35 hover:bg-bg-panel/80 sm:p-7"
              initial={false}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div className="flex h-10 w-10 items-center justify-center border border-accent/30 bg-accent-soft text-accent transition-colors group-hover:border-accent/50">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-fg">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted sm:text-base">
                {withComposerLink(item.description)}
              </p>
            </motion.li>
          );
        })}
      </ul>
    </Section>
  );
}
