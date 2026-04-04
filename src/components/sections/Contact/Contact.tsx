"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Send, ArrowRight } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s+\-()]+$/;

type FieldErrors = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

function validateForm(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): FieldErrors {
  const errors: FieldErrors = {};
  if (data.name.length < 2) errors.name = "Name must be at least 2 characters.";
  else if (data.name.length > 100)
    errors.name = "Name must be 100 characters or less.";
  if (!EMAIL_RE.test(data.email))
    errors.email = "Please enter a valid email address.";
  else if (data.email.length > 254) errors.email = "Email is too long.";
  if (!PHONE_RE.test(data.phone) || data.phone.length === 0)
    errors.phone = "Please enter a valid phone number.";
  else if (data.phone.length > 20) errors.phone = "Phone number is too long.";
  if (data.message.length < 10)
    errors.message = "Message must be at least 10 characters.";
  else if (data.message.length > 5000)
    errors.message = "Message must be 5000 characters or less.";
  return errors;
}

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/dreamlytix-technologies",
    icon: (
      <svg
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/dreamlytix_technologies/",
    icon: (
      <svg
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/supimione",
    icon: (
      <svg
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const footerLinks = [
  { href: "#implementation", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Projects" },
  { href: "#tools", label: "Tools" },
  { href: "#faq", label: "FAQs" },
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/terms-and-conditions", label: "Terms" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const currentYear = new Date().getFullYear();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name as keyof FieldErrors]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong.",
      );
    }
  };

  return (
    <footer id="contact" className="relative overflow-hidden bg-[#030712]">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 ai-grid opacity-15" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/[0.04] rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-cyan-600/[0.03] rounded-full blur-[120px]" />
      </div>

      {/* Wave curve topper */}
      <div className="absolute top-0 left-0 w-full -translate-y-full overflow-hidden leading-none pointer-events-none">
        <svg
          className="relative block w-full h-16 sm:h-20 md:h-28"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,30 1440,80 L1440,120 L0,120 Z"
            fill="#030712"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Contact Section ── */}
        <div className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* LEFT — Heading + Contact Info */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-800 text-sm text-gray-400 mb-6">
                <Send className="w-3.5 h-3.5" />
                Get In Touch
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                Let&apos;s build your{" "}
                <span className="gradient-text">next project</span>
              </h2>

              <p className="text-gray-500 text-[15px] leading-relaxed mb-10 max-w-md">
                Have an idea? We&apos;d love to hear about it. Reach out and
                let&apos;s turn your vision into reality.
              </p>

              {/* Contact details */}
              <div className="space-y-5">
                <a
                  href="tel:+919933606242"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                    <Phone className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-gray-600 mb-0.5">
                      Phone
                    </p>
                    <p className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                      +91 99336 06242
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@dreamlytix.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/15 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-gray-600 mb-0.5">
                      Email
                    </p>
                    <p className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                      info@dreamlytix.com
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div className="rounded-2xl bg-gray-900/50 border border-gray-800/80 backdrop-blur-sm p-7 sm:p-8">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
                    <svg
                      className="w-7 h-7 text-emerald-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2.5 bg-white text-gray-900 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Send a message
                  </h3>
                  <p className="text-xs text-gray-500 mb-6">
                    We&apos;ll respond within 24 hours.
                  </p>

                  <form
                    className="space-y-4"
                    onSubmit={handleSubmit}
                    aria-label="Contact form"
                  >
                    <div>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        maxLength={100}
                        autoComplete="name"
                        className={`w-full px-4 py-3 rounded-xl border text-white text-sm placeholder-gray-600 bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all ${
                          fieldErrors.name
                            ? "border-red-500/50 bg-red-500/5"
                            : "border-gray-800"
                        }`}
                        placeholder="Your name"
                        aria-invalid={!!fieldErrors.name}
                        aria-describedby={
                          fieldErrors.name ? "name-error" : undefined
                        }
                      />
                      {fieldErrors.name && (
                        <p
                          id="name-error"
                          role="alert"
                          className="text-red-400 text-xs mt-1"
                        >
                          {fieldErrors.name}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          maxLength={254}
                          autoComplete="email"
                          className={`w-full px-4 py-3 rounded-xl border text-white text-sm placeholder-gray-600 bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all ${
                            fieldErrors.email
                              ? "border-red-500/50 bg-red-500/5"
                              : "border-gray-800"
                          }`}
                          placeholder="Email address"
                          aria-invalid={!!fieldErrors.email}
                          aria-describedby={
                            fieldErrors.email ? "email-error" : undefined
                          }
                        />
                        {fieldErrors.email && (
                          <p
                            id="email-error"
                            role="alert"
                            className="text-red-400 text-xs mt-1"
                          >
                            {fieldErrors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          maxLength={20}
                          autoComplete="tel"
                          className={`w-full px-4 py-3 rounded-xl border text-white text-sm placeholder-gray-600 bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all ${
                            fieldErrors.phone
                              ? "border-red-500/50 bg-red-500/5"
                              : "border-gray-800"
                          }`}
                          placeholder="Phone number"
                          aria-invalid={!!fieldErrors.phone}
                          aria-describedby={
                            fieldErrors.phone ? "phone-error" : undefined
                          }
                        />
                        {fieldErrors.phone && (
                          <p
                            id="phone-error"
                            role="alert"
                            className="text-red-400 text-xs mt-1"
                          >
                            {fieldErrors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        maxLength={5000}
                        rows={3}
                        className={`w-full px-4 py-3 rounded-xl border text-white text-sm placeholder-gray-600 bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 resize-none transition-all ${
                          fieldErrors.message
                            ? "border-red-500/50 bg-red-500/5"
                            : "border-gray-800"
                        }`}
                        placeholder="Tell us about your project..."
                        aria-invalid={!!fieldErrors.message}
                        aria-describedby={
                          fieldErrors.message ? "message-error" : undefined
                        }
                      />
                      {fieldErrors.message && (
                        <p
                          id="message-error"
                          role="alert"
                          className="text-red-400 text-xs mt-1"
                        >
                          {fieldErrors.message}
                        </p>
                      )}
                    </div>

                    {status === "error" && (
                      <p
                        role="alert"
                        className="text-red-400 text-sm bg-red-500/5 border border-red-500/20 rounded-xl px-4 py-3"
                      >
                        {errorMessage}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group w-full flex items-center justify-center cursor-pointer gap-2 px-6 py-3.5 bg-white text-gray-900 text-sm font-semibold rounded-xl transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:shadow-white/5 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? (
                        <>
                          <svg
                            className="animate-spin h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="h-px bg-gray-800/60" />

        <div className="py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center -ml-3">
            <Image
              src="/images/hero-logo.png"
              alt="Dreamlytix Logo"
              width={48}
              height={48}
              className="-mr-2"
            />
            <div className="text-xl font-bold">
              <span className="text-white">Dream</span>
              <span className="gradient-text-primary">lytix</span>
            </div>
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 text-sm hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-full border border-gray-800 flex items-center justify-center text-gray-600 hover:text-white hover:border-gray-600 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="h-px bg-gray-800/40" />
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-700 text-xs">
            © {currentYear} Dreamlytix. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-gray-600 text-xs">
              Available for projects
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
