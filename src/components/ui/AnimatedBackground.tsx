"use client";

import { useState, type CSSProperties } from "react";

interface AnimatedBackgroundProps {
  readonly variant?: "mesh" | "gradient" | "particles";
  readonly className?: string;
}

export default function AnimatedBackground({ variant = "mesh", className = "" }: AnimatedBackgroundProps) {
  // Use lazy initialization to generate particles only once on mount
  const [particles] = useState<Array<{ id: number; style: CSSProperties }>>(() =>
    Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${5 + Math.random() * 10}s`,
      },
    })),
  );

  if (variant === "mesh") {
    return (
      <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`} aria-hidden="true">
        {/* Animated Gradient Mesh Background */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-50"></div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-linear-to-br from-orange-500/20 to-purple-500/20 rounded-full blur-3xl animate-float-slow"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-linear-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-linear-to-br from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-float-slow"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>
    );
  }

  if (variant === "gradient") {
    return (
      <div className={`absolute inset-0 -z-10 ${className}`} aria-hidden="true">
        <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-purple-900/50 to-gray-900 animate-gradient"></div>
      </div>
    );
  }

  // Particles variant
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute inset-0 bg-gray-50"></div>
      {/* Simple particle dots */}
      {particles.map((particle) => (
        <div key={particle.id} className="absolute w-1 h-1 bg-orange-500/30 rounded-full animate-float" style={particle.style}></div>
      ))}
    </div>
  );
}
