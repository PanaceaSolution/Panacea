"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export function AnimatedCounter({ value, className = "" }: AnimatedCounterProps) {
  const countRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(countRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView || !countRef.current) return;

    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
    const suffix = value.replace(/[0-9.]/g, "");

    if (isNaN(numericValue)) return;

    const obj = { count: 0 };
    gsap.to(obj, {
      count: numericValue,
      duration: 2,
      ease: "power2.out",
      onUpdate: () => {
        const formatted = numericValue % 1 === 0 ? Math.floor(obj.count) : obj.count.toFixed(1);
        countRef.current!.textContent = formatted + suffix;
      },
    });
  }, [isInView, value]);

  return <span ref={countRef} className={className}>{value}</span>;
}