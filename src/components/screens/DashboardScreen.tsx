import { Flame, ChevronRight, Crosshair, Check } from "lucide-react";
import { StatusBar } from "../PhoneFrame";
import { BottomNav } from "./BottomNav";

function Ring({ value }: { value: number }) {
  const r = 22;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 56 56" className="h-14 w-14 -rotate-90">
      <circle cx="28" cy="28" r={r} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="5" />
      <circle
        cx="28"
        cy="28"
        r={r}
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={c * (1 - value)}
      />
    </svg>
  );
}

export function DashboardScreen() {
  return (
    <div className="flex h-full flex-col bg-bg">
      <StatusBar />
      <div className="flex-1 overflow-hidden px-4 pb-20">
        <div className="mb-4 mt-1">
          <p className="text-[11px] text-muted">Good morning</p>
          <h3 className="text-lg font-bold text-text">Ready to train?</h3>
        </div>

        {/* streak + weekly ring */}
        <div className="mb-3 grid grid-cols-2 gap-2.5">
          <div className="rounded-2xl bg-card p-3">
            <div className="mb-1 flex items-center gap-1.5">
              <Flame className="h-3.5 w-3.5 text-accent" />
              <span className="text-[9px] uppercase tracking-wide text-muted">Streak</span>
            </div>
            <p className="text-xl font-extrabold text-text">
              12<span className="ml-1 text-[10px] font-medium text-muted">days</span>
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-2xl bg-card p-3">
            <Ring value={0.71} />
            <div>
              <p className="text-[9px] uppercase tracking-wide text-muted">This week</p>
              <p className="text-sm font-bold text-text">5 / 7</p>
            </div>
          </div>
        </div>

        {/* recommended workout */}
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-faint">
          Recommended
        </p>
        <div className="mb-4 overflow-hidden rounded-2xl bg-gradient-to-br from-[#3a4a3f] to-card p-3.5">
          <div className="mb-3 flex items-center justify-between">
            <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[8px] font-semibold uppercase tracking-wide text-accent">
              Focus · Level 2
            </span>
            <span className="text-[9px] text-muted">~5 min</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15">
              <Crosshair className="h-5 w-5 text-accent" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-text">Focus · Strength</p>
              <p className="text-[10px] text-muted">3 sets · both eyes</p>
            </div>
          </div>
          <button className="mt-3 w-full rounded-xl bg-accent py-2 text-[11px] font-bold text-black">
            Start workout
          </button>
        </div>

        {/* today's workout */}
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-faint">
          Today
        </p>
        <div className="space-y-2">
          {[
            { name: "Agility · Speed", done: true },
            { name: "Stability · Endurance", done: false },
          ].map((row) => (
            <div
              key={row.name}
              className="flex items-center justify-between rounded-xl bg-surface px-3 py-2.5"
            >
              <span className="text-[11px] font-medium text-text">{row.name}</span>
              {row.done ? (
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-green">
                  <Check className="h-2.5 w-2.5 text-black" strokeWidth={3} />
                </span>
              ) : (
                <ChevronRight className="h-4 w-4 text-faint" />
              )}
            </div>
          ))}
        </div>
      </div>
      <BottomNav active={0} />
    </div>
  );
}
