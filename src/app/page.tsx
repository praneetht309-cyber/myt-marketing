"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import { FeatureTour } from "@/components/ui/feature-tour";

const PAIN_POINTS = [
  {
    pain: "Sending payment screenshots on WhatsApp?",
    solution: "Tap. Pay. Done.",
    detail: "One tap to pay maintenance. Admin sees it instantly. No screenshots, no chasing, no confusion.",
    placeholder: "Pay Maintenance",
    // Replace with: /videos/pay-maintenance.mp4
  },
  {
    pain: "Still tracking accounts in Excel?",
    solution: "Automated. Always accurate.",
    detail: "Operating balance, recent transactions, flat-wise dues — all live, always updated. No formulas, no errors.",
    placeholder: "Accounts Dashboard",
    // Replace with: /videos/accounts.mp4
  },
  {
    pain: "Noisy neighbour at 11 PM?",
    solution: "Send a notice in 10 seconds.",
    detail: "Formal, trackable, no awkward confrontations. Pick the type, write a line, send. Everyone gets it.",
    placeholder: "Send Notice",
    // Replace with: /videos/send-notice.mp4
  },
  {
    pain: "50 unread messages in society group?",
    solution: "MYT Community Chat.",
    detail: "Apartment discussions stay here — not buried under memes and forwards. Organised, searchable, relevant.",
    placeholder: "Community Chat",
    // Replace with: /videos/community-chat.mp4
  },
];

const STEPS = [
  {
    number: "1",
    title: "Enter 6 details",
    description: "Apartment name, your name, flat number, total flats, maintenance amount, and current balance.",
    stat: { target: 6, suffix: "", label: "fields" },
  },
  {
    number: "2",
    title: "You're inside the app",
    description: "Explore your dashboard, see your apartment structure — everything works immediately.",
    stat: { target: 15, suffix: "s", label: "to set up" },
  },
  {
    number: "3",
    title: "Complete setup at your pace",
    description: "Add residents, fill in details — the app guides you step by step. No rush.",
    stat: { target: 100, suffix: "%", label: "your pace" },
  },
];

export default function Home() {
  return (
    <>
      {/* ================================================================
          HERO — Light, warm, product-first
          ================================================================ */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="mx-auto flex min-h-[calc(100dvh-4rem)] max-w-6xl flex-col items-center justify-center gap-12 px-4 py-16 sm:px-6 md:flex-row md:gap-16 md:py-20 lg:gap-20">
          {/* Left — Text */}
          <div className="flex-1 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-3xl font-bold leading-tight tracking-tight text-text-heading sm:text-4xl lg:text-5xl xl:text-6xl"
            >
              Stop managing your apartment on{" "}
              <span className="text-primary">Excel</span> and{" "}
              <span className="text-primary">WhatsApp.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="mx-auto mt-5 max-w-lg text-base text-text-body sm:text-lg md:mx-0"
            >
              Maintenance payments, accounts, notices, and more — one app.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:items-start"
            >
              <Link
                href="/early-access"
                className="inline-block rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-hover hover:shadow-lg"
              >
                Get Started — It&apos;s Free
              </Link>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 flex items-center justify-center gap-2 text-sm text-text-body/60 md:justify-start"
            >
              <span className="inline-flex items-center gap-1.5">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-secondary" />
                6 fields
              </span>
              <span className="text-text-body/30">·</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-secondary" />
                15 seconds
              </span>
              <span className="text-text-body/30">·</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-secondary" />
                You&apos;re live
              </span>
            </motion.div>
          </div>

          {/* Right — Phone mockup (static dashboard) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex-shrink-0"
          >
            {/* Replace PhoneMockup with a real screenshot: */}
            {/* <Image src="/dashboard-screenshot.png" alt="MYT Dashboard" width={300} height={650} className="phone-float" /> */}
            <PhoneMockup className="phone-float" />
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-text-body/40">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <svg className="h-5 w-5 text-text-body/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ================================================================
          FEATURE TOUR — Scroll-driven sticky phone with 3D tilt
          ================================================================ */}
      <FeatureTour painPoints={PAIN_POINTS} />

      {/* ================================================================
          HOW IT WORKS — 3 steps with animated counters
          ================================================================ */}
      <section className="border-t border-neutral-200 bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <ScrollReveal animation="fade" direction="up">
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-primary/50">
              How it works
            </p>
            <h2 className="mt-3 text-center text-3xl font-bold text-text-heading sm:text-4xl">
              Enter 6 details. You&apos;re inside the app in 15 seconds.
              <br />
              <span className="text-primary/60">Complete setup at your pace.</span>
            </h2>
          </ScrollReveal>

          <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-3" staggerDelay={0.15}>
            {STEPS.map((step) => (
              <StaggerItem key={step.number}>
                <div className="card-hover relative rounded-2xl border border-neutral-200 bg-surface-page p-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5">
                    <AnimatedCounter
                      target={step.stat.target}
                      suffix={step.stat.suffix}
                      className="text-2xl font-bold text-primary"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-text-heading">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-body">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ================================================================
          BUILT FOR — Community sizing
          ================================================================ */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <ScrollReveal animation="scale">
            <h2 className="text-3xl font-bold text-text-heading sm:text-4xl">
              Built for <span className="text-primary">3 to 300</span> residents.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-text-body">
              Whether you have one block or ten. One admin or three.
              MYT adapts to your apartment — not the other way around.
            </p>
          </ScrollReveal>

          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-3" staggerDelay={0.12}>
            {[
              {
                label: "Admins",
                desc: "Full control over finances, notices, and apartment settings. Built to reduce your workload.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                ),
              },
              {
                label: "Owners",
                desc: "Pay maintenance, vote on polls, view accounts, and stay informed about your building.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                ),
              },
              {
                label: "Tenants",
                desc: "Raise requests, join community chat, get notices — everything you need as a resident.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                ),
              },
            ].map((role) => (
              <StaggerItem key={role.label}>
                <div className="card-hover rounded-2xl border border-neutral-200 bg-white p-8 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary">
                    {role.icon}
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-primary">{role.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-body">{role.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ================================================================
          FINAL CTA
          ================================================================ */}
      <section className="bg-primary">
        <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 sm:py-32">
          <ScrollReveal animation="fade" direction="up">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Your apartment. Finally managed.
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Stop chasing screenshots. Stop updating spreadsheets. Start with MYT.
            </p>
            <div className="mt-8">
              <Link
                href="/early-access"
                className="inline-block rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-primary transition-all hover:bg-neutral-100 hover:shadow-lg"
              >
                Get Started — It&apos;s Free
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
