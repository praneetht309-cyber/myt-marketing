"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface PainPoint {
  pain: string;
  solution: string;
  detail: string;
  placeholder: string;
  video: string;
}

interface FeatureTourProps {
  painPoints: PainPoint[];
}

export function FeatureTour({ painPoints }: FeatureTourProps) {
  return (
    <section className="bg-neutral-50">
      {/* Section opener — frames the workflow blocks that follow */}
      <div className="mx-auto max-w-4xl px-4 pt-20 text-center sm:px-6 md:pt-28">
        <ScrollReveal animation="fade" direction="up">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary/70 sm:text-xs sm:tracking-[0.35em]">
            How it works
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-text-heading sm:text-4xl lg:text-5xl">
            Your apartment, in a few taps.
          </h2>
        </ScrollReveal>
      </div>

      {painPoints.map((item, i) => (
        <FeatureBlock
          key={i}
          index={i}
          total={painPoints.length}
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
}: PainPoint & { index: number; total: number }) {
  const reverse = index % 2 === 1;
  const isWhiteBlock = index % 2 === 0;

  return (
    <div
      className={`px-4 py-16 sm:px-6 md:py-24 lg:py-28 ${
        isWhiteBlock ? "bg-white" : ""
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row md:gap-16 lg:gap-20 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Text column */}
        <div className="w-full md:flex-1">
          <ScrollReveal animation="fade" direction="up">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary/50">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
            <p className="mt-4 text-lg font-semibold text-text-body/70 line-through decoration-text-body/50 decoration-2 md:text-2xl">
              {pain}
            </p>
            <h3 className="mt-2 text-2xl font-bold text-text-heading sm:text-3xl md:text-4xl lg:text-5xl">
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
