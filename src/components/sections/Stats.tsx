import { Container } from "../ui";
import { AnimatedNumber } from "../AnimatedNumber";
import { Reveal } from "../Reveal";
import { STATS } from "@/lib/content";

export function Stats() {
  return (
    <section className="border-y border-white/8 bg-bg-2/60 py-10">
      <Container>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="flex flex-col items-center text-center">
                <p className="text-3xl font-extrabold tracking-tight text-accent sm:text-4xl">
                  <AnimatedNumber value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-[13px] text-muted">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
