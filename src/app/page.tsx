import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero/Hero";
import Services from "@/components/sections/Services/Services";
import Implementation from "@/components/sections/Implementation/Implementation";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const Portfolio = dynamic(
  () => import("@/components/sections/Portfolio/Portfolio"),
);
const TechStack = dynamic(
  () => import("@/components/sections/TechStack/TechStack"),
);
const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials/Testimonials"),
);
const FAQ = dynamic(() => import("@/components/sections/FAQ/FAQ"));
const Contact = dynamic(() => import("@/components/sections/Contact/Contact"));

export default function Home() {
  return (
    <>
      <Hero />
      <Implementation />
      <Services />
      <Portfolio />
      <TechStack />
      {/* <Testimonials /> */}
      <FAQ />
      <Contact />
      <WhatsAppButton />
    </>
  );
}
