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

          {/* Pricing reassurance — scan-critical, above fold */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.78, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-6 text-[13px] text-text-body/60 sm:text-sm"
          >
            Free for apartments. No ads.
          </motion.p>

          {/* Credential kicker — reassurance at the conversion moment */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-primary/70 sm:text-xs sm:tracking-[0.35em]"
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
          FOR RESIDENTS — compact band, answers "what's in it for me?"
          for the 9:1 resident-to-admin traffic coming from WhatsApp invites.
          ================================================================ */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <ScrollReveal animation="fade" direction="up">
            <div className="text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-700 sm:text-xs sm:tracking-[0.35em]">
                For Residents
              </p>
              <h2 className="mt-6 text-2xl font-semibold leading-snug text-text-heading sm:text-3xl lg:text-4xl">
                You didn&apos;t ask for another app. We know.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-body sm:text-lg">
                Got a WhatsApp invitation from your admin, or have a joining
                code? Here&apos;s what you&apos;re joining.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade" direction="up" delay={0.15}>
            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {/* Transparency */}
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_1px_2px_rgba(8,58,79,0.04)]">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </div>
                <p className="mt-4 text-base font-semibold text-text-heading">
                  Transparency
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-body">
                  See where your maintenance money goes. Every rupee, every
                  month.
                </p>
              </div>

              {/* Pay from phone */}
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_1px_2px_rgba(8,58,79,0.04)]">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                </div>
                <p className="mt-4 text-base font-semibold text-text-heading">
                  Pay from your phone
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-body">
                  No cash. No cheques. No chasing your admin for receipts.
                </p>
              </div>

              {/* Complaints tracked */}
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_1px_2px_rgba(8,58,79,0.04)]">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                <p className="mt-4 text-base font-semibold text-text-heading">
                  Complaints that don&apos;t get lost
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-body">
                  Logged, tracked, resolved — not buried in a WhatsApp thread.
                </p>
              </div>

              {/* Your voice counts */}
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_1px_2px_rgba(8,58,79,0.04)]">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                    />
                  </svg>
                </div>
                <p className="mt-4 text-base font-semibold text-text-heading">
                  Your voice counts
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-body">
                  Polls, announcements, updates — heard, not buried in a
                  group.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade" direction="up" delay={0.3}>
            <p className="mt-12 text-center text-sm text-text-body/70 sm:text-base">
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
              <p>
                MYT is free to use. Apartments shouldn&apos;t pay to manage
                themselves.
              </p>
              <p>
                Trust isn&apos;t a tagline for us — it&apos;s the operating system.
                No ads. No data sales. Your data is yours.
              </p>
            </div>
            <div className="mt-8 text-right">
              <p className="text-base font-semibold text-text-heading">
                — Praneeth
              </p>
              <p className="mt-1 text-sm text-text-body/70">Founder, MYT</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          SECURITY — concrete claims that back up the Founder's trust line.
          Compact band, no cards (differentiates from Resident section).
          ================================================================ */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24">
          <ScrollReveal animation="fade" direction="up">
            <div className="text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-700 sm:text-xs sm:tracking-[0.35em]">
                Security
              </p>
              <h2 className="mx-auto mt-6 max-w-3xl text-2xl font-semibold leading-snug text-text-heading sm:text-3xl lg:text-4xl">
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
                <div className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/5 text-primary">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>
                </div>
                <p className="mt-4 text-sm font-semibold text-text-heading">
                  Encrypted
                </p>
                <p className="mt-1 text-xs leading-relaxed text-text-body">
                  In transit and at rest.
                </p>
              </div>

              {/* Hosted in India */}
              <div className="text-center">
                <div className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/5 text-primary">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </div>
                <p className="mt-4 text-sm font-semibold text-text-heading">
                  Hosted in India
                </p>
                <p className="mt-1 text-xs leading-relaxed text-text-body">
                  Your data stays home.
                </p>
              </div>

              {/* Private by default */}
              <div className="text-center">
                <div className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/5 text-primary">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                    />
                  </svg>
                </div>
                <p className="mt-4 text-sm font-semibold text-text-heading">
                  Private by default
                </p>
                <p className="mt-1 text-xs leading-relaxed text-text-body">
                  Neighbours can&apos;t see your balance.
                </p>
              </div>

              {/* Export anytime */}
              <div className="text-center">
                <div className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/5 text-primary">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </div>
                <p className="mt-4 text-sm font-semibold text-text-heading">
                  Export anytime
                </p>
                <p className="mt-1 text-xs leading-relaxed text-text-body">
                  Your records are yours.
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
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-body sm:text-lg">
                From the person who built MYT and lives in a stand alone
                apartment too.
              </p>
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
