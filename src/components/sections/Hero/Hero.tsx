"use client";

import React from "react";
import { motion } from "framer-motion";
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div className="space-y-10 max-w-xl" variants={containerVariants} initial="hidden" animate="visible">
            <motion.h1 variants={itemVariants} className="text-6xl lg:text-6xl font-extrabold leading-tight text-zinc-50">
              Turning Ideas Into
              <br />
              <span className="gradient-text relative">
                Digital Reality
                {/* Animated underline */}
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-zinc-200 text-md lg:text-md leading-relaxed">
              Transform your business with a complete digital ecosystem — secure websites, powerful admin panels, and intuitive mobile apps designed specifically for
              educational institutions.
            </motion.p>

            <motion.blockquote variants={itemVariants} className="border-l-4 border-blue-500 pl-6 text-gray-700 italic text-md bg-blue-50 py-3 rounded-r-xl">
              "You Dream, We Build — delivering technology with purpose."
            </motion.blockquote>
          </motion.div>

          {/* Right Column - Floating Cards & Illustration */}
          <motion.div
            className="relative lg:h-[600px] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Central Illustration */}
            <div className="relative w-full max-w-2xl">
              <div className="relative w-full aspect-square">
                {/* Hero Illustration - Static, No Animation */}
                <img src={"/images/hello.png"} alt="School Management Dashboard" className="relative z-10 w-full h-full object-contain" />
              </div>
            </div>

            {/* Floating decoration shapes */}
            <motion.div
              className="absolute top-20 right-10 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-xl"
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-20 right-20 w-16 h-16 bg-gradient-to-br from-teal-500/20 to-green-500/20 rounded-full blur-xl"
              animate={{
                y: [0, 20, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
