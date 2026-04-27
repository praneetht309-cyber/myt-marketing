import { type ReactNode, type HTMLAttributes, type ElementType } from "react";

/**
 * Marketing-site typography system — single source of truth for font size,
 * weight, responsive scale, and default color.
 *
 * Mirrors the mobile app's `ResponsiveTypography` system (see mobile
 * CLAUDE.md) so product and marketing read as one family.
 *
 * USAGE RULES
 * -----------
 * - ALWAYS reach for these components before adding `text-*` utility classes.
 * - Override color / alignment via `className` when needed; never override
 *   size, weight, or responsive scale ad-hoc. If a new variant is required,
 *   add it here rather than diverging inline.
 * - Each component accepts an `as` prop to swap the underlying HTML element
 *   (e.g. `<H2 as="h3">` when you want the visual size of H2 but the DOM
 *   semantics of h3 for accessibility).
 *
 * SCALE
 * -----
 * Headings:
 *   HeroTitle — hero H1 on every landing surface (36/48/60/72 responsive)
 *   H1        — secondary H1 / page title (30/36/48)
 *   H2        — section heading (24/30/36/48)
 *   H3        — subsection, feature block solution (20/24)
 *   H4        — card title (18 · semibold)
 *   H5        — small card title, list-item heading (16 · bold)
 *   H6        — compact card title in dense grids (14 · bold)
 *
 * Body:
 *   Lead      — hero/section lead paragraph (16/18/20)
 *   BodyLg    — large body (16/18)
 *   BodyMd    — default body (14/16)
 *   BodySm    — small body, card descriptions (14)
 *   Caption   — captions, legal (12)
 *
 * Supporting:
 *   Kicker    — uppercase tracking labels "FEATURES" / "HOW IT WORKS" (11/12)
 */

interface TypographyProps
  extends Omit<HTMLAttributes<HTMLElement>, "className" | "children"> {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

// ─── Headings ──────────────────────────────────────────────────────────────

export function HeroTitle({
  as: Tag = "h1",
  className = "",
  children,
  ...rest
}: TypographyProps) {
  return (
    <Tag
      className={`text-4xl font-bold leading-[1.05] tracking-tight text-text-heading sm:text-5xl md:text-6xl lg:text-7xl ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function H1({
  as: Tag = "h1",
  className = "",
  children,
  ...rest
}: TypographyProps) {
  return (
    <Tag
      className={`text-3xl font-bold tracking-tight text-text-heading sm:text-4xl md:text-5xl ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function H2({
  as: Tag = "h2",
  className = "",
  children,
  ...rest
}: TypographyProps) {
  return (
    <Tag
      className={`text-2xl font-bold tracking-tight text-text-heading sm:text-3xl md:text-4xl lg:text-5xl ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function H3({
  as: Tag = "h3",
  className = "",
  children,
  ...rest
}: TypographyProps) {
  return (
    <Tag
      className={`text-xl font-bold tracking-tight text-text-heading sm:text-2xl ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function H4({
  as: Tag = "h4",
  className = "",
  children,
  ...rest
}: TypographyProps) {
  return (
    <Tag
      className={`text-lg font-bold tracking-tight text-text-heading ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function H5({
  as: Tag = "h5",
  className = "",
  children,
  ...rest
}: TypographyProps) {
  return (
    <Tag
      className={`text-base font-bold tracking-tight text-text-heading ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function H6({
  as: Tag = "h6",
  className = "",
  children,
  ...rest
}: TypographyProps) {
  return (
    <Tag
      className={`text-sm font-bold tracking-tight text-text-heading ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// ─── Body ──────────────────────────────────────────────────────────────────

export function Lead({
  as: Tag = "p",
  className = "",
  children,
  ...rest
}: TypographyProps) {
  return (
    <Tag
      className={`text-base leading-relaxed text-text-body sm:text-lg md:text-xl ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function BodyLg({
  as: Tag = "p",
  className = "",
  children,
  ...rest
}: TypographyProps) {
  return (
    <Tag
      className={`text-base leading-relaxed text-text-body sm:text-lg ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function BodyMd({
  as: Tag = "p",
  className = "",
  children,
  ...rest
}: TypographyProps) {
  return (
    <Tag
      className={`text-sm leading-relaxed text-text-body sm:text-base ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function BodySm({
  as: Tag = "p",
  className = "",
  children,
  ...rest
}: TypographyProps) {
  return (
    <Tag
      className={`text-sm leading-relaxed text-text-body ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function Caption({
  as: Tag = "span",
  className = "",
  children,
  ...rest
}: TypographyProps) {
  return (
    <Tag
      className={`text-xs leading-normal text-text-body ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// ─── Supporting ────────────────────────────────────────────────────────────

export function Kicker({
  as: Tag = "p",
  className = "",
  children,
  ...rest
}: TypographyProps) {
  return (
    <Tag
      className={`text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-700 sm:text-xs sm:tracking-[0.35em] ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
