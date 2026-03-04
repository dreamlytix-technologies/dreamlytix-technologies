"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Database, Cloud, Laptop, TestTube2 } from "lucide-react";

const TechStack = () => {
  const technologies = [
    {
      category: "Frontend",
      icon: Laptop,
      color: "from-blue-500 to-cyan-500",
      techs: [
        { name: "React.js", icon: "⚛️", description: "Modern UI library" },
        { name: "Next.js", icon: "▲", description: "Full-stack framework" },
        {
          name: "TypeScript",
          icon: "TS",
          description: "Type-safe dev",
        },
        {
          name: "Tailwind CSS",
          icon: "🎨",
          description: "Utility-first styling",
        },
      ],
    },
    {
      category: "Backend & Database",
      icon: Database,
      color: "from-green-500 to-teal-500",
      techs: [
        { name: "Node.js", icon: "📗", description: "Server runtime" },
        { name: "Python", icon: "🐍", description: "Backend logic" },
        { name: "MongoDB", icon: "🍃", description: "NoSQL database" },
        { name: "PostgreSQL", icon: "🐘", description: "Relational database" },
      ],
    },
    {
      category: "Mobile Development",
      icon: Smartphone,
      color: "from-purple-500 to-pink-500",
      techs: [
        {
          name: "React Native",
          icon: "📱",
          description: "Cross-platform apps",
        },
        { name: "Flutter", icon: "🦋", description: "Native performance" },
      ],
    },
    {
      category: "Testing",
      icon: TestTube2,
      color: "from-yellow-500 to-orange-500",
      techs: [
        { name: "Jest", icon: "🃏", description: "Unit testing" },
        { name: "Cypress", icon: "🌲", description: "End-to-end testing" },
        { name: "Playwright", icon: "🎭", description: "Browser automation" },
      ],
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      techs: [
        { name: "AWS", icon: "☁️", description: "Cloud infrastructure" },
        { name: "Firebase", icon: "🔥", description: "Backend services" },
        { name: "Vercel", icon: "▲", description: "Deployment platform" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="relative py-16 overflow-hidden bg-gray-900" id="technologies">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-green-500/20 rounded-full blur-3xl"
          animate={{
            x: [-100, 100, -100],
            y: [-50, 50, -50],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold rounded-full mb-4">
            <Code2 className="w-3 h-3" />
            Technologies We Use
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">Tech Stack</span>
          </h2>

          <p className="text-blue-200 text-sm md:text-base lg:text-lg leading-relaxed">
            Cutting-edge technologies powering robust, scalable, and modern educational solutions
          </p>
        </motion.div>

        {/* Tech Categories Grid */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-8">
          {technologies.map((category, catIndex) => {
            const CategoryIcon = category.icon;

            return (
              <motion.div key={catIndex} variants={itemVariants} className="group relative">
                {/* Card */}
                <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden h-full">
                  {/* Animated gradient background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                      >
                        <CategoryIcon className="w-8 h-8 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">{category.category}</h3>
                        <div className={`h-1 w-16 bg-gradient-to-r ${category.color} rounded-full mt-2`} />
                      </div>
                    </div>

                    {/* Tech Items */}
                    <div className="grid grid-cols-4 gap-4">
                      {category.techs.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: catIndex * 0.15 + techIndex * 0.1,
                          }}
                          whileHover={{ y: -5, scale: 1.05 }}
                          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                        >
                          <div className="text-3xl mb-2">{tech.icon}</div>
                          <h4 className="text-white font-semibold text-xs sm:text-sm mb-1">{tech.name}</h4>
                          {/* <p className="text-gray-400 text-xs">{tech.description}</p> */}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20">
                    <div className={`w-full h-full rounded-tl-full bg-gradient-to-tl ${category.color}`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
