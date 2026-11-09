"use client";

import { useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/storeLinks";

type Platform = "ios" | "android" | null;

/**
 * Read-only subscription to a value that never changes after load, so the
 * platform is resolved without a setState-in-effect cascade. The server
 * snapshot is null, which is why both buttons render neutral in the HTML.
 */
const subscribe = () => () => {};
const getServerSnapshot = (): Platform => null;

function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return null;
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) return "android";
  if (/iPad|iPhone|iPod/.test(ua)) return "ios";
  // iPadOS 13+ reports a Mac UA; touch points give it away.
  if (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1) return "ios";
  return null;
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.05 12.04c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.09-2.01-3.76-2.04-1.6-.16-3.12.94-3.93.94-.81 0-2.06-.92-3.39-.89-1.74.03-3.35 1.01-4.25 2.57-1.81 3.14-.46 7.79 1.3 10.34.86 1.25 1.89 2.65 3.24 2.6 1.3-.05 1.79-.84 3.36-.84 1.57 0 2.01.84 3.39.81 1.4-.02 2.29-1.27 3.15-2.53.99-1.45 1.4-2.86 1.42-2.93-.03-.01-2.72-1.04-2.75-4.13zM14.6 4.4c.72-.87 1.2-2.08 1.07-3.29-1.03.04-2.28.69-3.02 1.56-.66.77-1.24 2-1.09 3.18 1.15.09 2.32-.58 3.04-1.45z" />
    </svg>
  );
}

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M3.6 2.3c-.25.26-.4.66-.4 1.18v17.04c0 .52.15.92.4 1.18l.06.05L13.2 12.1v-.2L3.66 2.25l-.06.05z" fill="#00d2ff" />
      <path d="M16.4 15.3 13.2 12.1v-.2l3.2-3.2.07.04 3.79 2.15c1.08.61 1.08 1.62 0 2.24l-3.79 2.15-.07.02z" fill="#ffce00" />
      <path d="M16.47 15.26 13.2 12 3.6 21.7c.36.38.94.42 1.6.05l11.27-6.49z" fill="#ff3a44" />
      <path d="M16.47 8.74 5.2 2.25c-.66-.38-1.24-.33-1.6.05L13.2 12l3.27-3.26z" fill="#00e676" />
    </svg>
  );
}

function StoreButton({
  href,
  icon,
  top,
  bottom,
  highlighted,
}: {
  href: string;
  icon: React.ReactNode;
  top: string;
  bottom: string;
  highlighted: boolean;
}) {
  return (
    <a
      href={href}
      className={cn(
        "pressable relative flex w-full items-center gap-3 rounded-2xl border bg-black px-5 py-4",
        "transition-colors",
        highlighted
          ? "border-accent/60 ring-1 ring-accent/40 hover:border-accent"
          : "border-white/15 hover:border-white/30",
      )}
    >
      <span className="shrink-0">{icon}</span>
      <span className="flex flex-col leading-none text-left">
        <span className="text-[11px] font-medium text-white/70">{top}</span>
        <span className="text-[18px] font-semibold tracking-tight text-white">
          {bottom}
        </span>
      </span>
      {highlighted && (
        <span className="ml-auto shrink-0 rounded-full bg-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-black">
          Your phone
        </span>
      )}
    </a>
  );
}

/**
 * Both stores, always rendered and always tappable — the detected platform is
 * only *highlighted*. Hiding or reordering a button after hydration would move
 * a tap target under a thumb already on its way down, so nothing shifts here;
 * the only post-mount change is colour.
 */
export function PlatformStoreButtons({ className }: { className?: string }) {
  const platform = useSyncExternalStore(
    subscribe,
    detectPlatform,
    getServerSnapshot,
  );

  return (
    <div className={cn("flex w-full flex-col gap-3", className)}>
      <StoreButton
        href={APP_STORE_URL}
        icon={<AppleIcon className="h-8 w-8 text-white" />}
        top="Download on the"
        bottom="App Store"
        highlighted={platform === "ios"}
      />
      <StoreButton
        href={PLAY_STORE_URL}
        icon={<GooglePlayIcon className="h-7 w-7" />}
        top="Get it on"
        bottom="Google Play"
        highlighted={platform === "android"}
      />
    </div>
  );
}
