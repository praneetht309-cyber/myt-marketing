"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";

const BENEFITS = [
  {
    title: "Be the First",
    description:
      "Get access before the public launch and shape the product with your feedback.",
  },
  {
    title: "Free During Early Access",
    description:
      "Use MYT completely free while we refine the experience with early users.",
  },
  {
    title: "Priority Support",
    description:
      "Direct line to the team. Your issues and feature requests get top priority.",
  },
  {
    title: "Influence the Roadmap",
    description:
      "Tell us what features matter most. Early users have a direct say in what we build next.",
  },
];

export default function EarlyAccessPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formspree.io/f/mlgwoobq", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            {/* Left — Info */}
            <div>
              <ScrollReveal animation="fade" direction="up">
                <span className="inline-block rounded-full bg-secondary/20 px-4 py-1.5 text-sm font-semibold text-primary">
                  Early Access
                </span>
              </ScrollReveal>

              <ScrollReveal animation="fade" direction="up" delay={0.1}>
                <h1 className="mt-6 text-4xl font-bold text-text-heading sm:text-5xl">
                  Get Early Access to MYT
                </h1>
              </ScrollReveal>

              <ScrollReveal animation="fade" direction="up" delay={0.2}>
                <p className="mt-6 text-lg leading-relaxed text-text-body">
                  We&apos;re building the management platform that stand alone
                  apartments in India deserve. Join the early access program and
                  help us shape it.
                </p>
              </ScrollReveal>

              <StaggerContainer className="mt-10 space-y-6" staggerDelay={0.12}>
                {BENEFITS.map((benefit) => (
                  <StaggerItem key={benefit.title}>
                    <div className="flex gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-success-light">
                        <svg
                          className="h-4 w-4 text-success"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-heading">
                          {benefit.title}
                        </h3>
                        <p className="mt-1 text-sm text-text-body">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Right — Form */}
            <ScrollReveal animation="slide" direction="right" delay={0.2}>
              <div className="rounded-2xl border border-neutral-200 bg-surface-page p-8">
                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success-light">
                      <svg
                        className="h-8 w-8 text-success"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-text-heading">
                      You&apos;re on the list!
                    </h3>
                    <p className="mt-2 text-text-body">
                      We&apos;ll reach out when MYT is ready for you. Thank you
                      for your interest!
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold text-text-heading">
                      Sign Up for Early Access
                    </h2>
                    <p className="mt-2 text-sm text-text-body">
                      Fill in your details and we&apos;ll get you onboarded as
                      soon as we&apos;re ready.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-text-heading">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          className="mt-1.5 w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-text-heading outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                          placeholder="Praneeth Kumar"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text-heading">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          className="mt-1.5 w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-text-heading outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                          placeholder="+91 98765 43210"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text-heading">
                          Number of Flats
                        </label>
                        <input
                          type="number"
                          name="flats"
                          min={3}
                          max={300}
                          required
                          className="mt-1.5 w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-text-heading outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                          placeholder="24"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text-heading">
                          Your Role
                        </label>
                        <select
                          name="role"
                          required
                          defaultValue="owner"
                          className="mt-1.5 w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-text-heading outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                        >
                          <option value="admin">
                            Secretary / Committee Member
                          </option>
                          <option value="owner">Flat Owner</option>
                          <option value="tenant">Tenant</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="mt-2 w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50"
                      >
                        {loading ? "Submitting..." : "Get Early Access"}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
