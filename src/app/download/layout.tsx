import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download MYT — Available on Google Play and App Store",
  description:
    "Download MYT for Android and iOS. Apartment management app for self-managed residential communities in India. Live on Google Play and the Apple App Store.",
  alternates: {
    canonical: "/download",
  },
  openGraph: {
    title: "Download MYT — on Google Play and App Store",
    description:
      "Apartment management app for self-managed residential communities in India.",
    url: "https://www.themyt.app/download",
  },
  twitter: {
    title: "Download MYT — on Google Play and App Store",
    description:
      "Apartment management app for self-managed stand-alone apartments in India. Available on Android and iOS.",
  },
};

export default function DownloadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
