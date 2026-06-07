"use client";

import { motion, useReducedMotion } from "motion/react";
import { X } from "lucide-react";
import { StatusBar } from "../PhoneFrame";

export function WorkoutScreen() {
  const reduce = useReducedMotion();
  return (
    <div className="flex h-full flex-col bg-bg">
      <StatusBar />
      {/* header: rep / set / eye */}
      <div className="flex items-center justify-between px-4 py-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-surface">
          <X className="h-3.5 w-3.5 text-faint" />
        </span>
        <div className="flex gap-5 text-center">
          <div>
            <p className="text-[8px] uppercase tracking-wide text-faint">Rep</p>
            <p className="text-sm font-bold text-text">7/12</p>
          </div>
          <div>
            <p className="text-[8px] uppercase tracking-wide text-faint">Set</p>
            <p className="text-sm font-bold text-text">2/3</p>
          </div>
          <div>
            <p className="text-[8px] uppercase tracking-wide text-faint">Eye</p>
            <p className="text-sm font-bold text-accent">Left</p>
          </div>
        </div>
        <span className="w-7" />
      </div>

      {/* play area */}
      <div className="relative mx-4 flex-1 overflow-hidden rounded-3xl bg-[#202020]">
        {/* guide line */}
        <div className="absolute left-1/2 top-1/2 h-px w-3/4 -translate-x-1/2 -translate-y-1/2 bg-white/8" />
        {/* tracking dot */}
        <motion.div
          className="absolute top-1/2 h-9 w-9 -translate-y-1/2 rounded-full"
          style={{
            left: "18%",
            background:
              "radial-gradient(circle at 35% 30%, #e8f6b8, var(--color-accent))",
            boxShadow: "0 0 24px 6px rgba(212,230,153,0.45)",
          }}
          animate={
            reduce
              ? undefined
              : { left: ["18%", "70%", "18%"] }
          }
          transition={{
            duration: 3.2,
            ease: [0.77, 0, 0.175, 1],
            repeat: Infinity,
          }}
        />
        <p className="absolute inset-x-0 bottom-4 text-center text-[10px] text-faint">
          Follow the dot — stay locked on
        </p>
      </div>

      {/* big CTA */}
      <div className="px-4 py-4">
        <button className="w-full rounded-2xl bg-accent py-3.5 text-center">
          <span className="block text-[13px] font-extrabold text-black">
            Tap when rep complete
          </span>
          <span className="block text-[9px] font-medium text-black/60">Rep 7 of 12</span>
        </button>
      </div>
    </div>
  );
}
