import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Presentational only, and intentionally hook-free: the /try page renders this
 * directly as the Suspense fallback while the source-tag-aware version
 * (FeedbackCta) hydrates, so the button is in the HTML either way.
 */
export function FeedbackCtaButton({
  href,
  className,
  variant = "solid",
}: {
  href: string;
  className?: string;
  variant?: "solid" | "quiet";
}) {
  if (variant === "quiet") {
    return (
      <Link
        href={href}
        className={cn(
          "group inline-flex items-center gap-1.5 text-[14px] font-medium text-muted",
          "transition-colors hover:text-accent",
          className,
        )}
      >
        Already tried it? Share your feedback
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "pressable group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5",
        "text-[15px] font-semibold text-black transition-colors hover:bg-accent-strong",
        className,
      )}
    >
      Share your feedback
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}
