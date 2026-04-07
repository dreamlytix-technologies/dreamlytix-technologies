"use client";

import { m } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

// Portfolio Data based on FutureDesks
const portfolioItems = [
  {
    id: 1,
    title: "Dreamlytix",
    category: "Business Solutions Platform",
    description:
      "India's ed-tech development agency building custom websites, admin panels, and mobile apps for schools, gyms, and growing businesses — 150+ institutions digitized.",
    website: "https://www.dreamlytix.com/",
    gradient: "from-orange-500 to-amber-300",
  },
  {
    id: 2,
    title: "Novacoat",
    category: "Interior & Exterior Color Solutions",
    description:
      "Professional painting contractor based in West Bengal, offering expert residential and commercial painting services with quality finishes and reliable workmanship.",
    website: "https://www.novacoat.co.in/",
    gradient: "from-zinc-800 to-zinc-900",
  },
  {
    id: 3,
    title: "The Bengal Eye",
    category: "News & Media Platform",
    description:
      "India's ground-rooted Bengali news portal covering politics, technology, entertainment, and local stories — from every village to Delhi, in English and বাংলা.",
    website: "https://the-bengal-eye-news.vercel.app/",
    gradient: "from-blue-600 to-cyan-400",
  },
];

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

const Portfolio = () => {
  return (
    <section
      className="relative py-24 overflow-hidden"
      id="portfolio"
      style={{
        background:
          "linear-gradient(160deg, #0a1628 0%, #0d1f3c 50%, #0a1628 100%)",
      }}
    >
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-blue-400 mb-2"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Our Portfolio
          </m.div>

          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Turning Visions Into{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
              Digital Reality
            </span>
          </m.h2>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-sm"
          >
            Explore our featured projects. We build scalable, high-performance
            web applications tailored to your business goals.
          </m.p>
        </div>

        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolioItems.map((item) => (
            <m.div
              key={item.id}
              variants={itemVariants}
              className="group relative rounded-4xl bg-zinc-900/50 border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-500"
            >
              {/* Card Image Area */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-950 p-3 pb-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://api.microlink.io/?url=${encodeURIComponent(item.website)}&screenshot=true&meta=false&embed=screenshot.url&waitForTimeout=3000&viewport.width=1280&viewport.height=800`}
                  alt={`${item.title} website screenshot`}
                  className="w-full h-full object-cover object-top rounded-t-sm transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />

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
                  aria-label={`Visit ${item.title} website`}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md flex items-center justify-center rounded-full text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-white/20 border border-white/20"
                >
                  <ExternalLink size={18} />
                </a>
              </div>

              {/* Card Content Area */}
              <div className="p-8 relative">
                {/* Subtle gradient glow behind text */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${item.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500 -z-10`}
                />

                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-zinc-400 text-sm mb-4 line-clamp-4 leading-relaxed">
                  {item.description}
                </p>

                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-blue-400 transition-colors"
                >
                  Visit Website
                  <ArrowRight
                    size={16}
                    className="transform group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
};

export default Portfolio;
