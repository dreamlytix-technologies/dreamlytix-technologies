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
    default:
      "Dreamlytix - Best School Management Software | Website, Admin Panel & Mobile App Development India",
    template: "%s | Dreamlytix - School Management Software",
  },
  description:
    "Dreamlytix is a leading school management software company in India. We build secure school websites, admin panels, student management systems, fee management software, attendance tracking apps & mobile applications for educational institutions. Trusted by 50+ schools.",
  keywords: [
    "school management software",
    "school management system",
    "school ERP software India",
    "student management system",
    "fee management software",
    "attendance tracking system",
    "school website development",
    "school mobile app development",
    "educational software India",
    "school admin panel",
    "online school management",
    "school management app",
    "digital school solution",
    "parent communication app",
    "exam result management system",
    "school software company India",
    "web development company India",
    "mobile app development India",
    "custom software development",
    "Dreamlytix",
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
    title:
      "Dreamlytix - Best School Management Software | Website & App Development India",
    description:
      "India's trusted school management software company. We build secure school websites, admin panels, student management systems, and mobile apps. Trusted by 50+ institutions with 99.9% uptime.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dreamlytix - School Management Software Company India",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dreamlytix - Best School Management Software India",
    description:
      "Build secure school websites, admin panels & mobile apps with Dreamlytix. Trusted by 50+ schools. Student management, fee tracking, attendance & more.",
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
  verification: {
    google: "your-google-verification-code",
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
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/images/hero-logo.png`,
    width: 72,
    height: 72,
  },
  description:
    "Professional software development company specializing in school management systems, secure websites, mobile applications, and educational software solutions in India.",
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
  sameAs: [
    "https://twitter.com/dreamlytix",
    "https://www.linkedin.com/company/dreamlytix",
    "https://www.instagram.com/dreamlytix",
    "https://github.com/dreamlytix",
  ],
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
  knowsAbout: [
    "School Management Software",
    "Web Development",
    "Mobile App Development",
    "Student Management System",
    "Educational Technology",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#business`,
  name: "Dreamlytix",
  image: `${siteUrl}/images/hero-logo.png`,
  url: siteUrl,
  telephone: "+91-9933606242",
  email: "contact@dreamlytix.com",
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
  serviceType: [
    "School Management Software",
    "Website Development",
    "Mobile App Development",
    "Admin Panel Development",
    "Student Management System",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Dreamlytix",
  url: siteUrl,
  description:
    "Best school management software company in India offering websites, admin panels, and mobile apps for educational institutions.",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  inLanguage: "en-IN",
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}/#webpage`,
  url: siteUrl,
  name: "Dreamlytix - Best School Management Software | Website & App Development India",
  description:
    "Dreamlytix is India's leading school management software company. Build secure school websites, admin panels, student management systems, and mobile apps.",
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
      name: "School Website Development",
      description:
        "Modern, responsive school websites with photo galleries, news/events sections, faculty pages, and complete content management.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: "India",
      serviceType: "Website Development",
    },
    {
      "@type": "Service",
      position: 2,
      name: "School Admin Panel System",
      description:
        "Comprehensive web-based admin panel for managing students, teachers, attendance, fees, exams, results, timetables, and reports.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: "India",
      serviceType: "Admin Panel Development",
    },
    {
      "@type": "Service",
      position: 3,
      name: "School Mobile App Development",
      description:
        "Dedicated Android apps for parents and students with real-time access to attendance, results, fees, and school communications.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: "India",
      serviceType: "Mobile App Development",
    },
    {
      "@type": "Service",
      position: 4,
      name: "Student Management System",
      description:
        "Complete student lifecycle management from admission to alumni tracking, including profiles, documents, and performance analytics.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: "India",
      serviceType: "Software Development",
    },
    {
      "@type": "Service",
      position: 5,
      name: "Fee Management Software",
      description:
        "Digital fee collection, payment tracking, automated receipts, pending dues alerts, and comprehensive financial reporting.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: "India",
      serviceType: "Software Development",
    },
    {
      "@type": "Service",
      position: 6,
      name: "Attendance & Result Management",
      description:
        "Digital attendance marking for students and staff, exam management, result processing, report cards, and parent notifications.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: "India",
      serviceType: "Software Development",
    },
  ],
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
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#2563eb" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased flex flex-col overflow-x-hidden`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
