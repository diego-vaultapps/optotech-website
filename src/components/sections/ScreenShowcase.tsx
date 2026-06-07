"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { Container, SectionHeading } from "../ui";
import { Reveal } from "../Reveal";
import { PhoneFrame } from "../PhoneFrame";
import { DashboardScreen } from "../screens/DashboardScreen";
import { ExercisesScreen } from "../screens/ExercisesScreen";
import { ProgressScreen } from "../screens/ProgressScreen";

const SCREENS = [
  { node: <ExercisesScreen />, label: "Browse your workouts", offset: 40 },
  { node: <DashboardScreen />, label: "Start in one tap", offset: 0 },
  { node: <ProgressScreen />, label: "Track every streak", offset: 40 },
];

export function ScreenShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="showcase" ref={ref} className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Inside the app"
            title="Designed to feel effortless"
            subtitle="A clean, focused interface that keeps you moving — from picking a session to celebrating a new level."
          />
        </Reveal>

        <div className="mt-16 flex items-end justify-center gap-4 sm:gap-8">
          {SCREENS.map((s, i) => (
            <motion.div
              key={i}
              style={reduce ? undefined : { y: i === 1 ? 0 : y }}
              className={
                i === 1
                  ? "z-10 hidden sm:block"
                  : i === 0
                    ? "hidden lg:block"
                    : "block"
              }
            >
              <Reveal delay={i * 0.1}>
                <div className="flex flex-col items-center gap-4">
                  <PhoneFrame
                    glow={i === 1}
                    className={i === 1 ? "scale-100" : "scale-95 opacity-90"}
                  >
                    {s.node}
                  </PhoneFrame>
                  <p className="text-[13px] font-medium text-muted">{s.label}</p>
                </div>
              </Reveal>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
