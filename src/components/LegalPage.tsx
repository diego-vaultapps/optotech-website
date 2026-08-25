import type { ReactNode } from "react";
import { Container, Eyebrow } from "./ui";
import { Navbar } from "./sections/Navbar";
import { Footer } from "./sections/Footer";

export function LegalPage({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 sm:pt-40">
        <Container className="max-w-3xl">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-text sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-[13px] text-faint">Last updated {updated}</p>
          {intro && (
            <div className="mt-8 rounded-2xl border border-white/8 bg-surface/50 p-5 text-[15px] leading-relaxed text-muted">
              {intro}
            </div>
          )}
          <div className="legal-prose mt-10">{children}</div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
