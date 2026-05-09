import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download MYT — Available on Google Play and App Store",
  description:
    "Download MYT for Android and iOS. Free apartment management app for self-managed residential communities in India. Live on Google Play and the Apple App Store.",
  alternates: {
    canonical: "/download",
  },
  openGraph: {
    title: "Download MYT — Free on Google Play and App Store",
    description:
      "Free apartment management app for self-managed residential communities in India.",
    url: "https://www.themyt.app/download",
  },
};

export default function DownloadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
