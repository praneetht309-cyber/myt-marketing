"use client";

import { useEffect, useState } from "react";
import {
  Wallet,
  Megaphone,
  ClipboardCheck,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { PASTEL_TINT, type PastelKey } from "@/lib/palette";

interface Category {
  id: string;
  label: string;
  icon: LucideIcon;
  color: string;
  accent: PastelKey;
}

const CATEGORIES: Category[] = [
  { id: "money", label: "Money", icon: Wallet, color: "var(--color-coral-deep)", accent: "coral" },
  { id: "voice", label: "Voice", icon: Megaphone, color: "var(--color-lavender-deep)", accent: "lavender" },
  { id: "services", label: "Services", icon: ClipboardCheck, color: "var(--color-peach-deep)", accent: "peach" },
  { id: "people", label: "People", icon: Users, color: "var(--color-sage-deep)", accent: "sage" },
  { id: "memory", label: "Memory", icon: Wrench, color: "var(--color-sky-deep)", accent: "sky" },
];

interface CategoryNavProps {
  /** DOM id of the wrapping element that contains this nav + all its target sections.
   *  Used to detect whether the viewport is currently inside the category zone. */
  zoneId: string;
}

export function CategoryNav({ zoneId }: CategoryNavProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [activeId, setActiveId] = useState<string>(CATEGORIES[0].id);

  // Track scroll position vs the zone wrapper's bounding rect. Sticky when the
  // zone has scrolled past the top (its top <= 0) AND hasn't fully scrolled out
  // yet (its bottom > 0). That way the pills "detach" the moment we leave the
  // hero and "reattach" back to flow once we exit the last category band.
  useEffect(() => {
    const zone = document.getElementById(zoneId);
    if (!zone) return;

    const onScroll = () => {
      const rect = zone.getBoundingClientRect();
      setIsSticky(rect.top <= 0 && rect.bottom > 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [zoneId]);

  // Broadcast sticky state via a body class. The global Header listens to this
  // and suppresses the watch-dial pill while we're in the category zone, so the
  // category pills own the center-top slot without overlap.
  useEffect(() => {
    document.body.classList.toggle("category-nav-stuck", isSticky);
    return () => {
      document.body.classList.remove("category-nav-stuck");
    };
  }, [isSticky]);

  // Scroll-spy: highlight the chip for whichever section is most in view.
  useEffect(() => {
    const sections = CATEGORIES.map((c) => document.getElementById(c.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (!sections.length) return;

    const spy = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    sections.forEach((s) => spy.observe(s));
    return () => spy.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div
      className={
        isSticky
          ? "pointer-events-none fixed left-0 right-0 top-4 z-50 flex justify-center px-4 sm:top-5"
          : "relative flex justify-center px-4 py-4"
      }
    >
      <div className="pointer-events-auto inline-flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-primary/10 bg-[rgba(252,249,243,0.94)] px-1.5 py-1.5 shadow-sm backdrop-blur-md sm:gap-1.5 sm:px-2 sm:py-2">
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          const active = activeId === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => scrollTo(cat.id)}
              className={`inline-flex flex-shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-[11px] font-semibold transition-colors sm:gap-2 sm:px-3.5 sm:text-sm ${
                active
                  ? "shadow-sm"
                  : "border-transparent bg-transparent text-text-body hover:bg-white hover:text-primary"
              }`}
              style={
                active
                  ? {
                      backgroundColor: PASTEL_TINT[cat.accent],
                      color: cat.color,
                      borderColor: cat.color,
                    }
                  : undefined
              }
            >
              <Icon
                className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                strokeWidth={2.2}
                style={{ color: cat.color }}
              />
              <span className={isSticky ? "hidden sm:inline" : "inline"}>
                {cat.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
