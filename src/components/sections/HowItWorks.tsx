import { Container, SectionHeading } from "../ui";
import { Reveal } from "../Reveal";
import { PhoneFrame } from "../PhoneFrame";
import { WorkoutScreen } from "../screens/WorkoutScreen";
import { STEPS } from "@/lib/content";

export function HowItWorks() {
  return (
    <section
      id="how"
      className="scroll-mt-24 border-y border-white/8 bg-bg-2/50 py-20 sm:py-28"
    >
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="flex justify-center lg:justify-start">
          <PhoneFrame>
            <WorkoutScreen />
          </PhoneFrame>
        </Reveal>

        <div>
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="How it works"
              title="Open. Train. Level up."
              subtitle="No setup, no equipment. Just pick a session and follow along — the app guides every rep."
            />
          </Reveal>

          <div className="mt-10 space-y-2">
            {STEPS.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.08}>
                <div className="flex gap-5 rounded-2xl p-4 transition-colors hover:bg-white/[0.03]">
                  <span className="text-2xl font-extrabold tabular-nums text-accent/50">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text">{step.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-muted">
                      {step.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
