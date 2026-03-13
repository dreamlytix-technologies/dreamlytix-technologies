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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-6">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center group -mt-3">
              <Image src="/images/hero-logo.png" alt="Dreamlytix Logo" width={72} height={72} className="h-18 -ml-6 -mr-3" />
              <div className="flex flex-col leading-tight">
                <div className="text-2xl font-bold">
                  <span className="text-gray-700 transition-colors">Dream</span>
                  <span className="gradient-text-secondary">lytix</span>
                </div>
                <span className="text-xs text-gray-300 tracking-wide">You Dream, We Build.</span>
              </div>
            </Link>
            <p className="text-white text-sm leading-relaxed mb-6">
              Dreamlytix is a school management software company in India that builds secure school websites, admin panels, student management systems, and mobile apps to
              help institutions digitize their operations.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white tracking-wider mb-6 relative inline-block">
                  Navigation<span className="text-cyan-400">.</span>
                  <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-cyan-400 -mb-2"></span>
                </h3>
                <ul className="space-y-2">
                  <FooterLink href="#implementation" label="About Us" />
                  <FooterLink href="#contact" label="Contact Us" />
                  <FooterLink href="#services" label="Our Services" />
                </ul>
              </div>

              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white tracking-wider mb-6 relative inline-block">
                  Quick Links<span className="text-cyan-400">.</span>
                  <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-cyan-400 -mb-2"></span>
                </h3>
                <ul className="space-y-2">
                  <FooterLink href="#faq" label="Blogs" />
                  <FooterLink href="/privacy-policy" label="Privacy Policy" />
                  <FooterLink href="/terms-and-conditions" label="Terms & Conditions" />
                </ul>
              </div>

              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white tracking-wider mb-6 relative inline-block">
                  Social Media<span className="text-cyan-400">.</span>
                  <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-cyan-400 -mb-2"></span>
                </h3>

                <div className="flex space-x-2">
                  <SocialLink href="https://linkedin.com/company/dreamlytix" label="Dreamlytix on LinkedIn" icon="linkedin" />
                  <SocialLink href="https://instagram.com/dreamlytix" label="Dreamlytix on Instagram" icon="instagram" />
                  <SocialLink href="https://github.com/dreamlytix" label="Dreamlytix on GitHub" icon="github" />
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

function SocialLink({ href, label, icon }: Readonly<{ href: string; label: string; icon: string }>) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "github":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
        );
      case "linkedin":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        );
      case "instagram":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-200 rounded-full p-3 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 inline-block shadow-lg shadow-[#7e98cf]"
      aria-label={label}
      style={{ color: "#2563eb" }}
    >
      {getIcon(icon)}
    </a>
  );
}
