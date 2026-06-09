import { Container, SectionHeading } from "../ui";
import { Reveal } from "../Reveal";
import { FeatureVisual } from "./FeatureVisual";
import { FEATURES } from "@/lib/content";

export function Features() {
  return (
    <section id="features" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Four ways to exercise"
            title="A complete workout for your eyes"
            subtitle="Every session draws from four categories — just like a gym splits strength, cardio, mobility, and balance."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.key} delay={(i % 2) * 0.08}>
                <div className="group h-full rounded-3xl border border-white/8 bg-surface/60 p-6 transition-colors hover:border-white/15 hover:bg-surface">
                  <div className="mb-5 flex items-center gap-3">
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-2xl"
                      style={{ background: "rgba(212,230,153,0.12)" }}
                    >
                      <Icon className="h-5 w-5 text-accent" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-text">{f.name}</h3>
                      <p className="text-[13px] text-accent">{f.tagline}</p>
                    </div>
                  </div>
                  <FeatureVisual kind={f.key} />
                  <p className="mt-5 text-[15px] leading-relaxed text-muted">
                    {f.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
