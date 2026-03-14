"use client";

import { m } from "framer-motion";
import Image from "next/image";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Animated Background */}
      <AnimatedBackground variant="mesh" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <m.div className="space-y-8 max-w-xl" variants={containerVariants} initial="hidden" animate="visible">
            <m.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-zinc-50 tracking-tight">
              Turning Ideas Into{" "}
              <span className="gradient-text relative pb-2 inline-block">
                Digital Reality
                <m.div
                  className="absolute bottom-0 left-0 h-1.5 bg-gradient-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
              </span>
            </m.h1>

            <m.p variants={itemVariants} className="text-zinc-400 text-sm md:text-base leading-relaxed">
              We deliver innovative digital solutions including secure school websites, scalable admin panels, and user-friendly mobile applications. We help educational
              institutions and growing businesses transform their operations with cutting-edge technology, reliable infrastructure, and performance-driven design.
            </m.p>

            <m.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#services"
                className="px-8 py-4 bg-white text-zinc-900 rounded-full font-bold hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10 text-center"
              >
                “You Dream, We Build — Delivering Technology with Purpose.”
              </a>
            </m.div>
          </m.div>

          {/* Right Column - Founder Image with Stats */}
          <m.div
            className="relative lg:h-[650px] flex items-center justify-center p-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/30 rounded-full blur-[120px] -z-10" />

            {/* Main Founder/Real Image Container */}
            <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-white/20 group">
              <Image
                src="/images/founder.jpg"
                alt="Supratim Das - Founder & CEO of Dreamlytix"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                priority
              />

              {/* Gradient overlay for text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
            </div>

            {/* Floating Design Elements */}
            <m.div
              className="absolute top-16 -left-4 md:left-4 backdrop-blur-xl bg-zinc-900/80 border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-4 z-20"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/30">
                100%
              </div>
              <div>
                <p className="text-white font-bold">Trusted</p>
                <p className="text-zinc-400 text-xs">Quality Delivery</p>
              </div>
            </m.div>

            <m.div
              className="absolute bottom-24 -right-4 md:right-4 backdrop-blur-xl bg-zinc-900/80 border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-4 z-20"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-emerald-500/30">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <p className="text-white font-bold">Verified</p>
                <p className="text-zinc-400 text-xs">Real Results</p>
              </div>
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
