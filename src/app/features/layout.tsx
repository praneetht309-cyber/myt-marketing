import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features — Money, Voice, Services, People, Memory",
  description:
    "Five pillars built for self-managed apartments: maintenance and finances, communications, requests and handymen, resident directory, and apartment memory.",
  alternates: {
    canonical: "/features",
  },
  openGraph: {
    title: "MYT Features — Five Pillars for Self-Managed Apartments",
    description:
      "Maintenance collection, announcements, requests, residents, and archives — purpose-built for stand-alone apartments in India.",
    url: "https://www.themyt.app/features",
  },
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
