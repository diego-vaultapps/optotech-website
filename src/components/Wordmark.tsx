import { cn } from "@/lib/utils";

export function EyeMark({ className }: { className?: string }) {
  return (
    <span
      className={cn("inline-block text-accent", className)}
      aria-hidden
      style={{
        WebkitMaskImage: "url(/eyemark.svg)",
        maskImage: "url(/eyemark.svg)",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        backgroundColor: "currentColor",
      }}
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
      <EyeMark className={cn("h-6 w-6", markClassName)} />
      <span className="text-text">
        Eye<span className="text-accent">HIIT</span>
      </span>
    </span>
  );
}
