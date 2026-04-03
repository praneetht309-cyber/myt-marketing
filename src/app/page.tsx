"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const PAIN_POINTS = [
  {
    pain: "Sending payment screenshots on WhatsApp?",
    solution: "Pay in MYT.",
    detail: "Tap Pay → Confirm → Done. Admin sees it instantly. No screenshots, no chasing.",
    placeholder: "Pay Maintenance",
    // Replace with: /videos/pay-maintenance.mp4
  },
  {
    pain: "Still tracking accounts in Excel?",
    solution: "MYT Accounts.",
    detail: "Operating balance, recent transactions, flat-wise dues — all live, always updated.",
    placeholder: "Accounts Dashboard",
    // Replace with: /videos/accounts.mp4
  },
  {
    pain: "Noisy neighbour at 11 PM?",
    solution: "Send a notice.",
    detail: "Formal, trackable, no awkward confrontations. 2 taps and it's sent.",
    placeholder: "Send Notice",
    // Replace with: /videos/send-notice.mp4
  },
  {
    pain: "50 unread messages in society group?",
    solution: "MYT Community Chat.",
    detail: "Apartment discussions, not memes and forwards. Everyone in one place.",
    placeholder: "Community Chat",
    // Replace with: /videos/community-chat.mp4
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
      <section className="hero-gradient relative overflow-hidden">
        <div className="relative mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-4 py-16 text-center sm:min-h-[85vh] sm:px-6 sm:py-24">
          {/* Identity — "That's MY building" moment */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-3xl font-bold tracking-tight text-text-heading sm:text-5xl md:text-6xl"
          >
            Manage Your
            <br />
            Stand-Alone Apartment.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-6"
          >
            <TextRotator />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="mx-auto mt-6 max-w-lg text-sm text-text-body sm:text-base"
          >
            Everything your self-managed apartment needs — in one app.
            <br />
            Set up <span className="font-semibold text-primary">in 15 seconds.</span>
          </motion.p>
        </div>

      </section>

      {/* ================================================================
          FEATURE SHOWCASE — Anima-style: text left, demo right
          ================================================================ */}
      {PAIN_POINTS.map((item, i) => (
        <section key={i} className="feature-showcase border-t border-white/5">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
            <div className={`flex flex-col items-center gap-12 md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              {/* Text side */}
              <div className="flex-1">
                <ScrollReveal animation="slide" direction={i % 2 === 0 ? "left" : "right"}>
                  <p className="text-sm font-medium text-secondary/70">
                    Sound familiar?
                  </p>
                  <p className="mt-4 text-xl font-medium text-white/30 line-through decoration-white/20 decoration-2 sm:text-2xl">
                    {item.pain}
                  </p>
                  <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                    {item.solution}
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-white/40">
                    {item.detail}
                  </p>
                </ScrollReveal>
              </div>

              {/* Demo side — placeholder, replace with <video> later */}
              <div className="flex-1">
                <ScrollReveal animation="scale" delay={0.2}>
                  <div className="demo-placeholder relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    <div className="flex aspect-[9/16] max-h-[500px] items-center justify-center sm:aspect-[3/4]">
                      <div className="text-center">
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
                          <svg className="h-8 w-8 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-white/30">{item.placeholder}</p>
                        <p className="mt-1 text-xs text-white/15">Screen recording coming soon</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      ))}

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
/* ====================================================================
   Text Rotator — cycles through features in the hero
   ==================================================================== */
const ROTATING_FEATURES = [
  "Maintenance Payments",
  "Account Tracking",
  "Notices & Announcements",
  "Community Chat",
  "Resident Directory",
  "Requests & Complaints",
];

function TextRotator() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % ROTATING_FEATURES.length);
        setVisible(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-10 sm:h-14">
      <p
        className={`text-2xl font-bold text-primary transition-all duration-300 sm:text-4xl ${
          visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        {ROTATING_FEATURES[index]}
      </p>
    </div>
  );
}
