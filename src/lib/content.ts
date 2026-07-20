/**
 * Site content for BP Capital LLC.
 * Edit this file to update copy without touching layout components.
 *
 * Wording notes (not tax advice):
 * - Do not claim “Trader Tax Status,” IRS qualification, or tax results on this site.
 * - TTS is a facts-and-circumstances determination based on actual trading activity
 *   (see IRS Topic 429). This site should accurately describe the business only.
 * - Prefer honest description of tools (e.g. Composer) over overstated “quant lab” claims.
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
  tagline: "Proprietary Securities Trading",
  description:
    "BP Capital LLC is a Texas proprietary trading company that designs and operates systematic equity and ETF strategies for its own account, seeking to profit from daily and other short-term market movements.",
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  brand: "BP Capital",
  headline: "Proprietary Securities Trading",
  subheadline:
    "Systematic equity and ETF strategies traded solely for our own account — seeking to profit from daily and other short-term market movements.",
  primaryCta: { label: "Contact", href: "#contact" },
  secondaryCta: { label: "Our Approach", href: "#approach" },
} as const;

export const about = {
  title: "About",
  lead: "A Texas single-member LLC engaged in ongoing, systematic securities trading for its own account.",
  paragraphs: [
    "BP Capital LLC buys and sells equities and ETFs solely with firm capital. Our trading is organized as a continuous business activity: we design, test, and operate rules-based strategies seeking to profit from daily and other short-term market movements—not from long-term buy-and-hold investing, dividends, or managing outside capital.",
    "We build and execute strategies on Composer (composer.trade), an automated brokerage trading platform. Positions can and often do change on trading days as signals and allocations update. We do not solicit or manage investments from the public, do not provide investment advice, and are not a registered investment advisor, broker-dealer, or hedge fund.",
  ],
  facts: [
    { label: "Entity", value: "Texas single-member LLC" },
    { label: "Instruments", value: "Equities & ETFs" },
    { label: "Capital", value: "Proprietary only" },
    { label: "Focus", value: "Short-term market moves" },
    { label: "Platform", value: "Composer" },
    { label: "Formed", value: "June 2026" },
  ],
} as const;

export const approach = {
  title: "Our Approach",
  lead: "Repeatable process, short-term orientation, own capital only.",
  items: [
    {
      title: "Strategy Design",
      description:
        "We define rules-based strategies with explicit entry, exit, allocation, and rebalance logic that can be applied consistently across trading days.",
      icon: "code" as const,
    },
    {
      title: "Ongoing Review",
      description:
        "We monitor strategy behavior and market conditions on an ongoing basis and refine rules when results, costs, or regimes warrant changes.",
      icon: "chart" as const,
    },
    {
      title: "Risk Controls",
      description:
        "Position sizing, exposure limits, and drawdown-aware constraints are part of how strategies are specified and run—not an afterthought.",
      icon: "shield" as const,
    },
    {
      title: "Automated Execution",
      description:
        "Orders are submitted through Composer’s automated execution so trades follow the strategy rules with less manual, discretionary intervention.",
      icon: "zap" as const,
    },
  ],
} as const;

export const contact = {
  title: "Contact",
  lead: "For firm-related inquiries, reach us by email.",
  email: site.email,
  calendlyUrl: "",
} as const;

export const disclaimer =
  "BP Capital LLC is a proprietary trading company that trades solely for its own account. We do not solicit or manage investments from the public, do not provide investment advice, and are not a registered investment advisor, broker-dealer, or hedge fund. Past performance is not indicative of future results. Trading involves substantial risk of loss. This website is for general information only and does not constitute tax, legal, or investment advice. Whether trading activity constitutes a trade or business for U.S. federal income tax purposes depends on the facts and circumstances of that activity.";
