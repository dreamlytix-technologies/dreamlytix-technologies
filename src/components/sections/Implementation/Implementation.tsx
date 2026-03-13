"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, Users, ShieldCheck, Zap, Globe, Laptop, Award } from "lucide-react";

const stats = [
  { label: "Schools Digitized", value: "150+", icon: Globe, color: "text-blue-500", bg: "bg-blue-100" },
  { label: "Active Users", value: "50k+", icon: Users, color: "text-cyan-500", bg: "bg-cyan-100" },
  { label: "Custom Projects", value: "300+", icon: Laptop, color: "text-emerald-500", bg: "bg-emerald-100" },
  { label: "Awards Won", value: "15+", icon: Award, color: "text-indigo-500", bg: "bg-indigo-100" },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To make school management simple, scalable, and impactful by delivering high-performing digital products.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: ShieldCheck,
    title: "Unwavering Trust",
    desc: "Building secure, reliable ecosystems so educational institutions can focus on what matters most—teaching.",
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    icon: Zap,
    title: "Innovation First",
    desc: "We blend creativity with cutting-edge execution to turn complex problems into elegant, tailor-made solutions.",
    gradient: "from-teal-500 to-emerald-500",
  },
];

const AboutUs = () => {
  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden" id="implementation">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[700px] h-[700px] bg-blue-400/10 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] w-[600px] h-[600px] bg-emerald-400/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[20%] left-[20%] w-[800px] h-[800px] bg-cyan-400/10 rounded-full blur-[120px]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03] bg-center" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column: Text & Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-blue-100 bg-white text-blue-700 text-sm font-semibold rounded-full mb-6 shadow-sm shadow-blue-100">
              <Sparkles className="w-4 h-4 text-blue-500" />
              About Us
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Building the <br className="hidden md:block" />
              <span className="bg-linear-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                Digital Future
              </span>{" "}
              of Education
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6 font-medium">
              At Dreamlytix, we believe technology isn&apos;t just about code—it&apos;s about creating possibilities, building trust, and driving institutional growth.
            </p>
            
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Founded with a vision to empower schools and educational organizations, we have evolved into India&apos;s premier ed-tech development agency. From a passionate team of developers to a full-fledged agency, our journey has been driven by one simple goal: to make technology intuitive and highly impactful for learning environments.
            </p>

            <div className="grid grid-cols-2 gap-6 pb-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color} shadow-sm`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Visual Bento Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white rounded-3xl p-6 shadow-xl shadow-blue-900/5 border border-gray-100 h-64 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-4">
                    <Laptop className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Custom Built</h4>
                  <p className="text-sm text-gray-500">Tailor-made portals and systems designed exclusively for your institution&apos;s workflow.</p>
                </div>
                <div className="bg-linear-to-br from-blue-600 to-cyan-600 rounded-3xl p-6 shadow-xl shadow-cyan-900/20 text-white h-48 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl" />
                  <h4 className="text-4xl font-black mb-2">100%</h4>
                  <p className="text-cyan-100 font-medium leading-tight">Commitment to delivering scalable results.</p>
                </div>
              </div>
              <div className="space-y-4 pt-10">
                <div className="bg-gray-900 rounded-3xl p-6 shadow-xl shadow-gray-900/20 text-white h-48 relative overflow-hidden">
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-2xl" />
                  <div className="w-12 h-12 rounded-2xl bg-gray-800 flex items-center justify-center mb-4 border border-gray-700">
                    <ShieldCheck className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Prebuilt & Secure</h4>
                  <p className="text-sm text-gray-400">Fast, affordable, and incredibly secure deployments.</p>
                </div>
                <div className="bg-white rounded-3xl p-6 shadow-xl shadow-emerald-900/5 border border-gray-100 h-64 relative overflow-hidden group">
                   <div className="absolute inset-0 bg-linear-to-br from-teal-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Dedicated Team</h4>
                  <p className="text-sm text-gray-500">A passionate squad of developers turning your vision into a digital reality.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/40 hover:-translate-y-2 transition-transform duration-300 group relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-linear-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${val.gradient}`} />
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-gray-50 rounded-full group-hover:scale-150 transition-transform duration-700 ease-out" />
              
              <div className={`relative w-14 h-14 rounded-2xl bg-linear-to-br ${val.gradient} flex items-center justify-center shadow-lg shadow-blue-500/20 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <val.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="relative text-xl font-bold text-gray-900 mb-3">{val.title}</h3>
              <p className="relative text-gray-500 leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
