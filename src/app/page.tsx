// section component
import Hero from "@/components/sections/Hero/Hero";
import Services from "@/components/sections/Services/Services";
import Security from "@/components/sections/Security/Security";
import Implementation from "@/components/sections/Implementation/Implementation";
import TechStack from "@/components/sections/TechStack/TechStack";
import Features from "@/components/sections/Features/Features";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import FAQ from "@/components/sections/FAQ/FAQ";
import Contact from "@/components/sections/Contact/Contact";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

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
      <FAQ />
      <Contact />
      <WhatsAppButton />
    </>
  );
}
