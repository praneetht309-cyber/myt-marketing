/**
 * Marketing-site pastel palette — single source of truth for tint/glow hex values.
 *
 * Why this file exists:
 * - CSS variables (in globals.css) cover most usage — `var(--color-peach-deep)`
 *   works fine inside inline styles and Tailwind classes.
 * - BUT: computed `radial-gradient(...)` strings built in JS need literal hex
 *   values (`var(...)` inside a concatenated string doesn't resolve cleanly for
 *   all browsers). So the tint + glow maps end up as hex.
 * - Keeping those hex values in one place prevents drift between homepage
 *   (`feature-tour.tsx`) and features page (`features/page.tsx`) when tuning
 *   the palette.
 *
 * Rule: if you change a pastel, update BOTH this file AND globals.css. They
 * must stay in lockstep.
 */

export type PastelKey = "coral" | "sage" | "lavender" | "peach" | "sky";

/** Solid light tint — used as the base fill of a category band background. */
export const PASTEL_TINT: Record<PastelKey, string> = {
  coral: "#F7F0D5",
  sage: "#E5EFE5",
  lavender: "#EAE5F4",
  peach: "#FDEBD9",
  sky: "#DDE9F0",
};

/** Translucent glow — used as the radial-gradient overlay on a band. */
export const PASTEL_GLOW: Record<PastelKey, string> = {
  coral: "rgba(232, 196, 99, 0.30)",
  sage: "rgba(122, 163, 127, 0.26)",
  lavender: "rgba(142, 128, 183, 0.30)",
  peach: "rgba(229, 167, 117, 0.30)",
  sky: "rgba(123, 162, 189, 0.28)",
};

/** Deep accent — used for icons, chips, and strong-emphasis text.
 *  These return CSS variable references so a single edit in globals.css
 *  propagates everywhere. Safe inside inline `style` attributes. */
export const PASTEL_DEEP: Record<PastelKey, string> = {
  coral: "var(--color-coral-deep)",
  sage: "var(--color-sage-deep)",
  lavender: "var(--color-lavender-deep)",
  peach: "var(--color-peach-deep)",
  sky: "var(--color-sky-deep)",
};
