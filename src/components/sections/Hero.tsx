"use client";

import { motion, useReducedMotion } from "motion/react";
import { Container } from "../ui";
import { StoreBadges } from "../StoreBadges";
import { PhoneFrame } from "../PhoneFrame";
import { DashboardScreen } from "../screens/DashboardScreen";
import { Logo } from "../Wordmark";

export function Hero() {
  const reduce = useReducedMotion();
  const ease = [0.23, 1, 0.32, 1] as const;

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 md:pb-28"
    >
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px]"
        style={{
          background:
            "radial-gradient(55% 50% at 50% 0%, rgba(212,230,153,0.12), transparent 70%)",
        }}
      />
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* copy */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] font-medium text-muted"
          >
            <Logo className="h-5" />
            The eye gym in your pocket
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease }}
            className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-text sm:text-5xl md:text-6xl"
          >
            Exercise your eyes
            <br />
            like an <span className="text-accent">athlete</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease }}
            className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted sm:text-lg"
          >
            Short, guided workouts that build focus, coordination, agility, and
            stability. Level up, keep your streak, and watch your progress climb —
            all in a few minutes a day.
          </motion.p>

          <motion.div
            id="download"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="mt-8 scroll-mt-28"
          >
            <StoreBadges className="justify-center lg:justify-start" />
            <p className="mt-3 text-[12px] text-faint">
              Free to download · iPhone &amp; Android
            </p>
          </motion.div>
        </div>

        {/* phone */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, y: reduce ? 0 : 40, rotate: reduce ? 0 : -3 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
        >
          <motion.div
            animate={reduce ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
          >
            <PhoneFrame>
              <DashboardScreen />
            </PhoneFrame>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
