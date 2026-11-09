import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { Container } from "@/components/ui";
import { VisitShell } from "@/components/visit/VisitShell";
import { FeedbackForm } from "@/components/visit/FeedbackForm";

export const metadata: Metadata = {
  title: "Share your feedback",
  description:
    "Tell the team building EyeHIIT what worked and what didn't. Six questions, nothing required, no name asked for.",
  robots: { index: false, follow: false },
};

/** Matches the form's rhythm so the page doesn't jump when it hydrates. */
function FormSkeleton() {
  return (
    <div aria-hidden className="flex flex-col gap-9">
      {[0, 1, 2, 3].map((i) => (
        <div key={i}>
          <div className="h-5 w-2/3 rounded-md bg-white/5" />
          <div className="mt-3 h-12 rounded-xl bg-white/5" />
        </div>
      ))}
    </div>
  );
}

export default function FeedbackPage() {
  return (
    <VisitShell>
      <section className="pt-14 pb-24 sm:pt-20">
        <Container className="max-w-xl">
          <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-text sm:text-[2.75rem]">
            How was it?
          </h1>
          <p className="mt-5 text-pretty text-[17px] leading-relaxed text-muted">
            You tried EyeHIIT — now tell us the truth about it. What was
            confusing is worth more to us than what was fine. Skip anything you
            don&rsquo;t feel like answering.
          </p>

          <div className="mt-10">
            <Suspense fallback={<FormSkeleton />}>
              <FeedbackForm />
            </Suspense>
          </div>

          <p className="mt-10 border-t border-white/8 pt-6 text-[13px] leading-relaxed text-faint">
            We don&rsquo;t ask for your name, and email is optional — only fill
            it in if you want a reply. See our{" "}
            <Link
              href="/privacy-policy"
              className="text-muted underline underline-offset-2 transition-colors hover:text-accent"
            >
              privacy policy
            </Link>
            .
          </p>
        </Container>
      </section>
    </VisitShell>
  );
}
