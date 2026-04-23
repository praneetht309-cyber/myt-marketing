"use client";

import { motion } from "framer-motion";
import { Wallet, LineChart, Bell, MessageSquare, type LucideIcon } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

type ColorKey = "coral" | "sage" | "lavender" | "peach";

interface PainPoint {
  pain: string;
  solution: string;
  detail: string;
  placeholder: string;
  video: string;
  color: ColorKey;
}

interface FeatureTourProps {
  painPoints: PainPoint[];
}

const COLOR_MAP: Record<
  ColorKey,
  { light: string; medium: string; deep: string; icon: LucideIcon }
> = {
  coral: {
    light: "var(--color-coral-light)",
    medium: "var(--color-coral)",
    deep: "var(--color-coral-deep)",
    icon: Wallet,
  },
  sage: {
    light: "var(--color-sage-light)",
    medium: "var(--color-sage)",
    deep: "var(--color-sage-deep)",
    icon: LineChart,
  },
  lavender: {
    light: "var(--color-lavender-light)",
    medium: "var(--color-lavender)",
    deep: "var(--color-lavender-deep)",
    icon: Bell,
  },
  peach: {
    light: "var(--color-peach-light)",
    medium: "var(--color-peach)",
    deep: "var(--color-peach-deep)",
    icon: MessageSquare,
  },
};

const GLOW_RGBA: Record<ColorKey, string> = {
  coral: "rgba(224, 132, 113, 0.32)",
  sage: "rgba(122, 163, 127, 0.28)",
  lavender: "rgba(142, 128, 183, 0.32)",
  peach: "rgba(229, 167, 117, 0.32)",
};

const TINT_HEX: Record<ColorKey, string> = {
  coral: "#FCE4E0",
  sage: "#E5EFE5",
  lavender: "#EAE5F4",
  peach: "#FDEBD9",
};

export function FeatureTour({ painPoints }: FeatureTourProps) {
  return (
    <section className="bg-white">
      {painPoints.map((item, i) => (
        <FeatureBlock
          key={i}
          index={i}
          total={painPoints.length}
          showSectionHeader={i === 0}
          {...item}
        />
      ))}
    </section>
  );
}

function FeatureBlock({
  pain,
  solution,
  detail,
  video,
  index,
  total,
  color,
  showSectionHeader,
}: PainPoint & {
  index: number;
  total: number;
  showSectionHeader?: boolean;
}) {
  const reverse = index % 2 === 1;
  const palette = COLOR_MAP[color];
  const Icon = palette.icon;
  const glow = GLOW_RGBA[color];
  const tint = TINT_HEX[color];

  // Alternate the glow origin so every block feels distinct
  const glowPosition = reverse ? "85% 30%" : "15% 30%";
  const tintDirection = reverse ? "225deg" : "135deg";

  return (
    <div
      className="relative overflow-hidden px-4 py-16 sm:px-6 md:py-24 lg:py-28"
      style={{
        background: `radial-gradient(ellipse 1000px 600px at ${glowPosition}, ${glow}, transparent 70%), linear-gradient(${tintDirection}, ${tint} 0%, #FFFFFF 70%)`,
      }}
    >
      {/* Section kicker — only on the first block, integrated into its atmosphere */}
      {showSectionHeader && (
        <div className="relative mx-auto mb-12 max-w-4xl text-center md:mb-16">
          <ScrollReveal animation="fade" direction="up">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-700 sm:text-xs sm:tracking-[0.35em]">
              How it works
            </p>
          </ScrollReveal>
        </div>
      )}

      <div
        className={`relative mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row md:gap-16 lg:gap-20 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Text column */}
        <div className="w-full md:flex-1">
          <ScrollReveal animation="fade" direction="up">
            <div className="flex items-center gap-3">
              <div
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-sm"
                style={{ backgroundColor: palette.deep }}
              >
                <Icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <span
                className="text-xs font-semibold uppercase tracking-[0.25em]"
                style={{ color: palette.deep, opacity: 0.8 }}
              >
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(total).padStart(2, "0")}
              </span>
            </div>
            <p className="mt-6 text-lg font-semibold text-text-body/70 line-through decoration-text-body/50 decoration-2 md:text-2xl">
              {pain}
            </p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-text-heading sm:text-3xl md:text-4xl lg:text-5xl">
              {solution}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-text-body sm:text-base md:mt-5 md:text-lg">
              {detail}
            </p>
          </ScrollReveal>
        </div>

        {/* Phone column */}
        <div className="mx-auto w-full max-w-[220px] md:max-w-[260px]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div
              className="relative overflow-hidden rounded-[28px] border-[3px] border-neutral-700 bg-white shadow-xl md:rounded-[36px]"
              style={{ aspectRatio: "9 / 19.5" }}
            >
              <div className="absolute left-1/2 top-0 z-20 h-5 w-24 -translate-x-1/2 rounded-b-xl bg-neutral-700 md:h-6 md:w-28 md:rounded-b-2xl" />
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
