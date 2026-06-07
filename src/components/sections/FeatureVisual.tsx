"use client";

import { motion, useReducedMotion } from "motion/react";

/** Small, looping, GPU-friendly illustrations for each training category. */
export function FeatureVisual({ kind }: { kind: string }) {
  const reduce = useReducedMotion();

  const box =
    "relative h-28 w-full overflow-hidden rounded-xl bg-[#222] ring-1 ring-white/5";

  if (kind === "focus") {
    return (
      <div className={box}>
        <div className="absolute inset-0 grid place-items-center">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="absolute rounded-full border border-accent/40"
              style={{ width: 24 + i * 22, height: 24 + i * 22 }}
              animate={reduce ? undefined : { opacity: [0.15, 0.6, 0.15], scale: [0.96, 1, 0.96] }}
              transition={{ duration: 2.4, delay: i * 0.25, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
          <span className="absolute h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_12px_rgba(212,230,153,0.8)]" />
        </div>
      </div>
    );
  }

  if (kind === "coordination") {
    return (
      <div className={box}>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="absolute h-3.5 w-3.5 rounded-full bg-blue-light"
            animate={reduce ? undefined : { x: [-26, -6, -26] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            style={{ left: "50%", marginLeft: -7 }}
          />
          <motion.span
            className="absolute h-3.5 w-3.5 rounded-full bg-blue-light"
            animate={reduce ? undefined : { x: [26, 6, 26] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            style={{ left: "50%", marginLeft: -7 }}
          />
        </div>
      </div>
    );
  }

  if (kind === "agility") {
    const dots = [
      [22, 30],
      [60, 22],
      [82, 55],
      [42, 70],
      [18, 58],
    ];
    return (
      <div className={box}>
        {dots.map(([x, y], i) => (
          <motion.span
            key={i}
            className="absolute h-3 w-3 rounded-full bg-accent"
            style={{ left: `${x}%`, top: `${y}%` }}
            animate={reduce ? undefined : { opacity: [0.2, 1, 0.2], scale: [0.8, 1.15, 0.8] }}
            transition={{ duration: 1.6, delay: i * 0.28, repeat: Infinity, ease: "easeOut" }}
          />
        ))}
      </div>
    );
  }

  // stability
  return (
    <div className={box}>
      <div className="absolute left-1/2 top-1/2 h-px w-3/4 -translate-x-1/2 -translate-y-1/2 bg-white/10" />
      <motion.span
        className="absolute top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-blue-light shadow-[0_0_12px_rgba(137,182,224,0.7)]"
        style={{ left: "14%" }}
        animate={reduce ? undefined : { left: ["14%", "82%", "14%"] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: [0.77, 0, 0.175, 1] }}
      />
    </div>
  );
}
