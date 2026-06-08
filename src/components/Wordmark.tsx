import Image from "next/image";
import { cn } from "@/lib/utils";

/** The real EyeHIIT app logomark (blue eye flanked by weights). */
export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/eyehitt-logo.png"
      alt="EyeHIIT"
      width={336}
      height={248}
      priority
      className={cn("w-auto", className)}
    />
  );
}

export function Wordmark({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <span className={cn("flex items-center gap-2 font-semibold tracking-tight", className)}>
      <Logo className={cn("h-7", markClassName)} />
      <span className="text-text">
        Eye<span className="text-accent">HIIT</span>
      </span>
    </span>
  );
}
