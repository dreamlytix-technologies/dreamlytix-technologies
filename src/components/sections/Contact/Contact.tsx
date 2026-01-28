"use client";

import { ChangeEvent, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const features = [
    {
      title: "Education Focused",
      text: (
        <>
          We specialize in <span className="text-blue-600 font-semibold">educational software</span> and understand the unique needs of schools and institutions.
        </>
      ),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#2563eb" className="w-12 h-12">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
          />
        </svg>
      ),
    },
    {
      title: "Complete Solutions",
      text: <>Integrated website, admin panel, and mobile apps — everything schools need in one seamless digital ecosystem.</>,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#0891b2" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "24/7 Support",
      text: (
        <>
          Dedicated technical support, training, and <span className="text-blue-600 font-semibold">quick issue resolution</span> to keep your school running smoothly.
        </>
      ),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#14b8a6" className="w-12 h-12">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
          />
        </svg>
      ),
    },
    {
      title: "Customizable",
      text: <>Flexible system tailored to your school's unique processes, workflows, and branding requirements.</>,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#059669" className="w-12 h-12">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <section className="relative py-16 bg-linear-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-600 to-green-600 text-white text-xs font-semibold rounded-full shadow-lg mb-4">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why <span className="bg-linear-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Dreamlytix</span>?
            </h2>
            <p className="text-gray-600 text-normal leading-relaxed">Dedicated to educational excellence with technology that works for your institution.</p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { value: "50+", label: "Schools", color: "from-blue-500 to-cyan-500" },
              { value: "10K+", label: "Students", color: "from-cyan-500 to-teal-500" },
              { value: "99%", label: "Uptime", color: "from-teal-500 to-green-500" },
              { value: "24/7", label: "Support", color: "from-green-500 to-blue-500" },
            ].map((stat, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-2xl border-2 border-gray-100 p-6 hover:border-blue-200 hover:shadow-xl transition-all duration-300 text-center overflow-hidden"
              >
                <div className={`absolute inset-0 bg-linear-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className="relative z-10">
                  <div className={`text-4xl font-bold bg-linear-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>{stat.value}</div>
                  <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Cards - Staggered Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-3xl border-2 border-gray-100 p-8 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 overflow-hidden"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 via-cyan-500/0 to-green-500/0 group-hover:from-blue-500/5 group-hover:via-cyan-500/5 group-hover:to-green-500/5 transition-all duration-500" />

                {/* Animated border glow */}
                <div className="absolute -inset-0.5 bg-linear-to-r from-blue-600 to-green-600 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />

                <div className="relative z-10 flex items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      {/* Pulse ring */}
                      <div className="absolute inset-0 bg-blue-400 rounded-2xl opacity-0 group-hover:opacity-20 animate-ping" />

                      {/* Icon container */}
                      <div className="relative w-16 h-16 bg-linear-to-br from-blue-100 to-cyan-100 group-hover:from-blue-500 group-hover:to-cyan-500 rounded-2xl flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                        {f.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{f.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{f.text}</p>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-blue-600 via-cyan-600 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative bg-linear-to-br from-blue-600 via-cyan-600 to-blue-700 overflow-hidden">
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start pt-4 pb-20">
          <div className="space-y-0">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "#2563eb" }}>
                Contact<span className="text-[#059669]">.</span>
              </h2>
              <p className="text-gray-300 text-base lg:text-base">
                Ready to transform your business with powerful digital solutions? Contact us today for a free consultation and personalized demo.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-6">
              {/* Address Row */}
              <div>
                <h3 className="text-xl font-bold text-[#059669]">Address</h3>
              </div>
              <div>
                <p className="text-gray-300 leading-relaxed">Gangin, Murshidabad, India</p>
              </div>

              {/* Hours Row */}
              <div>
                <h3 className="text-xl font-bold text-[#059669]">Hours</h3>
              </div>
              <div>
                <p className="text-gray-300 leading-relaxed">
                  Monday - Friday: 9 AM - 8 PM <br />
                  Saturday: 10 AM - 6 PM
                </p>
              </div>

              {/* Contacts Row */}
              <div>
                <h3 className="text-xl font-bold text-[#059669]">Contacts</h3>
              </div>
              <div>
                <p className="text-gray-300 leading-relaxed">
                  +91 99336 06242 <br />
                  contact@dreamlytix.com
                </p>
              </div>

              {/* Social Row */}
              <div className="flex space-x-4 mt-2">
                <SocialLink href="#" label="Twitter" icon="twitter" />
                <SocialLink href="#" label="GitHub" icon="github" />
                <SocialLink href="#" label="LinkedIn" icon="linkedin" />
                <SocialLink href="#" label="Instagram" icon="instagram" />
              </div>
            </div>
          </div>

          <div className="rounded-lg border-2 border-gray-200 p-6 md:p-8 bg-white shadow-lg">
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border-2 border-gray-200 text-gray-900 text-sm md:text-base placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-200"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border-2 border-gray-200 text-gray-900 text-sm md:text-base placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <input
                  type="phone"
                  name="phone"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border-2 border-gray-200 text-gray-900 text-sm md:text-base placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-200"
                  placeholder="Enter your Mobile Number"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={2}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border-2 border-gray-200 text-gray-900 text-sm md:text-base placeholder-gray-400 focus:outline-none focus:border-blue-400 resize-none transition-colors duration-200"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button className="cursor-pointer w-full px-6 py-3 bg-[#2563eb] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-[#1e40af]">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SocialLink({ href, label, icon }: Readonly<{ href: string; label: string; icon: string }>) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "twitter":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        );
      case "github":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
        );
      case "linkedin":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        );
      case "instagram":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
      className="bg-gray-200 rounded-full p-3 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 inline-block shadow-lg shadow-[#7e98cf]"
      aria-label={label}
      style={{ color: "#2563eb" }}
    >
      {getIcon(icon)}
    </a>
  );
}
