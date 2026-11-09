/**
 * The EyeHIIT feedback question set.
 *
 * Kept as data, not markup, because this same set is going into the app:
 * the in-app feedback screen should render these ids and labels so web and
 * app responses land in one shapeable pile. Change a question here and the
 * app follows — never reword one in a component.
 *
 * COPY GUARDRAIL (FDA): performance / fitness framing only — see src/lib/content.ts.
 * No therapy, treatment, symptom, condition, patient or medical language.
 */

export type ScaleQuestion = {
  id: string;
  kind: "scale";
  prompt: string;
  options: { value: string; label: string }[];
};

export type ChipsQuestion = {
  id: string;
  kind: "chips";
  prompt: string;
  hint?: string;
  options: { value: string; label: string }[];
};

export type ChoiceQuestion = {
  id: string;
  kind: "choice";
  prompt: string;
  options: { value: string; label: string }[];
};

export type TextQuestion = {
  id: string;
  kind: "text";
  prompt: string;
  hint?: string;
  placeholder: string;
  /** Rendered as a single line rather than a textarea. */
  short?: boolean;
};

export type FeedbackQuestion =
  | ScaleQuestion
  | ChipsQuestion
  | ChoiceQuestion
  | TextQuestion;

/** The only answer we insist on — everything else is skippable by design. */
export const REQUIRED_QUESTION_ID = "overall";

export const FEEDBACK_QUESTIONS: FeedbackQuestion[] = [
  {
    id: "overall",
    kind: "scale",
    prompt: "How did that feel?",
    options: [
      { value: "1", label: "Not for me" },
      { value: "2", label: "Okay" },
      { value: "3", label: "Good" },
      { value: "4", label: "Great" },
      { value: "5", label: "Loved it" },
    ],
  },
  {
    id: "tried",
    kind: "chips",
    prompt: "What did you try?",
    hint: "Pick as many as you like.",
    options: [
      { value: "focus", label: "Focus" },
      { value: "coordination", label: "Coordination" },
      { value: "agility", label: "Agility" },
      { value: "stability", label: "Stability" },
      { value: "looked", label: "Just had a look around" },
    ],
  },
  {
    id: "again",
    kind: "choice",
    prompt: "Would you open it again this week?",
    options: [
      { value: "yes", label: "Yes" },
      { value: "maybe", label: "Maybe" },
      { value: "no", label: "No" },
    ],
  },
  {
    id: "friction",
    kind: "text",
    prompt: "Anything confusing or awkward?",
    hint: "The specific moment helps us more than a general note.",
    placeholder:
      "I couldn't tell when the set had finished, so I kept going…",
  },
  {
    id: "wish",
    kind: "text",
    prompt: "What would make you open it every day?",
    placeholder: "A reminder in the morning, shorter workouts, …",
  },
  {
    id: "email",
    kind: "text",
    short: true,
    prompt: "Email",
    hint: "Optional, and only if you'd like a reply. We don't ask for your name.",
    placeholder: "you@example.com",
  },
];

/**
 * Where the form posts. A public, unchanging API URL — it is the same in every
 * environment, so making it configuration only gave it a way to go missing.
 */
export const FEEDBACK_ENDPOINT = "https://api.web3forms.com/submit";

/**
 * The one genuinely per-account value, and the switch that arms the form: unset
 * → submissions fall back to a prefilled email draft rather than being lost.
 *
 * Must be NEXT_PUBLIC_*. The form is a client component on a statically
 * prerendered page, so this is inlined at build time — setting it in Amplify
 * does nothing until the site is rebuilt.
 */
export const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

export const FEEDBACK_EMAIL = "info@optotechventures.com";

/**
 * Turn raw answers into something a person can read in an email.
 *
 * The submission arrives as an email body, so the keys are the questions as
 * asked and the values are the labels as shown — never `overall: "4"`.
 */
export function toReadableAnswers(
  answers: Record<string, string | string[]>,
): Record<string, string> {
  const out: Record<string, string> = {};

  for (const q of FEEDBACK_QUESTIONS) {
    const raw = answers[q.id];
    if (!raw || (Array.isArray(raw) && raw.length === 0)) continue;

    if (q.kind === "text") {
      out[q.prompt] = raw as string;
      continue;
    }

    const labelOf = (v: string) =>
      q.options.find((o) => o.value === v)?.label ?? v;

    out[q.prompt] = Array.isArray(raw)
      ? raw.map(labelOf).join(", ")
      : labelOf(raw as string);
  }

  return out;
}
