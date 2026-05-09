import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features — Apartment Management for Indian Communities",
  description:
    "Five things MYT does for self-managed apartments in India: maintenance & finances, notices & chat, requests & handymen, resident directory, and apartment memory.",
  alternates: {
    canonical: "/features",
  },
  openGraph: {
    title: "MYT Features — Apartment Management for Indian Communities",
    description:
      "Maintenance, notices, requests, residents, and archives — purpose-built for self-managed stand-alone apartments in India.",
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
