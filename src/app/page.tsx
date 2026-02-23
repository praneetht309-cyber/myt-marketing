"use client";

import Link from "next/link";
import Image from "next/image";
import { FEATURES, HERO_STATS, SITE } from "@/lib/constants";
import { FeatureIcon } from "@/components/ui/feature-icon";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <ScrollReveal animation="fade" direction="up" delay={0.1}>
                <h1 className="text-4xl font-bold leading-tight tracking-tight text-text-heading sm:text-5xl">
                  {SITE.tagline}
                </h1>
              </ScrollReveal>

              <ScrollReveal animation="fade" direction="up" delay={0.2}>
                <p className="mt-6 text-lg leading-relaxed text-text-body">
                  Built for self-managed residential communities in India with 3
                  to 300 residents. Finances, communication, complaints — all in
                  one app.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade" direction="up" delay={0.3}>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/early-access"
                    className="rounded-lg bg-primary px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
                  >
                    Get Early Access
                  </Link>
                  <Link
                    href="/features"
                    className="rounded-lg border border-primary px-6 py-3 text-center text-sm font-semibold text-primary transition-colors hover:bg-primary-light"
                  >
                    Explore Features
                  </Link>
                </div>
              </ScrollReveal>

              {/* Stats */}
              <StaggerContainer className="mt-10 flex gap-6" staggerDelay={0.15}>
                {HERO_STATS.map((stat) => (
                  <StaggerItem key={stat.label}>
                    <div className="glass-card px-5 py-3 text-center">
                      <p className="text-2xl font-bold text-primary">
                        <AnimatedCounter
                          target={stat.target}
                          prefix={"prefix" in stat ? stat.prefix : ""}
                          suffix={stat.suffix}
                        />
                      </p>
                      <p className="text-xs text-text-body">{stat.label}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <ScrollReveal animation="slide" direction="right" delay={0.2} duration={0.8}>
              <div className="flex justify-center">
                <PhoneMockup className="phone-float" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-surface-page py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-text-heading sm:text-4xl">
                How It Works
              </h2>
              <p className="mt-4 text-lg text-text-body">
                Get your apartment community up and running in three simple steps
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="mt-14 grid gap-8 md:grid-cols-3" staggerDelay={0.15}>
            {[
              {
                step: "1",
                title: "Create Your Apartment",
                description:
                  "Enter your apartment name, flat number, and monthly maintenance. That's it — your apartment is live in 15 seconds.",
                image:
                  "https://images.unsplash.com/photo-1670504503763-7026e1ad278b?w=400&q=80",
              },
              {
                step: "2",
                title: "Invite Residents",
                description:
                  "Share a link or add residents manually. They sign up, pick their flat, and declare owner or tenant — no admin effort needed.",
                image:
                  "https://plus.unsplash.com/premium_photo-1723672816957-4ada273d5147?w=400&q=80",
              },
              {
                step: "3",
                title: "Manage Everything",
                description:
                  "Track maintenance, send notices, manage visitors, and chat with your community — all from one place.",
                image:
                  "https://images.unsplash.com/photo-1564486593523-38d62206e706?w=400&q=80",
              },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="card-hover overflow-hidden rounded-2xl border border-transparent bg-white shadow-sm">
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      {item.step}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-text-heading">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-body">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Features Preview */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-text-heading sm:text-4xl">
                Everything You Need to Manage Your Apartment
              </h2>
              <p className="mt-4 text-lg text-text-body">
                Purpose-built for stand alone apartments in India
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            staggerDelay={0.1}
          >
            {FEATURES.slice(0, 4).map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="card-hover card-glow rounded-2xl border border-neutral-200 bg-white p-6">
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

          <ScrollReveal delay={0.3}>
            <div className="mt-10 text-center">
              <Link
                href="/features"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                See all features
                <svg
                  className="h-4 w-4"
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
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-surface-page py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-text-heading sm:text-4xl">
                Built for Real Communities
              </h2>
              <p className="mt-4 text-lg text-text-body">
                Whether you own or rent, MYT fits your role
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="mt-14 grid gap-6 md:grid-cols-3" staggerDelay={0.15}>
            {[
              {
                role: "Apartment Admins",
                description:
                  "Secretaries and committee members who manage the day-to-day operations. Send notices, track finances, manage residents.",
                image:
                  "https://images.unsplash.com/photo-1668342081604-0dc7e605fd90?w=400&q=80",
              },
              {
                role: "Flat Owners",
                description:
                  "Whether you live in your flat or rent it out, stay on top of maintenance dues, community decisions, and property updates.",
                image:
                  "https://images.unsplash.com/photo-1730130596425-197566414dc4?w=400&q=80",
              },
              {
                role: "Tenants",
                description:
                  "Pay maintenance, raise complaints, chat with neighbours, and stay informed — just like owners, with appropriate access.",
                image:
                  "https://images.unsplash.com/photo-1700474424608-e9b19ce41c2f?w=400&q=80",
              },
            ].map((item) => (
              <StaggerItem key={item.role}>
                <div className="card-hover overflow-hidden rounded-2xl border border-transparent bg-white shadow-sm">
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.role}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-text-heading">
                      {item.role}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-body">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <ScrollReveal animation="blur" direction="up" duration={0.8}>
        <section className="bg-primary py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Simplify Your Apartment Management?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Join the early access program and be among the first to experience
              MYT. It takes just 15 seconds to onboard your apartment.
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
