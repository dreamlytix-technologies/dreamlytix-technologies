"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  Palette,
  Code,
  TestTube,
  Rocket,
  Sparkles,
  GraduationCap,
  PackageCheck,
  Headphones,
  Settings,
  ArrowRight,
} from "lucide-react";
import { ReactNode } from "react";

const steps = [
  { icon: ClipboardList, title: "Discovery", desc: "Analyze goals & requirements", color: "from-blue-500 to-cyan-500" },
  { icon: Palette, title: "Design", desc: "Craft intuitive interfaces", color: "from-cyan-500 to-teal-500" },
  { icon: Code, title: "Build", desc: "Develop robust applications", color: "from-teal-500 to-green-500" },
  { icon: TestTube, title: "Test", desc: "Rigorous quality assurance", color: "from-green-500 to-emerald-500" },
  { icon: Rocket, title: "Launch", desc: "Deploy & ongoing support", color: "from-emerald-500 to-blue-500" },
];

const strengths: { icon: typeof GraduationCap; title: string; description: ReactNode; color: string }[] = [
  {
    icon: GraduationCap,
    title: "Education Focused",
    description: (
      <>
        We specialize in <span className="text-blue-600 font-semibold">educational software</span> and understand the unique needs of schools.
      </>
    ),
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: PackageCheck,
    title: "Complete Solutions",
    description: "Integrated website, admin panel, and mobile apps — everything in one seamless ecosystem.",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: (
      <>
        Technical support, training, and <span className="text-blue-600 font-semibold">quick issue resolution</span> to keep things running.
      </>
    ),
    color: "from-teal-500 to-green-500",
  },
  {
    icon: Settings,
    title: "Fully Customizable",
    description: "Flexible system tailored to your school's unique processes, workflows, and branding.",
    color: "from-green-500 to-blue-500",
  },
];

const Implementation = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden" id="implementation">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-70" />
        <div className="absolute -bottom-40 left-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* ── Header ── */}
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-gray-200 bg-gray-50 text-gray-600 text-xs font-medium rounded-full mb-5">
            <Sparkles className="w-3 h-3 text-blue-500" />
            Our Approach
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">Dreamlytix</span>?
          </h2>

          <p className="text-gray-500 text-sm md:text-base lg:text-lg leading-relaxed max-w-xl mx-auto">
            A streamlined process backed by deep domain expertise — from concept to deployment and beyond.
          </p>
        </motion.div>

        {/* ── Process Steps ── */}
        <div className="max-w-4xl mx-auto mb-20">
          {/* Desktop */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Connection line */}
              <div className="absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-blue-200 via-teal-200 to-emerald-200" />

              <div className="grid grid-cols-5 gap-3">
                {steps.map((step, index) => {
                  const StepIcon = step.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="flex flex-col items-center text-center group"
                    >
                      {/* Node */}
                      <div className="relative mb-4">
                        <div className={`absolute -inset-1.5 rounded-full bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-20 blur transition-all duration-400`} />
                        <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                          <StepIcon className="w-7 h-7 text-white" />
                        </div>
                      </div>

                      <h4 className="text-sm font-bold text-gray-900 mb-0.5 group-hover:text-blue-600 transition-colors">{step.title}</h4>
                      <p className="text-gray-400 text-xs leading-snug">{step.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <div className="relative">
              {/* Vertical rail */}
              <div className="absolute left-[22px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-200 via-teal-200 to-emerald-200" />

              <div className="space-y-6">
                {steps.map((step, index) => {
                  const StepIcon = step.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08, duration: 0.3 }}
                      className="flex items-center gap-4"
                    >
                      <div className={`shrink-0 w-11 h-11 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md z-10`}>
                        <StepIcon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900">{step.title}</h4>
                        <p className="text-gray-400 text-xs">{step.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ── Strength Cards ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {strengths.map((item, i) => {
            const ItemIcon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative rounded-2xl border border-gray-100 bg-gray-50/50 p-6 hover:bg-white hover:border-blue-200 hover:shadow-xl transition-all duration-400 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md`}>
                    <ItemIcon className="w-5 h-5 text-white" />
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                  <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 active:scale-100 transition-all duration-300"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Implementation;
