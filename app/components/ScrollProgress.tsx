"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.3,
  });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[70] h-1 w-full origin-left bg-gradient-to-r from-teal-500 via-sky-500 to-emerald-400"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
