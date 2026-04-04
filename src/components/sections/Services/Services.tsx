"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import {
  Globe,
  Smartphone,
  Server,
  Sparkles,
  CheckCircle2,
  FileText,
  BookOpen,
  Calendar,
  Bell,
  Monitor,
  CreditCard,
  BarChart3,
  ArrowRight,
  Zap,
} from "lucide-react";

const platforms = [
  {
    id: "website",
    label: "Website",
    icon: Globe,
    tagline: "Your institution's digital front door",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    bgGlow: "bg-blue-500/10",
    description:
      "Modern, responsive websites with photo galleries, news/events sections, team & faculty pages, and complete content management — crafted to create lasting first impressions.",
    features: [
      { icon: Monitor, text: "Mobile, Tablet & Desktop Responsive Design" },
      { icon: FileText, text: "Company Profile, Vision & Mission Pages" },
      { icon: BookOpen, text: "Services, Programs & Offerings Information" },
      { icon: Calendar, text: "Media Gallery Management" },
      { icon: Bell, text: "News, Events & Updates Section" },
      { icon: FileText, text: "Online Enquiry & Contact Forms" },
    ],
    stat: { value: "100+", label: "Live Websites" },
  },
  {
    id: "admin",
    label: "Admin Panel",
    icon: Server,
    tagline: "Complete control at your fingertips",
    gradient: "from-cyan-500 via-teal-500 to-green-500",
    bgGlow: "bg-cyan-500/10",
    description:
      "Comprehensive web-based admin panel for managing clients, members, students, attendance, billing, and advanced reporting — all from one powerful dashboard.",
    features: [
      { icon: BookOpen, text: "Client & User Management System" },
      { icon: Monitor, text: "Staff & Team Management" },
      { icon: Calendar, text: "Attendance & Activity Tracking" },
      { icon: CreditCard, text: "Billing, Invoicing & Payment Monitoring" },
      { icon: BarChart3, text: "Performance & Report Management" },
      { icon: Bell, text: "Internal Notices & Communication System" },
    ],
    stat: { value: "50k+", label: "Users Managed" },
  },
  {
    id: "app",
    label: "Mobile App",
    icon: Smartphone,
    tagline: "Stay connected, anywhere, anytime",
    gradient: "from-teal-500 via-green-500 to-emerald-500",
    bgGlow: "bg-teal-500/10",
    description:
      "Dedicated Android apps for end-users (parents, students, or clients) with real-time access to attendance, updates, billing, and direct communications.",
    features: [
      { icon: BookOpen, text: "Attendance & Performance Tracking" },
      { icon: CreditCard, text: "Billing & Payment History Access" },
      { icon: Bell, text: "Announcements & Alerts" },
      { icon: Monitor, text: "Task & Data Upload Tools" },
      { icon: FileText, text: "Direct Communication Platform" },
      { icon: BarChart3, text: "Real-Time Push Notifications" },
    ],
    stat: { value: "10k+", label: "App Downloads" },
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const platform = platforms[active];
  const Icon = platform.icon;

  return (
    <section
      className="relative py-24 overflow-hidden bg-gray-950"
      id="services"
    >
      {/* ── Animated Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence mode="wait">
          <m.div
            key={platform.id + "-glow"}
            className={`absolute -top-40 -left-40 w-[700px] h-[700px] ${platform.bgGlow} rounded-full blur-[140px]`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]" />
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[64px_64px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Header ── */}
        <m.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/70 text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            What We Build
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            Everything You Need to{" "}
            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Scale & Succeed
            </span>
          </h2>
          <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            A complete digital ecosystem for businesses, startups, and growing
            businesses — every module crafted to work seamlessly together.
          </p>
        </m.div>

        {/* ── Tab Switcher ── */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-14"
          role="tablist"
          aria-label="Service platforms"
        >
          {platforms.map((p, i) => {
            const TabIcon = p.icon;
            const isActive = i === active;
            return (
              <m.button
                key={p.id}
                onClick={() => setActive(i)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                role="tab"
                id={`tab-${p.id}`}
                aria-selected={isActive}
                aria-controls={`tabpanel-${p.id}`}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "text-white shadow-lg shadow-black/30"
                    : "text-white/50 border border-white/10 bg-white/5 hover:text-white/80 hover:bg-white/10"
                }`}
              >
                {isActive && (
                  <m.span
                    layoutId="tab-bg"
                    className={`absolute inset-0 rounded-full bg-linear-to-r ${p.gradient}`}
                    transition={{ type: "spring", stiffness: 380, damping: 35 }}
                  />
                )}
                <span className="relative flex items-center gap-2">
                  <TabIcon className="w-4 h-4" />
                  {p.label}
                </span>
              </m.button>
            );
          })}
        </m.div>

        {/* ── Main Panel ── */}
        <AnimatePresence mode="wait">
          <m.div
            key={platform.id}
            role="tabpanel"
            id={`tabpanel-${platform.id}`}
            aria-labelledby={`tab-${platform.id}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          >
            {/* Left: Info Card */}
            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md overflow-hidden">
              {/* Gradient accent top-left */}
              <div
                className={`absolute -top-20 -left-20 w-64 h-64 bg-linear-to-br ${platform.gradient} opacity-15 rounded-full blur-3xl`}
              />

              {/* Icon + stat row */}
              <div className="flex items-start justify-between mb-6 relative z-10">
                <div
                  className={`w-16 h-16 rounded-2xl bg-linear-to-br ${platform.gradient} flex items-center justify-center shadow-xl`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-white">
                    {platform.stat.value}
                  </div>
                  <div className="text-xs text-white/40 font-medium">
                    {platform.stat.label}
                  </div>
                </div>
              </div>

              <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-2 relative z-10">
                {platform.tagline}
              </p>
              <h3
                className={`text-2xl sm:text-3xl font-extrabold mb-4 bg-linear-to-r ${platform.gradient} bg-clip-text text-transparent relative z-10`}
              >
                {platform.label}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8 relative z-10">
                {platform.description}
              </p>

              <a
                href="#contact"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-linear-to-r ${platform.gradient} hover:shadow-lg hover:scale-105 active:scale-100 transition-all duration-300 relative z-10`}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right: Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {platform.features.map((feature, idx) => {
                const FIcon = feature.icon;
                return (
                  <m.div
                    key={feature.text}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.07, duration: 0.35 }}
                    className="group flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div
                      className={`shrink-0 w-9 h-9 rounded-xl bg-linear-to-br ${platform.gradient} flex items-center justify-center shadow-md`}
                    >
                      <FIcon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-white/80 text-sm font-medium leading-snug group-hover:text-white transition-colors">
                        {feature.text}
                      </span>
                    </div>
                  </m.div>
                );
              })}
            </div>
          </m.div>
        </AnimatePresence>

        {/* ── Bottom Stats Bar ── */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "10+", label: "Websites Digitized", icon: Globe },
            { value: "6", label: "Core Modules", icon: Sparkles },
            { value: "99.9%", label: "Uptime Guaranteed", icon: Zap },
            { value: "24/7", label: "Support Available", icon: CheckCircle2 },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:bg-white/10 transition-all duration-300 group"
            >
              <s.icon className="w-5 h-5 text-cyan-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-black text-white mb-1">
                {s.value}
              </div>
              <div className="text-xs text-white/40 font-medium">{s.label}</div>
            </div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
