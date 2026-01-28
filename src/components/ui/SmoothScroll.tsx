"use client";

import { useEffect, useRef, ReactNode, useCallback } from "react";

interface SmoothScrollProps {
  readonly children: ReactNode;
  readonly animation?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scaleIn";
  readonly delay?: number;
  readonly className?: string;
}

export default function SmoothScroll({ children, animation = "fadeUp", delay = 0, className = "" }: SmoothScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("animate-in");
          }, delay);
        }
      });
    },
    [delay],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [handleIntersection]);

  const getAnimationClass = () => {
    switch (animation) {
      case "fadeUp":
        return "opacity-0 translate-y-8";
      case "fadeIn":
        return "opacity-0";
      case "slideLeft":
        return "opacity-0 -translate-x-8";
      case "slideRight":
        return "opacity-0 translate-x-8";
      case "scaleIn":
        return "opacity-0 scale-95";
      default:
        return "opacity-0 translate-y-8";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${getAnimationClass()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
