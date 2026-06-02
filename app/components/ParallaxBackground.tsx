"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxBackgroundProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxBackground({
  children,
  speed = 0.5,
  className = "",
}: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const ctx = gsap.context(() => {
      gsap.to(element, {
        y: `${-100 * speed}%`,
        ease: "none",
        scrollTrigger: {
          trigger: element.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, element);

    return () => ctx.revert();
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}