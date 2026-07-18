import { Logo } from "@/components/Logo";
import { disclaimer, nav, site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-bg-elevated/40">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-fg-muted">
              {site.tagline}. {site.entity} · {site.location}.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-fg-muted transition-colors hover:text-fg"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`mailto:${site.email}`}
              className="text-sm font-medium text-fg-muted transition-colors hover:text-fg"
            >
              Email
            </a>
          </nav>
        </div>

        <aside
          className="mt-12 border border-line bg-bg/60 p-5 sm:p-6"
          aria-label="Legal disclaimer"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fg-subtle">
            Legal disclaimer
          </p>
          <p className="mt-3 text-sm leading-relaxed text-fg-muted">{disclaimer}</p>
        </aside>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-8 text-sm text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>
            Formed {site.formed} · {site.owner}
          </p>
        </div>
      </div>
    </footer>
  );
}
