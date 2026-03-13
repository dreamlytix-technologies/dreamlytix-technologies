"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

// Portfolio Data based on FutureDesks
const portfolioItems = [
  {
    id: 1,
    title: "Lal Sweets",
    category: "E-Commerce Website",
    description: "Modern sweets store with responsive design for smooth shopping experience.",
    website: "https://www.lalsweets.com/",
    gradient: "from-orange-500 to-amber-300",
  },
  {
    id: 2,
    title: "Kirtilals",
    category: "Luxury Website",
    description: "Premium diamond-jewellery store with elegant UX for luxury buyers.",
    website: "https://www.kirtilals.com/",
    gradient: "from-zinc-800 to-zinc-900",
  },
  {
    id: 3,
    title: "Tradescribe",
    category: "Trading Platform",
    description: "Built a sleek journaling platform for tracking trades with AI-backed analytics.",
    website: "https://tradescribe.in/",
    gradient: "from-blue-600 to-cyan-400",
  },
  {
    id: 4,
    title: "Murzban",
    category: "Clothing Luxury",
    description: "Modern online store for curated men's & women's designer fashion.",
    website: "https://murzban.in/",
    gradient: "from-purple-600 to-rose-400",
  },
  {
    id: 5,
    title: "Greenfeels",
    category: "Sustainable Ecom",
    description: "Curated eco-friendly essentials in a clean responsive design for conscious shoppers.",
    website: "https://greenfeels.in/",
    gradient: "from-emerald-500 to-lime-400",
  },
  {
    id: 6,
    title: "Momentz",
    category: "Premium Store",
    description: "Curated luxury gifts and premium home décor in a sleek online storefront.",
    website: "https://momentz.in/",
    gradient: "from-indigo-500 to-fuchsia-500",
  },
];

const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="relative py-24 bg-zinc-950 overflow-hidden" id="portfolio">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-blue-400 mb-2"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Our Portfolio
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Turning Visions Into <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">Digital Reality</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg md:text-xl"
          >
            Explore our featured projects. We build scalable, high-performance web applications tailored to your business goals.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative rounded-4xl bg-zinc-900/50 border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-500"
            >
              {/* Card Image/Gradient Area */}
              <div className={`relative h-64 w-full bg-linear-to-br ${item.gradient} overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Decorative floating shapes to make it look like an abstract image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 ease-out" />
                <div className="absolute bottom-[-10%] right-[-10%] w-24 h-24 bg-white/20 backdrop-blur-md rounded-2xl rotate-12 group-hover:rotate-45 group-hover:scale-110 transition-all duration-500" />
                <div className="absolute top-[-5%] left-[-5%] w-16 h-16 bg-black/20 backdrop-blur-md rounded-full group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500" />
                
                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4">
                   <span className="px-3 py-1 bg-black/40 backdrop-blur-md text-white/90 text-xs font-semibold rounded-full border border-white/10">
                     {item.category}
                   </span>
                </div>
                
                {/* Link Icon Overlay */}
                <a 
                  href={item.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md  flex items-center justify-center rounded-full text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-white/20 border border-white/20"
                >
                  <ExternalLink size={18} />
                </a>
                
                {/* Placeholder Image Text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                   <h3 className="text-3xl font-bold tracking-wider text-white mix-blend-overlay">{item.title}</h3>
                </div>
              </div>

              {/* Card Content Area */}
              <div className="p-8 relative">
                {/* Subtle gradient glow behind text */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${item.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500 -z-10`} />
                
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-zinc-400 text-sm mb-8 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
                
                <a 
                  href={item.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-blue-400 transition-colors"
                >
                  Visit Website 
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-4 bg-zinc-900 border border-white/10 text-white rounded-full font-bold hover:bg-white/5 transition-all outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-950">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
