"use client";

import {
  animate,
  useInView,
  useReducedMotion,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

export function AnimatedNumber({
  value,
  suffix = "",
  duration = 1.4,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    // For reduced motion, snap by animating with zero duration — avoids a
    // synchronous setState in the effect body while still landing on `value`.
    const controls = animate(reduce ? value : 0, value, {
      duration: reduce ? 0 : duration,
      ease: [0.23, 1, 0.32, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    // Safety net: the rAF-driven count pauses while the tab is hidden, so make
    // sure the final value always lands even if onUpdate never ticks.
    const settle = setTimeout(
      () => setDisplay(value),
      reduce ? 0 : duration * 1000 + 100,
    );
    return () => {
      controls.stop();
      clearTimeout(settle);
    };
  }, [inView, value, duration, reduce]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
