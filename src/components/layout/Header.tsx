"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#technologies", label: "Technologies" },
    { href: "#why-choose-us", label: "Why Us" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "/faqs", label: "FAQs" },
    { href: "#contact", label: "Contact Us" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3 glass-dark shadow-lg" : "py-6 bg-transparent"}`}>
      <div className="container mx-auto px-4 md:px-12 lg:px-16">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image src="/images/hero-logo.png" alt="Dreamlytix Logo" width={72} height={72} className="h-18 -mr-3" priority />
            <div className="flex flex-col leading-tight">
              <div className="text-2xl font-bold">
                <span className="text-gray  transition-colors">Dream</span>
                <span className="gradient-text-primary">lytix</span>
              </div>
              <span className="text-xs text-center text-gray-500 tracking-wide">You Dream, We Build.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8 text-sm font-normal">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="relative text-gray hover:text-orange-500 transition-colors group">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-900 hover:text-orange-500 transition-colors" aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-6 glass-dark rounded-2xl p-6 animate-slideUp">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setMobileMenuOpen(false)} className="block text-gray-400 hover:text-orange-500 font-medium transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
