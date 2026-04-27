"use client";

import { motion } from "framer-motion";
import { Wallet, LineChart, Bell, MessageSquare, type LucideIcon } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { H2, Kicker, Lead } from "@/components/ui/typography";
import { PASTEL_TINT, PASTEL_GLOW, PASTEL_DEEP, type PastelKey } from "@/lib/palette";

// Homepage feature tour uses 4 of the 5 pastels — sky is reserved for other sections.
type ColorKey = Extract<PastelKey, "coral" | "sage" | "lavender" | "peach">;

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

// Icon per pastel — local to this component since the homepage tour assigns
// specific icons per pain point. Other pages can map differently.
const ICON_MAP: Record<ColorKey, LucideIcon> = {
  coral: Wallet,
  sage: LineChart,
  lavender: Bell,
  peach: MessageSquare,
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
  const Icon = ICON_MAP[color];
  const deep = PASTEL_DEEP[color];
  const glow = PASTEL_GLOW[color];
  const tint = PASTEL_TINT[color];

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
            <Kicker>How it works</Kicker>
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
                style={{ backgroundColor: deep }}
              >
                <Icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <span
                className="text-xs font-semibold uppercase tracking-[0.25em]"
                style={{ color: deep, opacity: 0.8 }}
              >
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(total).padStart(2, "0")}
              </span>
            </div>
            <Lead className="mt-6 font-semibold text-text-body/70 line-through decoration-text-body/50 decoration-2">
              {pain}
            </Lead>
            <H2 as="h3" className="mt-2">
              {solution}
            </H2>
            <Lead className="mt-3 max-w-md md:mt-5">
              {detail}
            </Lead>
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
