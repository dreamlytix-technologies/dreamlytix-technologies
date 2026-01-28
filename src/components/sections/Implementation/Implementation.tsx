"use client";

import { motion } from "framer-motion";
import { ClipboardList, Palette, Code, TestTube, Rocket, CheckCircle2 } from "lucide-react";

const Implementation = () => {
  const steps = [
    {
      icon: ClipboardList,
      title: "Requirements Gathering",
      description: "Understanding your school's specific needs and processes",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful interfaces",
      color: "from-cyan-500 to-teal-500",
    },
    {
      icon: Code,
      title: "Development",
      description: "Building robust and scalable solutions",
      color: "from-teal-500 to-green-500",
    },
    {
      icon: TestTube,
      title: "Testing & QA",
      description: "Ensuring quality and performance",
      color: "from-green-500 to-blue-500",
    },
    {
      icon: Rocket,
      title: "Deployment",
      description: "Going live with training and support",
      color: "from-blue-500 to-purple-500",
    },
  ];

  return (
    <section className="relative py-16 bg-linear-to-b from-white via-gray-50 to-white overflow-hidden" id="implementation">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-600 to-green-600 text-white text-sm font-semibold rounded-full shadow-lg mb-4">
            <CheckCircle2 className="w-3 h-3" />
            Implementation Process
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How We <span className="bg-linear-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Work</span>
          </h2>

          <p className="text-gray-600 text-normal leading-relaxed">A streamlined process from concept to completion</p>
        </motion.div>

        {/* Horizontal Timeline */}
        <div className="max-w-7xl mx-auto">
          {/* Desktop - Horizontal Layout */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-16 left-0 right-0 h-1 bg-linear-to-r from-blue-500 via-green-500 to-purple-500 opacity-20" />

              {/* Steps */}
              <div className="grid grid-cols-5 gap-4">
                {steps.map((step, index) => {
                  const StepIcon = step.icon;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15, duration: 0.6 }}
                      className="relative"
                    >
                      {/* Step Card */}
                      <div className="group relative bg-white rounded-2xl border-2 border-gray-100 p-6 hover:border-blue-200 hover:shadow-xl transition-all duration-300 h-full">
                        {/* Gradient overlay */}
                        <div className={`absolute inset-0 bg-linear-to-br ${step.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />

                        {/* Content */}
                        <div className="relative z-10 text-center">
                          {/* Icon */}
                          <div className="mb-4 flex justify-center">
                            <motion.div
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.6 }}
                              className={`w-16 h-16 rounded-2xl bg-linear-to-br ${step.color} flex items-center justify-center shadow-lg`}
                            >
                              <StepIcon className="w-8 h-8 text-white" />
                            </motion.div>
                          </div>

                          {/* Title */}
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>

                          {/* Description */}
                          <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet - Vertical Layout */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => {
              const StepIcon = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative"
                >
                  <div className="flex gap-4 items-start">
                    {/* Step Number & Icon */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        {/* Number */}
                        <div className="absolute -top-2 -left-2 w-8 h-8 bg-white rounded-full border-2 border-gray-100 flex items-center justify-center shadow-sm z-10">
                          <span className={`text-xs font-bold bg-linear-to-r ${step.color} bg-clip-text text-transparent`}>{index + 1}</span>
                        </div>

                        {/* Icon */}
                        <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                          <StepIcon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Vertical line (except last) */}
                      {index < steps.length - 1 && <div className="ml-8 mt-2 w-0.5 h-12 bg-linear-to-b from-blue-400 to-green-400 opacity-30" />}
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white rounded-2xl border-2 border-gray-100 p-6 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Implementation;
