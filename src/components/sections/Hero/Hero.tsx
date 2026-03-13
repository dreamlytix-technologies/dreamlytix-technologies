"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

const Hero = () => {
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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Animated Background */}
      <AnimatedBackground variant="mesh" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div className="space-y-8 max-w-xl" variants={containerVariants} initial="hidden" animate="visible">
            {/* Trusted By Badge */}
            <motion.div 
              variants={itemVariants} 
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full md:bg-white/5 bg-zinc-900 shrink-0 border border-white/10 backdrop-blur-sm"
            >
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-zinc-900 bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center overflow-hidden">
                    {/* Placeholder for small avatars in trust badge */}
                    <div className="w-full h-full bg-white/20" />
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium text-zinc-300 pr-2">
                Trusted by <span className="text-white font-bold">130k+</span> Audience
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-zinc-50 tracking-tight">
              Streamline Business with our
              <br />
              <span className="gradient-text relative pb-2 inline-block">
                Flexible Options
                {/* Animated underline */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1.5 bg-gradient-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-zinc-400 text-lg md:text-xl leading-relaxed">
              We deliver premium digital solutions, powerful dashboards, and scalable applications. Transform your operations with our reliable, high-performance technology.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-white text-zinc-900 rounded-full font-bold hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10">
                Let's Explore
              </button>
              <button className="px-8 py-4 bg-transparent text-white border border-white/20 rounded-full font-bold hover:bg-white/5 transition-colors">
                Contact Us
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Founder Image with Stats */}
          <motion.div
            className="relative lg:h-[650px] flex items-center justify-center p-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/30 rounded-full blur-[120px] -z-10" />

            {/* Main Founder/Real Image Container */}
            <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-white/20 group">
              {/* NOTE: Change '/images/founder.jpg' to the actual path of your uploaded image */}
              <Image
                src="/images/founder.jpg" 
                alt="Founder & CEO"
                fill
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                priority
              />
              {/* Fallback gradient if image not found */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 -z-10 flex items-center justify-center">
                 <p className="text-zinc-500 text-sm italic px-8 text-center">Place your real image at 'public/images/founder.jpg'</p>
              </div>

              {/* Gradient overlay for text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="backdrop-blur-md bg-white/10 border border-white/20 p-4 rounded-2xl">
                  <p className="text-white font-bold text-2xl">Supratim Das</p>
                  <p className="text-zinc-300 font-medium tracking-wide">Founder & CEO</p>
                </div>
              </div>
            </div>

            {/* Floating Design Elements */}
            <motion.div
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
            </motion.div>
            
            <motion.div
              className="absolute bottom-24 -right-4 md:right-4 backdrop-blur-xl bg-zinc-900/80 border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-4 z-20"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-emerald-500/30">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div>
                <p className="text-white font-bold">Verified</p>
                <p className="text-zinc-400 text-xs">Real Results</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
