"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formspree.io/f/placeholder", {
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
                  Contact
                </span>
              </ScrollReveal>

              <ScrollReveal animation="fade" direction="up" delay={0.1}>
                <h1 className="mt-6 text-4xl font-bold text-text-heading sm:text-5xl">
                  Get in Touch
                </h1>
              </ScrollReveal>

              <ScrollReveal animation="fade" direction="up" delay={0.2}>
                <p className="mt-6 text-lg leading-relaxed text-text-body">
                  Have questions about MYT? Want to partner with us? Or just want
                  to say hello? We&apos;d love to hear from you.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade" direction="up" delay={0.3}>
                <div className="mt-10 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-light">
                      <svg
                        className="h-5 w-5 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-heading">Email</h3>
                      <a
                        href="mailto:hello@themyt.app"
                        className="mt-1 text-sm text-primary hover:underline"
                      >
                        hello@themyt.app
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-light">
                      <svg
                        className="h-5 w-5 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
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
                    <div>
                      <h3 className="font-semibold text-text-heading">
                        Location
                      </h3>
                      <p className="mt-1 text-sm text-text-body">
                        Hyderabad, India
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
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
                      Message Sent!
                    </h3>
                    <p className="mt-2 text-text-body">
                      We&apos;ll get back to you as soon as possible. Thank you
                      for reaching out!
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold text-text-heading">
                      Send us a Message
                    </h2>
                    <p className="mt-2 text-sm text-text-body">
                      We typically respond within 24 hours.
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
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text-heading">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="mt-1.5 w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-text-heading outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                          placeholder="you@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text-heading">
                          Subject
                        </label>
                        <input
                          type="text"
                          name="subject"
                          required
                          className="mt-1.5 w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-text-heading outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                          placeholder="What is this about?"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text-heading">
                          Message
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          className="mt-1.5 w-full resize-none rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-text-heading outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                          placeholder="Tell us how we can help..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="mt-2 w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50"
                      >
                        {loading ? "Sending..." : "Send Message"}
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
