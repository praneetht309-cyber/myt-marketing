"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SITE } from "@/lib/constants";

export default function DownloadPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex min-h-[calc(100dvh-8rem)] max-w-4xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 sm:py-24">
        <ScrollReveal animation="fade" direction="up">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary/50">
            Download MYT
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-text-heading sm:text-5xl lg:text-6xl">
            Get MYT on your phone.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-text-body sm:text-lg">
            Stand Alone Apartment Management, in your pocket.
            Monthly Maintenance, Accounts, Notices and more — ONE APP!
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fade" direction="up" delay={0.15}>
          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-6">
            {/* Google Play — live */}
            <a
              href={SITE.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get MYT on Google Play"
              className="group transition-transform duration-200 hover:-translate-y-0.5"
            >
              <Image
                src="/badges/google-play-badge.png"
                alt="Get it on Google Play"
                width={220}
                height={66}
                className="h-16 w-auto"
                priority
                unoptimized
              />
            </a>

            {/* App Store — coming soon. Height tuned smaller to match Google Play's visible pill (Google badge has large padding/safe zone, Apple doesn't). */}
            <div
              aria-disabled="true"
              className="relative inline-block cursor-not-allowed opacity-50"
            >
              <Image
                src="/badges/app-store-badge.svg"
                alt="Download on the App Store (coming soon)"
                width={140}
                height={46}
                className="h-[46px] w-auto"
                unoptimized
              />
              <span className="absolute -right-2 -top-2 inline-flex items-center rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white shadow-md">
                Coming soon
              </span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade" direction="up" delay={0.3}>
          <p className="mt-10 text-sm text-text-body/70">
            Questions before you download?{" "}
            <Link
              href="/contact"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Get in touch
            </Link>
            .
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
