import { Crosshair, Link2, Zap, Activity, Lock } from "lucide-react";
import { StatusBar } from "../PhoneFrame";
import { BottomNav } from "./BottomNav";
import type { LucideIcon } from "lucide-react";

type Cat = {
  name: string;
  icon: LucideIcon;
  items: { name: string; level: number; locked?: boolean }[];
};

const CATS: Cat[] = [
  {
    name: "Focus",
    icon: Crosshair,
    items: [
      { name: "Strength", level: 2 },
      { name: "Speed", level: 1 },
    ],
  },
  {
    name: "Coordination",
    icon: Link2,
    items: [{ name: "Strength", level: 3 }],
  },
  {
    name: "Agility",
    icon: Zap,
    items: [
      { name: "Speed", level: 2 },
      { name: "Endurance", level: 1 },
      { name: "Integration", level: 1, locked: true },
    ],
  },
  {
    name: "Stability",
    icon: Activity,
    items: [
      { name: "Endurance", level: 1 },
      { name: "Speed", level: 1, locked: true },
    ],
  },
];

export function ExercisesScreen() {
  return (
    <div className="flex h-full flex-col bg-bg">
      <StatusBar />
      <div className="flex-1 overflow-hidden px-4 pb-20">
        <h3 className="mb-3 mt-1 text-lg font-bold text-text">Your workouts</h3>
        <div className="space-y-3.5">
          {CATS.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.name}>
                <div className="mb-1.5 flex items-center gap-1.5">
                  <Icon className="h-3.5 w-3.5 text-accent" />
                  <span className="text-[11px] font-semibold text-text">{cat.name}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {cat.items.map((it) => (
                    <div
                      key={it.name}
                      className="relative rounded-xl bg-surface p-2.5"
                    >
                      <p className="text-[11px] font-semibold text-text">{it.name}</p>
                      {it.locked ? (
                        <span className="mt-1 flex items-center gap-1 text-[8px] text-faint">
                          <Lock className="h-2.5 w-2.5" /> Locked
                        </span>
                      ) : (
                        <span className="mt-1 inline-block rounded-full bg-accent/15 px-1.5 py-0.5 text-[8px] font-semibold text-accent">
                          Level {it.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <BottomNav active={1} />
    </div>
  );
}
