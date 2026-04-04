"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Dreamlytix and who is it for?",
    answer:
      "Dreamlytix builds complete digital ecosystems for businesses of all sizes — from startups and small businesses to gyms, corporate organizations, and enterprises. We provide integrated websites, admin panels, and mobile apps — tailored specifically to your unique operational workflows.",
  },
  {
    question: "What services are included in the Dreamlytix package?",
    answer:
      "Our complete package includes a responsive website, a full-featured admin panel (user management, attendance, fast billing, reporting), and a dedicated Android mobile app for end-users (parents, students, or clients) with real-time notifications.",
  },
  {
    question: "How long does it take to build and deploy the complete system?",
    answer:
      "Our typical timeline is 8–10 weeks from requirements gathering to full deployment. This includes UI/UX design, development, rigorous testing, and team training — ensuring a smooth launch without compromising on quality.",
  },
  {
    question: "Is my organization's data secure with Dreamlytix?",
    answer:
      "Absolutely. We implement role-based access control, industry-standard encryption for all sensitive data, automated daily backups, and cloud-based hosting with a 99.9% uptime guarantee. Your records, financial data, and institutional information are always protected and recoverable.",
  },
  {
    question: "Can the system scale as our organization grows?",
    answer:
      "Yes — our architecture is built to scale seamlessly from 100 to 10,000+ active users with no performance degradation. We use modern technologies like Next.js, Node.js, and cloud infrastructure (AWS, Docker) to ensure speed and reliability at any scale.",
  },
  {
    question: "Do you provide ongoing support after deployment?",
    answer:
      "Yes. We offer dedicated technical support, team training during onboarding, and continuous maintenance through our AMC plan. This includes server monitoring, security patches, bug fixes, minor enhancements, and priority issue resolution to keep your system running smoothly.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 bg-[#f4f5f6]" id="faq">
      {/* Background texture slightly simulating the noise/paper look if any, or just clean light gray */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
          {/* Left Column - Heading */}
          <m.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:sticky lg:top-32">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.15]">
              Frequently Asked
              <br className="hidden md:block" />
              <span className="block mt-2 bg-linear-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">Questions</span>
            </h2>
          </m.div>

          {/* Right Column - FAQ Accordion Cards */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <m.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <div className="bg-white rounded-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-[#eaeaea] overflow-hidden transition-all duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                    <button
                      type="button"
                      id={`faq-button-${index}`}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-inset"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                    >
                      <div className="flex items-center gap-4">
                        {/* Iconic small black vertical line from your image */}
                        <div className="w-1 h-[18px] bg-black shrink-0 rounded-[1px]" />
                        <span className="text-sm md:text-base font-medium text-slate-800 pr-4 leading-tight">{faq.question}</span>
                      </div>

                      <m.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="shrink-0 flex items-center">
                        <ChevronDown className="w-[18px] h-[18px] text-slate-400" strokeWidth={2.5} />
                      </m.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <m.div
                          id={`faq-panel-${index}`}
                          role="region"
                          aria-labelledby={`faq-button-${index}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0 text-slate-600 leading-relaxed text-sm pl-[34px] md:pl-[44px]">{faq.answer}</div>
                        </m.div>
                      )}
                    </AnimatePresence>
                  </div>
                </m.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
