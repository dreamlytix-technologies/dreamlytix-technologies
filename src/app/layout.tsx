import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MotionProvider from "@/components/ui/MotionProvider";
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
    default: "Dreamlytix - Website, Admin Panel & Mobile App Development India",
    template: "%s | Dreamlytix",
  },
  description:
    "Dreamlytix builds custom websites, admin panels, and mobile apps for businesses & institutions in India. Trusted by 150+ clients. Get a free quote today!",
  keywords: [
    "Dreamlytix",
    "Dreamlytix Technologies",
    "dreamlytix.com",
    "website development company India",
    "custom website development",
    "admin panel development",
    "mobile app development India",
    "web application development",
    "software development company India",
    "custom software development",
    "business website development",
    "school management software India",
    "school ERP software",
    "school website development",
    "school mobile app",
    "student management system",
    "fee management software",
    "attendance tracking system",
    "admin dashboard development",
    "Android app development India",
    "React Next.js development",
    "Node.js development company",
    "SaaS development India",
    "cloud based management system",
    "CRM development India",
    "ERP software development",
    "software company West Bengal",
    "software company Kolkata",
    "software company Murshidabad",
    "IT company India",
    "digital transformation India",
    "app development company India",
    "best software company India",
    "affordable web development India",
    "startup software development",
  ],
  authors: [{ name: "Dreamlytix", url: siteUrl }],
  creator: "Dreamlytix",
  publisher: "Dreamlytix",
  category: "Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Dreamlytix",
    title: "Dreamlytix - Custom Websites, Admin Panels & Mobile Apps | India",
    description:
      "India's trusted software development company. We build custom websites, powerful admin panels, and mobile apps for businesses & institutions. 150+ happy clients with 99.9% uptime.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dreamlytix - Software Development Company India",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dreamlytix - Website, Admin Panel & App Development India",
    description: "Custom websites, admin panels & mobile apps for businesses and institutions. Trusted by 150+ clients. You Dream, We Build.",
    images: ["/images/og-image.png"],
    creator: "@dreamlytix",
    site: "@dreamlytix",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-IN": siteUrl,
    },
  },
  other: {
    "geo.region": "IN-WB",
    "geo.placename": "Murshidabad",
    "geo.position": "24.1756;88.2667",
    ICBM: "24.1756, 88.2667",
    "revisit-after": "7 days",
    rating: "general",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Dreamlytix",
  alternateName: ["Dreamlytix Technologies", "Dreamlytix Software", "Dreamlytix India"],
  legalName: "Dreamlytix",
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/images/hero-logo.png`,
    width: 72,
    height: 72,
  },
  description:
    "Professional software development company specializing in custom websites, admin panels, mobile applications, and management software for businesses and educational institutions in India.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gangin",
    addressLocality: "Murshidabad",
    addressRegion: "West Bengal",
    postalCode: "742149",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9933606242",
      contactType: "customer service",
      email: "contact@dreamlytix.com",
      availableLanguage: ["English", "Hindi", "Bengali"],
      areaServed: "IN",
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-9933606242",
      contactType: "sales",
      email: "contact@dreamlytix.com",
      availableLanguage: ["English", "Hindi", "Bengali"],
      areaServed: "IN",
    },
  ],
  sameAs: ["https://twitter.com/dreamlytix", "https://www.linkedin.com/company/dreamlytix", "https://www.instagram.com/dreamlytix", "https://github.com/dreamlytix"],
  founder: {
    "@type": "Person",
    name: "Dreamlytix Team",
  },
  foundingDate: "2020",
  slogan: "You Dream, We Build",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 5,
    maxValue: 20,
  },
  knowsAbout: ["Website Development", "Admin Panel Development", "Mobile App Development", "School Management Software", "Custom Software Development", "SaaS Development", "Web Applications"],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#business`,
  name: "Dreamlytix",
  alternateName: ["Dreamlytix Technologies", "Dreamlytix Software"],
  image: `${siteUrl}/images/hero-logo.png`,
  url: siteUrl,
  telephone: "+91-9933606242",
  email: "contact@dreamlytix.com",
  hasMap: "https://maps.google.com/?q=Dreamlytix+Gangin+Murshidabad+West+Bengal+742149",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gangin",
    addressLocality: "Murshidabad",
    addressRegion: "West Bengal",
    postalCode: "742149",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 24.1756,
    longitude: 88.2667,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "50",
    bestRating: "5",
    worstRating: "1",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  serviceType: ["Website Development", "Admin Panel Development", "Mobile App Development", "Custom Software Development", "School Management Software", "SaaS Development"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Dreamlytix",
  alternateName: "Dreamlytix Technologies",
  url: siteUrl,
  description: "Dreamlytix is a software development company in India offering custom websites, admin panels, and mobile apps for businesses and institutions.",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  inLanguage: "en-IN",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const siteNavigationSchema = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  name: [
    "About Us",
    "Services",
    "Portfolio",
    "Reviews",
    "FAQs",
    "Contact",
    "Privacy Policy",
    "Terms & Conditions",
  ],
  url: [
    `${siteUrl}/#implementation`,
    `${siteUrl}/#services`,
    `${siteUrl}/#portfolio`,
    `${siteUrl}/#testimonials`,
    `${siteUrl}/#faq`,
    `${siteUrl}/#contact`,
    `${siteUrl}/privacy-policy`,
    `${siteUrl}/terms-and-conditions`,
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}/#webpage`,
  url: siteUrl,
  name: "Dreamlytix - Custom Websites, Admin Panels & Mobile Apps | India",
  description:
    "Dreamlytix is India's trusted software development company. We build custom websites, admin panels, and mobile apps for businesses and institutions.",
  isPartOf: {
    "@id": `${siteUrl}/#website`,
  },
  about: {
    "@id": `${siteUrl}/#organization`,
  },
  inLanguage: "en-IN",
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${siteUrl}/images/og-image.png`,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Dreamlytix and who is it for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dreamlytix is an educational technology company that builds complete digital ecosystems for schools and institutions. We provide integrated websites, admin panels, and mobile apps — all tailored for educational workflows like student management, attendance tracking, fee collection, and parent communication.",
      },
    },
    {
      "@type": "Question",
      name: "What services are included in the Dreamlytix package?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our complete package includes a responsive school website, a full-featured admin panel (student management, attendance, fee tracking, exam results, timetable, reports), and a dedicated Android mobile app for parents and students with real-time notifications, attendance, and fee information.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build and deploy the complete system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our typical timeline is 8–10 weeks from requirements gathering to full deployment. This includes UI/UX design, development, rigorous testing, and team training — ensuring a smooth launch without compromising on quality.",
      },
    },
    {
      "@type": "Question",
      name: "Is my school's data secure with Dreamlytix?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We implement role-based access control, industry-standard encryption for all sensitive data, automated daily backups, and cloud-based hosting with a 99.9% uptime guarantee. Your student records, financial data, and institutional information are always protected and recoverable.",
      },
    },
    {
      "@type": "Question",
      name: "Can the system scale as our school grows?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — our architecture is built to scale seamlessly from 100 to 10,000+ students with no performance degradation. We use modern technologies like Next.js, Node.js, and cloud infrastructure (AWS, Docker) to ensure speed and reliability at any scale.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide ongoing support after deployment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer dedicated technical support, team training during onboarding, and continuous maintenance through our AMC plan. This includes server monitoring, security patches, bug fixes, minor enhancements, and priority issue resolution to keep your system running smoothly.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "Service",
      position: 1,
      name: "Custom Website Development",
      description: "Modern, responsive websites with photo galleries, news/events sections, team pages, and complete content management for businesses and institutions.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: "India",
      serviceType: "Website Development",
    },
    {
      "@type": "Service",
      position: 2,
      name: "Admin Panel Development",
      description: "Comprehensive web-based admin panels for managing clients, users, attendance, billing, reports, and operations from one powerful dashboard.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: "India",
      serviceType: "Admin Panel Development",
    },
    {
      "@type": "Service",
      position: 3,
      name: "Mobile App Development",
      description: "Dedicated Android apps for end-users with real-time access to updates, billing, attendance, communications, and push notifications.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: "India",
      serviceType: "Mobile App Development",
    },
    {
      "@type": "Service",
      position: 4,
      name: "School Management Software",
      description: "Complete school management system with student management, fee tracking, attendance, exam results, timetables, and parent communication apps.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: "India",
      serviceType: "Software Development",
    },
    {
      "@type": "Service",
      position: 5,
      name: "Custom Software Development",
      description: "Tailored software solutions including CRM, ERP, SaaS platforms, and business automation tools built with modern tech stack.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: "India",
      serviceType: "Software Development",
    },
    {
      "@type": "Service",
      position: 6,
      name: "UI/UX Design & Branding",
      description: "User-centric interface design, branding, and digital identity solutions that create lasting impressions and drive engagement.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: "India",
      serviceType: "Design",
    },
  ],
};

const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Dreamlytix Management Software",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, Android",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
    description: "Free demo available",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "50",
    bestRating: "5",
    worstRating: "1",
  },
  description:
    "Cloud-based management software with custom admin panels, billing, attendance tracking, reporting & mobile apps for businesses and institutions in India.",
  url: siteUrl,
  provider: {
    "@id": `${siteUrl}/#organization`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Dreamlytix" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationSchema) }} />
      </head>
      <body suppressHydrationWarning className={`${inter.variable} ${outfit.variable} font-sans antialiased flex flex-col overflow-x-hidden`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold">
          Skip to content
        </a>
        <MotionProvider>
          <Header />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
