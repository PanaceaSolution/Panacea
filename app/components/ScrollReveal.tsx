"use client";

import { ReactNode, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type AnimationType =
  | "fade-up"
  | "fadeUp"
  | "fade-left"
  | "fadeLeft"
  | "slide-left"
  | "fade-right"
  | "fadeRight"
  | "slide-right"
  | "scale"
  | "stagger"
  | "clip";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.75,
  className = "",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    const element = ref.current;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (motionQuery.matches) {
      gsap.set(animation === "stagger" ? element.children : element, {
        clearProps: "all",
        opacity: 1,
      });
      return;
    }

    const scrollTrigger = {
      trigger: element,
      start: "top 86%",
      toggleActions: once ? "play none none none" : "play none none reverse",
      once,
    };

    const presets: Record<string, gsap.TweenVars> = {
      "fade-up": { opacity: 0, y: 48 },
      fadeUp: { opacity: 0, y: 48 },
      "fade-left": { opacity: 0, x: -48 },
      fadeLeft: { opacity: 0, x: -48 },
      "slide-left": { opacity: 0, x: -56 },
      "fade-right": { opacity: 0, x: 48 },
      fadeRight: { opacity: 0, x: 48 },
      "slide-right": { opacity: 0, x: 56 },
      scale: { opacity: 0, scale: 0.92 },
      clip: { opacity: 0, y: 30, clipPath: "inset(0 0 100% 0)" },
    };

    if (animation === "stagger") {
      gsap.fromTo(
        element.children,
        { opacity: 0, y: 28, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration,
          delay,
          stagger: { each: 0.08, from: "start" },
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger,
        }
      );
      return;
    }

    const from = presets[animation] ?? { opacity: 0, y: 48 };

    gsap.fromTo(element, from, {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      clipPath: "inset(0 0 0% 0)",
      duration,
      delay,
      ease: animation === "scale" ? "back.out(1.35)" : "power3.out",
      clearProps: "transform,clipPath",
      scrollTrigger,
    });
  }, { dependencies: [animation, delay, duration, once], scope: ref });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
