"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { AlertCircle, Check, Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  FEEDBACK_EMAIL,
  FEEDBACK_ENDPOINT,
  FEEDBACK_QUESTIONS,
  REQUIRED_QUESTION_ID,
  WEB3FORMS_ACCESS_KEY,
  toReadableAnswers,
  type FeedbackQuestion,
} from "@/lib/feedback";

type Answers = Record<string, string | string[]>;
type Status = "idle" | "sending" | "sent" | "error";

function detectPlatform(): string {
  if (typeof navigator === "undefined") return "unknown";
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) return "android";
  if (/iPad|iPhone|iPod/.test(ua)) return "ios";
  if (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1) return "ios";
  return "other";
}

/** A readable email body, used when no endpoint is configured. */
function buildMailto(answers: Answers, source: string | null): string {
  const lines = Object.entries(toReadableAnswers(answers)).map(
    ([prompt, value]) => `${prompt}\n${value}`,
  );

  if (source) lines.push(`Scanned at: ${source}`);
  lines.push(`Device: ${detectPlatform()}`);

  return `mailto:${FEEDBACK_EMAIL}?subject=${encodeURIComponent(
    "EyeHIIT feedback",
  )}&body=${encodeURIComponent(lines.join("\n\n"))}`;
}

const OPTION_BASE =
  "pressable rounded-xl border px-4 py-3 text-[14px] font-medium transition-colors min-h-[48px]";
const OPTION_OFF =
  "border-white/10 bg-surface/40 text-muted hover:border-white/25 hover:text-text";
const OPTION_ON = "border-accent bg-accent text-black";

function Question({
  question,
  answers,
  onChange,
}: {
  question: FeedbackQuestion;
  answers: Answers;
  onChange: (id: string, value: string | string[]) => void;
}) {
  const answer = answers[question.id];
  const required = question.id === REQUIRED_QUESTION_ID;

  const heading = (
    <>
      <span className="text-[16px] font-semibold tracking-tight text-text">
        {question.prompt}
        {!required && question.kind !== "text" && (
          <span className="ml-2 text-[12px] font-normal text-faint">optional</span>
        )}
      </span>
      {"hint" in question && question.hint && (
        <span className="mt-1 block text-[13px] leading-snug text-faint">
          {question.hint}
        </span>
      )}
    </>
  );

  if (question.kind === "text") {
    return (
      <div>
        <label htmlFor={question.id} className="block">
          {heading}
        </label>
        {question.short ? (
          <input
            id={question.id}
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder={question.placeholder}
            value={(answer as string) ?? ""}
            onChange={(e) => onChange(question.id, e.target.value)}
            className="mt-3 w-full rounded-xl border border-white/10 bg-surface/40 px-4 py-3 text-[15px] text-text placeholder:text-faint focus:border-accent/60 focus:outline-none focus:ring-1 focus:ring-accent/40"
          />
        ) : (
          <textarea
            id={question.id}
            rows={3}
            placeholder={question.placeholder}
            value={(answer as string) ?? ""}
            onChange={(e) => onChange(question.id, e.target.value)}
            className="mt-3 w-full resize-y rounded-xl border border-white/10 bg-surface/40 px-4 py-3 text-[15px] leading-relaxed text-text placeholder:text-faint focus:border-accent/60 focus:outline-none focus:ring-1 focus:ring-accent/40"
          />
        )}
      </div>
    );
  }

  if (question.kind === "chips") {
    const selected = (answer as string[]) ?? [];
    return (
      <fieldset>
        <legend>{heading}</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {question.options.map((opt) => {
            const on = selected.includes(opt.value);
            return (
              <button
                key={opt.value}
                type="button"
                aria-pressed={on}
                onClick={() =>
                  onChange(
                    question.id,
                    on
                      ? selected.filter((v) => v !== opt.value)
                      : [...selected, opt.value],
                  )
                }
                className={cn(OPTION_BASE, on ? OPTION_ON : OPTION_OFF)}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </fieldset>
    );
  }

  // scale + choice: single-select
  const columns =
    question.kind === "scale"
      ? "grid-cols-1 sm:grid-cols-5"
      : "grid-cols-3";

  return (
    <fieldset>
      <legend>{heading}</legend>
      <div className={cn("mt-3 grid gap-2", columns)}>
        {question.options.map((opt) => {
          const on = answer === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              aria-pressed={on}
              onClick={() => onChange(question.id, opt.value)}
              className={cn(OPTION_BASE, "text-center", on ? OPTION_ON : OPTION_OFF)}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export function FeedbackForm() {
  const source = useSearchParams().get("c");
  const [answers, setAnswers] = useState<Answers>({});
  const [status, setStatus] = useState<Status>("idle");
  const [showRequired, setShowRequired] = useState(false);
  /** Honeypot: hidden from people, irresistible to bots. */
  const [botcheck, setBotcheck] = useState("");

  const onChange = (id: string, value: string | string[]) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    if (id === REQUIRED_QUESTION_ID) setShowRequired(false);
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!answers[REQUIRED_QUESTION_ID]) {
      setShowRequired(true);
      document
        .getElementById("feedback-first-question")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    // No access key configured: hand the answers to the mail client rather than
    // dropping them on the floor.
    if (!WEB3FORMS_ACCESS_KEY) {
      window.location.assign(buildMailto(answers, source));
      setStatus("sent");
      return;
    }

    // A bot filled the hidden field. Show success, send nothing.
    if (botcheck) {
      setStatus("sent");
      return;
    }

    const replyTo = (answers.email as string | undefined)?.trim();

    setStatus("sending");
    try {
      const res = await fetch(FEEDBACK_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `EyeHIIT feedback — ${source ?? "direct"}`,
          from_name: "EyeHIIT feedback form",
          ...(replyTo && { replyto: replyTo }),
          ...toReadableAnswers(answers),
          "Scanned at": source ?? "direct",
          Device: detectPlatform(),
        }),
      });
      // Web3Forms answers 200 with {success:false} on a rejected key, so the
      // body decides the outcome, not the status code.
      const body = await res.json().catch(() => null);
      const ok = res.ok && (body === null || body.success !== false);
      setStatus(ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-[2rem] border border-accent/20 bg-surface/40 px-6 py-12 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent">
          <Check className="h-6 w-6 text-black" />
        </span>
        <h2 className="mt-5 text-2xl font-bold tracking-tight text-text">
          Thank you — genuinely
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-pretty text-[15px] leading-relaxed text-muted">
          This goes straight to the team building EyeHIIT. If you left your
          email, someone may follow up.
        </p>
        <Link
          href="/try"
          className="mt-7 inline-block text-[14px] font-medium text-accent transition-colors hover:text-accent-strong"
        >
          Back to the download page
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-9">
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        checked={botcheck === "on"}
        onChange={(e) => setBotcheck(e.target.checked ? "on" : "")}
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />
      {FEEDBACK_QUESTIONS.map((q, i) => (
        <div key={q.id} id={i === 0 ? "feedback-first-question" : undefined}>
          <Question question={q} answers={answers} onChange={onChange} />
          {q.id === REQUIRED_QUESTION_ID && showRequired && (
            <p
              role="alert"
              className="mt-3 flex items-center gap-2 text-[13px] font-medium text-error"
            >
              <AlertCircle className="h-4 w-4 shrink-0" />
              Pick one of these and you&rsquo;re done — the rest is optional.
            </p>
          )}
        </div>
      ))}

      <div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="pressable inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-[15px] font-semibold text-black transition-colors hover:bg-accent-strong disabled:opacity-60 sm:w-auto sm:px-8"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send feedback
            </>
          )}
        </button>

        {status === "error" && (
          <p
            role="alert"
            className="mt-4 flex items-start gap-2 text-[13px] leading-relaxed text-error"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <span>
              That didn&rsquo;t send. You can{" "}
              <a
                href={buildMailto(answers, source)}
                className="font-medium underline underline-offset-2"
              >
                email it instead
              </a>{" "}
              — your answers are already filled in.
            </span>
          </p>
        )}
      </div>
    </form>
  );
}
