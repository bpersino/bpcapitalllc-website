/**
 * Site content for BP Capital LLC.
 * Edit this file to update copy without touching layout components.
 */

export const site = {
  name: "BP Capital LLC",
  shortName: "BP Capital",
  domain: "bpcapitalllc.com",
  url: "https://bpcapitalllc.com",
  owner: "Byron Persino",
  email: "byron.persino@bpcapitalllc.com",
  location: "Texas, USA",
  formed: "June 2026",
  entity: "Texas single-member LLC",
  tagline: "Proprietary Algorithmic Trading",
  description:
    "BP Capital LLC develops and operates automated quantitative trading strategies for equities and ETFs, trading solely for its own account.",
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  brand: "BP Capital",
  headline: "Proprietary Algorithmic Trading",
  subheadline:
    "Automated quantitative strategies for equities and ETFs — built, tested, and executed with our own capital.",
  primaryCta: { label: "Contact Us", href: "#contact" },
  secondaryCta: { label: "Our Approach", href: "#approach" },
} as const;

export const about = {
  title: "About",
  lead: "A Texas proprietary trading firm focused on systematic, data-driven markets participation.",
  paragraphs: [
    "BP Capital LLC is a single-member limited liability company that develops and operates automated quantitative trading strategies. We trade equities and ETFs solely for our own account, with positions that can change daily as markets evolve.",
    "We do not manage client money, solicit outside capital, or act as an investment advisor. Our work is internal research, engineering, and execution — applied exclusively to firm capital.",
  ],
  facts: [
    { label: "Entity", value: "Texas single-member LLC" },
    { label: "Focus", value: "Equities & ETFs" },
    { label: "Capital", value: "Proprietary only" },
    { label: "Formed", value: "June 2026" },
  ],
} as const;

export const approach = {
  title: "Our Approach",
  lead: "Systems over discretion. Evidence over narrative.",
  items: [
    {
      title: "Algorithmic Development",
      description:
        "We design and refine trading algorithms that encode rules, signals, and constraints into repeatable software systems.",
      icon: "code" as const,
    },
    {
      title: "Quantitative Research",
      description:
        "Ideas are evaluated against historical and live market data, with an emphasis on robustness, costs, and regime awareness.",
      icon: "chart" as const,
    },
    {
      title: "Risk Management",
      description:
        "Exposure limits, position sizing, and drawdown controls are first-class components of every strategy we run.",
      icon: "shield" as const,
    },
    {
      title: "Systematic Execution",
      description:
        "Orders are generated and routed by automated pipelines, reducing operational friction and emotional interference.",
      icon: "zap" as const,
    },
  ],
} as const;

export const contact = {
  title: "Contact",
  lead: "For legitimate inquiries related to the firm, reach us by email.",
  email: site.email,
  calendlyUrl: "",
} as const;

export const disclaimer =
  "BP Capital LLC is a proprietary trading firm that trades solely for its own account. We do not solicit or manage investments from the public, do not provide investment advice, and are not a registered investment advisor, broker-dealer, or hedge fund. Past performance is not indicative of future results. Trading involves substantial risk of loss.";
