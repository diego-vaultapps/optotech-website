import type { Metadata } from "next";
import { VisitLanding, type VisitCopy } from "@/components/visit/VisitLanding";

export const metadata: Metadata = {
  title: "An invitation",
  description:
    "Download EyeHIIT, run a few workouts, and tell us where it falls short.",
  robots: { index: false, follow: false },
};

/**
 * For a link a colleague sends directly, rather than a code on a waiting-room
 * wall. The reader is not killing time — they were asked for their judgement,
 * so the ask is for a critical read, not a reaction.
 */
const COPY: VisitCopy = {
  eyebrow: "Early access · By invitation",
  title: "We want your read on this",
  intro: (
    <>
      <strong className="font-semibold text-text">EyeHIIT</strong>{" "}
      is the eye gym you can keep in your pocket — guided workouts across Focus, Coordination,
      Agility and Stability. There&rsquo;s no account to set up. Ten minutes
      with it and you&rsquo;ll have a sharper opinion of it than almost anyone
      who has tried it so far.
    </>
  ),
  steps: [
    {
      title: "Download the app",
      body: "There's nothing to sign up for. No account, no email.",
    },
    {
      title: "Run more than one category",
      body: "Each takes about three minutes, so you can cover the range in a sitting. The differences between them are where most of the design decisions live.",
    },
    {
      title: "Tell us where it falls short",
      body: "You'll notice things our other testers won't. Specific beats polite — it goes straight to the people building it, and it's what decides what we change next.",
    },
  ],
  categoriesLabel: "The four categories",
  ctaTitle: "What would you change?",
  ctaBody: (
    <>
      Six questions, none of them required, and we don&rsquo;t ask for your name.
      &ldquo;This part is wrong&rdquo; is worth more to us than &ldquo;nice
      app&rdquo; — leave your email if you&rsquo;d like us to come back to you.
    </>
  ),
};

export default function InvitePage() {
  return <VisitLanding copy={COPY} />;
}
