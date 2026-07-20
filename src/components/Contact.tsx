"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail } from "lucide-react";
import { Section } from "@/components/Section";
import { contact, site } from "@/lib/content";

export function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="contact" title={contact.title} lead={contact.lead} eyebrow="Get in touch">
      <motion.div
        initial={reduceMotion ? false : { y: 16 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="max-w-xl space-y-6"
      >
        <a
          href={`mailto:${contact.email}`}
          className="group flex items-start gap-4 border border-line bg-bg-elevated/70 p-5 transition-colors hover:border-accent/40"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center border border-accent/30 bg-accent-soft text-accent">
            <Mail className="h-5 w-5" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-fg-subtle">
              Email
            </span>
            <span className="mt-1 block break-all font-medium text-fg group-hover:text-accent">
              {contact.email}
            </span>
          </span>
        </a>

        <div className="border border-line bg-bg-elevated/40 p-5 text-sm leading-relaxed text-fg-muted">
          <p>
            <span className="font-semibold text-fg">{site.owner}</span>
            <br />
            {site.name}
            <br />
            {site.location}
          </p>
          {contact.calendlyUrl ? (
            <p className="mt-4">
              Prefer a call?{" "}
              <a
                href={contact.calendlyUrl}
                className="font-medium text-accent-blue underline-offset-4 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Schedule via Calendly
              </a>
            </p>
          ) : null}
        </div>
      </motion.div>
    </Section>
  );
}
