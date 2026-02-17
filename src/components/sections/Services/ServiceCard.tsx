"use client";

import { motion } from "framer-motion";
import { LucideIcon, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

const ServiceCard = ({ icon: Icon, title, description, index = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative bg-white rounded-3xl border border-gray-100 p-8 hover:border-orange-200 transition-all duration-300 overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 via-purple-50/0 to-blue-50/0 group-hover:from-orange-50/50 group-hover:via-purple-50/30 group-hover:to-blue-50/50 transition-all duration-500 rounded-3xl" />

      {/* Decorative corner dots */}
      <div className="absolute top-4 right-4 flex gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-orange-300 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="w-1.5 h-1.5 rounded-full bg-purple-300 opacity-0 group-hover:opacity-100 transition-opacity delay-75" />
        <div className="w-1.5 h-1.5 rounded-full bg-blue-300 opacity-0 group-hover:opacity-100 transition-opacity delay-150" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Icon with glow ring */}
        <div className="relative inline-block mb-6">
          {/* Glow ring */}
          <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

          {/* Icon container */}
          <motion.div
            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50 group-hover:from-orange-500 group-hover:to-pink-500 flex items-center justify-center transition-all duration-300"
          >
            <Icon className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-300" />
          </motion.div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:gradient-text transition-all duration-300">{title}</h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6 text-base">{description}</p>

        {/* Learn More Link */}
        <div className="flex items-center gap-2 text-orange-600 font-semibold group/link cursor-pointer">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </div>
      </div>

      {/* Hover shadow effect */}
      <div className="absolute inset-0 rounded-3xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default ServiceCard;
