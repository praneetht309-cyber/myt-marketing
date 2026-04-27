"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Wallet,
  Receipt,
  Megaphone,
  MessagesSquare,
  ClipboardCheck,
  Users,
  ShieldCheck,
  Wrench,
  FileBadge2,
  ListChecks,
  Sparkles,
  LineChart,
  Download,
  ArrowRight,
  Check,
  Vote,
  Bell,
  Calendar,
  Star,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CategoryNav } from "@/components/features/category-nav";
import {
  HeroTitle,
  H1,
  H2,
  H3,
  H4,
  Kicker,
  Lead,
  BodyLg,
  BodyMd,
  BodySm,
  Caption,
} from "@/components/ui/typography";
import {
  PASTEL_TINT,
  PASTEL_GLOW,
  PASTEL_DEEP,
  type PastelKey,
} from "@/lib/palette";

/* ======================================================================
   Reusable feature block
   ====================================================================== */

interface SubBullet {
  text: string;
}

interface FeatureBlockProps {
  icon: LucideIcon;
  pain?: string;
  solution: string;
  detail: string;
  bullets?: SubBullet[];
  video?: string;
  reverse?: boolean;
  accent: PastelKey;
}

function FeatureBlock({
  icon: Icon,
  pain,
  solution,
  detail,
  bullets,
  video,
  reverse,
  accent,
}: FeatureBlockProps) {
  const deep = PASTEL_DEEP[accent];

  return (
    <div
      className={`flex flex-col items-center gap-10 md:flex-row md:gap-14 lg:gap-20 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full md:flex-1">
        <ScrollReveal animation="fade" direction="up">
          <div
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-sm"
            style={{ backgroundColor: deep }}
          >
            <Icon className="h-5 w-5" strokeWidth={2} />
          </div>
          {pain && (
            <BodyLg
              as="p"
              className="mt-5 font-medium text-text-body/60 line-through decoration-text-body/40 decoration-2"
            >
              {pain}
            </BodyLg>
          )}
          <H2 as="h3" className="mt-2">
            {solution}
          </H2>
          <BodyLg className="mt-3">{detail}</BodyLg>
          {bullets && bullets.length > 0 && (
            <ul className="mt-5 space-y-2.5">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span
                    className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: `${deep}20` }}
                  >
                    <Check className="h-3 w-3" strokeWidth={3} style={{ color: deep }} />
                  </span>
                  <BodyMd as="span">{b.text}</BodyMd>
                </li>
              ))}
            </ul>
          )}
        </ScrollReveal>
      </div>

      {video && (
        <div className="mx-auto w-full max-w-[220px] md:max-w-[240px]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div
              className="relative overflow-hidden rounded-[28px] border-[3px] border-neutral-700 bg-white shadow-xl md:rounded-[36px]"
              style={{ aspectRatio: "9 / 19.5" }}
            >
              <div className="absolute left-1/2 top-0 z-20 h-5 w-24 -translate-x-1/2 rounded-b-xl bg-neutral-700 md:h-6 md:w-28 md:rounded-b-2xl" />
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

/* ======================================================================
   Editorial primitives — Hero, Stat, Bento. Used to break the page
   rhythm so each pillar reads like a magazine spread, not a stack of
   identical feature cards.
   ====================================================================== */

function FeaturePhone({
  video,
  image,
  size = "md",
}: {
  video?: string;
  image?: string;
  size?: "sm" | "md" | "lg";
}) {
  const widthClass =
    size === "lg"
      ? "max-w-[280px] md:max-w-[320px]"
      : size === "sm"
        ? "max-w-[200px] md:max-w-[220px]"
        : "max-w-[220px] md:max-w-[240px]";
  return (
    <div className={`mx-auto w-full ${widthClass}`}>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div
          className="relative overflow-hidden rounded-[28px] border-[3px] border-neutral-700 bg-white shadow-2xl md:rounded-[36px]"
          style={{ aspectRatio: "9 / 19.5" }}
        >
          <div className="absolute left-1/2 top-0 z-20 h-5 w-24 -translate-x-1/2 rounded-b-xl bg-neutral-700 md:h-6 md:w-28 md:rounded-b-2xl" />
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover object-top"
            />
          ) : image ? (
            <Image src={image} alt="" fill className="object-cover object-top" />
          ) : null}
        </div>
      </motion.div>
    </div>
  );
}

interface HeroFeatureProps {
  icon: LucideIcon;
  pain?: string;
  solution: string;
  detail: string;
  video?: string;
  image?: string;
  accent: PastelKey;
  reverse?: boolean;
}

/** Cinematic, oversized feature treatment. Big phone, h1 headline, no
 *  bullets. One per pillar — used for the flagship feature only. */
function HeroFeature({
  icon: Icon,
  pain,
  solution,
  detail,
  video,
  image,
  accent,
  reverse,
}: HeroFeatureProps) {
  const deep = PASTEL_DEEP[accent];
  return (
    <div
      className={`flex flex-col items-center gap-12 md:flex-row md:gap-20 lg:gap-28 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full md:flex-1">
        <ScrollReveal animation="fade" direction="up">
          <div
            className="inline-flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-sm"
            style={{ backgroundColor: deep }}
          >
            <Icon className="h-6 w-6" strokeWidth={2} />
          </div>
          {pain && (
            <BodyLg
              as="p"
              className="mt-6 font-medium text-text-body/55 line-through decoration-text-body/35 decoration-2"
            >
              {pain}
            </BodyLg>
          )}
          <H1 as="h3" className="mt-3 text-balance">
            {solution}
          </H1>
          <BodyLg className="mt-5 max-w-xl leading-relaxed">{detail}</BodyLg>
        </ScrollReveal>
      </div>
      <FeaturePhone video={video} image={image} size="lg" />
    </div>
  );
}

interface StatMomentProps {
  primary: string;
  secondary?: string;
  accent: PastelKey;
}

/** Palate-cleanser interlude. One big line of type, lots of whitespace,
 *  thin accent rules top and bottom. Drops between feature blocks to
 *  break the rhythm. */
function StatMoment({ primary, secondary, accent }: StatMomentProps) {
  const deep = PASTEL_DEEP[accent];
  return (
    <ScrollReveal animation="fade" direction="up">
      <div className="relative py-10 text-center md:py-14">
        <span
          aria-hidden
          className="absolute left-1/2 top-0 h-px w-12 -translate-x-1/2"
          style={{ backgroundColor: deep, opacity: 0.45 }}
        />
        <H1 as="p" className="mx-auto max-w-3xl text-balance">
          {primary}
        </H1>
        {secondary && (
          <BodyLg className="mx-auto mt-4 max-w-2xl text-text-body/70">
            {secondary}
          </BodyLg>
        )}
        <span
          aria-hidden
          className="absolute bottom-0 left-1/2 h-px w-12 -translate-x-1/2"
          style={{ backgroundColor: deep, opacity: 0.45 }}
        />
      </div>
    </ScrollReveal>
  );
}

interface BentoFeatureProps {
  icon: LucideIcon;
  pain?: string;
  solution: string;
  detail: string;
  bullets?: SubBullet[];
  video?: string;
  image?: string;
  reverse?: boolean;
  accent: PastelKey;
}

/** Tighter feature block — smaller phone, headline at H2 scale, bullets
 *  collapsed into pill-shaped chips that wrap inline. Used for secondary
 *  features under a pillar. */
function BentoFeature({
  icon: Icon,
  pain,
  solution,
  detail,
  bullets,
  video,
  image,
  reverse,
  accent,
}: BentoFeatureProps) {
  const deep = PASTEL_DEEP[accent];
  const tint = PASTEL_TINT[accent];
  return (
    <div className="grid items-center gap-10 md:grid-cols-12 md:gap-14">
      <div className={`md:col-span-7 ${reverse ? "md:order-2" : ""}`}>
        <ScrollReveal animation="fade" direction="up">
          <div className="flex flex-wrap items-center gap-3">
            <div
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-sm"
              style={{ backgroundColor: deep }}
            >
              <Icon className="h-5 w-5" strokeWidth={2} />
            </div>
            {pain && (
              <BodySm
                as="span"
                className="font-medium text-text-body/55 line-through decoration-text-body/35"
              >
                {pain}
              </BodySm>
            )}
          </div>
          <H2 as="h3" className="mt-4">
            {solution}
          </H2>
          <BodyLg className="mt-3 max-w-xl">{detail}</BodyLg>
          {bullets && bullets.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {bullets.map((b, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5"
                  style={{
                    backgroundColor: tint,
                    borderColor: `${deep}30`,
                  }}
                >
                  <Check
                    className="h-3 w-3 flex-shrink-0"
                    strokeWidth={3}
                    style={{ color: deep }}
                  />
                  <BodySm as="span" className="text-text-heading">
                    {b.text}
                  </BodySm>
                </span>
              ))}
            </div>
          )}
        </ScrollReveal>
      </div>
      {(video || image) && (
        <div className={`md:col-span-5 ${reverse ? "md:order-1" : ""}`}>
          <FeaturePhone video={video} image={image} size="sm" />
        </div>
      )}
    </div>
  );
}

/* ======================================================================
   Founder quote — italic centered quote with attribution. Used as
   a humanising anchor between feature blocks instead of a stat.
   ====================================================================== */

interface FounderQuoteProps {
  quote: string;
  attribution: string;
  accent: PastelKey;
}

function FounderQuote({ quote, attribution, accent }: FounderQuoteProps) {
  const deep = PASTEL_DEEP[accent];
  return (
    <ScrollReveal animation="fade" direction="up">
      <div className="relative py-12 text-center md:py-20">
        <span
          aria-hidden
          className="absolute left-1/2 top-0 h-px w-12 -translate-x-1/2"
          style={{ backgroundColor: deep, opacity: 0.45 }}
        />
        <H1 as="blockquote" className="mx-auto max-w-3xl text-balance italic">
          &ldquo;{quote}&rdquo;
        </H1>
        <Caption
          as="p"
          className="mt-6 font-semibold uppercase tracking-[0.22em]"
          style={{ color: deep }}
        >
          — {attribution}
        </Caption>
        <span
          aria-hidden
          className="absolute bottom-0 left-1/2 h-px w-12 -translate-x-1/2"
          style={{ backgroundColor: deep, opacity: 0.45 }}
        />
      </div>
    </ScrollReveal>
  );
}

/* ======================================================================
   Money data widget — bespoke two-column ledger view. Shows real
   apartment numbers as the *content* of the Money pillar, instead of
   a phone mockup with bullets next to it.
   ====================================================================== */

function MoneyDataWidget() {
  const tint = PASTEL_TINT.coral;
  const deep = PASTEL_DEEP.coral;
  const borderSoft = `${deep}1a`;
  const borderMid = `${deep}33`;

  const operatingTxns = [
    { date: "Apr 15", desc: "Maintenance — Flat 102", amount: "+₹2,000", inflow: true },
    { date: "Apr 12", desc: "Watchman salary", amount: "−₹15,000", inflow: false },
    { date: "Apr 10", desc: "Maintenance — Flat 305", amount: "+₹2,000", inflow: true },
    { date: "Apr 7", desc: "Lift AMC", amount: "−₹3,500", inflow: false },
    { date: "Apr 5", desc: "Maintenance — Flat 201", amount: "+₹2,000", inflow: true },
  ];

  const corpusContribs = [
    { date: "Mar 2025", desc: "Annual collection", amount: "+₹50,000" },
    { date: "Mar 2024", desc: "Annual collection", amount: "+₹50,000" },
    { date: "Mar 2023", desc: "Annual collection", amount: "+₹50,000" },
    { date: "Mar 2022", desc: "Annual collection", amount: "+₹50,000" },
  ];

  return (
    <ScrollReveal animation="fade" direction="up">
      <div className="space-y-8">
        <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-text-body md:text-lg">
          Two accounts. Tracked separately. Like real apartment books.
        </p>

        <div
          className="overflow-hidden rounded-3xl border bg-white shadow-2xl"
          style={{ borderColor: borderMid }}
        >
          <div className="grid md:grid-cols-2">
            {/* ── Operating Account ─────────────────────────────── */}
            <div
              className="border-b p-7 md:border-b-0 md:border-r md:p-9"
              style={{ borderColor: borderSoft }}
            >
              <div className="flex items-baseline justify-between">
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.18em]"
                  style={{ color: deep }}
                >
                  Operating Account
                </span>
                <span className="text-[11px] uppercase tracking-wider text-text-body/55">
                  April 2026
                </span>
              </div>

              <div className="mt-5">
                <Caption className="text-text-body/65">Available Balance</Caption>
                <p
                  className="mt-1 font-bold tracking-tight text-text-heading"
                  style={{
                    fontFeatureSettings: '"tnum"',
                    fontSize: "2.25rem",
                    lineHeight: "1.1",
                  }}
                >
                  ₹72,500.00
                </p>
                <Caption className="mt-1 inline-flex items-center gap-1.5 text-text-body/60">
                  <span
                    className="inline-block h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: "var(--color-success-default, #16a34a)" }}
                  />
                  Updated just now
                </Caption>
              </div>

              <div className="mt-7">
                <Caption
                  as="p"
                  className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-text-heading"
                >
                  Recent Activity
                </Caption>
                <div className="divide-y" style={{ borderColor: borderSoft }}>
                  {operatingTxns.map((t, i) => (
                    <div
                      key={i}
                      className="flex items-baseline justify-between gap-3 py-2.5"
                      style={{ borderColor: borderSoft }}
                    >
                      <div className="flex min-w-0 items-baseline gap-3">
                        <span className="w-12 flex-shrink-0 text-[11px] tabular-nums text-text-body/55">
                          {t.date}
                        </span>
                        <span className="truncate text-sm text-text-body">
                          {t.desc}
                        </span>
                      </div>
                      <span
                        className="flex-shrink-0 text-sm font-semibold tabular-nums"
                        style={{
                          color: t.inflow ? deep : "var(--color-text-body)",
                          fontFeatureSettings: '"tnum"',
                        }}
                      >
                        {t.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <Caption
                as="p"
                className="mt-5 text-text-body/60"
                style={{ fontStyle: "italic" }}
              >
                Running balance updates after every transaction.
              </Caption>
            </div>

            {/* ── Corpus Fund ───────────────────────────────────── */}
            <div className="p-7 md:p-9" style={{ backgroundColor: tint }}>
              <div className="flex items-baseline justify-between">
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.18em]"
                  style={{ color: deep }}
                >
                  Corpus Fund
                </span>
                <span className="text-[11px] uppercase tracking-wider text-text-body/55">
                  Painting · 2027
                </span>
              </div>

              <div className="mt-5">
                <Caption className="text-text-body/65">Current Balance</Caption>
                <p
                  className="mt-1 font-bold tracking-tight text-text-heading"
                  style={{
                    fontFeatureSettings: '"tnum"',
                    fontSize: "2.25rem",
                    lineHeight: "1.1",
                  }}
                >
                  ₹2,00,000.00
                </p>
                <Caption className="mt-1 text-text-body/60">
                  Target: ₹5,00,000.00
                </Caption>
              </div>

              <div className="mt-5">
                <div
                  className="h-2 overflow-hidden rounded-full"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{ width: "40%", backgroundColor: deep }}
                  />
                </div>
                <div className="mt-1.5 flex items-baseline justify-between">
                  <Caption className="text-text-body/60">40% collected</Caption>
                  <Caption className="text-text-body/60">3 years to go</Caption>
                </div>
              </div>

              <div className="mt-7">
                <Caption
                  as="p"
                  className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-text-heading"
                >
                  Annual Contributions
                </Caption>
                <div>
                  {corpusContribs.map((t, i) => (
                    <div
                      key={i}
                      className="flex items-baseline justify-between gap-3 border-b py-2.5 last:border-0"
                      style={{ borderColor: borderSoft }}
                    >
                      <div className="flex items-baseline gap-3">
                        <span className="w-16 flex-shrink-0 text-[11px] tabular-nums text-text-body/55">
                          {t.date}
                        </span>
                        <span className="text-sm text-text-body">{t.desc}</span>
                      </div>
                      <span
                        className="text-sm font-semibold tabular-nums"
                        style={{ color: deep, fontFeatureSettings: '"tnum"' }}
                      >
                        {t.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <Caption
                as="p"
                className="mt-5 text-text-body/60"
                style={{ fontStyle: "italic" }}
              >
                Tracked separately from running costs.
              </Caption>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

/* ======================================================================
   Payment receipt — bespoke Money artifact. Sits between the ledger
   widget and the founder quote. Stripe-coded receipt object: big
   amount, status pill, key/value fields, lifecycle trail.
   ====================================================================== */

function PaymentReceipt() {
  const deep = PASTEL_DEEP.coral;
  const borderSoft = `${deep}1a`;
  const borderMid = `${deep}33`;
  const successBg = "rgba(22, 163, 74, 0.10)";
  const successFg = "rgb(22, 163, 74)";

  const fields: Array<{ label: string; value: string }> = [
    { label: "From", value: "Anand" },
    { label: "Flat", value: "201, Block A" },
    { label: "For", value: "April 2026 maintenance" },
    { label: "Method", value: "UPI" },
    { label: "Approved", value: "Suresh · Admin" },
  ];

  const lifecycle: Array<{ step: string; time: string }> = [
    { step: "Recorded by resident", time: "10:42 AM" },
    { step: "Approved by admin", time: "11:05 AM" },
    { step: "Books updated", time: "11:05 AM" },
  ];

  return (
    <ScrollReveal animation="fade" direction="up">
      <div className="space-y-5">
        <div
          className="mx-auto max-w-md overflow-hidden rounded-3xl border bg-white shadow-2xl"
          style={{ borderColor: borderMid }}
        >
          <div className="p-7 md:p-8">
            {/* Header */}
            <div className="flex items-center justify-between">
              <span
                className="text-[11px] font-bold uppercase tracking-[0.18em]"
                style={{ color: deep }}
              >
                Receipt
              </span>
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em]"
                style={{ backgroundColor: successBg, color: successFg }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: successFg }}
                />
                Paid
              </span>
            </div>

            {/* Hero amount */}
            <div className="mt-5">
              <p
                className="font-bold tracking-tight text-text-heading"
                style={{
                  fontFeatureSettings: '"tnum"',
                  fontSize: "2.5rem",
                  lineHeight: "1.05",
                }}
              >
                ₹2,000.00
              </p>
              <Caption className="mt-1.5 text-text-body/60">
                Apr 15, 2026 · 10:42 AM IST
              </Caption>
            </div>

            {/* Divider */}
            <div
              className="my-6 h-px"
              style={{ backgroundColor: borderSoft }}
            />

            {/* Fields */}
            <div className="space-y-3">
              {fields.map((f) => (
                <div
                  key={f.label}
                  className="grid grid-cols-[5rem_1fr] items-baseline gap-3"
                >
                  <Caption className="text-text-body/55">{f.label}</Caption>
                  <span className="text-sm text-text-heading">{f.value}</span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div
              className="my-6 h-px"
              style={{ backgroundColor: borderSoft }}
            />

            {/* Lifecycle */}
            <div className="space-y-2.5">
              {lifecycle.map((l) => (
                <div
                  key={l.step}
                  className="flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-2.5">
                    <Check
                      className="h-3.5 w-3.5 flex-shrink-0"
                      strokeWidth={3}
                      style={{ color: deep }}
                    />
                    <span className="text-sm text-text-body">{l.step}</span>
                  </div>
                  <span className="text-xs tabular-nums text-text-body/55">
                    {l.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mx-auto max-w-md text-center text-sm italic leading-relaxed text-text-body/70">
          Every payment has a receipt, an audit trail, and a place in the books.
        </p>
      </div>
    </ScrollReveal>
  );
}

/* ======================================================================
   Voice activity feed — bespoke Voice artifact. Chronological stream
   of mock notices, polls, meetings, announcements and chat — each
   row showing author, body, and engagement (read counts / votes /
   RSVPs / replies). Twitter-timeline aesthetic.
   ====================================================================== */

type FeedColorKey =
  | "notice"
  | "poll"
  | "meeting"
  | "announcement"
  | "chat";

/** Per-type pill colors — mirrors the MYT app's quick-action palette
 *  (shade50 bg + shade600 fg). Source: apps/mobile/.../app_colors.dart. */
const FEED_TYPE_COLOR: Record<FeedColorKey, { bg: string; fg: string }> = {
  notice: { bg: "#FFF3E8", fg: "#9A530D" }, // orange
  poll: { bg: "#EEFBEC", fg: "#2A7A20" }, // lime
  meeting: { bg: "#F0E8FF", fg: "#3004B8" }, // purple
  announcement: { bg: "#EDF4FE", fg: "#1B3F8F" }, // blue
  chat: { bg: "#ECF5EF", fg: "#366D46" }, // teal
};

interface ChatMessage {
  author: string;
  text: string;
  sent: boolean;
}

interface FeedItem {
  type: string;
  colorKey: FeedColorKey;
  icon: LucideIcon;
  date: string;
  header?: string;
  title?: string;
  body?: string;
  detail?: string;
  chatThread?: ChatMessage[];
  engagement: string;
  engagementCheck?: boolean;
}

function VoiceActivityFeed() {
  const tint = PASTEL_TINT.lavender;
  const deep = PASTEL_DEEP.lavender;
  const borderSoft = `${deep}1a`;
  const borderMid = `${deep}33`;

  const items: FeedItem[] = [
    {
      type: "Notice",
      colorKey: "notice",
      icon: Bell,
      date: "Apr 14",
      header: "Suresh (Admin) → Block A",
      body: "Please bring down noise levels late at night. Several residents have complained.",
      engagement: "Read by 9 of 10 flats · 1 pending",
      engagementCheck: true,
    },
    {
      type: "Poll · Open",
      colorKey: "poll",
      icon: Vote,
      date: "Apr 12",
      title: "Should we celebrate Vinayaka Chavithi?",
      detail: "Yes (22)  ·  No (6)",
      engagement: "28 of 48 flats voted · open until Apr 20",
    },
    {
      type: "Meeting · Upcoming",
      colorKey: "meeting",
      icon: Calendar,
      date: "Apr 10",
      title: "Annual General Meeting",
      detail: "Apr 26 · Sunday 9 AM · Terrace",
      engagement: "7 of 10 flats RSVP'd",
    },
    {
      type: "Announcement",
      colorKey: "announcement",
      icon: Megaphone,
      date: "Apr 8",
      header: "Suresh (Admin)",
      body: "Lift maintenance scheduled for Sat 9 AM – 12 PM. Use stairs during this window.",
      engagement: "Read by 46 of 48 flats",
      engagementCheck: true,
    },
    {
      type: "Chat",
      colorKey: "chat",
      icon: MessagesSquare,
      date: "Apr 7",
      header: "Apartment chat",
      chatThread: [
        {
          author: "Anand",
          sent: true,
          text: "MYT App is good. Feels like it has everything and more is coming. Has anyone tried emailing them about what other features we'd like to see?",
        },
        {
          author: "Arjun",
          sent: false,
          text: "Yes, I emailed them last week with a few suggestions.",
        },
        {
          author: "Vikram",
          sent: false,
          text: "Same. They actually replied within a day.",
        },
        {
          author: "Rahul",
          sent: false,
          text: "Will send mine tomorrow. Any specific features you wanted?",
        },
      ],
      engagement: "3 replies",
    },
  ];

  return (
    <ScrollReveal animation="fade" direction="up">
      <div className="space-y-5">
        <div
          className="mx-auto max-w-2xl overflow-hidden rounded-3xl border bg-white shadow-2xl"
          style={{ borderColor: borderMid }}
        >
          {/* Header strip */}
          <div
            className="flex items-baseline justify-between border-b px-7 py-4 md:px-8"
            style={{ borderColor: borderSoft, backgroundColor: tint }}
          >
            <span
              className="text-[11px] font-bold uppercase tracking-[0.18em]"
              style={{ color: deep }}
            >
              Activity · April 2026
            </span>
            <span className="text-[11px] uppercase tracking-wider text-text-body/60">
              5 of 23 items
            </span>
          </div>

          {/* Feed items */}
          <div>
            {items.map((item, i) => {
              const ItemIcon = item.icon;
              const isLast = i === items.length - 1;
              const tc = FEED_TYPE_COLOR[item.colorKey];
              return (
                <div
                  key={`${item.type}-${i}`}
                  className={`px-7 py-5 md:px-8 md:py-6 ${isLast ? "" : "border-b"}`}
                  style={!isLast ? { borderColor: borderSoft } : undefined}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em]"
                      style={{ backgroundColor: tc.bg, color: tc.fg }}
                    >
                      <ItemIcon className="h-3 w-3" strokeWidth={2.5} />
                      {item.type}
                    </span>
                    <span className="text-[11px] tabular-nums text-text-body/55">
                      {item.date}
                    </span>
                  </div>

                  {item.header && (
                    <Caption as="p" className="mt-3 text-text-body/70">
                      {item.header}
                    </Caption>
                  )}

                  {item.title && (
                    <p className="mt-3 text-base font-semibold text-text-heading md:text-lg">
                      {item.title}
                    </p>
                  )}

                  {item.body && (
                    <p className="mt-1.5 text-sm leading-relaxed text-text-body">
                      {item.body}
                    </p>
                  )}

                  {item.chatThread && (
                    <div className="mt-3 space-y-3">
                      {item.chatThread.map((msg, mi) => (
                        <div
                          key={mi}
                          className={`flex ${msg.sent ? "justify-end" : "justify-start"}`}
                        >
                          <div className="max-w-[85%]">
                            <p
                              className={`mb-1 text-[10px] text-text-body/55 ${msg.sent ? "text-right" : ""}`}
                            >
                              {msg.author}
                            </p>
                            <div
                              className={`rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${msg.sent ? "rounded-br-sm" : "rounded-bl-sm"}`}
                              style={
                                msg.sent
                                  ? { backgroundColor: tc.fg, color: "#FFFFFF" }
                                  : { backgroundColor: "#F3F4F6", color: "var(--color-text-heading)" }
                              }
                            >
                              {msg.text}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {item.detail && (
                    <p
                      className="mt-2.5 text-sm font-medium"
                      style={{ color: tc.fg }}
                    >
                      {item.detail}
                    </p>
                  )}

                  <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-text-body/60">
                    {item.engagementCheck && (
                      <Check
                        className="h-3 w-3 flex-shrink-0"
                        strokeWidth={3}
                        style={{ color: deep }}
                      />
                    )}
                    {item.engagement}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <p className="mx-auto max-w-2xl text-center text-sm italic leading-relaxed text-text-body/70">
          Notices. Polls. Meetings. Announcements. Chat. All in one app — without the WhatsApp chaos.
        </p>
      </div>
    </ScrollReveal>
  );
}

/* ======================================================================
   Services card row — 3 mini-artifact cards laid out in a fan/scatter,
   each subtly rotated. Mirrors Juspay's HyperCheckout cards row but
   keeps MYT's light/cream theme and substitutes generic feature copy
   for real product objects (issue ticket, vendor card, warranty card).
   ====================================================================== */

interface ServiceCardProps {
  kicker: string;
  icon: LucideIcon;
  rotation: string; // tailwind rotate-[Xdeg] arbitrary value
  yOffset: string; // tailwind translate-y-X arbitrary value
  children: React.ReactNode;
}

function ServiceCard({
  kicker,
  icon: Icon,
  rotation,
  yOffset,
  children,
}: ServiceCardProps) {
  const deep = PASTEL_DEEP.peach;
  const tint = PASTEL_TINT.peach;
  const borderMid = `${deep}33`;
  return (
    <div
      className={`group relative flex h-full flex-col rounded-3xl border bg-white p-6 shadow-xl transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:rotate-0 hover:-translate-y-2 hover:shadow-2xl md:p-7 ${rotation} ${yOffset}`}
      style={{ borderColor: borderMid }}
    >
      <div className="flex items-center gap-2.5">
        <div
          className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl text-white shadow-sm"
          style={{ backgroundColor: deep }}
        >
          <Icon className="h-4 w-4" strokeWidth={2.2} />
        </div>
        <span
          className="text-[11px] font-bold uppercase tracking-[0.18em]"
          style={{ color: deep }}
        >
          {kicker}
        </span>
      </div>
      <div className="mt-5 flex-1">{children}</div>
      {/* subtle bottom accent rule, picks up pillar deep on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-6 bottom-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:inset-x-7"
        style={{ backgroundColor: deep }}
      />
    </div>
  );
}

function ServicesCardRow() {
  const deep = PASTEL_DEEP.peach;
  const tint = PASTEL_TINT.peach;
  const successFg = "rgb(22, 163, 74)";
  const successBg = "rgba(22, 163, 74, 0.10)";

  return (
    <ScrollReveal animation="fade" direction="up">
      <div className="space-y-8">
        {/* Warranty highlight — emphasises the flat-level use case */}
        <div
          className="flex items-start gap-4 rounded-2xl border bg-white p-5 shadow-sm md:p-6"
          style={{ borderColor: `${deep}33` }}
        >
          <div
            className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-white shadow-sm"
            style={{ backgroundColor: deep }}
          >
            <Bell className="h-5 w-5" strokeWidth={2.2} />
          </div>
          <div className="flex-1">
            <p className="text-base font-semibold text-text-heading md:text-lg">
              Yes — your flat&apos;s AC, fridge, TV, geyser, and more.
            </p>
            <p className="mt-1 text-sm leading-relaxed text-text-body">
              Add them all to MYT. We&apos;ll remind you before each one expires.
            </p>
          </div>
        </div>

        <div className="grid items-stretch gap-6 md:grid-cols-3 md:gap-7">
          {/* ── Card 1 — Requests ─────────────────────────────────── */}
          <ServiceCard
            kicker="Requests"
            icon={ClipboardCheck}
            rotation="md:rotate-[-2deg]"
            yOffset="md:translate-y-2"
          >
            <div className="flex items-baseline justify-between">
              <span className="text-[11px] font-semibold tabular-nums text-text-body/60">
                #R-0042
              </span>
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.16em]"
                style={{ backgroundColor: successBg, color: successFg }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: successFg }}
                />
                Resolved
              </span>
            </div>
            <p className="mt-3 text-base font-semibold leading-snug text-text-heading">
              Lift is not working. Stuck at floor 5.
            </p>
            <p className="mt-2 text-xs text-text-body/70">
              Raised by Anand · Apr 7 · Resolved in one day
            </p>
            <div
              className="mt-5 flex items-center justify-between border-t pt-3"
              style={{ borderColor: `${deep}1f` }}
            >
              <span className="text-[11px] text-text-body/60">
                3 open · 12 resolved this month
              </span>
            </div>
          </ServiceCard>

          {/* ── Card 2 — Handymen ─────────────────────────────────── */}
          <ServiceCard
            kicker="Handymen"
            icon={Wrench}
            rotation="rotate-0"
            yOffset="md:-translate-y-2"
          >
            <p className="text-base font-semibold leading-snug text-text-heading">
              Bharath Electricals
            </p>
            <div className="mt-1.5 flex items-center gap-2">
              <span className="text-xs text-text-body/70">Electrician</span>
              <span className="text-text-body/30">·</span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-text-heading">
                <Star
                  className="h-3 w-3 fill-current"
                  style={{ color: deep }}
                  strokeWidth={2}
                />
                4.8
              </span>
            </div>
            <p className="mt-2 text-xs text-text-body/70">
              12 jobs done · 2 this month
            </p>
            <div
              className="mt-5 border-t pt-3"
              style={{ borderColor: `${deep}1f` }}
            >
              <span className="text-[11px] text-text-body/60">
                + Plumber · Carpenter · Mason
              </span>
              <p className="mt-1 text-[11px] font-semibold text-text-heading">
                8 vendors saved
              </p>
            </div>
          </ServiceCard>

          {/* ── Card 3 — Warranties ───────────────────────────────── */}
          <ServiceCard
            kicker="Warranties"
            icon={FileBadge2}
            rotation="md:rotate-[2deg]"
            yOffset="md:translate-y-2"
          >
            <p className="text-base font-semibold leading-snug text-text-heading">
              LG Refrigerator
            </p>
            <p className="mt-1.5 text-xs text-text-body/70">
              Croma · Sep 2023
            </p>
            <p className="mt-2.5 text-xs font-semibold" style={{ color: deep }}>
              Valid until Sep 2027
            </p>
            <p className="mt-1 text-[11px] text-text-body/60">
              Reminder set: Aug 2027
            </p>
            <div
              className="mt-5 border-t pt-3"
              style={{ borderColor: `${deep}1f` }}
            >
              <span className="text-[11px] text-text-body/60">
                Your flat: 7 · Apartment: 5
              </span>
              <p className="mt-1 text-[11px] font-semibold text-text-heading">
                12 warranty cards saved
              </p>
            </div>
          </ServiceCard>
        </div>

        <p className="mx-auto max-w-2xl text-center text-sm italic leading-relaxed text-text-body/70">
          Every request gets a timeline. Every vendor, a record. Every warranty, honoured.
        </p>
      </div>
    </ScrollReveal>
  );
}

/* ======================================================================
   People strips — horizontal strips stacked vertically. Each represents
   one role+type combo. Closed shows role + one-line teaser. Hovering
   (desktop) or tapping (mobile) expands the strip to reveal a persona,
   what they see in MYT, and a row of permission chips.

   First strip is open by default. Always exactly one strip open.
   Same layout on desktop and mobile — no responsive divergence.
   ====================================================================== */

interface RoleStrip {
  num: string;
  role: string;
  teaser: string;
  persona: { name: string; meta: string };
  scope: string;
  chips: string[];
  bg: string;
  text: "light" | "dark";
  accent: string;
  border: string;
}

function PeopleStrips() {
  // White strips, sage (pillar color) carries the identity through numbers
  // and the open-strip accent.
  const baseBg = "#FFFFFF";
  const openBg = "#DCEAD5"; // deeper sage when expanded — actually visible
  const sageAccent = PASTEL_DEEP.sage;
  const baseBorder = "rgba(15,23,42,0.08)";
  const openBorder = `${PASTEL_DEEP.sage}55`;

  const strips: RoleStrip[] = [
    {
      num: "01",
      role: "Admin",
      teaser: "Runs the apartment.",
      persona: { name: "Suresh", meta: "Block A · Admin" },
      scope: "The whole apartment — finances, members, requests, chats.",
      chips: ["Send notices", "Approve payments", "Manage members", "Run polls"],
      bg: baseBg,
      text: "dark",
      accent: sageAccent,
      border: baseBorder,
    },
    {
      num: "02",
      role: "Owner · Resident",
      teaser: "Owns and lives here.",
      persona: { name: "Arjun", meta: "Flat 304 · Lives here" },
      scope: "All communications, requests, ledger.",
      chips: ["Pay maintenance", "Raise request", "Vote in polls"],
      bg: baseBg,
      text: "dark",
      accent: sageAccent,
      border: baseBorder,
    },
    {
      num: "03",
      role: "Tenant",
      teaser: "Lives here, doesn't own.",
      persona: { name: "Rohan", meta: "Flat 105 · On rent" },
      scope: "Same view as residents — minus financial ownership.",
      chips: ["Read notices", "Raise request", "Join chat"],
      bg: baseBg,
      text: "dark",
      accent: sageAccent,
      border: baseBorder,
    },
    {
      num: "04",
      role: "Owner · Non Resident",
      teaser: "Owns from afar.",
      persona: { name: "Anand", meta: "Flat 201 · Bangalore" },
      scope: "Their flat from afar — read notices, pay from afar, follow polls.",
      chips: ["Read notices", "Pay from afar", "Vote in polls", "Corpus fund"],
      bg: baseBg,
      text: "dark",
      accent: sageAccent,
      border: baseBorder,
    },
    {
      num: "05",
      role: "Watchman",
      teaser: "Eyes at the gate.",
      persona: { name: "Ravi", meta: "Gate" },
      scope: "Visitors, duty roster — nothing else.",
      chips: ["Keep an eye on visitors", "See roster"],
      bg: baseBg,
      text: "dark",
      accent: sageAccent,
      border: baseBorder,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ScrollReveal animation="fade" direction="up">
      <div className="flex flex-col gap-3">
        {strips.map((s, i) => {
          const isOpen = activeIndex === i;

          // Number always sage (pillar). More vivid when open.
          const numColor = isOpen ? s.accent : `${s.accent}66`;
          const roleColor = "#0F172A";
          const teaserColor = "rgba(15,23,42,0.65)";
          const scopeColor = "rgba(15,23,42,0.78)";
          const personaColor = "#0F172A";
          const personaMetaColor = "rgba(15,23,42,0.55)";
          const chipBg = "rgba(255,255,255,0.65)";
          const chipText = "rgba(15,23,42,0.85)";
          const chipBorder = `${s.accent}40`;
          const dividerColor = `${s.accent}26`;

          return (
            <button
              key={s.num}
              type="button"
              onMouseEnter={() => setActiveIndex(i)}
              onClick={() => setActiveIndex(i)}
              aria-expanded={isOpen}
              className="group relative w-full overflow-hidden rounded-2xl border text-left transition-all duration-500 ease-out"
              style={{
                backgroundColor: isOpen ? openBg : s.bg,
                borderColor: isOpen ? openBorder : s.border,
                boxShadow: isOpen
                  ? `inset 5px 0 0 0 ${s.accent}, 0 6px 24px ${s.accent}1F`
                  : "none",
              }}
            >
              {/* Header row — always visible */}
              <div className="flex items-center gap-5 px-5 py-5 md:gap-7 md:px-7 md:py-6">
                <span
                  className="shrink-0 font-bold tracking-tight"
                  style={{
                    color: numColor,
                    fontSize: "2.25rem",
                    lineHeight: "1",
                    fontFeatureSettings: '"tnum"',
                  }}
                >
                  {s.num}
                </span>
                <div className="min-w-0 flex-1">
                  <p
                    className="text-lg font-semibold leading-tight md:text-xl"
                    style={{ color: roleColor }}
                  >
                    {s.role}
                  </p>
                  <p
                    className="mt-1 text-sm leading-snug"
                    style={{ color: teaserColor }}
                  >
                    {s.teaser}
                  </p>
                </div>
                <span
                  className="shrink-0 text-xs font-medium uppercase tracking-[0.18em] transition-opacity"
                  style={{
                    color: teaserColor,
                    opacity: isOpen ? 0 : 0.6,
                  }}
                >
                  + see more
                </span>
              </div>

              {/* Expanded body */}
              <div
                className="grid transition-all duration-500 ease-out"
                style={{
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div className="overflow-hidden">
                  <div
                    className="border-t px-5 py-5 md:px-7 md:py-6"
                    style={{ borderColor: dividerColor }}
                  >
                    <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-10">
                      {/* Persona */}
                      <div className="md:w-56 md:shrink-0">
                        <p
                          className="text-[11px] font-bold uppercase tracking-[0.18em]"
                          style={{ color: personaMetaColor }}
                        >
                          Example
                        </p>
                        <p
                          className="mt-2 text-base font-semibold"
                          style={{ color: personaColor }}
                        >
                          {s.persona.name}
                        </p>
                        <p
                          className="mt-1 text-sm leading-relaxed"
                          style={{ color: personaMetaColor }}
                        >
                          {s.persona.meta}
                        </p>
                      </div>

                      {/* Scope + chips */}
                      <div className="min-w-0 flex-1">
                        <p
                          className="text-[11px] font-bold uppercase tracking-[0.18em]"
                          style={{ color: personaMetaColor }}
                        >
                          What they see in MYT
                        </p>
                        <p
                          className="mt-2 text-sm leading-relaxed md:text-base"
                          style={{ color: scopeColor }}
                        >
                          {s.scope}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {s.chips.map((chip) => (
                            <span
                              key={chip}
                              className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium"
                              style={{
                                backgroundColor: chipBg,
                                color: chipText,
                                borderColor: chipBorder,
                              }}
                            >
                              {chip}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </ScrollReveal>
  );
}

/* ======================================================================
   Category band wrapper — full-width tinted atmosphere
   ====================================================================== */

interface CategoryBandProps {
  id: string;
  accent: PastelKey;
  kicker: string;
  heading: string;
  tagline: string;
  children: React.ReactNode;
  glowPos?: "left" | "right" | "center";
}

function CategoryBand({
  id,
  accent,
  kicker,
  heading,
  tagline,
  children,
  glowPos = "center",
}: CategoryBandProps) {
  const tint = PASTEL_TINT[accent];
  const glow = PASTEL_GLOW[accent];
  const deep = PASTEL_DEEP[accent];

  const glowPosition =
    glowPos === "left" ? "15% 20%" : glowPos === "right" ? "85% 20%" : "50% 15%";

  return (
    <section
      id={id}
      className="relative overflow-hidden px-4 py-20 sm:px-6 md:py-28"
      style={{
        background: `radial-gradient(ellipse 1100px 650px at ${glowPosition}, ${glow}, transparent 70%), linear-gradient(180deg, ${tint} 0%, #FFFFFF 85%)`,
      }}
    >
      {/* Subtle decorative dot pattern — inline SVG, purely decorative */}
      <svg
        aria-hidden
        className="pointer-events-none absolute right-4 top-8 h-24 w-24 opacity-40 md:right-12 md:h-32 md:w-32"
        viewBox="0 0 100 100"
        fill="none"
      >
        <g fill={deep} opacity="0.18">
          {Array.from({ length: 6 }).map((_, row) =>
            Array.from({ length: 6 }).map((_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={10 + col * 16}
                cy={10 + row * 16}
                r={1.5}
              />
            )),
          )}
        </g>
      </svg>

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center md:mb-16">
          <ScrollReveal animation="fade" direction="up">
            <Kicker>{kicker}</Kicker>
          </ScrollReveal>
          <ScrollReveal animation="fade" direction="up" delay={0.1}>
            <H1 as="h2" className="mt-4">
              {heading}
            </H1>
          </ScrollReveal>
          <ScrollReveal animation="fade" direction="up" delay={0.2}>
            <BodyLg className="mx-auto mt-4 max-w-2xl">{tagline}</BodyLg>
          </ScrollReveal>
        </div>

        <div className="space-y-16 md:space-y-24">{children}</div>
      </div>
    </section>
  );
}

/* ======================================================================
   Permissions mini-viz — compact role × permission grid
   ====================================================================== */

function PermissionsMatrix() {
  const ROLES = ["Admin", "Owner", "Tenant", "Non-Resident"];
  const PERMS = [
    { label: "Send notices", values: [true, false, false, false] },
    { label: "Record payments", values: [true, true, true, false] },
    { label: "View financials", values: [true, true, true, false] },
    { label: "Corpus fund", values: [true, true, false, true] },
    { label: "Manage members", values: [true, false, false, false] },
    { label: "Raise request", values: [true, true, true, false] },
    { label: "Create poll", values: [true, false, false, false] },
  ];

  return (
    <div className="mx-auto mt-6 w-full max-w-2xl overflow-hidden rounded-2xl border border-sage-200 bg-white shadow-sm"
      style={{ borderColor: "rgba(86, 113, 89, 0.15)" }}>
      <div className="grid grid-cols-[1.6fr_repeat(4,_1fr)] border-b bg-[color:var(--color-sage-light)]/50"
        style={{ borderColor: "rgba(86, 113, 89, 0.15)" }}>
        <div className="px-3 py-2.5 sm:px-4 sm:py-3" />
        {ROLES.map((r) => (
          <div
            key={r}
            className="border-l px-1.5 py-2.5 text-center text-[11px] font-semibold uppercase tracking-wider sm:px-2 sm:py-3 sm:text-xs"
            style={{ borderColor: "rgba(86, 113, 89, 0.12)", color: "var(--color-sage-deep)" }}
          >
            {r}
          </div>
        ))}
      </div>
      {PERMS.map((perm, i) => (
        <div
          key={perm.label}
          className={`grid grid-cols-[1.6fr_repeat(4,_1fr)] ${
            i !== PERMS.length - 1 ? "border-b" : ""
          }`}
          style={{ borderColor: "rgba(86, 113, 89, 0.08)" }}
        >
          <div className="px-3 py-2.5 sm:px-4 sm:py-3">
            <BodySm as="span" className="font-medium text-text-heading">{perm.label}</BodySm>
          </div>
          {perm.values.map((v, j) => (
            <div
              key={j}
              className="flex items-center justify-center border-l py-2.5 sm:py-3"
              style={{ borderColor: "rgba(86, 113, 89, 0.08)" }}
            >
              {v ? (
                <Check
                  className="h-4 w-4"
                  strokeWidth={3}
                  style={{ color: "var(--color-sage-deep)" }}
                />
              ) : (
                <span className="h-1 w-3 rounded-full bg-neutral-200" />
              )}
            </div>
          ))}
        </div>
      ))}
      <Caption
        as="div"
        className="border-t bg-[color:var(--color-sage-light)]/30 px-3 py-2 sm:px-4 sm:py-2.5"
        style={{ borderColor: "rgba(86, 113, 89, 0.15)" }}
      >
        <span className="font-semibold" style={{ color: "var(--color-sage-deep)" }}>
          17 permissions
        </span>{" "}
        across Communications, Financials, Management, and more — sample shown.
      </Caption>
    </div>
  );
}

/* ======================================================================
   Small feature card (for "Memory" grid + Foundation section)
   ====================================================================== */

interface SmallCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: PastelKey;
}

function SmallCard({ icon: Icon, title, description, accent }: SmallCardProps) {
  const deep = PASTEL_DEEP[accent];
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-primary/10 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
      <div
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-sm"
        style={{ backgroundColor: deep }}
      >
        <Icon className="h-5 w-5" strokeWidth={2} />
      </div>
      <H4 className="mt-4">{title}</H4>
      <BodySm className="mt-2">{description}</BodySm>
    </div>
  );
}

/* ======================================================================
   Orbital pin — small pastel card that floats around the phone in the
   desktop orbital layout. Also used in the mobile stacked grid fallback.
   Click smooth-scrolls to the matching category band below.
   ====================================================================== */

interface OrbitalPinProps {
  targetId: string;
  number: string;
  label: string;
  tagline: string;
  icon: LucideIcon;
  accent: PastelKey;
}

function OrbitalPin({
  targetId,
  number,
  label,
  tagline,
  icon: Icon,
  accent,
}: OrbitalPinProps) {
  const tint = PASTEL_TINT[accent];
  const deep = PASTEL_DEEP[accent];

  const handleClick = () => {
    const el = document.getElementById(targetId);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className="group relative flex w-full max-w-[220px] flex-col items-start gap-2 rounded-2xl border border-primary/10 bg-white p-4 text-left shadow-[0_4px_20px_-6px_rgba(8,58,79,0.12)] transition-shadow duration-300 hover:shadow-[0_14px_32px_-10px_rgba(8,58,79,0.22)]"
    >
      <span
        aria-hidden
        className="absolute bottom-4 left-0 top-4 w-[3px] rounded-r-full"
        style={{ backgroundColor: deep, opacity: 0.9 }}
      />

      <div className="flex w-full items-center gap-2.5 pl-1">
        <div
          className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg text-white shadow-sm"
          style={{ backgroundColor: deep }}
        >
          <Icon className="h-4 w-4" strokeWidth={2.2} />
        </div>
        <div className="min-w-0 flex-1">
          <span
            className="text-[10px] font-bold tracking-[0.22em]"
            style={{ color: deep, opacity: 0.7 }}
          >
            {number}
          </span>
          <p className="text-sm font-bold tracking-tight text-text-heading">
            {label}
          </p>
        </div>
      </div>

      <p className="pl-1 text-xs leading-snug text-text-body">{tagline}</p>

      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ backgroundColor: tint, mixBlendMode: "multiply" }}
      />
    </motion.button>
  );
}

/* ======================================================================
   Page
   ====================================================================== */

export default function FeaturesPage() {
  return (
    <>
      {/* ================================================================
          HERO — Orbital phone on cream (Direction X4).
          Phone mockup center, 5 pastel pin-cards orbit around, dashed
          concentric rings behind for constellation feel. All cream-consistent.
          See memory: features-page-hero-options.md for other directions.
          ================================================================ */}
      <section
        className="relative -mt-24 overflow-hidden pt-24"
        style={{ backgroundColor: "#FCF9F3" }}
      >
        {/* Warm gold spotlight — spotlight feel without heavy gradients */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 900px 500px at 50% 30%, rgba(232, 196, 99, 0.12), transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          {/* Header — centered, compact */}
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal animation="fade" direction="up">
              <Kicker>Features</Kicker>
            </ScrollReveal>
            <ScrollReveal animation="fade" direction="up" delay={0.1}>
              <HeroTitle className="mt-5">
                MYT&apos;s{" "}
                <span
                  className="italic"
                  style={{ color: "var(--color-peach-deep)" }}
                >
                  Five Pillars
                </span>
                .
              </HeroTitle>
            </ScrollReveal>
            <ScrollReveal animation="fade" direction="up" delay={0.2}>
              <Lead className="mx-auto mt-5 max-w-xl">
                Everything your apartment deals with — mapped to one app.
              </Lead>
            </ScrollReveal>
          </div>

          {/* Orbital layout — desktop (lg+) uses a fixed-dimension canvas with
              named-area CSS grid. Phone sits in the center area; the 5 pins
              occupy 5 corner-ish cells around it. Grid beats absolute
              positioning here because it never conflicts with framer
              transforms and scales predictably. */}
          <ScrollReveal animation="fade" direction="up" delay={0.3}>
            <div
              className="relative mx-auto mt-12 hidden w-full max-w-[720px] lg:grid"
              style={{
                gridTemplateColumns: "210px 240px 210px",
                gridTemplateRows: "auto 1fr 1fr",
                gridTemplateAreas: `
                  ".    top    ."
                  "ml   phone  mr"
                  "bl   phone  br"
                `,
                columnGap: "20px",
                rowGap: "16px",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              {/* Decorative layer — dashed orbit rings + curved connector lines.
                  ViewBox matches grid dimensions so the paths align with where
                  the pins actually sit. */}
              <svg
                aria-hidden
                className="pointer-events-none absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 720 540"
              >
                <g stroke="var(--color-primary)" fill="none" strokeLinecap="round">
                  <circle cx="360" cy="270" r="280" strokeWidth="1" strokeDasharray="3 8" opacity="0.10" />
                  <circle cx="360" cy="270" r="200" strokeWidth="1" strokeDasharray="3 8" opacity="0.08" />
                  <circle cx="360" cy="270" r="130" strokeWidth="1" strokeDasharray="3 8" opacity="0.06" />
                </g>

                {/* Connector lines from each pin toward the phone edge.
                    Curved via quadratic control points so they feel like
                    orbital tangents, not straight spokes. Each stroke uses the
                    pin's accent color for subtle wayfinding. */}
                <g fill="none" strokeWidth="1.2" strokeLinecap="round" opacity="0.55">
                  {/* Money (top) → phone top edge */}
                  <path d="M 360 90 Q 360 100 360 125" stroke="var(--color-coral-deep)" />
                  {/* Memory (left-middle) → phone left edge upper */}
                  <path d="M 210 225 Q 240 230 260 235" stroke="var(--color-sky-deep)" />
                  {/* Voice (right-middle) → phone right edge upper */}
                  <path d="M 510 225 Q 480 230 460 235" stroke="var(--color-lavender-deep)" />
                  {/* People (bottom-left) → phone left edge lower */}
                  <path d="M 210 380 Q 240 370 260 360" stroke="var(--color-sage-deep)" />
                  {/* Services (bottom-right) → phone right edge lower */}
                  <path d="M 510 380 Q 480 370 460 360" stroke="var(--color-peach-deep)" />
                </g>
              </svg>

              {/* TOP — Money */}
              <div style={{ gridArea: "top" }} className="relative z-10">
                <OrbitalPin
                  targetId="money"
                  number="01"
                  label="Money"
                  tagline="Accounts that reconcile."
                  icon={Wallet}
                  accent="coral"
                />
              </div>

              {/* MIDDLE-LEFT — Memory */}
              <div style={{ gridArea: "ml" }} className="relative z-10">
                <OrbitalPin
                  targetId="memory"
                  number="05"
                  label="Memory"
                  tagline="Your apartment remembers."
                  icon={Wrench}
                  accent="sky"
                />
              </div>

              {/* CENTER — Phone (spans 2 rows).
                  Wrap with a relative container so we can layer a "breathing"
                  glow pulse behind the device. */}
              <div style={{ gridArea: "phone" }} className="relative z-10">
                {/* Breathing glow pulse behind phone — draws the eye, subtle */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.4, 0.55, 0.4],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    width: 340,
                    height: 340,
                    background:
                      "radial-gradient(circle, rgba(232, 196, 99, 0.35) 0%, rgba(232, 196, 99, 0.12) 40%, transparent 70%)",
                    borderRadius: "50%",
                  }}
                />

                <div
                  className="relative z-10 overflow-hidden rounded-[32px] border-[3px] border-neutral-700 bg-white shadow-2xl"
                  style={{ width: 210, height: 420 }}
                >
                  <div className="absolute left-1/2 top-0 z-20 h-5 w-24 -translate-x-1/2 rounded-b-xl bg-neutral-700" />
                  <Image
                    src="/dashboard-screenshot.jpeg"
                    alt="MYT dashboard"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>

              {/* MIDDLE-RIGHT — Voice */}
              <div style={{ gridArea: "mr" }} className="relative z-10">
                <OrbitalPin
                  targetId="voice"
                  number="02"
                  label="Voice"
                  tagline="Heard, not lost in noise."
                  icon={Megaphone}
                  accent="lavender"
                />
              </div>

              {/* BOTTOM-LEFT — People */}
              <div style={{ gridArea: "bl" }} className="relative z-10">
                <OrbitalPin
                  targetId="people"
                  number="04"
                  label="People"
                  tagline="Right access for right people."
                  icon={Users}
                  accent="sage"
                />
              </div>

              {/* BOTTOM-RIGHT — Services */}
              <div style={{ gridArea: "br" }} className="relative z-10">
                <OrbitalPin
                  targetId="services"
                  number="03"
                  label="Services"
                  tagline="Your apartment's helpdesk."
                  icon={ClipboardCheck}
                  accent="peach"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Mobile/tablet fallback — stacked pillar cards. Phone mockup
              omitted: showing a phone-on-a-phone is redundant for users
              already viewing on mobile. Cards capped + centered on mobile
              so they don't bleed edge-to-edge. */}
          <div className="mt-12 lg:hidden">
            <ScrollReveal animation="fade" direction="up" delay={0.3}>
              <div className="mx-auto grid max-w-xs grid-cols-1 gap-3 sm:max-w-none sm:grid-cols-2">
                {(
                  [
                    { id: "money", num: "01", label: "Money", tag: "Accounts that reconcile.", icon: Wallet, accent: "coral" as PastelKey },
                    { id: "voice", num: "02", label: "Voice", tag: "Heard, not lost in noise.", icon: Megaphone, accent: "lavender" as PastelKey },
                    { id: "services", num: "03", label: "Services", tag: "Your apartment's helpdesk.", icon: ClipboardCheck, accent: "peach" as PastelKey },
                    { id: "people", num: "04", label: "People", tag: "Right access for right people.", icon: Users, accent: "sage" as PastelKey },
                    { id: "memory", num: "05", label: "Memory", tag: "Your apartment remembers.", icon: Wrench, accent: "sky" as PastelKey },
                  ]
                ).map((p) => (
                  <OrbitalPin
                    key={p.id}
                    targetId={p.id}
                    number={p.num}
                    label={p.label}
                    tagline={p.tag}
                    icon={p.icon}
                    accent={p.accent}
                  />
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Scroll hint */}
          <ScrollReveal animation="fade" direction="up" delay={0.5}>
            <div className="mt-12 flex items-center justify-center gap-2 lg:mt-16">
              <Caption className="text-text-body/60">
                Scroll to explore each part
              </Caption>
              <span aria-hidden className="h-px w-8 bg-text-body/30" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          CATEGORY ZONE — nav + 5 pastel bands.
          The wrapper's id="category-zone" lets CategoryNav track when we've
          entered/exited this region; while inside, it floats fixed-center at
          the top of the viewport and the global pill header stays hidden.
          ================================================================ */}
      <div id="category-zone">
        <CategoryNav zoneId="category-zone" />

        {/* ================================================================
            1. MONEY — Coral
            ================================================================ */}
        <CategoryBand
          id="money"
        accent="coral"
        kicker="01 / Money"
        heading="Accounts that reconcile themselves."
        tagline="Real apartment accounting — operating account and corpus fund, separately. Every rupee tracked with a running balance."
        glowPos="left"
      >
        <MoneyDataWidget />
        <PaymentReceipt />
      </CategoryBand>

      {/* ================================================================
          2. VOICE — Lavender
          ================================================================ */}
      <CategoryBand
        id="voice"
        accent="lavender"
        kicker="02 / Voice"
        heading="Every voice. Heard."
        tagline="Every conversation. Every decision. Preserved."
        glowPos="right"
      >
        <VoiceActivityFeed />
      </CategoryBand>

      {/* ================================================================
          3. SERVICES — Peach
          ================================================================ */}
      <CategoryBand
        id="services"
        accent="peach"
        kicker="03 / Services"
        heading="Services, sorted."
        tagline="Complaints raised. Handymen at hand. Warranties never misplaced. The daily work of running an apartment — seamless."
        glowPos="left"
      >
        <ServicesCardRow />
      </CategoryBand>

      {/* ================================================================
          4. PEOPLE — Sage
          ================================================================ */}
      <CategoryBand
        id="people"
        accent="sage"
        kicker="04 / People"
        heading="Right access for the right people."
        tagline="Who lives where. Who owns what. Who can do what."
        glowPos="right"
      >
        <PeopleStrips />

        <ScrollReveal animation="fade" direction="up">
          <PermissionsMatrix />
        </ScrollReveal>

        <p className="mx-auto max-w-2xl text-center text-sm italic leading-relaxed text-text-body/70">
          Every role, mapped. Every permission, scoped.
        </p>
      </CategoryBand>

      {/* ================================================================
          5. MEMORY — Sky
          ================================================================ */}
      <CategoryBand
        id="memory"
        accent="sky"
        kicker="05 / Memory"
        heading="Everything. Remembered."
        tagline="When/where/how every payment was made. Who fixed the lift and when. Every resident who lived here. Every notice, poll, and decision. Apartments lose this memory when Secretaries change — MYT doesn't."
        glowPos="center"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <SmallCard
            icon={ListChecks}
            title="Payment history"
            description="Every rupee in and out, timestamped. Who paid, when, how, for which month. Drill into any flat's ledger in 3 taps."
            accent="sky"
          />
          <SmallCard
            icon={Wrench}
            title="Service history"
            description="Every repair logged with date, vendor, cost, and notes. Next Admin inherits a complete record, not a fresh mystery."
            accent="sky"
          />
          <SmallCard
            icon={Users}
            title="Resident history"
            description="Who lived in Flat B-302 three years ago. When they moved out. Who succeeded them. Continuity across every handover."
            accent="sky"
          />
          <SmallCard
            icon={Megaphone}
            title="Notice & poll archive"
            description="Every notice ever sent. Every poll ever run. Every decision ever made. Searchable, exportable, permanent."
            accent="sky"
          />
          <SmallCard
            icon={LineChart}
            title="Dashboard insights"
            description="What's trending. What's overdue. What needs attention. Your dashboard nudges you — your next step is always obvious."
            accent="sky"
          />
          <SmallCard
            icon={FileBadge2}
            title="Meeting minutes"
            description="Every AGM decision, committee resolution, and emergency action — captured, searchable, and linked to the meeting that made them."
            accent="sky"
          />
        </div>
        </CategoryBand>
      </div>
      {/* /#category-zone */}

      {/* ================================================================
          6. FOUNDATION — cream
          ================================================================ */}
      <section
        className="relative overflow-hidden px-4 py-20 sm:px-6 md:py-28"
        style={{ backgroundColor: "#FCF9F3" }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center md:mb-16">
            <ScrollReveal animation="fade" direction="up">
              <Kicker>Foundation</Kicker>
            </ScrollReveal>
            <ScrollReveal animation="fade" direction="up" delay={0.1}>
              <H1 as="h2" className="mt-4">
                Built on solid ground.
              </H1>
            </ScrollReveal>
            <ScrollReveal animation="fade" direction="up" delay={0.2}>
              <BodyLg className="mx-auto mt-4 max-w-2xl">
                The things you don&apos;t notice until they matter.
              </BodyLg>
            </ScrollReveal>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <SmallCard
              icon={Sparkles}
              title="Instant onboarding"
              description="Six fields. One screen. Your apartment is live in under 15 seconds. Add residents later — guided by your dashboard."
              accent="coral"
            />
            <SmallCard
              icon={LineChart}
              title="Dashboard insights"
              description="Your dashboard nudges you. 'Nine flats vacant — invite them.' 'Add your address.' Your next step, always obvious."
              accent="sage"
            />
            <SmallCard
              icon={Download}
              title="Export anytime"
              description="Your records are yours. Export your data whenever you want. DPDP compliant. No lock-in, no drama."
              accent="lavender"
            />
          </div>
        </div>
      </section>

      {/* ================================================================
          7. "WHAT MYT REPLACES"
          ================================================================ */}
      <section className="bg-white px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center md:mb-14">
            <ScrollReveal animation="fade" direction="up">
              <Kicker>What MYT replaces</Kicker>
            </ScrollReveal>
            <ScrollReveal animation="fade" direction="up" delay={0.1}>
              <H1 as="h2" className="mt-4">
                One app. Zero of these.
              </H1>
            </ScrollReveal>
          </div>
          <ScrollReveal animation="fade" direction="up" delay={0.2}>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "The shared maintenance Excel sheet",
                "The WhatsApp group for notices",
                "The second WhatsApp group for complaints",
                "The manual register in the admin's drawer",
                "The folder of payment screenshots",
                "The 'who repaired the lift last time?' question",
                "The yellow paper pinned to the notice board",
                "The annual hand-off panic when the Secretary changes",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-primary/10 bg-white p-4"
                >
                  <span className="mt-0.5 text-base text-text-body/40">×</span>
                  <BodyMd
                    as="span"
                    className="text-text-body/70 line-through decoration-text-body/40 decoration-2"
                  >
                    {item}
                  </BodyMd>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          FINAL CTA — matches homepage
          ================================================================ */}
      <section
        className="relative overflow-hidden px-4 py-14 sm:px-6 md:py-20"
        style={{ backgroundColor: "#FCF9F3" }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal animation="fade" direction="up">
            <H1 as="h2">
              Your apartment.{" "}
              <span className="italic" style={{ color: "var(--color-primary)" }}>
                Handled.
              </span>
            </H1>
            <Link
              href="/download"
              className="group mt-7 inline-flex flex-col items-center gap-0 rounded-full bg-primary px-7 py-3 text-white shadow-lg transition-all hover:shadow-xl sm:px-9 sm:py-4"
            >
              <span className="flex items-center gap-2 text-base font-semibold sm:text-lg">
                Create My Apartment
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 sm:h-5 sm:w-5" />
              </span>
              <span className="text-xs font-normal text-white/70 sm:text-sm">
                in under 15 seconds
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
