import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * A CSS device frame. Renders children as the on-screen content.
 * The aspect ratio matches a modern phone (roughly 9:19.5).
 */
export function PhoneFrame({
  children,
  className,
  glow = true,
}: {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}) {
  return (
    <div className={cn("relative w-[260px] sm:w-[284px]", className)}>
      {glow && (
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-10 -z-10 rounded-[3rem] opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(50% 45% at 50% 35%, rgba(212,230,153,0.18), transparent 70%)",
          }}
        />
      )}
      <div className="relative rounded-[2.6rem] border border-white/12 bg-[#0c0c0d] p-2.5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8),inset_0_0_0_1px_rgba(255,255,255,0.04)]">
        {/* side buttons */}
        <span className="absolute -left-[2px] top-28 h-9 w-[3px] rounded-l bg-white/10" />
        <span className="absolute -left-[2px] top-40 h-14 w-[3px] rounded-l bg-white/10" />
        <span className="absolute -right-[2px] top-36 h-20 w-[3px] rounded-r bg-white/10" />

        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.1rem] bg-bg">
          {/* notch / dynamic island */}
          <div className="absolute left-1/2 top-2 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
          {children}
        </div>
      </div>
    </div>
  );
}

/** Status bar shown at the top of every recreated screen. */
export function StatusBar({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={cn(
        "flex h-11 items-end justify-between px-6 pb-1 text-[11px] font-semibold",
        dark ? "text-black/70" : "text-text/80",
      )}
    >
      <span>9:41</span>
      <span className="flex items-center gap-1">
        <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor" aria-hidden>
          <rect x="0" y="6" width="3" height="5" rx="1" />
          <rect x="4.5" y="4" width="3" height="7" rx="1" />
          <rect x="9" y="2" width="3" height="9" rx="1" />
          <rect x="13.5" y="0" width="3" height="11" rx="1" />
        </svg>
        <svg width="22" height="11" viewBox="0 0 24 12" fill="none" aria-hidden>
          <rect x="0.5" y="0.5" width="20" height="11" rx="3" stroke="currentColor" opacity="0.5" />
          <rect x="2" y="2" width="16" height="8" rx="1.5" fill="currentColor" />
          <rect x="21.5" y="4" width="1.5" height="4" rx="0.75" fill="currentColor" opacity="0.7" />
        </svg>
      </span>
    </div>
  );
}
