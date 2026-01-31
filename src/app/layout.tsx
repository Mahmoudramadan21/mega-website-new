import type { Metadata, Viewport } from "next";
import { Footer, Header } from "@/components/layout";
import Script from "next/script"; 
import "./globals.css";

/**
 * Global metadata for the entire site.
 * This is defined in the root layout and will be inherited by all pages.
 * Nested pages/layouts can override or extend specific fields (e.g., title, description).
 *
 * Best practices applied:
 * - Use metadataBase for absolute URLs (required for OG images, canonical, etc.).
 * - Provide a title template for consistent branding across pages (%s = page-specific title).
 * - Rich Open Graph and Twitter cards for better social sharing previews.
 * - Viewport and charset for mobile/responsiveness.
 * - Robots: allow full indexing (adjust if needed for staging).
 * - Icons: assumes you have favicon.ico, apple-touch-icon.png, etc. in /public or /app.
 * - Alternates: add if you support multiple languages later.
 */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  // Base URL – replace with your production domain
  metadataBase: new URL("https://megateam.vercel.app"), // CHANGE THIS TO YOUR ACTUAL DOMAIN

  // Title configuration
  title: {
    default: "Grow Your Skills | MEGA",
    template: "%s | MEGA", // Page-specific titles will appear as "Page Title | MEGA"
  },

  // Core SEO tags
  description:
    "Grow your skills with MEGA – the leading student volunteer community at Mansoura University. Participate in hands-on projects, workshops, events, and mentorship opportunities across technical and non-technical areas.",

  keywords: [
    "MEGA",
    "MEGA Mansoura",
    "MEGA Mansoura University",
    "MEGA MU",
    "student community Mansoura",
    "volunteer team Mansoura",
    "student activities Mansoura",
    "workshops Mansoura",
    "projects Mansoura",
    "mentorship Mansoura",
    "technical skills Mansoura",
    "non-technical skills Mansoura",
    "leadership workshops Mansoura",
    "soft skills development Mansoura",
    "student events Mansoura University",
    "collaboration and teamwork Mansoura",
  ],

  alternates: {
    canonical: `https://megateam.vercel.app`,
  },

  authors: [{ name: "MEGA Team" }],
  creator: "MEGA Team",
  publisher: "MEGA Team",

  // Robots – allow search engines to index and follow
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    title: "MEGA | Grow Your Skills",
    description:
      "Join MEGA – the student-led community at Mansoura University offering workshops, projects, events, and mentorship for both technical and non-technical skills.",
    siteName: "MEGA",
    images: [
      {
        url: "/og-image.jpg", // Recommended: 1200x630 PNG in /public
        width: 1200,
        height: 630,
        alt: "MEGA Team Logo and Banner",
      },
    ],
    locale: "en_US", // Change to "ar_EG" if primary language is Arabic
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "MEGA | Grow Your Skills",
    description:
      "Workshops, projects, events, and mentorship at MEGA – develop both technical and non-technical skills as part of a vibrant student community at Mansoura University.",
    images: ["/twitter-image.jpg"],
    creator: "@MegaTeamMU",
    site: "@MegaTeamMU",
  },

  // Additional useful tags
  manifest: "/manifest.json", // If you have a PWA manifest
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Root HTML element with English language and left-to-right direction
    <html lang="en" dir="ltr">
      {/* Inline schema.org Organization markup for enhanced SEO and rich results */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "MEGA Team",
            alternateName: "MEGA Mansoura University",
            url: "https://megateam.vercel.app/",
            logo: "https://megateam.vercel.app/images/logo.svg",
            description:
              "MEGA is a leading student volunteer community at Mansoura University, empowering students through a variety of activities, projects, workshops, and mentorship in both technical and non-technical skills.",
            foundingDate: "2018",
            founder: {
              "@type": "Person",
              name: "MEGA Founding Members",
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Mansoura",
              addressRegion: "Dakahlia",
              addressCountry: "EG",
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "General Inquiry",
              email: "mega.team.mu@gmail.com",
            },
            sameAs: [
              "https://www.facebook.com/megateam.mu18",
              "https://www.instagram.com/megateammu",
              "https://x.com/MegaTeamMU",
              "https://eg.linkedin.com/company/mega-team-mu",
              "https://www.youtube.com/@MEGATeamMU",
            ],
          }),
        }}
      />
      {/* Main body content wrapper */}
      <body>
        {/* Site header component - includes navigation and logo */}
        <Header />
        {/* Primary content area for page-specific children */}
        <main id="main">{children}</main>
        {/* Site footer component - includes links, contact info, and copyright */}
        <Footer />
      </body>
    </html>
  );
}