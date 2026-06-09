/**
 * Central content for the EyeHIIT landing page.
 *
 * COPY GUARDRAIL (FDA): performance / fitness framing only.
 * Allowed: train, workout, level, streak, focus, coordination, agility, stability, sharpen, eye gym.
 * Forbidden: therapy, treatment, cure, diagnose, medical, clinical, symptom, condition,
 *            disease, patient, vision correction, visual acuity, prescription.
 */

import type { LucideIcon } from "lucide-react";
import { Crosshair, Link2, Zap, Activity } from "lucide-react";

export type Feature = {
  key: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  accent: string;
};

export const FEATURES: Feature[] = [
  {
    key: "focus",
    name: "Focus",
    tagline: "Lock in, near and far",
    description:
      "Guided drills exercise how quickly and cleanly your eyes settle on a target as distance changes. Work each eye, set by set.",
    icon: Crosshair,
    accent: "var(--color-accent)",
  },
  {
    key: "coordination",
    name: "Coordination",
    tagline: "Both eyes, working as one",
    description:
      "Pulsing targets guide your eyes to team up at close range, then ease back out. Smooth, controlled, repeatable.",
    icon: Link2,
    accent: "var(--color-blue-light)",
  },
  {
    key: "agility",
    name: "Agility",
    tagline: "Snap from point to point",
    description:
      "Tap fast-moving targets in sequence to sharpen quick, accurate jumps across the screen. Speed, endurance, and integration modes.",
    icon: Zap,
    accent: "var(--color-accent)",
  },
  {
    key: "stability",
    name: "Stability",
    tagline: "Hold a steady line",
    description:
      "Track a gliding target and stay locked on, ignoring distractions. Build smooth, sustained control at rising tempos.",
    icon: Activity,
    accent: "var(--color-blue-light)",
  },
];

export type Step = {
  num: string;
  title: string;
  body: string;
};

export const STEPS: Step[] = [
  {
    num: "01",
    title: "Pick your workout",
    body: "Open the app to a recommended session, or choose from the four categories. Each one meets you at your current level.",
  },
  {
    num: "02",
    title: "Follow the guided set",
    body: "Clear, on-screen guidance walks you through every rep and set — short, focused sessions you can finish in minutes.",
  },
  {
    num: "03",
    title: "Level up & keep the streak",
    body: "Complete sessions to unlock harder levels, earn milestones, and watch your daily streak and weekly progress climb.",
  },
];

export type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

export const STATS: Stat[] = [
  { value: 4, label: "Training categories" },
  { value: 30, suffix: "+", label: "Progressive levels" },
  { value: 5, suffix: " min", label: "Typical session" },
  { value: 100, suffix: "%", label: "Local & private" },
];

export type Faq = {
  q: string;
  a: string;
};

export const FAQS: Faq[] = [
  {
    q: "What is EyeHIIT?",
    a: "EyeHIIT is an eye gym in your pocket. It guides you through short, structured workouts that exercise focus, coordination, agility, and stability — the same way a fitness app guides you through a strength or cardio session.",
  },
  {
    q: "How long does a session take?",
    a: "Most sessions take just a few minutes. Pick a quick set when you have a moment, or stack a few to make a full workout. Build a daily habit and keep your streak alive.",
  },
  {
    q: "Do I need any equipment?",
    a: "None at all. Everything you need is your phone and a little space to hold it at arm's length. The app guides distance, timing, and reps for you.",
  },
  {
    q: "Is it on iPhone and Android?",
    a: "Yes — EyeHIIT is built for both iOS and Android. Download it from the App Store or Google Play and pick up where you left off.",
  },
  {
    q: "Does my data stay private?",
    a: "Your training history lives on your device. EyeHIIT is designed to be local-first, so your progress, streaks, and stats stay with you.",
  },
  {
    q: "How much does it cost?",
    a: "EyeHIIT is free to download and start exercising. Get the app and begin your first session today.",
  },
];
