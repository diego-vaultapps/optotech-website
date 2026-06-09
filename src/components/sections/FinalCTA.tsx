import { Container } from "../ui";
import { Reveal } from "../Reveal";
import { StoreBadges } from "../StoreBadges";
import { Logo } from "../Wordmark";

export function FinalCTA() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-accent/20 bg-gradient-to-br from-[#3a4733] via-surface to-bg px-6 py-16 text-center sm:px-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-0 opacity-60"
              style={{
                background:
                  "radial-gradient(60% 80% at 50% 0%, rgba(212,230,153,0.18), transparent 70%)",
              }}
            />
            <div className="relative">
              <Logo className="mx-auto mb-6 h-20" />
              <h2 className="mx-auto max-w-xl text-balance text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
                Your first workout is waiting
              </h2>
              <p className="mx-auto mt-4 max-w-md text-pretty text-base text-muted">
                Download EyeHIIT and start exercising today. A few focused minutes is
                all it takes to begin.
              </p>
              <StoreBadges className="mt-8 justify-center" />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
