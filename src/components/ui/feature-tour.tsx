"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface PainPoint {
  pain: string;
  solution: string;
  detail: string;
  placeholder: string;
}

interface FeatureTourProps {
  painPoints: PainPoint[];
}

export function FeatureTour({ painPoints }: FeatureTourProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const totalSections = painPoints.length;

  return (
    <section ref={containerRef} className="relative bg-white">
      {/* Total height = number of sections * 100vh */}
      <div style={{ height: `${totalSections * 100}vh` }}>
        {/* Sticky container — stays in viewport while user scrolls */}
        <div className="sticky top-0 flex h-dvh items-center overflow-hidden">
          <div className="mx-auto flex w-full max-w-6xl items-center gap-8 px-4 sm:gap-12 sm:px-6 lg:gap-20">
            {/* Left — Text that fades in/out */}
            <div className="flex-1">
              <div className="relative h-[280px] sm:h-[320px]">
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

            {/* Right — Phone with 3D tilt transitions */}
            <div className="hidden flex-shrink-0 md:block" style={{ perspective: 1200 }}>
              <PhoneWithTilt
                scrollYProgress={scrollYProgress}
                totalSections={totalSections}
                painPoints={painPoints}
              />
            </div>
          </div>

          {/* Progress dots */}
          <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 flex-col gap-3 sm:flex lg:right-8">
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
    </section>
  );
}

/* ----------------------------------------------------------------
   Text block — fades in when its section is active
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
  const mid = start + sectionSize * 0.15;
  const end = start + sectionSize * 0.85;
  const out = start + sectionSize;

  const opacity = useTransform(
    scrollYProgress,
    [start, mid, end, out],
    [0, 1, 1, 0],
  );
  const y = useTransform(
    scrollYProgress,
    [start, mid, end, out],
    [40, 0, 0, -40],
  );

  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-center"
      style={{ opacity, y }}
    >
      <span className="text-xs font-semibold uppercase tracking-widest text-primary/50">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
      <p className="mt-4 text-lg font-medium text-text-body/40 line-through decoration-text-body/20 decoration-2 sm:text-xl">
        {pain}
      </p>
      <h3 className="mt-3 text-3xl font-bold text-text-heading sm:text-4xl lg:text-5xl">
        {solution}
      </h3>
      <p className="mt-4 max-w-md text-base leading-relaxed text-text-body">
        {detail}
      </p>
    </motion.div>
  );
}

/* ----------------------------------------------------------------
   Phone — 3D tilt + video/placeholder swap
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
  // Rotate on Y-axis: 0 → -15 → 0 → 15 → 0 ... subtle tilt per transition
  const rotateKeyframes: number[] = [];
  const rotateValues: number[] = [];
  for (let i = 0; i < totalSections; i++) {
    const sectionSize = 1 / totalSections;
    const start = i * sectionSize;
    const mid = start + sectionSize * 0.5;
    rotateKeyframes.push(start, mid);
    rotateValues.push(i % 2 === 0 ? 0 : -12, i % 2 === 0 ? 12 : 0);
  }
  // End at 0
  rotateKeyframes.push(1);
  rotateValues.push(0);

  const rotateY = useTransform(scrollYProgress, rotateKeyframes, rotateValues);

  return (
    <motion.div
      style={{ rotateY }}
      className="phone-float"
    >
      <div
        className="relative w-[260px] overflow-hidden rounded-[36px] border-[3px] border-neutral-700 bg-white shadow-2xl lg:w-[300px]"
        style={{ aspectRatio: "9 / 19.5" }}
      >
        {/* Notch */}
        <div className="absolute left-1/2 top-0 z-20 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-neutral-700" />

        {/* Video/placeholder layers — stack on top of each other */}
        {painPoints.map((item, i) => (
          <PhoneScreen
            key={i}
            index={i}
            total={totalSections}
            scrollYProgress={scrollYProgress}
            placeholder={item.placeholder}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* ----------------------------------------------------------------
   Individual phone screen — fades based on scroll
   ---------------------------------------------------------------- */
function PhoneScreen({
  index,
  total,
  scrollYProgress,
  placeholder,
}: {
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  placeholder: string;
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
      className="absolute inset-0 z-10 flex items-center justify-center bg-surface-page"
      style={{ opacity }}
    >
      {/* Replace this div with <video> when recordings are ready */}
      {/* <video src={`/videos/${slug}.mp4`} autoPlay loop muted playsInline className="h-full w-full object-cover" /> */}
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
          <svg className="h-7 w-7 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
          </svg>
        </div>
        <p className="text-sm font-medium text-text-body/50">{placeholder}</p>
        <p className="text-xs text-text-body/30">Video coming soon</p>
      </div>
    </motion.div>
  );
}

/* ----------------------------------------------------------------
   Progress dot — lights up when its section is active
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
