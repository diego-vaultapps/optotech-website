import type { Metadata } from "next";
import { VisitLanding, type VisitCopy } from "@/components/visit/VisitLanding";

export const metadata: Metadata = {
  title: "Try EyeHIIT",
  description:
    "Five minutes and a phone is all it takes. Download EyeHIIT, run one short workout, and tell us what you thought.",
  // A QR destination, not a page we want ranking or surfacing in search.
  robots: { index: false, follow: false },
};

/** For the QR code in a waiting room — someone with a few idle minutes. */
const COPY: VisitCopy = {
  eyebrow: "Early access · 5 minutes",
  title: "Got five minutes while you wait?",
  intro: (
    <>
      You&rsquo;re among the first to try{" "}
      <strong className="font-semibold text-text">EyeHIIT</strong> — the eye gym
      you can keep in your pocket. Download it, run one short workout, then tell
      us how it went.
    </>
  ),
  steps: [
    {
      title: "Download the app",
      body: "There's nothing to sign up for. No account, no email.",
    },
    {
      title: "Run one workout",
      body: "Pick any category below and follow the on-screen guide. Most take about three minutes.",
    },
    {
      title: "Tell us what you thought",
      body: "What felt good, what was confusing. It goes straight to the people building it — and it's what decides what we fix next.",
    },
  ],
  categoriesLabel: "Pick any one to start",
  ctaTitle: "Done? We want the honest version",
  ctaBody: (
    <>
      Six questions, none of them required, and we don&rsquo;t ask for your name.
      Telling us it was confusing is more useful than telling us it was fine.
    </>
  ),
};

export default function TryPage() {
  return <VisitLanding copy={COPY} />;
}
