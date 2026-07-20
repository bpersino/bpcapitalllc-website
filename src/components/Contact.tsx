"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Mail } from "lucide-react";
import { Section } from "@/components/Section";
import { contact, site } from "@/lib/content";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Section id="contact" title={contact.title} lead={contact.lead} eyebrow="Get in touch">
      <motion.div
        initial={false}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="max-w-xl space-y-6"
      >
        <div className="flex items-start gap-4 border border-line bg-bg-elevated/70 p-5 transition-colors hover:border-accent/40">
          <span className="grid h-10 w-10 shrink-0 place-items-center border border-accent/30 bg-accent-soft text-accent">
            <Mail className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-fg-subtle">
              Email
            </span>
            <div className="mt-1 flex flex-wrap items-center gap-2">
              <a
                href={`mailto:${contact.email}`}
                className="break-all font-medium text-fg transition-colors hover:text-accent"
              >
                {contact.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex shrink-0 items-center gap-1.5 border border-line px-2.5 py-1 text-xs font-semibold text-fg-muted transition-colors hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                aria-label={copied ? "Email copied" : `Copy ${contact.email}`}
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

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
