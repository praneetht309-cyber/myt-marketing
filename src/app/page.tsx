"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { FeatureTour } from "@/components/ui/feature-tour";
import { SITE } from "@/lib/constants";
import {
  Eye,
  Smartphone,
  ClipboardCheck,
  Megaphone,
  Lock,
  MapPin,
  ShieldCheck,
  Download,
} from "lucide-react";

const PAIN_POINTS = [
  {
    pain: "Sending monthly maintenance payment screenshots on WhatsApp?",
    solution: "Tap. Pay. Done.",
    detail: "Resident records → Admin Approves. Accounts updated instantly!",
    placeholder: "Pay Maintenance",
    video: "/videos/paymaintenance.mp4",
    color: "coral" as const,
  },
  {
    pain: "Still tracking accounts in Excel?",
    solution: "Automated. Live. Accurate.",
    detail: "Any transaction → Accounts update live. No formulas, no errors!",
    placeholder: "Accounts Dashboard",
    video: "/videos/accounts.mp4",
    color: "sage" as const,
  },
  {
    pain: "Noisy neighbour at 11 PM?",
    solution: "Send a notice in 10 seconds.",
    detail: "Write → Send to one, many, or all. Formal and trackable!",
    placeholder: "Send Notice",
    video: "/videos/notice.mp4",
    color: "lavender" as const,
  },
  {
    pain: "Complaint lost in the WhatsApp group?",
    solution: "Raise a request. Track it.",
    detail: "Resident raises → Admin resolves. Full history — no more \"I told you\"!",
    placeholder: "Requests & Complaints",
    video: "/videos/raiserequest.mp4",
    color: "peach" as const,
  },
];

export default function Home() {
  return (
    <>
      {/* ================================================================
          HERO — Premium minimalist with spotlight
          ================================================================ */}
      <section
        className="relative -mt-24 overflow-hidden pt-24"
        style={{ backgroundColor: "#FCF9F3" }}
      >
        {/* Warm cream hero bg — matches the pill header bands for visual
            unity. Flat tint, no gradients (those tested poorly). */}

        <div className="relative mx-auto flex max-w-3xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 md:min-h-[calc(100dvh-6rem)] md:py-16">
          {/* Twin-credential pills — seal moved to hero header, so these
              stand alone as the "by us, for us" parallel. */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col items-center gap-2.5"
          >
            <span className="inline-flex items-center justify-center rounded-full border border-primary/15 bg-white/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary/75 shadow-sm backdrop-blur-sm sm:text-[11px] sm:tracking-[0.28em]">
              Built only for Stand Alone Apartments
            </span>
            <span className="inline-flex items-center justify-center rounded-full border border-primary/15 bg-white/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary/75 shadow-sm backdrop-blur-sm sm:text-[11px] sm:tracking-[0.28em]">
              Built by a stand alone apartment resident
            </span>
          </motion.div>

          {/* Setup question — smaller, reads as the hook */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-10 text-xl leading-snug text-text-heading sm:text-2xl lg:text-3xl"
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
            className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-text-heading sm:text-4xl lg:text-5xl xl:text-6xl"
          >
            <span
              className="bg-clip-text font-black text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #083A4F 0%, #204D60 55%, #507381 100%)",
              }}
            >
              MYT
            </span>{" "}
            <span className="text-text-heading">
              does it{" "}
              <span className="relative inline-block">
                all
                <svg
                  aria-hidden
                  viewBox="0 0 180 14"
                  preserveAspectRatio="none"
                  className="pointer-events-none absolute -bottom-2 left-0 h-[0.3em] w-full"
                >
                  <path
                    d="M3 9 C 40 3, 90 13, 177 5"
                    fill="none"
                    stroke="#D2A34A"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </span>
          </motion.h1>

          {/* Subhead — supporting claim, restrained */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 max-w-2xl text-base leading-relaxed text-text-body sm:text-lg lg:text-xl"
          >
            <p>
              Your apartment&apos;s maintenance, accounts, complaints, chat,
              and more —{" "}
              <span className="font-semibold text-text-heading">handled</span>.
            </p>
          </motion.div>

          {/* Primary CTA — two-line: main action + speed promise */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-10"
          >
            <Link
              href="/download"
              className="group inline-flex min-w-[280px] items-center justify-between rounded-full bg-primary px-7 py-4 text-white shadow-[0_10px_30px_-10px_rgba(8,58,79,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(8,58,79,0.55)] sm:min-w-[320px] sm:px-9 sm:py-5"
            >
              <span className="flex flex-1 flex-col items-center leading-tight">
                <span className="text-base font-semibold sm:text-lg">
                  Create My Apartment
                </span>
                <span className="text-[11px] font-medium text-white/70 sm:text-xs">
                  in under 15 seconds
                </span>
              </span>
              <svg
                className="h-5 w-5 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
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

          {/* Trust proof row — horizontal pills, breaks the vertical stack
              and composes 4 credentials (Free / No ads / Fast setup / Resident-built) */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.78, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
          >
            {[
              { dot: "var(--color-sage)", label: "Free to use" },
              { dot: "var(--color-sky)", label: "No ads" },
            ].map((pill) => (
              <span
                key={pill.label}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-3.5 py-1.5 text-[11px] font-medium text-text-body shadow-[0_1px_2px_rgba(8,58,79,0.04)] backdrop-blur-sm sm:text-xs"
              >
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                  style={{ backgroundColor: pill.dot }}
                />
                {pill.label}
              </span>
            ))}
          </motion.div>
        </div>

      </section>

      {/* ================================================================
          FOR RESIDENTS — compact band, answers "what's in it for me?"
          for the 9:1 resident-to-admin traffic coming from WhatsApp invites.
          Pastel pilot: Sage / Coral / Peach / Lavender categorical.
          ================================================================ */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #FDEBD933 0%, #F7F7F5 45%, #DDE9F033 100%)",
        }}
      >
        {/* Soft directional glow — warms the top-left, cools the bottom-right */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 600px 300px at 15% 0%, rgba(229, 167, 117, 0.10), transparent 70%), radial-gradient(ellipse 700px 400px at 90% 100%, rgba(123, 162, 189, 0.08), transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <ScrollReveal animation="fade" direction="up">
            <div className="text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-700 sm:text-xs sm:tracking-[0.35em]">
                For Residents
              </p>
              <h2 className="mt-6 text-2xl font-bold leading-tight tracking-tight text-text-heading sm:text-3xl lg:text-4xl">
                Finally, an app for your apartment.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-body sm:text-lg">
                Got a WhatsApp invitation from your admin, or have a joining
                code? Here&apos;s what you&apos;re joining.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade" direction="up" delay={0.15}>
            <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {/* Transparency — Sage */}
              <div
                className="group relative rounded-2xl border p-6 shadow-[0_1px_2px_rgba(8,58,79,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(86,113,89,0.25)]"
                style={{
                  backgroundColor: "var(--color-sage-light)",
                  borderColor: "rgba(122, 163, 127, 0.25)",
                }}
              >
                <div
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-sm transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: "var(--color-sage-deep)" }}
                >
                  <Eye className="h-5 w-5" strokeWidth={2} />
                </div>
                <p className="mt-5 text-base font-bold tracking-tight text-text-heading">
                  Transparency
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-body">
                  See where your maintenance money goes. Every rupee, every
                  month.
                </p>
              </div>

              {/* Pay from phone — Coral */}
              <div
                className="group relative rounded-2xl border p-6 shadow-[0_1px_2px_rgba(8,58,79,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(194,98,79,0.25)]"
                style={{
                  backgroundColor: "var(--color-coral-light)",
                  borderColor: "rgba(224, 132, 113, 0.25)",
                }}
              >
                <div
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-sm transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: "var(--color-coral-deep)" }}
                >
                  <Smartphone className="h-5 w-5" strokeWidth={2} />
                </div>
                <p className="mt-5 text-base font-bold tracking-tight text-text-heading">
                  Pay from your phone
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-body">
                  No cash. No registers. No WhatsApp screenshots.
                </p>
              </div>

              {/* Complaints tracked — Peach */}
              <div
                className="group relative rounded-2xl border p-6 shadow-[0_1px_2px_rgba(8,58,79,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(191,130,81,0.25)]"
                style={{
                  backgroundColor: "var(--color-peach-light)",
                  borderColor: "rgba(229, 167, 117, 0.25)",
                }}
              >
                <div
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-sm transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: "var(--color-peach-deep)" }}
                >
                  <ClipboardCheck className="h-5 w-5" strokeWidth={2} />
                </div>
                <p className="mt-5 text-base font-bold tracking-tight text-text-heading">
                  Complaints that don&apos;t get lost
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-body">
                  Logged, tracked, resolved — not buried in a WhatsApp group.
                </p>
              </div>

              {/* Your voice counts — Lavender */}
              <div
                className="group relative rounded-2xl border p-6 shadow-[0_1px_2px_rgba(8,58,79,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(106,92,149,0.25)]"
                style={{
                  backgroundColor: "var(--color-lavender-light)",
                  borderColor: "rgba(142, 128, 183, 0.25)",
                }}
              >
                <div
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-sm transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: "var(--color-lavender-deep)" }}
                >
                  <Megaphone className="h-5 w-5" strokeWidth={2} />
                </div>
                <p className="mt-5 text-base font-bold tracking-tight text-text-heading">
                  Your voice counts
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-body">
                  Polls, announcements, updates — heard, not silenced in
                  noise.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade" direction="up" delay={0.3}>
            <p className="mt-14 text-center text-sm text-text-body/70 sm:text-base">
              Install MYT — your invite link or joining code will get you in.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          FEATURE TOUR — Scroll-driven sticky phone with 3D tilt
          ================================================================ */}
      <FeatureTour painPoints={PAIN_POINTS} />

      {/* ================================================================
          EMOTIONAL HOOK — Why MYT exists (lands after product proof).
          Sage atmospheric bg blends from Feature Tour block 4's peach
          via color-shift (intentional section change, no white seam).
          ================================================================ */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 1200px 500px at 50% 0%, rgba(122, 163, 127, 0.35), transparent 70%), #FFFFFF",
        }}
      >
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28">
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
          MISSION + FOUNDER — merged trust block.
          Mission (collective voice, centered) leads;
          Founder letter (personal voice, left-aligned) follows.
          Off-white bg keeps the letter readable; Final CTA carries
          the remaining dark moment on the page.
          ================================================================ */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-3xl px-4 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-20">
          {/* Mission beat */}
          <ScrollReveal animation="fade" direction="up">
            <div className="text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-700 sm:text-xs sm:tracking-[0.35em]">
                Our Mission
              </p>
              <p className="mt-6 text-2xl font-semibold leading-snug text-text-heading sm:text-3xl lg:text-4xl">
                We serve residents ignored for{" "}
                <span className="text-amber-700">20+ years</span>.
              </p>
            </div>
          </ScrollReveal>

          {/* Soft transition between collective and personal voices */}
          <div className="my-16 flex justify-center sm:my-20">
            <div className="h-px w-16 bg-neutral-300" />
          </div>

          {/* Founder beat */}
          <ScrollReveal animation="fade" direction="up" delay={0.15}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-700 sm:text-xs sm:tracking-[0.35em]">
              From the Founder
            </p>
            <p
              aria-hidden
              className="mt-4 font-lora italic text-6xl leading-none text-amber-700/50 select-none"
            >
              &ldquo;
            </p>
            <div className="mt-1 space-y-5 font-lora italic text-lg leading-relaxed text-text-body sm:text-xl sm:leading-relaxed">
              <p>
                Stand alone apartments are invisible to the software industry.
                I live in one. So I built the app none of us ever had.
              </p>
              <p>
                For years our building in Hyderabad ran on WhatsApp screenshots
                and Excel sheets. Every app on the market was built for gated
                communities and high-rise apartments with hundreds of flats
                and professional managers — not for buildings like mine.{' '}
                <span className="font-semibold text-primary not-italic">
                  MYT
                </span>{' '}
                is the app my building uses today.
              </p>
              <p>MYT is free to use.</p>
              <p>
                Trust isn&apos;t a tagline for us — it&apos;s the operating system.
                No ads. No data sales. Your data is yours.
              </p>
            </div>
            <div className="mt-8 text-right">
              <p className="text-base font-semibold text-text-heading">
                — Founder, MYT
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          SECURITY — concrete claims that back up the Founder's trust line.
          Sky palette — trustworthy, brand-adjacent blue.
          ================================================================ */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 900px 400px at 50% 0%, rgba(123, 162, 189, 0.12), transparent 65%), #FFFFFF",
        }}
      >
        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24">
          <ScrollReveal animation="fade" direction="up">
            <div className="text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-700 sm:text-xs sm:tracking-[0.35em]">
                Security
              </p>
              <h2 className="mx-auto mt-6 max-w-3xl text-2xl font-bold leading-tight tracking-tight text-text-heading sm:text-3xl lg:text-4xl">
                Your apartment&apos;s finances. Protected like they&apos;re ours.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-body sm:text-lg">
                The same protections we apply to our own apartment&apos;s data.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade" direction="up" delay={0.15}>
            <div className="mt-14 grid grid-cols-2 gap-10 sm:grid-cols-4 sm:gap-6">
              {/* Encrypted */}
              <div className="text-center">
                <div
                  className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-sm"
                  style={{ backgroundColor: "var(--color-sky-deep)" }}
                >
                  <Lock className="h-5 w-5" strokeWidth={2} />
                </div>
                <p className="mt-4 text-sm font-bold tracking-tight text-text-heading">
                  Encrypted
                </p>
                <p className="mt-1 text-xs leading-relaxed text-text-body">
                  In transit and at rest.
                </p>
              </div>

              {/* Data stored in India */}
              <div className="text-center">
                <div
                  className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-sm"
                  style={{ backgroundColor: "var(--color-sky-deep)" }}
                >
                  <MapPin className="h-5 w-5" strokeWidth={2} />
                </div>
                <p className="mt-4 text-sm font-bold tracking-tight text-text-heading">
                  Data stored in India
                </p>
                <p className="mt-1 text-xs leading-relaxed text-text-body">
                  Your records stay home.
                </p>
              </div>

              {/* Private by default */}
              <div className="text-center">
                <div
                  className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-sm"
                  style={{ backgroundColor: "var(--color-sky-deep)" }}
                >
                  <ShieldCheck className="h-5 w-5" strokeWidth={2} />
                </div>
                <p className="mt-4 text-sm font-bold tracking-tight text-text-heading">
                  Private by default
                </p>
                <p className="mt-1 text-xs leading-relaxed text-text-body">
                  Neighbours can&apos;t see your balance.
                </p>
              </div>

              {/* Export anytime */}
              <div className="text-center">
                <div
                  className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-sm"
                  style={{ backgroundColor: "var(--color-sky-deep)" }}
                >
                  <Download className="h-5 w-5" strokeWidth={2} />
                </div>
                <p className="mt-4 text-sm font-bold tracking-tight text-text-heading">
                  Export anytime
                </p>
                <p className="mt-1 text-xs leading-relaxed text-text-body">
                  Your data is yours.
                </p>
              </div>
            </div>
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
              Built for apartments with <span className="text-primary">3 to 100</span> flats.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-text-body">
              Whether you have one block or ten. One Admin or many Admins.
              MYT adapts to your apartment — not the other way around.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          HONEST ANSWERS — FAQ without accordions, always visible.
          Mixed admin + resident objections; last pre-conversion reassurance.
          ================================================================ */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 sm:py-28">
          <ScrollReveal animation="fade" direction="up">
            <div className="text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-700 sm:text-xs sm:tracking-[0.35em]">
                Honest Answers
              </p>
              <h2 className="mx-auto mt-6 max-w-3xl text-2xl font-semibold leading-snug text-text-heading sm:text-3xl lg:text-4xl">
                Questions you&apos;ll ask. Answered honestly.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade" direction="up" delay={0.15}>
            <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-12">
              {/* 1. Will residents use it */}
              <div>
                <p className="text-lg font-semibold text-text-heading">
                  Will my residents actually use it?
                </p>
                <p className="mt-3 text-base leading-relaxed text-text-body">
                  Yes. We invite them over WhatsApp — install takes 90
                  seconds. Once one resident pays maintenance from their
                  phone, the rest switch fast. They see real value too —
                  transparency on apartment finances, complaints that don&apos;t
                  get lost, and notices they actually read.
                </p>
              </div>

              {/* 2. How long does setup take */}
              <div>
                <p className="text-lg font-semibold text-text-heading">
                  How long does setup take?
                </p>
                <p className="mt-3 text-base leading-relaxed text-text-body">
                  Under 3 minutes, end to end. 15 seconds for the bare
                  essentials — just 6 fields.
                </p>
              </div>

              {/* 3. What if we're already on Excel */}
              <div>
                <p className="text-lg font-semibold text-text-heading">
                  What if we&apos;re already on Excel?
                </p>
                <p className="mt-3 text-base leading-relaxed text-text-body">
                  Upload your sheet during setup. Our AI reads it into MYT —
                  you review, fix anything wrong, and confirm. No retyping.
                </p>
              </div>

              {/* 4. Is it really free */}
              <div>
                <p className="text-lg font-semibold text-text-heading">
                  Is it really free? What&apos;s the catch?
                </p>
                <p className="mt-3 text-base leading-relaxed text-text-body">
                  No catch. The app is free for apartments. If we ever charge
                  for anything, it&apos;ll be an optional add-on — never a
                  required fee to run your apartment.
                </p>
              </div>

              {/* 5. What if MYT shuts down */}
              <div>
                <p className="text-lg font-semibold text-text-heading">
                  What if MYT shuts down, or we want to leave?
                </p>
                <p className="mt-3 text-base leading-relaxed text-text-body">
                  Export your full data in one click, anytime. Your records
                  are yours — not ours.
                </p>
              </div>
            </div>
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
            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-300 sm:text-xs sm:tracking-[0.35em]">
                Founding Cohort · First 100 Apartments
              </p>
              <p className="mt-3 text-xs text-white/60 sm:text-sm">
                Priority onboarding · Direct line to the founder · First say
                on what we build
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
