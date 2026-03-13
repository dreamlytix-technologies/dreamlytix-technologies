"use client";

import { ChangeEvent, FormEvent, useState } from "react";

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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
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

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <>
      <div id="contact" className="relative bg-linear-to-br from-blue-600 via-cyan-600 to-blue-700 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Floating orbs */}
          <div className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" aria-label="Contact Dreamlytix">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start pt-4 pb-20">
          <div className="space-y-0">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2" style={{ color: "#2563eb" }}>
                Contact Us<span className="text-[#059669]">.</span>
              </h2>
              <p className="text-gray-500 text-sm md:text-base lg:text-base">
                Ready to transform your school with powerful digital solutions? Contact us today for a free consultation and personalized demo of our school management
                software.
              </p>
            </div>
            <address className="not-italic grid grid-cols-1 md:grid-cols-[30%_70%] gap-6">
              {/* Address Row */}
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#059669]">Address</h3>
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed">Gangin, Murshidabad, West Bengal, India</p>
              </div>

              {/* Hours Row */}
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#059669]">Hours</h3>
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed">
                  Monday - Friday: 9 AM - 8 PM <br />
                  Saturday: 10 AM - 6 PM
                </p>
              </div>

              {/* Contacts Row */}
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#059669]">Contacts</h3>
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed">
                  <a href="tel:+919933606242" className="hover:text-blue-600 transition-colors">
                    +91 99336 06242
                  </a>{" "}
                  <br />
                  <a href="mailto:contact@dreamlytix.com" className="hover:text-blue-600 transition-colors">
                    info@dreamlytix.com
                  </a>
                </p>
              </div>
            </address>
          </div>

          <div className="rounded-lg border-2 border-gray-200 p-6 md:p-8 bg-white shadow-lg">
            <form className="space-y-4" onSubmit={handleSubmit} aria-label="Contact form">
              <div>
                <label htmlFor="contact-name" className="sr-only">
                  Your Name
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
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border-2 border-gray-200 text-gray-900 text-sm md:text-base placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-200"
                  placeholder="Enter your name"
                  aria-invalid={!!fieldErrors.name}
                  aria-describedby={fieldErrors.name ? "error-name" : undefined}
                />
                {fieldErrors.name && (
                  <p id="error-name" role="alert" className="text-red-500 text-xs mt-1">
                    {fieldErrors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="contact-email" className="sr-only">
                  Email Address
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
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border-2 border-gray-200 text-gray-900 text-sm md:text-base placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-200"
                  placeholder="your.email@example.com"
                  aria-invalid={!!fieldErrors.email}
                  aria-describedby={fieldErrors.email ? "error-email" : undefined}
                />
                {fieldErrors.email && (
                  <p id="error-email" role="alert" className="text-red-500 text-xs mt-1">
                    {fieldErrors.email}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="contact-phone" className="sr-only">
                  Phone Number
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
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border-2 border-gray-200 text-gray-900 text-sm md:text-base placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-200"
                  placeholder="Enter your Mobile Number"
                  aria-invalid={!!fieldErrors.phone}
                  aria-describedby={fieldErrors.phone ? "error-phone" : undefined}
                />
                {fieldErrors.phone && (
                  <p id="error-phone" role="alert" className="text-red-500 text-xs mt-1">
                    {fieldErrors.phone}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="contact-message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={5000}
                  rows={2}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border-2 border-gray-200 text-gray-900 text-sm md:text-base placeholder-gray-400 focus:outline-none focus:border-blue-400 resize-none transition-colors duration-200"
                  placeholder="Tell us about your requirements..."
                  aria-invalid={!!fieldErrors.message}
                  aria-describedby={fieldErrors.message ? "error-message" : undefined}
                />
                {fieldErrors.message && (
                  <p id="error-message" role="alert" className="text-red-500 text-xs mt-1">
                    {fieldErrors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="cursor-pointer w-full px-6 py-3 bg-[#2563eb] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-[#1e40af] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === "loading" ? (
                  <span className="inline-flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>

              {status === "success" && <p className="text-green-600 text-sm text-center font-medium">Message sent successfully! We&apos;ll get back to you soon.</p>}
              {status === "error" && <p className="text-red-600 text-sm text-center font-medium">{errorMessage}</p>}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
