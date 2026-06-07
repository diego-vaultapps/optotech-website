"use client";

import { useEffect, useState } from "react";
import { Wordmark } from "../Wordmark";
import { Button } from "../ui";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it works" },
  { href: "#showcase", label: "The app" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3">
      <nav
        className={cn(
          "flex w-full max-w-5xl items-center justify-between rounded-full px-3 py-2 transition-all duration-300",
          scrolled
            ? "border border-white/10 bg-bg-2/80 shadow-lg backdrop-blur-md"
            : "border border-transparent bg-transparent",
        )}
        style={{ transitionTimingFunction: "cubic-bezier(0.23,1,0.32,1)" }}
      >
        <a href="#top" className="pl-2">
          <Wordmark className="text-base" />
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-sm text-muted transition-colors hover:bg-white/5 hover:text-text"
            >
              {l.label}
            </a>
          ))}
        </div>
        <Button href="#download" className="px-4 py-2 text-[13px]">
          Get the app
        </Button>
      </nav>
    </header>
  );
}
