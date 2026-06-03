"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { ReactNode, useRef, MouseEvent } from "react";

/* ── Easing ────────────────────────────────────────────────────── */
export const ease = {
  premium: [0.22, 0.61, 0.36, 1] as const,      // snappier than cubic-bezier ease-out
  spring: { type: "spring" as const, stiffness: 320, damping: 26 },
  springSnappy: { type: "spring" as const, stiffness: 420, damping: 30 },
  springBounce: { type: "spring" as const, stiffness: 340, damping: 20 },
};

/* ── Shared variants ───────────────────────────────────────────── */
// No blur — blur on every card is expensive; keep it only for hero headline
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: ease.premium } },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: ease.premium } },
};

/* ── Reduced-motion guard ──────────────────────────────────────── */
function shouldAnimate() {
  if (typeof window === "undefined") return true;
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/* ── FadeUp ────────────────────────────────────────────────────── */
export function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay, ease: ease.premium }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── FadeIn ────────────────────────────────────────────────────── */
export function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay, ease: ease.premium }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── SlideIn ───────────────────────────────────────────────────── */
export function SlideIn({
  children,
  direction = "left",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  className?: string;
}) {
  const initial = {
    left:  { opacity: 0, x: -40 },
    right: { opacity: 0, x: 40 },
    up:    { opacity: 0, y: -30 },
    down:  { opacity: 0, y: 30 },
  }[direction];

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: ease.premium }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── StaggerContainer ──────────────────────────────────────────── */
export function StaggerContainer({
  children,
  className = "",
  delay = 0,
  stagger = 0.07,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── StaggerItem ───────────────────────────────────────────────── */
export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={staggerItemVariants} className={className}>
      {children}
    </motion.div>
  );
}

/* ── TiltCard — lightweight, GPU-friendly ──────────────────────── */
export function TiltCard({
  children,
  className = "",
  intensity = 5,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // useSpring keeps transform on compositor thread
  const rotateX = useSpring(useTransform(y, [-80, 80], [intensity, -intensity]), { stiffness: 280, damping: 28 });
  const rotateY = useSpring(useTransform(x, [-80, 80], [-intensity, intensity]), { stiffness: 280, damping: 28 });
  const scale   = useSpring(1, { stiffness: 280, damping: 28 });

  function onMove(e: MouseEvent<HTMLDivElement>) {
    if (!shouldAnimate()) return;
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set(e.clientX - r.left - r.width / 2);
    y.set(e.clientY - r.top  - r.height / 2);
    scale.set(1.02);
  }

  function onLeave() {
    x.set(0); y.set(0); scale.set(1);
  }

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, scale, transformPerspective: 800, willChange: "transform" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── MagneticButton ────────────────────────────────────────────── */
export function MagneticButton({
  children,
  className = "",
  strength = 0.22,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 380, damping: 22 });
  const sy = useSpring(y, { stiffness: 380, damping: 22 });

  return (
    <motion.div
      style={{ x: sx, y: sy, willChange: "transform" }}
      onMouseMove={(e: MouseEvent<HTMLDivElement>) => {
        if (!shouldAnimate()) return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width  / 2) * strength);
        y.set((e.clientY - r.top  - r.height / 2) * strength);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── TextReveal — only used for hero headlines ─────────────────── */
export function TextReveal({
  text,
  className = "",
  delay = 0,
  wordDelay = 0.06,
}: {
  text: string;
  className?: string;
  delay?: number;
  wordDelay?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", marginRight: "0.27em" }}
        >
          <motion.span
            initial={{ y: "105%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: delay + i * wordDelay, ease: ease.premium }}
            style={{ display: "inline-block", willChange: "transform" }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ── FloatingOrb — throttled to 60fps via CSS animation ────────── */
export function FloatingOrb({
  className = "",
  delay = 0,
  duration = 9,
}: {
  className?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -16, 0], opacity: [0.55, 0.75, 0.55] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut", repeatType: "loop" }}
      style={{ willChange: "transform, opacity" }}
    />
  );
}

/* ── PulseGlow ─────────────────────────────────────────────────── */
export function PulseGlow({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{ scale: [1, 1.18, 1], opacity: [0.45, 0.75, 0.45] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      style={{ willChange: "transform, opacity" }}
    />
  );
}

/* ── ScaleIn ───────────────────────────────────────────────────── */
export function ScaleIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay, ease: ease.premium }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── HoverLift ─────────────────────────────────────────────────── */
export function HoverLift({
  children,
  className = "",
  lift = 5,
}: {
  children: ReactNode;
  className?: string;
  lift?: number;
}) {
  return (
    <motion.div
      whileHover={{ y: -lift }}
      transition={{ duration: 0.2, ease: ease.premium }}
      style={{ willChange: "transform" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
