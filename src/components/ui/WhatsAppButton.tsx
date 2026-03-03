"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
    >
      {/* Ripple rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-[whatsapp-ping_2s_ease-out_infinite]" />
      <span className="absolute inset-0 rounded-full bg-[#25D366]/20 animate-[whatsapp-ping_2s_ease-out_0.6s_infinite]" />

      <Link
        target="_blank"
        href="https://wa.me/919933606242?text=Hi%20Dreamlytix%2C%20I%27m%20interested%20in%20your%20school%20management%20software."
        rel="noopener noreferrer"
        aria-label="Chat with Dreamlytix on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_24px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_32px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <FaWhatsapp className="text-[26px]" />
      </Link>
    </motion.div>
  );
}
