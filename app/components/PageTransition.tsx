"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </MotionConfig>
  );
}
