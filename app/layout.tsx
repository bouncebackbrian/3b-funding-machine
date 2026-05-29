import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics, MicrosoftClarity } from "./components/Analytics";
import "./globals.css";

const SITE_URL   = "https://funding.bouncebackbrian.com";
const GA_ID      = process.env.NEXT_PUBLIC_GA_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:  "3B Funding Machine — Find, Access & Secure Business Funding",
    template: "%s | 3B Funding Machine",
  },
  description:
    "Navigate grants, SBA loans, business credit lines, and investor capital — all in one place. The 3B Funding Machine helps entrepreneurs find and access the funding they deserve.",
  keywords: [
    "3B Funding Machine",
    "business funding",
    "small business grants",
    "SBA loans",
    "business credit",
    "startup funding",
    "entrepreneur funding",
    "BounceBackBrian",
    "3B Ecosystem",
    "business financing",
  ],
  authors:   [{ name: "Brian A Martin", url: "https://bouncebackbrian.com" }],
  creator:   "Brian A Martin",
  openGraph: {
    type:        "website",
    url:          SITE_URL,
    siteName:    "3B Funding Machine",
    title:       "3B Funding Machine — Find, Access & Secure Business Funding",
    description: "Grants, SBA loans, credit lines, and investor capital — all in one place. Part of the 3B Ecosystem.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "3B Funding Machine" }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "3B Funding Machine — Find, Access & Secure Business Funding",
    description: "Navigate grants, SBA loans, and business credit in one place.",
    images:      ["/og-image.png"],
    creator:     "@bouncebackbrian",
  },
  alternates: { canonical: SITE_URL },
  robots: {
    index:  true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
        {GA_ID      && <GoogleAnalytics   id={GA_ID}      />}
        {CLARITY_ID && <MicrosoftClarity  id={CLARITY_ID} />}
      </body>
    </html>
  );
}
