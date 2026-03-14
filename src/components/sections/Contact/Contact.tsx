"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { MapPin, Phone, Mail, Send, ShieldCheck, ArrowRight } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s+\-()]+$/;

type FieldErrors = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

function validateForm(data: { name: string; email: string; phone: string; message: string }): FieldErrors {
  const errors: FieldErrors = {};
  if (data.name.length < 2) errors.name = "Name must be at least 2 characters.";
  else if (data.name.length > 100) errors.name = "Name must be 100 characters or less.";
  if (!EMAIL_RE.test(data.email)) errors.email = "Please enter a valid email address.";
  else if (data.email.length > 254) errors.email = "Email is too long.";
  if (!PHONE_RE.test(data.phone) || data.phone.length === 0) errors.phone = "Please enter a valid phone number.";
  else if (data.phone.length > 20) errors.phone = "Phone number is too long.";
  if (data.message.length < 10) errors.message = "Message must be at least 10 characters.";
  else if (data.message.length > 5000) errors.message = "Message must be 5000 characters or less.";
  return errors;
}

const contactDetails = [
  {
    icon: MapPin,
    label: "ADDRESS",
    value: "Gangin, Murshidabad, West Bengal, India",
    href: null,
  },
  {
    icon: Phone,
    label: "CALL US",
    value: "+91 99336 06242",
    href: "tel:+919933606242",
  },
  {
    icon: Mail,
    label: "EMAIL US",
    value: "info@dreamlytix.com",
    href: "mailto:info@dreamlytix.com",
  },
];

const whyPoints = ["Free consultation, no commitment", "Transparent pricing, no hidden fees", "Dedicated support from day one", "Fast delivery — live in 8–10 weeks"];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <section id="contact" className="relative pt-20 pb-30 overflow-hidden" style={{ background: "linear-gradient(135deg, #0b1a38 0%, #0d2150 50%, #0b1a38 100%)" }}>
      {/* Dot-grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #7eb3ff 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Subtle glow accents */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.10) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white text-xs font-semibold backdrop-blur-sm mb-5">
            <Send className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Let&apos;s Build Something <span className="text-cyan-200">Amazing Together</span>
          </h2>
          <p className="text-blue-100 text-sm max-w-2xl mx-auto">
            Ready to transform your institution with powerful digital solutions? Contact us for a free consultation and personalized demo.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT — Contact Info Cards + Why Dreamlytix box */}
          <div className="space-y-4 text-white">
            {contactDetails.map((item) => {
              const Icon = item.icon;
              const inner = (
                <div className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-white font-medium text-sm leading-relaxed whitespace-pre-line">{item.value}</p>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={item.label} href={item.href} className="block">
                  {inner}
                </a>
              ) : (
                <div key={item.label}>{inner}</div>
              );
            })}

            {/* Why Dreamlytix dark card */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="font-bold text-base">Why Dreamlytix?</span>
              </div>
              <ul className="space-y-2.5">
                {whyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-slate-300">
                    <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT — Contact Form */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl shadow-blue-900/30 p-8 md:px-8 md:py-6">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-500 text-sm">Thank you! We&apos;ll get back to you within 24 hours.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 px-6 py-2.5 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Send Us a Message</h3>
                <p className="text-xs text-gray-500 mb-5">We&apos;ll get back to you within 24 hours.</p>

                <form className="space-y-5" onSubmit={handleSubmit} aria-label="Contact form">
                  {/* Your Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      autoComplete="name"
                      className={`w-full px-3 py-2.5 rounded-lg border text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                        fieldErrors.name ? "border-red-300 bg-red-50" : "border-gray-200 bg-white"
                      }`}
                      placeholder="Enter your full name"
                      aria-invalid={!!fieldErrors.name}
                      aria-describedby={fieldErrors.name ? "name-error" : undefined}
                    />
                    {fieldErrors.name && (
                      <p id="name-error" role="alert" className="text-red-500 text-xs mt-1">
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Email + Phone side by side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        maxLength={254}
                        autoComplete="email"
                        className={`w-full px-4 py-2.5 rounded-lg border text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                          fieldErrors.email ? "border-red-300 bg-red-50" : "border-gray-200 bg-white"
                        }`}
                        placeholder="your@email.com"
                        aria-invalid={!!fieldErrors.email}
                        aria-describedby={fieldErrors.email ? "email-error" : undefined}
                      />
                      {fieldErrors.email && (
                        <p id="email-error" role="alert" className="text-red-500 text-xs mt-1">
                          {fieldErrors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Phone Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        maxLength={20}
                        autoComplete="tel"
                        className={`w-full px-4 py-2.5 rounded-lg border text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                          fieldErrors.phone ? "border-red-300 bg-red-50" : "border-gray-200 bg-white"
                        }`}
                        placeholder="+91 xxxxx xxxxx"
                        aria-invalid={!!fieldErrors.phone}
                        aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
                      />
                      {fieldErrors.phone && (
                        <p id="phone-error" role="alert" className="text-red-500 text-xs mt-1">
                          {fieldErrors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      maxLength={5000}
                      rows={2}
                      className={`w-full px-4 py-2.5 rounded-lg border text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-all duration-200 ${
                        fieldErrors.message ? "border-red-300 bg-red-50" : "border-gray-200 bg-white"
                      }`}
                      placeholder="Tell us about your project requirements..."
                      aria-invalid={!!fieldErrors.message}
                      aria-describedby={fieldErrors.message ? "message-error" : undefined}
                    />
                    {fieldErrors.message && (
                      <p id="message-error" role="alert" className="text-red-500 text-xs mt-1">
                        {fieldErrors.message}
                      </p>
                    )}
                  </div>

                  {status === "error" && (
                    <p role="alert" className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                      {errorMessage}
                    </p>
                  )}

                  {/* Send Button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group w-full flex items-center justify-center cursor-pointer gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 text-sm to-cyan-600 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-600">🔒 Your information is safe and will never be shared with third parties.</p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
