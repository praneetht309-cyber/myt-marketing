import type { Metadata } from "next";
import { Inter, Lora, Roboto_Slab } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SITE } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora-var",
  subsets: ["latin"],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab-var",
  subsets: ["latin"],
});

const CANONICAL_URL = "https://www.themyt.app";
const OG_IMAGE = "/og-image.png";

export const metadata: Metadata = {
  metadataBase: new URL(CANONICAL_URL),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "apartment management app India",
    "self-managed apartment software",
    "AOA management platform",
    "stand-alone apartment app",
    "society management India",
    "maintenance collection app",
    "resident management software",
  ],
  authors: [{ name: "Sarvapindi Systems Private Limited" }],
  creator: "Sarvapindi Systems Private Limited",
  publisher: "Sarvapindi Systems Private Limited",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: CANONICAL_URL,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE.name} — ${SITE.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    other: { "msvalidate.01": "29BBAE3897789D7AD53C30B106FDAD22" },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sarvapindi Systems Private Limited",
  alternateName: SITE.name,
  url: CANONICAL_URL,
  logo: `${CANONICAL_URL}/myt-logo.svg`,
  description:
    "Sarvapindi Systems Private Limited is a DPIIT-recognised Indian startup building MYT, a management platform for self-managed residential apartments.",
  foundingDate: "2026",
  email: "hello@themyt.app",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE.name,
  alternateName: `${SITE.name} — ${SITE.tagline}`,
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Apartment Management",
  operatingSystem: "Android, iOS",
  description: SITE.description,
  url: CANONICAL_URL,
  installUrl: [SITE.playStoreUrl, SITE.appStoreUrl],
  downloadUrl: [SITE.playStoreUrl, SITE.appStoreUrl],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
  publisher: {
    "@type": "Organization",
    name: "Sarvapindi Systems Private Limited",
    url: CANONICAL_URL,
  },
  inLanguage: "en-IN",
  countriesSupported: "IN",
  audience: {
    "@type": "Audience",
    audienceType:
      "Self-managed stand-alone apartments in India (3-100 flats)",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationSchema),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${lora.variable} ${robotoSlab.variable} font-sans antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
