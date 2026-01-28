import Link from "next/link";

// section component
import Hero from "@/components/sections/Hero/Hero";
import Services from "@/components/sections/Services/Services";
import Security from "@/components/sections/Security/Security";
import Implementation from "@/components/sections/Implementation/Implementation";
import TechStack from "@/components/sections/TechStack/TechStack";
import Features from "@/components/sections/Features/Features";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import Contact from "@/components/sections/Contact/Contact";

// react-icons
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Security />
      <Implementation />
      <TechStack />
      <Features />
      <Testimonials />
      <Contact />

      <Link
        target="_blank"
        href="https://wa.me/919876543210"
        className="fixed bottom-6 right-6 z-50 bg-linear-to-br from-[#25D366] to-[#128C7E] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-3xl hover:scale-110 transition-all duration-300 animate-pulse-glow group"
      >
        <FaWhatsapp className="group-hover:rotate-12 transition-transform" />
      </Link>
    </>
  );
}
