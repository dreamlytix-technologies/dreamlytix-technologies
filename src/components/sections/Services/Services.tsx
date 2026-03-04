"use client";

import {
  Code,
  Globe,
  Smartphone,
  Server,
  Palette,
  Zap,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import SmoothScroll from "@/components/ui/SmoothScroll";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description:
        "Modern, responsive school websites with photo galleries, news/events sections, faculty pages, and complete content management.",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      delay: 0,
    },
    {
      icon: Server,
      title: "Admin Panel System",
      description:
        "Comprehensive web-based admin panel for managing students, teachers, attendance, fees, exams, results, timetables, and reports.",
      gradient: "from-cyan-500 via-teal-500 to-green-500",
      delay: 0.1,
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description:
        "Dedicated Android apps for parents,  students with real-time access to attendance, results, fees, and school communications.",
      gradient: "from-teal-500 via-green-500 to-blue-500",
      delay: 0.2,
    },
    {
      icon: Code,
      title: "Student Management",
      description:
        "Complete student lifecycle management from admission to alumni tracking, including profiles, documents, and performance analytics.",
      gradient: "from-green-500 via-blue-500 to-cyan-500",
      delay: 0.3,
    },
    {
      icon: Palette,
      title: "Fee Management System",
      description:
        "Digital fee collection, payment tracking, automated receipts, pending dues alerts, and comprehensive financial reporting.",
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
      delay: 0.4,
    },
    {
      icon: Zap,
      title: "Attendance & Results",
      description:
        "Digital attendance marking for students and staff, exam management, result processing, report cards, and parent notifications.",
      gradient: "from-purple-500 via-pink-500 to-blue-500",
      delay: 0.5,
    },
  ];

  return (
    <section
      className="relative pt-10 pb-16 overflow-hidden bg-linear-to-b from-white via-blue-50/30 to-white"
      id="services"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, -40, 0],
            x: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <SmoothScroll animation="fadeUp">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-linear-to-r from-blue-600 to-cyan-600 text-white text-xs font-medium rounded-full shadow-lg inline-flex items-center gap-2">
                <Sparkles className="w-3 h-3" />
                What We Offer
              </span>
            </motion.div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our{" "}
              <span className="gradient-text relative inline-block">
                Services
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-primary rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </span>
            </h2>

            <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
              Complete digital ecosystem for educational institutions — from
              websites to mobile apps, all integrated seamlessly.
            </p>
          </div>
        </SmoothScroll>

        {/* Services Grid - Masonry/Bento Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLarge = index === 0 || index === 4; // Make first and fifth cards larger

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: service.delay,
                  duration: 0.6,
                  type: "spring",
                }}
                className={`group relative ${isLarge ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-gray-100 p-6 hover:border-blue-200 transition-all duration-500 overflow-hidden">
                  {/* Animated gradient background */}
                  <motion.div
                    className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Glowing animated border on hover */}
                  <div className="absolute -inset-0.5 bg-linear-to-r from-blue-600 via-cyan-600 to-green-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon with animated background */}
                    <div className="relative mb-6 inline-block">
                      {/* Pulse effect */}
                      <motion.div
                        className={`absolute inset-0 bg-linear-to-br ${service.gradient} rounded-2xl opacity-20`}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Icon container */}
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`relative w-14 h-14 rounded-2xl bg-linear-to-br ${service.gradient} flex items-center justify-center shadow-lg`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>

                      {/* Floating sparkle */}
                      <motion.div
                        className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100"
                        animate={{
                          y: [-2, -8, -2],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </div>

                    {/* Number badge */}
                    <div className="absolute top-2 right-2 w-10 h-10 rounded-full bg-linear-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                      <span className="text-sm font-bold text-blue-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-4 group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base">
                      {service.description}
                    </p>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
                    <div
                      className={`w-full h-full rounded-tl-full bg-linear-to-tl ${service.gradient}`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
