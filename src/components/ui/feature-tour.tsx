"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
    <section className="bg-white">
      {/* Mobile: simple section-based layout */}
      <div className="md:hidden">
        <MobileFeatureTour painPoints={painPoints} />
      </div>
      {/* Desktop: scroll-driven sticky phone */}
      <div className="hidden md:block">
        <DesktopFeatureTour painPoints={painPoints} />
      </div>
    </section>
  );
}

/* ================================================================
   MOBILE — Simple stacked sections with scroll-reveal
   ================================================================ */
function MobileFeatureTour({ painPoints }: { painPoints: PainPoint[] }) {
  return (
    <div className="space-y-0">
      {painPoints.map((item, i) => (
        <div key={i} className="border-t border-neutral-100 px-4 py-16 sm:px-6">
          <ScrollReveal animation="fade" direction="up">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary/50">
              {String(i + 1).padStart(2, "0")} / {String(painPoints.length).padStart(2, "0")}
            </span>
            <p className="mt-4 text-base font-medium text-text-body/40 line-through decoration-text-body/20 decoration-2">
              {item.pain}
            </p>
            <h3 className="mt-2 text-2xl font-bold text-text-heading sm:text-3xl">
              {item.solution}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-text-body sm:text-base">
              {item.detail}
            </p>
          </ScrollReveal>

          <div className="mx-auto mt-8 max-w-[220px]" style={{ perspective: 800 }}>
            <motion.div
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div
                className="relative overflow-hidden rounded-[28px] border-[3px] border-neutral-700 bg-white shadow-xl"
                style={{ aspectRatio: "9 / 19.5" }}
              >
                <div className="absolute left-1/2 top-0 z-20 h-5 w-24 -translate-x-1/2 rounded-b-xl bg-neutral-700" />
                <video
                  src={item.video}
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
      ))}
    </div>
  );
}

/* ================================================================
   DESKTOP — Scroll-driven sticky phone with 3D tilt
   ================================================================ */
function DesktopFeatureTour({ painPoints }: { painPoints: PainPoint[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const totalSections = painPoints.length;

  return (
    <div ref={containerRef} className="relative">
      <div style={{ height: `${totalSections * 200}vh` }}>
        <div className="sticky top-0 flex h-dvh items-center overflow-hidden pt-24">
          <div className="mx-auto flex w-full max-w-6xl items-center gap-12 px-6 lg:gap-20">
            {/* Left — Text */}
            <div className="flex-1">
              <div className="relative h-[320px]">
                {painPoints.map((item, i) => (
                  <FeatureText
                    key={i}
                    index={i}
                    total={totalSections}
                    scrollYProgress={scrollYProgress}
                    pain={item.pain}
                    solution={item.solution}
                    detail={item.detail}
                  />
                ))}
              </div>
            </div>

            {/* Right — Phone */}
            <div className="flex-shrink-0" style={{ perspective: 1200 }}>
              <PhoneWithTilt
                scrollYProgress={scrollYProgress}
                totalSections={totalSections}
                painPoints={painPoints}
              />
            </div>
          </div>

          {/* Progress dots */}
          <div className="absolute right-4 top-1/2 flex -translate-y-1/2 flex-col gap-3 lg:right-8">
            {painPoints.map((_, i) => (
              <ProgressDot
                key={i}
                index={i}
                total={totalSections}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------
   Text block — fades in when its section is active (desktop only)
   ---------------------------------------------------------------- */
function FeatureText({
  index,
  total,
  scrollYProgress,
  pain,
  solution,
  detail,
}: {
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  pain: string;
  solution: string;
  detail: string;
}) {
  const sectionSize = 1 / total;
  const start = index * sectionSize;
  const mid = start + sectionSize * 0.12;
  const end = start + sectionSize * 0.88;
  const out = start + sectionSize;

  const opacity = useTransform(
    scrollYProgress,
    [start, mid, end, out],
    [0, 1, 1, 0],
  );
  const y = useTransform(
    scrollYProgress,
    [start, mid, end, out],
    [30, 0, 0, -30],
  );

  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-center"
      style={{ opacity, y }}
    >
      <span className="text-xs font-semibold uppercase tracking-widest text-primary/50">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
      <p className="mt-4 text-xl font-medium text-text-body/40 line-through decoration-text-body/20 decoration-2">
        {pain}
      </p>
      <h3 className="mt-3 text-4xl font-bold text-text-heading lg:text-5xl">
        {solution}
      </h3>
      <p className="mt-4 max-w-md text-base leading-relaxed text-text-body">
        {detail}
      </p>
    </motion.div>
  );
}

/* ----------------------------------------------------------------
   Phone — 3D tilt + video swap (desktop only)
   ---------------------------------------------------------------- */
function PhoneWithTilt({
  scrollYProgress,
  totalSections,
  painPoints,
}: {
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  totalSections: number;
  painPoints: PainPoint[];
}) {
  const rotateKeyframes: number[] = [];
  const rotateValues: number[] = [];
  for (let i = 0; i < totalSections; i++) {
    const sectionSize = 1 / totalSections;
    const start = i * sectionSize;
    const mid = start + sectionSize * 0.5;
    rotateKeyframes.push(start, mid);
    rotateValues.push(i % 2 === 0 ? 0 : -12, i % 2 === 0 ? 12 : 0);
  }
  rotateKeyframes.push(1);
  rotateValues.push(0);

  const rotateY = useTransform(scrollYProgress, rotateKeyframes, rotateValues);

  return (
    <motion.div
      style={{ rotateY }}
      className="phone-float"
    >
      <div
        className="relative overflow-hidden rounded-[36px] border-[3px] border-neutral-700 bg-white shadow-2xl"
        style={{ width: 260, aspectRatio: "9 / 19.5" }}
      >
        <div className="absolute left-1/2 top-0 z-20 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-neutral-700" />
        {painPoints.map((item, i) => (
          <PhoneScreen
            key={i}
            index={i}
            total={totalSections}
            scrollYProgress={scrollYProgress}
            placeholder={item.placeholder}
            video={item.video}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* ----------------------------------------------------------------
   Phone screen — fades based on scroll (desktop only)
   ---------------------------------------------------------------- */
function PhoneScreen({
  index,
  total,
  scrollYProgress,
  video,
}: {
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  placeholder: string;
  video: string;
}) {
  const sectionSize = 1 / total;
  const start = index * sectionSize;
  const fadeIn = start + sectionSize * 0.1;
  const fadeOut = start + sectionSize * 0.9;
  const end = start + sectionSize;

  const opacity = useTransform(
    scrollYProgress,
    [start, fadeIn, fadeOut, end],
    [0, 1, 1, 0],
  );

  return (
    <motion.div
      className="absolute inset-0 z-10 overflow-hidden bg-white"
      style={{ opacity }}
    >
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover object-top"
      />
    </motion.div>
  );
}

/* ----------------------------------------------------------------
   Progress dot (desktop only)
   ---------------------------------------------------------------- */
function ProgressDot({
  index,
  total,
  scrollYProgress,
}: {
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const sectionSize = 1 / total;
  const start = index * sectionSize;
  const active = start + sectionSize * 0.1;
  const end = start + sectionSize * 0.9;
  const out = start + sectionSize;

  const scale = useTransform(
    scrollYProgress,
    [start, active, end, out],
    [1, 1.5, 1.5, 1],
  );
  const bgOpacity = useTransform(
    scrollYProgress,
    [start, active, end, out],
    [0.2, 1, 1, 0.2],
  );

  return (
    <motion.div
      className="h-2 w-2 rounded-full bg-primary"
      style={{ scale, opacity: bgOpacity }}
    />
  );
}
