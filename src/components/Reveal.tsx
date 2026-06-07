"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** vertical offset in px the element travels in from */
  y?: number;
  once?: boolean;
};

/**
 * Scroll-triggered entrance. Animates transform + opacity only (GPU-friendly),
 * with a strong ease-out curve. Honors prefers-reduced-motion by fading only.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 16,
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.23, 1, 0.32, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
