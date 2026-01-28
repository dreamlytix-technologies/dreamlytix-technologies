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

export const metadata: Metadata = {
  title: "Dreamlytix - You Dream, We Build",
  description: "Transforming educational institutions with innovative digital solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased flex flex-col overflow-x-hidden`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
