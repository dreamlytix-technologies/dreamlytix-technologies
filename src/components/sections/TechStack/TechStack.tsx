"use client";

import { useEffect, useRef, useState } from "react";

interface Tech {
  name: string;
  icon: string;
}

const technologies: Tech[] = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "React Native",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "OpenAI",
    icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/chatgpt-icon.png",
  },
  {
    name: "Claude",
    icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/claude-ai-icon.png",
  },
  {
    name: "Antigravity",
    icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png",
  },
];

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const innerRing = technologies.slice(0, 5);
  const outerRing = technologies.slice(5);

  return (
    <section
      ref={sectionRef}
      id="tools"
      className="relative py-28 overflow-hidden"
      style={{ background: "#060d1b" }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-5 py-1.5 rounded-full border border-gray-700 text-sm text-gray-400 mb-6">
            Technology
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Technologies we <span className="gradient-text">used</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-4xl mx-auto">
            Modern frameworks and infrastructure used to build scalable,
            high-performance digital products.
          </p>
        </div>

        {/* Orbital layout */}
        <div
          className={`relative mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{ width: "min(550px, 80vw)", aspectRatio: "1" }}
        >
          {/* Outer orbit — rotates clockwise */}
          <div className="absolute inset-0 rounded-full border border-gray-800/50 animate-[orbit-spin_45s_linear_infinite]">
            {outerRing.map((tech, i) => {
              const angle = (i / outerRing.length) * 360;
              return (
                <OrbitItem
                  key={tech.name}
                  tech={tech}
                  angle={angle}
                  counterAnimation="animate-[counter-spin_45s_linear_infinite]"
                />
              );
            })}
          </div>

          {/* Inner orbit — rotates counter-clockwise */}
          <div
            className="absolute rounded-full border border-gray-800/30 animate-[orbit-spin-reverse_35s_linear_infinite]"
            style={{ inset: "22%" }}
          >
            {innerRing.map((tech, i) => {
              const angle = (i / innerRing.length) * 360;
              return (
                <OrbitItem
                  key={tech.name}
                  tech={tech}
                  angle={angle}
                  counterAnimation="animate-[counter-spin-reverse_35s_linear_infinite]"
                />
              );
            })}
          </div>

          {/* Center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 flex items-center justify-center shadow-2xl shadow-blue-500/10">
              <div className="text-center">
                <span className="text-lg sm:text-2xl font-bold text-white">
                  Dream
                </span>
                <span className="text-lg sm:text-2xl font-bold gradient-text-primary">
                  lytix
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OrbitItem({
  tech,
  angle,
  counterAnimation,
}: {
  tech: Tech;
  angle: number;
  counterAnimation: string;
}) {
  // Position the item on the circle using absolute + transform
  const rad = (angle * Math.PI) / 180;
  const x = Math.round((50 + 50 * Math.cos(rad)) * 100) / 100;
  const y = Math.round((50 + 50 * Math.sin(rad)) * 100) / 100;

  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      {/* Counter-rotate so the card stays upright */}
      <div className={counterAnimation}>
        <div className="flex flex-col items-center gap-1.5 group">
          <div className="w-12 h-12 rounded-xl bg-gray-900/90 border border-gray-800 flex items-center justify-center backdrop-blur-sm transition-all duration-300 group-hover:border-gray-600 group-hover:shadow-lg group-hover:shadow-blue-500/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={tech.icon}
              alt={tech.name}
              width={28}
              height={28}
              className="w-6 h-6"
              loading="lazy"
            />
          </div>
          <span className="text-xs text-gray-500 font-medium truncate max-w-[80px] text-center">
            {tech.name}
          </span>
        </div>
      </div>
    </div>
  );
}
