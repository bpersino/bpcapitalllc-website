"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Loader2, Mail, Send } from "lucide-react";
import { Section } from "@/components/Section";
import { contact, site } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const reduceMotion = useReducedMotion();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
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
        setStatus("success");
        form.reset();
        return;
      }

      const subject = encodeURIComponent(`Inquiry from ${name} — ${site.name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
      setStatus("success");
      form.reset();
    } catch {
      setError("Something went wrong. Please email us directly.");
      setStatus("error");
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
            <p
              role="status"
              className="mt-4 flex items-center gap-2 text-sm text-accent"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
              {contact.formspreeEndpoint
                ? "Message sent. We’ll get back to you soon."
                : "Opening your email client…"}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-accent px-5 py-3.5 text-sm font-bold tracking-wide text-bg transition-opacity hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                Sending…
              </>
            ) : (
              <>
                Send message
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
