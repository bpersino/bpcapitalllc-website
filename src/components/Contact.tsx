"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Copy, ExternalLink, Loader2, Mail, Send } from "lucide-react";
import { Section } from "@/components/Section";
import { contact, site } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

/** Build a mailto URL and try to open the OS email client. */
function buildMailto(name: string, email: string, message: string) {
  const subject = encodeURIComponent(`Inquiry from ${name} — ${site.name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  return `mailto:${contact.email}?subject=${subject}&body=${body}`;
}

/**
 * Edge/Chrome on macOS often ignore window.location mailto navigations.
 * A user-gesture click on a real <a href="mailto:…"> is more reliable.
 */
function openMailto(href: string) {
  const anchor = document.createElement("a");
  anchor.href = href;
  anchor.rel = "noopener";
  anchor.style.display = "none";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
}

export function Contact() {
  const reduceMotion = useReducedMotion();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [mailtoHref, setMailtoHref] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setCopied(false);
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setError("Please complete all fields.");
      setStatus("error");
      return;
    }

    try {
      if (contact.formspreeEndpoint) {
        const res = await fetch(contact.formspreeEndpoint, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: data,
        });
        if (!res.ok) throw new Error("Form submission failed");
        setMailtoHref(null);
        setStatus("success");
        form.reset();
        return;
      }

      const href = buildMailto(name, email, message);
      setMailtoHref(href);
      openMailto(href);
      setStatus("success");
      // Keep field values so the visitor can retry via the fallback link.
    } catch {
      setError("Something went wrong. Please email us directly.");
      setStatus("error");
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Section id="contact" title={contact.title} lead={contact.lead} eyebrow="Get in touch">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
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
            ) : (
              <p className="mt-4 text-fg-subtle">Scheduling link coming soon.</p>
            )}
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          noValidate
          className="border border-line bg-bg-elevated/50 p-6 sm:p-8"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.08 }}
          aria-describedby={error ? "contact-error" : undefined}
        >
          <div className="grid gap-5">
            <Field label="Name" name="name" type="text" autoComplete="name" required />
            <Field label="Email" name="email" type="email" autoComplete="email" required />
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-fg-subtle">
                Message
              </span>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-2 w-full border border-line bg-bg px-3 py-2.5 text-sm text-fg outline-none transition-colors placeholder:text-fg-subtle focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
                placeholder="How can we help?"
              />
            </label>
          </div>

          {error ? (
            <p id="contact-error" role="alert" className="mt-4 text-sm text-red-300">
              {error}
            </p>
          ) : null}

          {status === "success" ? (
            <div role="status" className="mt-4 space-y-3 border border-accent/25 bg-accent-soft/40 p-4 text-sm text-fg-muted">
              <p className="flex items-start gap-2 text-accent">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>
                  {contact.formspreeEndpoint
                    ? "Message sent. We’ll get back to you soon."
                    : "If your email app didn’t open, use the button below (some browsers block this automatically)."}
                </span>
              </p>
              {!contact.formspreeEndpoint && mailtoHref ? (
                <div className="flex flex-col gap-2 sm:flex-row">
                  <a
                    href={mailtoHref}
                    className="inline-flex items-center justify-center gap-2 border border-accent/40 bg-bg px-4 py-2.5 text-sm font-semibold text-accent transition-colors hover:border-accent hover:bg-accent/10"
                  >
                    Open email app
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center justify-center gap-2 border border-line px-4 py-2.5 text-sm font-medium text-fg transition-colors hover:border-line-strong"
                  >
                    <Copy className="h-4 w-4" aria-hidden="true" />
                    {copied ? "Email copied" : "Copy email address"}
                  </button>
                </div>
              ) : null}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-accent px-5 py-3.5 text-sm font-bold tracking-wide text-bg transition-opacity hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                Preparing…
              </>
            ) : (
              <>
                {contact.formspreeEndpoint ? "Send message" : "Compose email"}
                <Send className="h-4 w-4" aria-hidden="true" />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type,
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-fg-subtle">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="mt-2 w-full border border-line bg-bg px-3 py-2.5 text-sm text-fg outline-none transition-colors placeholder:text-fg-subtle focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
      />
    </label>
  );
}
