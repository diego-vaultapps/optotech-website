import { Flame, Trophy, Radar, CalendarCheck } from "lucide-react";
import { Container, SectionHeading } from "../ui";
import { Reveal } from "../Reveal";
import { PhoneFrame } from "../PhoneFrame";
import { ProgressScreen } from "../screens/ProgressScreen";

const POINTS = [
  {
    icon: Flame,
    title: "Streaks that stick",
    body: "Exercise a little every day and watch your streak grow. Small wins, stacked up.",
  },
  {
    icon: Radar,
    title: "See your balance",
    body: "A skill view shows how your four categories stack up, so you know what to exercise next.",
  },
  {
    icon: Trophy,
    title: "Earn milestones",
    body: "Unlock badges as you hit new levels and rep counts. Progress you can feel.",
  },
  {
    icon: CalendarCheck,
    title: "Weekly goals",
    body: "Set how often you want to exercise and let the app keep you honest, week after week.",
  },
];

export function ProgressHighlight() {
  return (
    <section className="border-y border-white/8 bg-bg-2/50 py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Stay motivated"
              title="Progress you can actually see"
              subtitle="Every session counts toward something. EyeHIIT turns your training into streaks, levels, and milestones that keep you coming back."
            />
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {POINTS.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={(i % 2) * 0.08}>
                  <div className="flex gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/12">
                      <Icon className="h-5 w-5 text-accent" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-text">{p.title}</h3>
                      <p className="mt-1 text-[14px] leading-relaxed text-muted">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={0.1} className="flex justify-center lg:justify-end">
          <PhoneFrame>
            <ProgressScreen />
          </PhoneFrame>
        </Reveal>
      </Container>
    </section>
  );
}
