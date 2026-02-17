import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";

// pure components
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import "./globals.css";

// Modern, professional font for body text
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Modern, bold font for headings
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://dreamlytix.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dreamlytix - You Dream, We Build | Software Development Company",
    template: "%s | Dreamlytix",
  },
  description:
    "Professional software development company specializing in secure websites, mobile applications, and school management systems. We deliver reliable, scalable, and innovative digital solutions.",
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "school management system",
    "educational software",
    "custom software solutions",
    "website development India",
    "admin panel development",
    "student management system",
    "fee management software",
  ],
  authors: [{ name: "Dreamlytix", url: siteUrl }],
  creator: "Dreamlytix",
  publisher: "Dreamlytix",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Dreamlytix",
    title: "Dreamlytix - You Dream, We Build | Software Development Company",
    description:
      "Professional software development company specializing in secure websites, mobile applications, and school management systems. Trusted by 50+ institutions.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dreamlytix - Professional Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dreamlytix - You Dream, We Build",
    description:
      "Professional software development company delivering secure websites, mobile apps, and school management systems.",
    images: ["/images/og-image.png"],
    creator: "@dreamlytix",
  },
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
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: siteUrl,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dreamlytix",
  url: "https://dreamlytix.com",
  logo: "https://dreamlytix.com/images/hero-logo.png",
  description:
    "Professional software development company specializing in secure websites, mobile applications, and school management systems.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gangin, Murshidabad",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9933606242",
    contactType: "customer service",
    email: "contact@dreamlytix.com",
    availableLanguage: ["English", "Hindi", "Bengali"],
  },
  sameAs: [],
  founder: {
    "@type": "Person",
    name: "Dreamlytix Team",
  },
  foundingDate: "2020",
  slogan: "You Dream, We Build",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Dreamlytix",
  url: "https://dreamlytix.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://dreamlytix.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased flex flex-col overflow-x-hidden`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
