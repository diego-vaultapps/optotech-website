import { Home, Dumbbell, BarChart3, User } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { icon: Home, label: "Home" },
  { icon: Dumbbell, label: "Train" },
  { icon: BarChart3, label: "Progress" },
  { icon: User, label: "Profile" },
];

export function BottomNav({ active = 0 }: { active?: number }) {
  return (
    <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-around border-t border-white/8 bg-[#262626]/95 px-2 pb-5 pt-2.5 backdrop-blur">
      {items.map((item, i) => {
        const Icon = item.icon;
        const on = i === active;
        return (
          <div key={item.label} className="flex flex-col items-center gap-1">
            <Icon
              className={cn("h-[18px] w-[18px]", on ? "text-accent" : "text-faint")}
              strokeWidth={on ? 2.4 : 2}
            />
            <span className={cn("text-[8px] font-medium", on ? "text-accent" : "text-faint")}>
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
