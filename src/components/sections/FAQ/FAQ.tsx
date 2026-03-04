"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is Dreamlytix and who is it for?",
    answer:
      "Dreamlytix is an educational technology company that builds complete digital ecosystems for schools and institutions. We provide integrated websites, admin panels, and mobile apps — all tailored for educational workflows like student management, attendance tracking, fee collection, and parent communication.",
  },
  {
    question: "What services are included in the Dreamlytix package?",
    answer:
      "Our complete package includes a responsive school website, a full-featured admin panel (student management, attendance, fee tracking, exam results, timetable, reports), and a dedicated Android mobile app for parents and students with real-time notifications, attendance, and fee information.",
  },
  {
    question: "How long does it take to build and deploy the complete system?",
    answer:
      "Our typical timeline is 8–10 weeks from requirements gathering to full deployment. This includes UI/UX design, development, rigorous testing, and team training — ensuring a smooth launch without compromising on quality.",
  },
  {
    question: "Is my school's data secure with Dreamlytix?",
    answer:
      "Absolutely. We implement role-based access control, industry-standard encryption for all sensitive data, automated daily backups, and cloud-based hosting with a 99.9% uptime guarantee. Your student records, financial data, and institutional information are always protected and recoverable.",
  },
  {
    question: "Can the system scale as our school grows?",
    answer:
      "Yes — our architecture is built to scale seamlessly from 100 to 10,000+ students with no performance degradation. We use modern technologies like Next.js, Node.js, and cloud infrastructure (AWS, Docker) to ensure speed and reliability at any scale.",
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
    <section className="relative py-20 bg-white overflow-hidden" id="faq">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-green-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-600 to-green-600 text-white text-xs font-semibold rounded-full shadow-lg mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Got Questions?
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="bg-linear-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Questions</span>
          </h2>

          <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about Dreamlytix and how we help schools go digital.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.4 }}
              >
                <div
                  className={`rounded-2xl border-2 transition-all duration-300 ${
                    isOpen ? "border-blue-200 bg-blue-50/40 shadow-lg shadow-blue-100/50" : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-md"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left cursor-pointer"
                  >
                    <span className={`text-base md:text-lg font-semibold transition-colors duration-200 ${isOpen ? "text-blue-700" : "text-gray-900"}`}>
                      {faq.question}
                    </span>

                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="shrink-0">
                      <ChevronDown className={`w-5 h-5 transition-colors duration-200 ${isOpen ? "text-blue-600" : "text-gray-400"}`} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 md:px-6 pb-5 md:pb-6 text-gray-600 leading-relaxed text-sm md:text-base">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
