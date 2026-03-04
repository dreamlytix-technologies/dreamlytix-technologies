"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Animesh Das",
    role: "Owner",
    school: "Novacoat, Murshidabad, WB",
    text: "Dreamlytix understood our requirements perfectly and created a website that reflects our company and industry. The design, speed, and overall functionality are excellent. We’re very happy with the result.",
    rating: 5,
    avatar: "from-blue-500 to-cyan-500",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const cardsPerView = 3;
  const totalPages = Math.ceil(testimonials.length / cardsPerView);

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Get current testimonials to display
  const startIdx = currentIndex * cardsPerView;
  const currentTestimonials = testimonials.slice(startIdx, startIdx + cardsPerView);

  return (
    <section id="testimonials" className="relative py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-block mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold rounded-full">
              <Quote className="w-3 h-3" />
              Client Success Stories
            </div>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            What <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">People</span> Say
          </h2>

          <p className="text-blue-200 text-sm md:text-base lg:text-lg leading-relaxed">
            Trusted by educational institutions and businesses worldwide for reliable, scalable, and innovative technology services.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-7xl mx-auto" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Grid */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="grid md:grid-cols-3 gap-6"
              >
                {currentTestimonials.map((testimonial, idx) => (
                  <motion.div
                    key={startIdx + idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex flex-col h-full hover:bg-white/15 transition-all duration-300 group"
                  >
                    {/* Quote Icon */}
                    <Quote className="w-10 h-10 text-blue-400/40 mb-4" />

                    {/* Star Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-white text-sm md:text-sm leading-relaxed mb-6 flex-1 italic">"{testimonial.text}"</p>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4" />

                    {/* Author Info */}
                    <div className="flex items-center gap-3">
                      {/* Avatar */}
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.avatar} flex items-center justify-center text-white text-lg font-bold shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform`}
                      >
                        {testimonial.name.charAt(0)}
                      </div>

                      {/* Details */}
                      <div className="min-w-0">
                        <h4 className="text-white font-bold text-sm truncate">{testimonial.name}</h4>
                        <p className="text-blue-300 text-xs truncate">{testimonial.role}</p>
                        <p className="text-blue-400 text-xs font-semibold truncate">{testimonial.school}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? "w-8 bg-blue-400" : "w-2 bg-white/30 hover:bg-white/50"}`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
