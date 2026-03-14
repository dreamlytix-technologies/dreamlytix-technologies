import Link from "next/link";
import Image from "next/image";

/* ── Heading shared style ── */
const HEADING = "text-lg font-bold text-white tracking-wide mb-6 relative inline-block";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative" style={{ background: "linear-gradient(135deg, #1a47b8 0%, #0e7490 60%, #1a47b8 100%)" }}>
      {/* Wave topper */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-[99%]">
        <svg className="relative block w-full h-16 md:h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0 C300,80 600,80 900,40 C1050,20 1150,50 1200,80 L1200,120 L0,120 Z" fill="url(#fw)" />
          <defs>
            <linearGradient id="fw" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1a47b8" />
              <stop offset="60%" stopColor="#0e7490" />
              <stop offset="100%" stopColor="#1a47b8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Dot-grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pt-14 pb-10">
          {/* Col 1 — Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center group -mt-3 mb-4">
              <Image src="/images/hero-logo.png" alt="Dreamlytix Logo" width={72} height={72} className="h-16 -ml-5 -mr-2" />
              <div className="flex flex-col leading-tight">
                <div className="text-2xl font-bold">
                  <span className="text-white/90">Dream</span>
                  <span className="text-cyan-300">lytix</span>
                </div>
                <span className="text-xs text-white/60 tracking-wide">You Dream, We Build.</span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Dreamlytix is a leading school management software company in India. We build secure school websites, admin panels, student management systems, and mobile
              applications to help educational institutions digitize their operations.
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <h3 className={HEADING}>
              Navigation<span className="text-cyan-300">.</span>
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-cyan-300 -mb-2" />
            </h3>
            <ul className="space-y-3">
              <FooterLink href="#implementation" label="About Us" />
              <FooterLink href="#portfolio" label="Our Portfolio" />
              <FooterLink href="#testimonials" label="Google Reviews" />
            </ul>
          </div>

          {/* Col 3 — Quick Links */}
          <div>
            <h3 className={HEADING}>
              Quick Links<span className="text-cyan-300">.</span>
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-cyan-300 -mb-2" />
            </h3>
            <ul className="space-y-3">
              <FooterLink href="#faq" label="Blogs" />
              <FooterLink href="/privacy-policy" label="Privacy Policy" />
              <FooterLink href="/terms-and-conditions" label="Terms & Conditions" />
            </ul>
          </div>

          {/* Col 4 — Get in Touch (redesigned) */}
          <div>
            <h3 className={HEADING}>
              Get in Touch<span className="text-cyan-300">.</span>
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-cyan-300 -mb-2" />
            </h3>

            {/* CTA card */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 mb-5">
              <p className="text-white/80 text-xs mb-3 leading-relaxed">Ready to digitise your business?</p>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-bold text-sm text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-blue-700/40 active:scale-[0.98]"
                style={{ background: "linear-gradient(90deg,#2563eb 0%,#06b6d4 100%)" }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/20 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/60 text-xs">
            © {currentYear} <span className="text-white font-semibold">Dreamlytix</span>. All rights reserved.
          </p>
          <p className="text-white/50 text-xs flex items-center gap-1">
            Made with <span className="text-red-400 animate-pulse">❤️</span> in India
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ── Footer link ── */
function FooterLink({ href, label }: Readonly<{ href: string; label: string }>) {
  return (
    <li>
      <Link href={href} className="text-white/70 text-sm transition-all duration-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 group">
        <span className="w-1 h-1 rounded-full bg-cyan-400/50 group-hover:bg-cyan-300 transition-colors" />
        {label}
      </Link>
    </li>
  );
}
