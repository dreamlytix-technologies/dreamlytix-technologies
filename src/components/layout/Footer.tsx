import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-linear-to-r from-blue-600 via-cyan-600 to-blue-700">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-full">
        <svg className="relative block w-full h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="footer-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="currentColor" className="text-blue-600" />
              <stop offset="50%" stopColor="currentColor" className="text-cyan-600" />
              <stop offset="100%" stopColor="currentColor" className="text-blue-700" />
            </linearGradient>
          </defs>
          <path d="M0,0 C300,80 600,80 900,40 C1050,20 1150,50 1200,80 L1200,120 L0,120 Z" className="fill-[url(#footer-gradient)]" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-3">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center group -mt-3">
              <Image src="/images/hero-logo.png" alt="Dreamlytix Logo" width={72} height={72} className="h-18 -ml-6 -mr-3" />
              <div className="flex flex-col leading-tight">
                <div className="text-2xl font-bold">
                  <span className="text-gray-700 transition-colors">Dream</span>
                  <span className="text-[#5ACCD9]">lytix</span>
                </div>
                <span className="text-xs text-gray-400 tracking-wide">You Dream, We Build.</span>
              </div>
            </Link>
            <p className="text-white text-sm leading-relaxed mb-6">
              We are a professional software development company specializing in secure websites and mobile applications. We deliver reliable, scalable, and innovative
              digital solutions to help businesses grow and succeed.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div>
                <h3 className="text-xl font-bold text-white tracking-wider mb-6 relative inline-block">
                  Navigation<span className="text-cyan-400">.</span>
                  <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-cyan-400 -mb-2"></span>
                </h3>
                <ul className="space-y-2">
                  <FooterLink href="#about" label="About Us" />
                  <FooterLink href="#contact" label="Contact Us" />
                  <FooterLink href="#services" label="Our Services" />
                  <FooterLink href="#features" label="Key Features" />
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white tracking-wider mb-6 relative inline-block">
                  Quick Links<span className="text-cyan-400">.</span>
                  <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-cyan-400 -mb-2"></span>
                </h3>
                <ul className="space-y-2">
                  <FooterLink href="/faqs" label="FAQs" />
                  <FooterLink href="#caseStudies" label="Case Studies" />
                  <FooterLink href="/privacy-policy" label="Privacy Policy" />
                  <FooterLink href="/terms-and-conditions" label="Terms & Conditions" />
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white tracking-wider mb-6 relative inline-block">
                  Free Consultation<span className="text-cyan-400">.</span>
                  <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-cyan-400 -mb-2"></span>
                </h3>

                <div className="flex flex-col space-y-3">
                  <button className="cursor-pointer w-48 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-yellow-300">
                    Book a free Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 py-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm">© {currentYear} Dreamlytix. All rights reserved.</p>
          <div className="flex space-x-6 text-sm text-white">
            <span className="flex items-center">
              Made with <span className="text-red-400 mx-1 animate-pulse">❤️</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label }: Readonly<{ href: string; label: string }>) {
  return (
    <li>
      <Link href={href} className="text-white text-sm transition-all duration-300 hover:translate-x-1 inline-block relative group hover:text-yellow-300">
        {label}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </li>
  );
}
