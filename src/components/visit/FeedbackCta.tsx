"use client";

import { useSearchParams } from "next/navigation";
import { FeedbackCtaButton } from "./FeedbackCtaButton";

/**
 * Carries the ?c= source tag from the QR code through to the feedback form, so
 * a response can be traced back to the place the code was scanned without
 * needing a separate page per location.
 */
export function FeedbackCta({
  className,
  variant = "solid",
}: {
  className?: string;
  variant?: "solid" | "quiet";
}) {
  const source = useSearchParams().get("c");
  const href = source
    ? `/feedback?c=${encodeURIComponent(source)}`
    : "/feedback";

  return <FeedbackCtaButton href={href} className={className} variant={variant} />;
}
