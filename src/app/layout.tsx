import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/resume";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = `https://${profile.domain}`;
const TITLE = "Ezekiel Okebule — Software Engineer & Technical Lead";
const DESCRIPTION =
  "Ezekiel Okebule — Software Engineer and Technical Lead with 5+ years building backend systems, distributed architecture, and cloud infrastructure. Python, Django, Next.js, AWS, GCP.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "software engineer",
    "technical lead",
    "backend engineer",
    "Python",
    "Django",
    "Django REST Framework",
    "Next.js",
    "React Native",
    "TypeScript",
    "AWS",
    "GCP",
    "distributed systems",
    "Nigeria",
    "Lagos",
    "remote",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  alternates: { canonical: "/" },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/apple-touch-icon.png",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: profile.name,
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: TITLE }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0e14",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Software Engineer & Technical Lead",
  description: profile.summary,
  url: SITE_URL,
  image: `${SITE_URL}/images/og-image.jpg`,
  knowsAbout: [
    "Python",
    "Django",
    "Django REST Framework",
    "PostgreSQL",
    "Redis",
    "Celery",
    "Next.js",
    "React",
    "React Native",
    "TypeScript",
    "Tailwind CSS",
    "AWS",
    "Google Cloud Platform",
    "Oracle Cloud",
    "Docker",
    "CI/CD",
    "Distributed systems",
    "LLM API integration",
    "Natural language processing",
  ],
  alumniOf: { "@type": "CollegeOrUniversity", name: "Olabisi Onabanjo University" },
  sameAs: [profile.github, profile.linkedin, profile.x],
  address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "Nigeria" },
  email: profile.email,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
