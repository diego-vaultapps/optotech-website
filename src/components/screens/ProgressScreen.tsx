import { Flame, Trophy, Target, Zap } from "lucide-react";
import { StatusBar } from "../PhoneFrame";
import { BottomNav } from "./BottomNav";

const WEEK = [0.4, 0.7, 0.55, 0.9, 0.65, 1, 0.3];
const DAYS = ["M", "T", "W", "T", "F", "S", "S"];

function diamond(k: number) {
  const r = 40 * k;
  return `50,${50 - r} ${50 + r},50 50,${50 + r} ${50 - r},50`;
}

export function ProgressScreen() {
  // Focus(top), Agility(right), Coordination(bottom), Stability(left)
  const vals = { focus: 0.82, agility: 0.6, coord: 0.5, stability: 0.72 };
  const poly = [
    `50,${50 - 40 * vals.focus}`,
    `${50 + 40 * vals.agility},50`,
    `50,${50 + 40 * vals.coord}`,
    `${50 - 40 * vals.stability},50`,
  ].join(" ");

  return (
    <div className="flex h-full flex-col bg-bg">
      <StatusBar />
      <div className="flex-1 overflow-hidden px-4 pb-20">
        <h3 className="mb-3 mt-1 text-lg font-bold text-text">Progress</h3>

        {/* streak hero */}
        <div className="mb-3 flex items-center justify-between rounded-2xl bg-gradient-to-br from-[#3a4a3f] to-card p-3.5">
          <div>
            <p className="text-[9px] uppercase tracking-wide text-muted">Day streak</p>
            <p className="text-2xl font-extrabold text-text">12</p>
          </div>
          <Flame className="h-9 w-9 text-accent" />
        </div>

        {/* weekly bars */}
        <div className="mb-3 rounded-2xl bg-card p-3">
          <p className="mb-2 text-[9px] uppercase tracking-wide text-muted">This week</p>
          <div className="flex h-16 items-end justify-between gap-1.5">
            {WEEK.map((v, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-1">
                <div className="flex h-12 w-full items-end">
                  <div
                    className="w-full rounded-sm bg-accent"
                    style={{ height: `${v * 100}%`, opacity: 0.5 + v * 0.5 }}
                  />
                </div>
                <span className="text-[7px] text-faint">{DAYS[i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* radar */}
        <div className="mb-3 rounded-2xl bg-card p-3">
          <p className="mb-1 text-[9px] uppercase tracking-wide text-muted">Skill balance</p>
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 100 100" className="h-24 w-24">
              {[0.33, 0.66, 1].map((k) => (
                <polygon
                  key={k}
                  points={diamond(k)}
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="0.6"
                />
              ))}
              <line x1="50" y1="10" x2="50" y2="90" stroke="rgba(255,255,255,0.08)" strokeWidth="0.6" />
              <line x1="10" y1="50" x2="90" y2="50" stroke="rgba(255,255,255,0.08)" strokeWidth="0.6" />
              <polygon
                points={poly}
                fill="rgba(212,230,153,0.25)"
                stroke="var(--color-accent)"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
            </svg>
            <div className="grid grid-cols-2 gap-x-2.5 gap-y-1 text-[9px] leading-tight">
              {[
                ["Focus", "82%"],
                ["Agility", "60%"],
                ["Coord.", "50%"],
                ["Stability", "72%"],
              ].map(([k, v]) => (
                <div key={k}>
                  <p className="text-text">{v}</p>
                  <p className="whitespace-nowrap text-faint">{k}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* milestones */}
        <p className="mb-2 text-[9px] uppercase tracking-wide text-faint">Milestones</p>
        <div className="grid grid-cols-3 gap-2">
          {[
            { icon: Trophy, label: "7-day" },
            { icon: Target, label: "100 reps" },
            { icon: Zap, label: "Speedster" },
          ].map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.label}
                className="flex flex-col items-center gap-1 rounded-xl bg-surface py-2.5"
              >
                <Icon className="h-4 w-4 text-accent" />
                <span className="text-[8px] text-muted">{m.label}</span>
              </div>
            );
          })}
        </div>
      </div>
      <BottomNav active={2} />
    </div>
  );
}
