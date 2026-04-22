"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { FeatureTour } from "@/components/ui/feature-tour";
import { SITE } from "@/lib/constants";

const PAIN_POINTS = [
  {
    pain: "Sending monthly maintenance payment screenshots on WhatsApp?",
    solution: "Tap. Pay. Done.",
    detail: "Resident records → Admin Approves. Accounts updated instantly!",
    placeholder: "Pay Maintenance",
    video: "/videos/paymaintenance.mp4",
  },
  {
    pain: "Still tracking accounts in Excel?",
    solution: "Automated. Always accurate.",
    detail: "Any transaction → Accounts update live. No formulas, no errors!",
    placeholder: "Accounts Dashboard",
    video: "/videos/accounts.mp4",
  },
  {
    pain: "Noisy neighbour at 11 PM?",
    solution: "Send a notice in 10 seconds.",
    detail: "Write → Send to one, many, or all. Formal and trackable!",
    placeholder: "Send Notice",
    video: "/videos/notice.mp4",
  },
  {
    pain: "Complaint lost in the WhatsApp group?",
    solution: "Raise a request. Track it.",
    detail: "Resident raises → Admin resolves. Full history — no more \"I told you\"!",
    placeholder: "Requests & Complaints",
    video: "/videos/raiserequest.mp4",
  },
];

export default function Home() {
  return (
    <>
      {/* ================================================================
          HERO — Premium minimalist with spotlight
          ================================================================ */}
      <section className="relative overflow-hidden bg-white">
        {/* Soft radial spotlight from top — Notion-style */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[60vh]"
          style={{
            background:
              "radial-gradient(ellipse 900px 420px at 50% -10%, rgba(8, 58, 79, 0.10), transparent 70%)",
          }}
        />

        {/* Faint secondary glow for depth */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[80vh]"
          style={{
            background:
              "radial-gradient(ellipse 1400px 600px at 50% -20%, rgba(195, 150, 55, 0.05), transparent 70%)",
          }}
        />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 md:min-h-[calc(100dvh-6rem)] md:py-28">
          {/* DPIIT recognition — trust signal, top of hero */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-4 py-1.5 text-[11px] font-medium text-text-body shadow-sm backdrop-blur-sm sm:text-xs"
          >
            <svg
              className="h-3.5 w-3.5 flex-shrink-0 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
              />
            </svg>
            <span>
              Startup recognized by{" "}
              <span className="font-semibold text-text-heading">
                Government of India
              </span>
            </span>
          </motion.div>

          {/* Targeting kicker */}
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-10 text-[11px] font-semibold uppercase tracking-[0.3em] text-primary/70 sm:text-xs sm:tracking-[0.35em]"
          >
            Built only for Stand Alone Apartments
          </motion.p>

          {/* Setup question — smaller, reads as the hook */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-6 text-xl leading-snug text-text-heading sm:text-2xl lg:text-3xl"
          >
            Still using{" "}
            <span className="font-bold text-primary">Excel</span> and{" "}
            <span className="font-bold text-primary">WhatsApp</span> to manage
            your apartment?
          </motion.p>

          {/* H1 — the thesis, the answer, the claim */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-4 text-3xl leading-[1.15] tracking-tight text-text-heading sm:text-4xl lg:text-5xl xl:text-6xl"
          >
            <span className="font-bold text-primary">MYT</span>{" "}
            <span className="text-text-heading/60">replaces both.</span>
          </motion.h1>

          {/* Subhead — supporting claim, restrained */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 max-w-2xl text-base leading-relaxed text-text-body sm:text-lg lg:text-xl"
          >
            <p>
              Maintenance, Accounts, Complaints, Communications —{" "}
              <span className="font-semibold text-text-heading">ONE App</span>
              .
            </p>
            <p className="mt-5">Create your apartment in less than 15 seconds.</p>
          </motion.div>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-12"
          >
            <Link
              href="/download"
              className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-[0_10px_30px_-10px_rgba(8,58,79,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(8,58,79,0.55)] sm:text-lg"
            >
              Create My Apartment
              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </motion.div>

          {/* Credential kicker — reassurance at the conversion moment */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-primary/70 sm:text-xs sm:tracking-[0.35em]"
          >
            Built by a stand alone apartment resident
          </motion.p>
        </div>

        {/* Scroll hint — desktop-only; on mobile next section peeks anyway */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:flex"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-text-body/40">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <svg
                className="h-4 w-4 text-text-body/30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
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
          EMOTIONAL HOOK — Why MYT exists (lands after product proof)
          ================================================================ */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <ScrollReveal animation="fade" direction="up" delay={0.15}>
            <div>
              <p className="text-xl text-text-heading sm:text-2xl lg:text-3xl">
                Admins deserve <span className="font-bold">appreciation</span>.
              </p>
              <p className="mt-1 text-xl font-light italic text-primary/50 sm:text-2xl lg:text-3xl">
                Not blame.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade" direction="up" delay={0.3}>
            <div className="mt-10">
              <p className="text-xl text-text-heading sm:text-2xl lg:text-3xl">
                Residents deserve <span className="font-bold">transparency</span>.
              </p>
              <p className="mt-1 text-xl font-light italic text-primary/50 sm:text-2xl lg:text-3xl">
                Not confusion.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade" direction="up" delay={0.45}>
            <div className="mt-10">
              <p className="text-xl text-text-heading sm:text-2xl lg:text-3xl">
                Stand Alone Apartments deserve <span className="font-bold">MYT</span>.
              </p>
              <p className="mt-1 text-xl font-light italic text-primary/50 sm:text-2xl lg:text-3xl">
                Not Excel.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          MISSION BAND — dark contrast closer for the emotional hook
          ================================================================ */}
      <section className="bg-primary">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:py-28">
          <ScrollReveal animation="fade" direction="up">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-300/80 sm:text-xs sm:tracking-[0.35em]">
              Our Mission
            </p>
            <p className="mt-6 text-2xl font-semibold leading-snug text-white sm:text-3xl lg:text-4xl xl:text-5xl">
              We serve residents ignored for{" "}
              <span className="text-amber-300">20+ years</span>.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          BUILT FOR — Apartment sizing
          ================================================================ */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <ScrollReveal animation="scale">
            <h2 className="text-3xl font-bold text-text-heading sm:text-4xl">
              Built for apartments with <span className="text-primary">3, 10, 15, 20 or 100</span> flats.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-text-body">
              Whether you have one block or ten. One Admin or many Admins.
              MYT adapts to your apartment — not the other way around.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          FINAL CTA
          ================================================================ */}
      <section className="bg-primary">
        <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 sm:py-32">
          <ScrollReveal animation="fade" direction="up">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Your Apartment. Your App.
            </h2>
            <div className="mt-6 space-y-1 text-lg text-white/70">
              <p>Stop chasing screenshots.</p>
              <p>Stop updating spreadsheets.</p>
            </div>
            <p className="mt-5 text-lg font-semibold text-white">
              Start with MYT.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-6">
              {/* Google Play — live */}
              <a
                href={SITE.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get MYT on Google Play"
                className="inline-block transition-transform duration-200 hover:-translate-y-0.5"
              >
                <Image
                  src="/badges/google-play-badge.png"
                  alt="Get it on Google Play"
                  width={220}
                  height={66}
                  className="h-16 w-auto"
                  unoptimized
                />
              </a>

              {/* App Store — coming soon. Height tuned smaller to match Google Play's visible pill (Google badge has safe-zone padding, Apple doesn't). */}
              <div
                aria-disabled="true"
                className="relative inline-block cursor-not-allowed opacity-70"
              >
                <Image
                  src="/badges/app-store-badge.svg"
                  alt="Download on the App Store (coming soon)"
                  width={140}
                  height={46}
                  className="h-[46px] w-auto"
                  unoptimized
                />
                <span className="absolute -right-2 -top-2 inline-flex items-center rounded-full bg-white px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary shadow-md">
                  Coming soon
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
