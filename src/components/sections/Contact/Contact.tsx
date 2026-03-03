"use client";

import { ChangeEvent, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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

      <section className="container mx-auto px-6 py-20" aria-label="Contact Dreamlytix">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start pt-4 pb-20">
          <div className="space-y-0">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2" style={{ color: "#2563eb" }}>
                Contact Us<span className="text-[#059669]">.</span>
              </h2>
              <p className="text-gray-500 text-sm md:text-base lg:text-lg">
                Ready to transform your school with powerful digital solutions? Contact us today for a free consultation and personalized demo of our school management software.
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
                  <a href="tel:+919933606242" className="hover:text-blue-600 transition-colors">+91 99336 06242</a> <br />
                  <a href="mailto:contact@dreamlytix.com" className="hover:text-blue-600 transition-colors">contact@dreamlytix.com</a>
                </p>
              </div>

              {/* Social Row */}
              <div className="flex space-x-4 mt-2">
                <SocialLink href="https://twitter.com/dreamlytix" label="Follow Dreamlytix on Twitter" icon="twitter" />
                <SocialLink href="https://github.com/dreamlytix" label="Dreamlytix on GitHub" icon="github" />
                <SocialLink href="https://linkedin.com/company/dreamlytix" label="Dreamlytix on LinkedIn" icon="linkedin" />
                <SocialLink href="https://instagram.com/dreamlytix" label="Dreamlytix on Instagram" icon="instagram" />
              </div>
            </address>
          </div>

          <div className="rounded-lg border-2 border-gray-200 p-6 md:p-8 bg-white shadow-lg">
            <form className="space-y-4" action="#" method="POST" aria-label="Contact form">
              <div>
                <label htmlFor="contact-name" className="sr-only">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border-2 border-gray-200 text-gray-900 text-sm md:text-base placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-200"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="sr-only">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border-2 border-gray-200 text-gray-900 text-sm md:text-base placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="sr-only">Phone Number</label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  autoComplete="tel"
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border-2 border-gray-200 text-gray-900 text-sm md:text-base placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-200"
                  placeholder="Enter your Mobile Number"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="sr-only">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={2}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border-2 border-gray-200 text-gray-900 text-sm md:text-base placeholder-gray-400 focus:outline-none focus:border-blue-400 resize-none transition-colors duration-200"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                className="cursor-pointer w-full px-6 py-3 bg-[#2563eb] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-[#1e40af]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function SocialLink({ href, label, icon }: Readonly<{ href: string; label: string; icon: string }>) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "twitter":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        );
      case "github":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
        );
      case "linkedin":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        );
      case "instagram":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-200 rounded-full p-3 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 inline-block shadow-lg shadow-[#7e98cf]"
      aria-label={label}
      style={{ color: "#2563eb" }}
    >
      {getIcon(icon)}
    </a>
  );
}
