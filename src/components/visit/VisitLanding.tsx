import { Suspense, type ReactNode } from "react";
import { Clock } from "lucide-react";
import { Container } from "../ui";
import { Reveal } from "../Reveal";
import { VisitShell } from "./VisitShell";
import { PlatformStoreButtons } from "./PlatformStoreButtons";
import { FeedbackCta } from "./FeedbackCta";
import { FeedbackCtaButton } from "./FeedbackCtaButton";
import { FEATURES } from "@/lib/content";

/**
 * Everything the invitation pages say. Each page owns its own copy and nothing
 * else, so a new audience is a copy object rather than another slab of JSX to
 * keep in sync.
 *
 * COPY GUARDRAIL (FDA): performance / fitness framing only — see lib/content.ts.
 * This holds even for pages aimed at professionals.
 */
export type VisitCopy = {
  /** Short pill above the headline, e.g. "Early access · 5 minutes". */
  eyebrow: string;
  title: string;
  intro: ReactNode;
  steps: { title: string; body: string }[];
  /** Label over the four category cards. */
  categoriesLabel: string;
  ctaTitle: string;
  ctaBody: ReactNode;
};

/**
 * The shared shape of an invitation page: download, what to do, what to pick,
 * and the ask. The download is the only thing above the fold that matters, and
 * the feedback ask comes last because it only makes sense after a run.
 */
export function VisitLanding({ copy }: { copy: VisitCopy }) {
  return (
    <VisitShell>
      <section className="pt-14 pb-16 sm:pt-20">
        <Container className="max-w-xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">
              <Clock className="h-3.5 w-3.5" />
              {copy.eyebrow}
            </span>

            <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-text sm:text-5xl">
              {copy.title}
            </h1>

            <p className="mt-5 text-pretty text-[17px] leading-relaxed text-muted">
              {copy.intro}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <PlatformStoreButtons className="mt-8" />
            <p className="mt-4 text-center text-[13px] text-faint">
              No account · Nothing to sign up for
            </p>
          </Reveal>

          <Reveal delay={0.14} className="mt-6 text-center">
            <Suspense fallback={<FeedbackCtaButton href="/feedback" variant="quiet" />}>
              <FeedbackCta variant="quiet" />
            </Suspense>
          </Reveal>
        </Container>
      </section>

      {/* Three steps — sets the expectation that feedback is part of the deal. */}
      <section className="pb-16">
        <Container className="max-w-xl">
          <Reveal>
            <ol className="relative flex flex-col gap-7 border-l border-white/10 pl-7">
              {copy.steps.map((step, i) => (
                <li key={step.title} className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-[2.3rem] flex h-7 w-7 items-center justify-center rounded-full border border-accent/30 bg-bg text-[12px] font-bold text-accent"
                  >
                    {i + 1}
                  </span>
                  <h2 className="text-[16px] font-semibold tracking-tight text-text">
                    {step.title}
                  </h2>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-muted">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      {/* What to pick — more useful than a screenshot when they're about to start. */}
      <section className="pb-16">
        <Container className="max-w-xl">
          <Reveal>
            <h2 className="text-[12px] font-semibold uppercase tracking-[0.15em] text-faint">
              {copy.categoriesLabel}
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {FEATURES.map(({ key, name, tagline, icon: Icon, accent }) => (
                <div
                  key={key}
                  className="rounded-2xl border border-white/8 bg-surface/40 p-4"
                >
                  <Icon className="h-5 w-5" style={{ color: accent }} aria-hidden />
                  <p className="mt-2.5 text-[15px] font-semibold tracking-tight text-text">
                    {name}
                  </p>
                  <p className="mt-0.5 text-[12.5px] leading-snug text-faint">
                    {tagline}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* The ask. Prominent, and last — they need to have tried it first. */}
      <section className="pb-24">
        <Container className="max-w-xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-accent/20 bg-gradient-to-br from-[#3a4733] via-surface to-bg px-6 py-10 text-center sm:px-10">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  background:
                    "radial-gradient(60% 80% at 50% 0%, rgba(212,230,153,0.18), transparent 70%)",
                }}
              />
              <div className="relative">
                <h2 className="text-balance text-2xl font-bold tracking-tight text-text sm:text-[1.75rem]">
                  {copy.ctaTitle}
                </h2>
                <p className="mx-auto mt-3 max-w-sm text-pretty text-[15px] leading-relaxed text-muted">
                  {copy.ctaBody}
                </p>
                <Suspense fallback={<FeedbackCtaButton href="/feedback" className="mt-7" />}>
                  <FeedbackCta className="mt-7" />
                </Suspense>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </VisitShell>
  );
}
