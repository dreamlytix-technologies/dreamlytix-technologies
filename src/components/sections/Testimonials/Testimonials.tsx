"use client";

import { useMemo } from "react";
import { m } from "framer-motion";
import { Star } from "lucide-react";

/* ─── Google "G" SVG icon ─── */
const GoogleIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

/* ─── Star row helper ─── */
const Stars = ({ count = 5 }: { count?: number }) => (
  <div
    className="flex gap-0.5"
    role="img"
    aria-label={`${count} out of 5 stars`}
  >
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < count ? "text-[#FBBC05] fill-[#FBBC05]" : "text-gray-300"}`}
      />
    ))}
  </div>
);

/* ─── Review data ─── */
const reviews = [
  {
    name: "Animesh Das",
    role: "Owner, Novacoat",
    location: "Murshidabad, WB",
    text: "Dreamlytix understood our requirements perfectly and created a website that reflects our company and industry. The design, speed, and overall functionality are excellent. We're very happy with the result.",
    rating: 5,
    initials: "AD",
    color: "#4285F4",
    time: "2 weeks ago",
  },
  {
    name: "Priya Sharma",
    role: "Principal",
    location: "Delhi Enterprise Solutions",
    text: "The management system they built transformed how we operate. Attendance, fees, communication — all in one place. Parents love the mobile app. Truly a game-changer!",
    rating: 5,
    initials: "PS",
    color: "#34A853",
    time: "1 month ago",
  },
  {
    name: "Rahul Mehta",
    role: "Director",
    location: "Fit Zone Gym, Kolkata",
    text: "Our gym's online presence went from zero to outstanding in just 6 weeks. The membership management panel is super intuitive. Highly recommended for any fitness business.",
    rating: 5,
    initials: "RM",
    color: "#EA4335",
    time: "3 weeks ago",
  },
  {
    name: "Sunita Agarwal",
    role: "Owner",
    location: "Agarwal Enterprise",
    text: "Professional team, clear communication throughout the project, and delivered exactly what we needed on time. The website beautifully represents our brand.",
    rating: 5,
    initials: "SA",
    color: "#FBBC05",
    time: "1 month ago",
  },
  {
    name: "Debashis Roy",
    role: "Secretary",
    location: "Sunrise Academy, WB",
    text: "The admin panel for our organization is exceptional. Our team members and staff all find it very easy to use. The Dreamlytix team was patient and thorough with training too.",
    rating: 5,
    initials: "DR",
    color: "#4285F4",
    time: "5 weeks ago",
  },
  {
    name: "Kavya Nair",
    role: "CEO",
    location: "Nair Consultancy",
    text: "We needed a complete digital transformation and Dreamlytix delivered beyond expectations. Our website traffic doubled within the first month. Incredible ROI!",
    rating: 5,
    initials: "KN",
    color: "#34A853",
    time: "2 months ago",
  },
];

/* ─── Single review card ─── */
function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div className="flex-shrink-0 w-72 md:w-80 bg-white rounded-2xl shadow-lg shadow-black/10 p-5 border border-gray-100 hover:shadow-xl hover:shadow-blue-100/40 hover:-translate-y-1 transition-all duration-300 cursor-default">
      {/* Top row: avatar + name + Google icon */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
            style={{ background: review.color }}
          >
            {review.initials}
          </div>
          <div>
            <p className="text-gray-900 font-semibold text-sm">{review.name}</p>
            <p className="text-gray-500 text-xs">{review.role}</p>
          </div>
        </div>
        <GoogleIcon size={20} />
      </div>

      {/* Stars + time */}
      <div className="flex items-center gap-2 mb-3">
        <Stars count={review.rating} />
        <span className="text-gray-400 text-xs">{review.time}</span>
      </div>

      {/* Review text */}
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Location tag */}
      <div className="mt-3 pt-3 border-t border-gray-50">
        <span className="text-xs text-gray-400">📍 {review.location}</span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  /* Duplicate reviews for seamless infinite scroll */
  const row1 = useMemo(() => [...reviews, ...reviews], []);
  const row2 = useMemo(
    () => [...reviews.slice().reverse(), ...reviews.slice().reverse()],
    [],
  );

  return (
    <section
      id="testimonials"
      className="relative py-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0b1a38 0%, #0d2150 50%, #0b1a38 100%)",
      }}
    >
      {/* Dot-grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #7eb3ff 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Glows */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(66,133,244,0.12)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-[100px] pointer-events-none"
        style={{ background: "rgba(52,168,83,0.10)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Header ── */}
        <div className="text-center mb-12">
          <m.div
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold backdrop-blur-sm mb-5"
          >
            <GoogleIcon size={14} />
            Google Reviews
          </m.div>

          <m.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            What Our{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(90deg,#4285F4,#34A853,#FBBC05,#EA4335)",
              }}
            >
              Clients Say
            </span>
          </m.h2>

          <m.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-blue-200 text-sm max-w-4xl mx-auto"
          >
            Real reviews from businesses and organizations who trust Dreamlytix
            to power their digital journey.
          </m.p>
        </div>

        {/* ── Aggregate Rating Banner ── */}
        <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-14"
        >
          {/* Big rating card */}
          <div className="bg-white rounded-2xl px-8 py-5 shadow-2xl flex items-center gap-6">
            <div className="text-center">
              <div className="flex items-center gap-2 mb-1">
                <GoogleIcon size={22} />
                <span className="text-gray-500 text-sm font-medium">
                  Google Reviews
                </span>
              </div>
              <div className="text-5xl font-black text-gray-900 leading-none">
                5.0
              </div>
              <Stars count={5} />
              <p className="text-gray-400 text-xs mt-1">
                Based on {reviews.length}+ reviews
              </p>
            </div>

            <div className="border-l border-gray-100 pl-6 space-y-1.5">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 w-2">{star}</span>
                  <Star className="w-3 h-3 text-[#FBBC05] fill-[#FBBC05]" />
                  <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: star === 5 ? "100%" : star === 4 ? "0%" : "0%",
                        background: "#FBBC05",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Verified badge */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white text-sm backdrop-blur-sm">
              <svg
                className="w-4 h-4 text-[#34A853]"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
              All reviews verified by Google
            </div>
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white text-sm backdrop-blur-sm">
              <svg
                className="w-4 h-4 text-[#FBBC05]"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              100% 5-star ratings
            </div>
          </div>
        </m.div>

        {/* ── Marquee Row 1 (left scroll) ── */}
        <div className="relative mb-5">
          {/* Fade edges */}
          <div
            className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to right, #0b1a38, transparent)",
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to left, #0b1a38, transparent)",
            }}
          />

          <div className="overflow-hidden">
            <div
              className="flex gap-5 w-max"
              style={{ animation: "marquee-left 35s linear infinite" }}
            >
              {row1.map((r, i) => (
                <ReviewCard key={`r1-${i}`} review={r} />
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-12"
        >
          <a
            href="https://g.page/r/dreamlytix/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-gray-800 bg-white hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-xl shadow-black/20"
          >
            <GoogleIcon size={18} />
            Leave a Google Review
          </a>
        </m.div>
      </div>
    </section>
  );
}
