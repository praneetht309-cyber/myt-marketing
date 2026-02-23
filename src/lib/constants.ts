export const SITE = {
  name: "MYT",
  tagline: "Stand Alone Apartment Management Platform",
  description:
    "MYT is a management platform built for self-managed residential communities in India. Onboard your apartment in 15 seconds.",
  url: "https://myt.community",
} as const;

export const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "Early Access", href: "/early-access" },
  { label: "Contact", href: "/contact" },
] as const;

export const FEATURES = [
  {
    title: "Maintenance & Finances",
    description:
      "Track monthly maintenance, manage operating accounts and corpus funds, record payments, and view flat-wise balances — all in one place.",
    icon: "wallet",
  },
  {
    title: "Notices & Announcements",
    description:
      "Send notices, announcements, and reminders to all residents instantly. No more WhatsApp group chaos.",
    icon: "megaphone",
  },
  {
    title: "Community Chat",
    description:
      "Built-in community chat rooms for your apartment. Keep discussions organised and accessible to everyone.",
    icon: "chat",
  },
  {
    title: "Resident Directory",
    description:
      "Know who lives where. A complete directory of owners, tenants, and their flats — always up to date.",
    icon: "users",
  },
  {
    title: "Requests & Complaints",
    description:
      "Residents raise requests, admins track and resolve them. Transparent complaint management with status tracking.",
    icon: "clipboard",
  },
{
    title: "Roles & Permissions",
    description:
      "Owners, tenants, admins, watchmen — everyone sees only what they should. Fine-grained permission controls built in.",
    icon: "lock",
  },
  {
    title: "Instant Onboarding",
    description:
      "Onboard your apartment in 15 seconds with just 6 fields. Import existing data from Excel or set up manually.",
    icon: "rocket",
  },
] as const;

export const HERO_STATS = [
  { target: 15, suffix: "s", label: "To onboard" },
  { prefix: "3-", target: 300, suffix: "", label: "Residents supported" },
  { target: 100, suffix: "%", label: "Self-managed" },
] as const;

export const FORMSPREE_ENDPOINT = "https://formspree.io/f/mlgwoobq";
