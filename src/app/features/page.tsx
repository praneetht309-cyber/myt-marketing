"use client";

import Image from "next/image";
import Link from "next/link";
import { FEATURES } from "@/lib/constants";
import { FeatureIcon } from "@/components/ui/feature-icon";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";

const DETAILED_FEATURES = [
  {
    title: "Instant Apartment Onboarding",
    description:
      "Create your apartment with just 6 fields — apartment name, your name, flat number, total flats, monthly maintenance, and available balance. Your community is live in 15 seconds. Import existing data from Excel spreadsheets, or complete setup gradually through guided prompts.",
    image:
      "https://images.unsplash.com/photo-1632400990400-416d5460f337?w=600&q=80",
  },
  {
    title: "Complete Financial Management",
    description:
      "Track your operating account and corpus fund separately — just like real apartment accounting. Record payments from residents, view flat-wise balances, and monitor income vs expenses. Every financial transaction is tracked with a running balance.",
    image:
      "https://images.unsplash.com/photo-1565373679580-fc0cb538f49c?w=600&q=80",
  },
  {
    title: "Seamless Communication",
    description:
      "Send notices, announcements, and reminders to your entire community with one tap. Built-in community chat keeps discussions organised — no more unrelated messages in the apartment WhatsApp group.",
    image:
      "https://images.unsplash.com/photo-1553009338-80e505b3f61b?w=600&q=80",
  },
  {
    title: "Smart Roles & Permissions",
    description:
      "MYT understands that every resident has a different role. Admins, owners, tenants, and watchmen each see features relevant to them. Permissions are fine-grained — a tenant can pay maintenance but can't manage members. An absentee owner can view financials but won't see community chat.",
    image:
      "https://images.unsplash.com/photo-1760630101210-bcbd0ed90939?w=600&q=80",
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <ScrollReveal animation="fade" direction="up">
            <span className="inline-block rounded-full bg-secondary/20 px-4 py-1.5 text-sm font-semibold text-primary">
              Features
            </span>
          </ScrollReveal>
          <ScrollReveal animation="fade" direction="up" delay={0.1}>
            <h1 className="mt-6 text-4xl font-bold text-text-heading sm:text-5xl">
              Everything for Stand Alone Apartments
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade" direction="up" delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-text-body">
              MYT replaces spreadsheets, WhatsApp groups, and manual registers
              with one unified platform designed for Indian residential
              communities.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="bg-surface-page py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <StaggerContainer
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            staggerDelay={0.08}
          >
            {FEATURES.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="rounded-2xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-md">
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

      {/* Detailed Feature Sections — Alternating */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl space-y-24 px-4 sm:px-6">
          {DETAILED_FEATURES.map((feature, i) => {
            const isReversed = i % 2 === 1;
            return (
              <div
                key={feature.title}
                className="grid items-center gap-12 lg:grid-cols-2"
              >
                <ScrollReveal
                  animation="slide"
                  direction={isReversed ? "right" : "left"}
                  className={isReversed ? "lg:order-2" : ""}
                >
                  <h2 className="text-2xl font-bold text-text-heading sm:text-3xl">
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
                  <div className="overflow-hidden rounded-2xl shadow-lg">
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

      {/* CTA */}
      <ScrollReveal animation="blur" direction="up" duration={0.8}>
        <section className="bg-primary py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="text-3xl font-bold text-white">
              Ready to Try It Out?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Sign up for early access and onboard your apartment in 15 seconds.
            </p>
            <Link
              href="/early-access"
              className="mt-8 inline-block rounded-lg bg-secondary px-8 py-3.5 text-sm font-bold text-primary transition-transform hover:scale-105"
            >
              Get Early Access
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
