"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { Container, SectionHeading } from "../ui";
import { Reveal } from "../Reveal";
import { FAQS } from "@/lib/content";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 py-20 sm:py-28">
      <Container className="max-w-3xl">
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Good to know" />
        </Reveal>

        <div className="mt-12 divide-y divide-white/8 border-y border-white/8">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q}>
                <div>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[15px] font-semibold text-text sm:text-base">
                      {item.q}
                    </span>
                    <span
                      className={cn(
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/5 transition-transform duration-300",
                        isOpen && "rotate-45",
                      )}
                      style={{ transitionTimingFunction: "cubic-bezier(0.23,1,0.32,1)" }}
                    >
                      <Plus className="h-4 w-4 text-accent" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 pr-10 text-[15px] leading-relaxed text-muted">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
