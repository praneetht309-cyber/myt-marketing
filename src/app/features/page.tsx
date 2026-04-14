"use client";

import Image from "next/image";
import { FeatureIcon } from "@/components/ui/feature-icon";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";

const CORE_FEATURES = [
  {
    pain: "Sending payment screenshots on WhatsApp?",
    title: "Accounts & Maintenance",
    description:
      "Track your account balance and corpus fund separately — just like real apartment accounting. Residents record payments, Admins approve, balance updates automatically. Paid the electricity bill? Watchman salary? Account balance adjusts instantly. Every transaction tracked with a running balance.",
    image:
      "https://images.unsplash.com/photo-1565373679580-fc0cb538f49c?w=600&q=80",
    icon: "wallet",
  },
  {
    pain: "Important notice lost in WhatsApp group noise?",
    title: "Notices, Announcements & Reminders",
    description:
      "Send notices to one resident, a few, or everyone. Post announcements the whole apartment sees. Set reminders that actually get delivered. Formal, trackable, no awkward confrontations.",
    image:
      "https://images.unsplash.com/photo-1553009338-80e505b3f61b?w=600&q=80",
    icon: "megaphone",
  },
  {
    pain: "\"I told you about this last month!\"",
    title: "Requests & Complaints",
    description:
      "Residents raise requests, admins track and resolve them. Status updates, history, nothing gets lost. Transparent complaint management — no more he-said-she-said.",
    image:
      "https://images.unsplash.com/photo-1632400990400-416d5460f337?w=600&q=80",
    icon: "clipboard",
  },
  {
    pain: "Should a resident update apartment's financials?",
    title: "Roles & Permissions",
    description:
      "Everyone sees only what they should. Different people get different access — payments, financials, member management, and more. Fine-grained permissions out of the box.",
    image:
      "https://images.unsplash.com/photo-1760630101210-bcbd0ed90939?w=600&q=80",
    icon: "lock",
  },
];

const MORE_FEATURES = [
  {
    title: "Resident Directory",
    description:
      "Know who lives where. Owners, tenants, their flats — always up to date. No more asking around.",
    icon: "users",
  },
  {
    title: "Polls & Voting",
    description:
      "Need an apartment-wide decision? Create a poll. Residents vote. Results are transparent. No ambiguity.",
    icon: "clipboard",
  },
  {
    title: "Instant Onboarding",
    description:
      "Set up your apartment quickly and get going. Guided bulk setup or manual entry — you choose your pace.",
    icon: "rocket",
  },
  {
    title: "Apartment Chat",
    description:
      "Built-in chat rooms for your apartment. Organised discussions — not the 47th \"Good morning\" image in the WhatsApp group.",
    icon: "chat",
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* ================================================================
          HERO
          ================================================================ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <ScrollReveal animation="fade" direction="up">
            <p className="text-base font-medium tracking-widest text-primary/50 sm:text-lg">
              Features
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fade" direction="up" delay={0.1}>
            <h1 className="mt-6 text-3xl font-bold text-text-heading sm:text-4xl lg:text-5xl">
              Everything your apartment needs.
              <br />
              <span className="text-primary/60">Nothing it doesn&apos;t.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade" direction="up" delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-base text-text-body sm:text-lg">
              MYT replaces spreadsheets, WhatsApp groups, and manual registers
              with one app — designed for Indian stand alone apartments.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          CORE FEATURES — Alternating pain-point sections
          ================================================================ */}
      <section className="bg-white pb-8">
        <div className="mx-auto max-w-6xl space-y-20 px-4 sm:space-y-28 sm:px-6">
          {CORE_FEATURES.map((feature, i) => {
            const isReversed = i % 2 === 1;
            return (
              <div
                key={feature.title}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <ScrollReveal
                  animation="slide"
                  direction={isReversed ? "right" : "left"}
                  className={isReversed ? "lg:order-2" : ""}
                >
                  <p className="text-sm font-medium italic text-primary/50">
                    {feature.pain}
                  </p>
                  <h2 className="mt-3 text-2xl font-bold text-text-heading sm:text-3xl">
                    {feature.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-text-body">
                    {feature.description}
                  </p>
                </ScrollReveal>

                <ScrollReveal
                  animation="slide"
                  direction={isReversed ? "left" : "right"}
                  delay={0.15}
                  className={isReversed ? "lg:order-1" : ""}
                >
                  <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-lg">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={600}
                      height={400}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================================================================
          MORE FEATURES — Grid
          ================================================================ */}
      <section className="border-t border-neutral-200 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ScrollReveal animation="fade" direction="up">
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-primary/50">
              And there&apos;s more
            </p>
            <h2 className="mt-3 text-center text-2xl font-bold text-text-heading sm:text-3xl">
              Built for every part of apartment life
            </h2>
          </ScrollReveal>

          <StaggerContainer
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            staggerDelay={0.08}
          >
            {MORE_FEATURES.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="h-full rounded-2xl border border-neutral-200 bg-surface-page p-6 transition-shadow hover:shadow-md">
                  <FeatureIcon name={feature.icon} />
                  <h3 className="mt-4 font-semibold text-text-heading">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-body">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ================================================================
          FINAL CTA — Matches homepage
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
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
