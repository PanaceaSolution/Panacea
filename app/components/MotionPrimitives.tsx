"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
  type Variants,
} from "framer-motion";
import { ReactNode, useRef, MouseEvent } from "react";

/* ── Easing curves ─────────────────────────────────────────────── */
export const ease = {
  premium: [0.25, 0.46, 0.45, 0.94] as const,
  spring: { type: "spring" as const, stiffness: 280, damping: 24 },
  springSnappy: { type: "spring" as const, stiffness: 400, damping: 28 },
  springBounce: { type: "spring" as const, stiffness: 260, damping: 18 },
};

/* ── Shared variants ───────────────────────────────────────────── */
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.65, ease: ease.premium },
  },
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0, filter: "blur(6px)" },
  visible: {
    opacity: 1, filter: "blur(0px)",
    transition: { duration: 0.55, ease: ease.premium },
  },
};

export const slideLeftVariants: Variants = {
  hidden: { opacity: 0, x: -48, filter: "blur(8px)" },
  visible: {
    opacity: 1, x: 0, filter: "blur(0px)",
    transition: { duration: 0.7, ease: ease.premium },
  },
};

export const slideRightVariants: Variants = {
  hidden: { opacity: 0, x: 48, filter: "blur(8px)" },
  visible: {
    opacity: 1, x: 0, filter: "blur(0px)",
    transition: { duration: 0.7, ease: ease.premium },
  },
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.88, filter: "blur(6px)" },
  visible: {
    opacity: 1, scale: 1, filter: "blur(0px)",
    transition: { duration: 0.6, ease: ease.premium },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.6, ease: ease.premium },
  },
};

/* ── FadeUp ────────────────────────────────────────────────────── */
export function FadeUp({
  children,
  delay = 0,
  className = "",
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      variants={{
        hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
        visible: {
          opacity: 1, y: 0, filter: "blur(0px)",
          transition: { duration: 0.65, delay, ease: ease.premium },
        },
      }}
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
      initial={{ opacity: 0, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: ease.premium }}
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
    left:  { opacity: 0, x: -56, filter: "blur(8px)" },
    right: { opacity: 0, x: 56,  filter: "blur(8px)" },
    up:    { opacity: 0, y: -40, filter: "blur(8px)" },
    down:  { opacity: 0, y: 40,  filter: "blur(8px)" },
  }[direction];

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: ease.premium }}
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
  stagger = 0.1,
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
      viewport={{ once: true, margin: "-80px" }}
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

/* ── TiltCard ──────────────────────────────────────────────────── */
export function TiltCard({
  children,
  className = "",
  intensity = 6,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [intensity, -intensity]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-intensity, intensity]), { stiffness: 300, damping: 30 });
  const scale = useSpring(1, { stiffness: 300, damping: 30 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
    scale.set(1.02);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    scale.set(1);
  }

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, scale, transformPerspective: 900 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
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
  strength = 0.25,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 350, damping: 20 });
  const springY = useSpring(y, { stiffness: 350, damping: 20 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  }

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── TextReveal ────────────────────────────────────────────────── */
export function TextReveal({
  text,
  className = "",
  delay = 0,
  wordDelay = 0.07,
}: {
  text: string;
  className?: string;
  delay?: number;
  wordDelay?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={className} style={{ display: "inline" }}>
      {words.map((word, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", marginRight: "0.28em" }}>
          <motion.span
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.6,
              delay: delay + i * wordDelay,
              ease: ease.premium,
            }}
            style={{ display: "inline-block" }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ── FloatingOrb ───────────────────────────────────────────────── */
export function FloatingOrb({
  className = "",
  delay = 0,
  duration = 8,
}: {
  className?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -20, 0], scale: [1, 1.05, 1], opacity: [0.6, 0.8, 0.6] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/* ── PulseGlow ─────────────────────────────────────────────────── */
export function PulseGlow({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
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
      initial={{ opacity: 0, scale: 0.85, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: ease.premium }}
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
  lift = 6,
}: {
  children: ReactNode;
  className?: string;
  lift?: number;
}) {
  return (
    <motion.div
      whileHover={{ y: -lift, transition: { duration: 0.25, ease: ease.premium } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
