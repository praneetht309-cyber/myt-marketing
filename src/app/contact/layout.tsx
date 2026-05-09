import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact MYT — Talk to the Founder",
  description:
    "Reach out to MYT — get in touch about onboarding your apartment, partnership enquiries, or product feedback. Built for self-managed residential communities in India.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact MYT",
    description:
      "Get in touch about onboarding your apartment, partnerships, or product feedback.",
    url: "https://www.themyt.app/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
