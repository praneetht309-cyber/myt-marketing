"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const PAIN_POINTS = [
  {
    pain: "Still tracking maintenance in Excel?",
    solution: "MYT does it automatically.",
    detail: "Real-time dashboard. Who paid, who didn't — one glance.",
  },
  {
    pain: "Sending payment screenshots on WhatsApp?",
    solution: "Pay in-app. Admin sees it instantly.",
    detail: "No more chasing confirmations. Every payment tracked.",
  },
  {
    pain: "Noisy neighbour at 11 PM?",
    solution: "Send a notice in 2 taps.",
    detail: "Formal, trackable, no awkward confrontations.",
  },
  {
    pain: "Water shutdown tomorrow?",
    solution: "One announcement. Everyone knows.",
    detail: "No one misses it. No WhatsApp scroll-back.",
  },
  {
    pain: "50 unread messages in society group?",
    solution: "Focused community chat.",
    detail: "Apartment discussions, not memes and forwards.",
  },
  {
    pain: "Chasing the plumber's number again?",
    solution: "Handyman directory. Always there.",
    detail: "Electrician, plumber, carpenter — saved and shared.",
  },
];

const STEPS = [
  { number: "01", title: "Enter 6 details", description: "Apartment name, your name, flat number, total flats, maintenance amount, balance." },
  { number: "02", title: "App sets up everything", description: "Blocks, floors, flats, accounts — all auto-generated." },
  { number: "03", title: "You're live", description: "Invite residents. Start managing. That's it." },
];

export default function Home() {
  return (
    <>
      {/* ================================================================
          HERO — Dark, bold, 15-second punch
          ================================================================ */}
      <section className="hero-dark relative overflow-hidden">
        {/* Subtle gradient orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-secondary/10 blur-[120px]" />
          <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-white/5 blur-[100px]" />
        </div>

        <div className="relative mx-auto flex min-h-[85vh] max-w-4xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/60"
          >
            For self-managed apartments in India
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-7xl"
          >
            Create your apartment
            <br />
            <span className="text-secondary">in 15 seconds.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-6 max-w-xl text-lg text-white/50 sm:text-xl"
          >
            6 fields. No paperwork. No setup fees.
            <br />
            Just your apartment, managed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/early-access"
              className="rounded-xl bg-secondary px-8 py-3.5 text-sm font-semibold text-primary transition-all hover:bg-secondary/90 hover:shadow-lg hover:shadow-secondary/20"
            >
              Get Early Access
            </Link>
            <Link
              href="/features"
              className="rounded-xl border border-white/15 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/5"
            >
              See Features
            </Link>
          </motion.div>
        </div>

        {/* Fade to light */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-page to-transparent" />
      </section>

      {/* ================================================================
          PAIN POINTS — Stacked cards, Option B
          ================================================================ */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <ScrollReveal animation="fade" direction="up">
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-primary/60">
              Sound familiar?
            </p>
            <h2 className="mt-3 text-center text-3xl font-bold text-text-heading sm:text-4xl">
              Your apartment problems, solved.
            </h2>
          </ScrollReveal>

          <div className="mt-16 space-y-6">
            <StaggerContainer staggerDelay={0.12}>
              {PAIN_POINTS.map((item, i) => (
                <StaggerItem key={i}>
                  <PainPointCard {...item} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ================================================================
          HOW IT WORKS — 3 steps
          ================================================================ */}
      <section className="border-t border-neutral-200 bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <ScrollReveal animation="fade" direction="up">
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-primary/60">
              How it works
            </p>
            <h2 className="mt-3 text-center text-3xl font-bold text-text-heading sm:text-4xl">
              15 seconds. 3 steps. Done.
            </h2>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <ScrollReveal key={i} animation="slide" direction="up" delay={i * 0.15}>
                <div className="relative rounded-2xl border border-neutral-200 bg-surface-page p-8">
                  <span className="text-5xl font-bold text-primary/10">{step.number}</span>
                  <h3 className="mt-2 text-lg font-semibold text-text-heading">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-body">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          BUILT FOR — Community sizing
          ================================================================ */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <ScrollReveal animation="scale">
            <h2 className="text-3xl font-bold text-text-heading sm:text-4xl">
              Built for <span className="text-primary">3 to 300</span> residents.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-text-body">
              Whether you have one block or ten. One admin or three.
              MYT adapts to your apartment — not the other way around.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade" delay={0.3}>
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { label: "Admins", desc: "Full control, financial oversight" },
                { label: "Owners", desc: "Pay, vote, stay informed" },
                { label: "Tenants", desc: "Requests, chat, community" },
              ].map((role, i) => (
                <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-6">
                  <h3 className="text-sm font-semibold text-primary">{role.label}</h3>
                  <p className="mt-1 text-xs text-text-body">{role.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          FINAL CTA
          ================================================================ */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 sm:py-32">
          <ScrollReveal animation="fade" direction="up">
            <h2 className="text-3xl font-bold text-text-heading sm:text-4xl">
              Stop managing on WhatsApp.
            </h2>
            <p className="mt-4 text-lg text-text-body">
              Your apartment deserves better. Set it up in 15 seconds.
            </p>
            <div className="mt-8">
              <Link
                href="/early-access"
                className="inline-block rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-hover hover:shadow-lg"
              >
                Get Early Access — It&apos;s Free
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

/* ====================================================================
   Pain Point Card — Pain crosses out, solution appears
   ==================================================================== */
function PainPointCard({
  pain,
  solution,
  detail,
}: {
  pain: string;
  solution: string;
  detail: string;
}) {
  return (
    <div className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:border-primary/20 hover:shadow-md sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6">
        <div className="flex-1">
          <p className="text-lg font-medium text-text-heading/40 line-through decoration-primary/40 decoration-2">
            {pain}
          </p>
          <p className="mt-1 text-lg font-semibold text-primary">
            {solution}
          </p>
        </div>
        <p className="flex-shrink-0 text-sm text-text-body sm:max-w-[200px] sm:text-right">
          {detail}
        </p>
      </div>
    </div>
  );
}
