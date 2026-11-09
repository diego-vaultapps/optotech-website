import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "../ui";
import { Wordmark } from "../Wordmark";
import { FEEDBACK_EMAIL } from "@/lib/feedback";

/**
 * Chrome for the QR-code pages (/try, /feedback).
 *
 * Deliberately not the marketing Navbar: someone who scanned a code in a
 * waiting room has one thing to do, and a nav full of links is an invitation
 * to wander off and do something else.
 */
export function VisitShell({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="border-b border-white/8">
        <Container className="flex h-16 items-center">
          <Link href="/" className="pressable">
            <Wordmark className="text-[15px]" />
          </Link>
        </Container>
      </header>

      <main className="bg-radial-accent">{children}</main>

      <footer className="border-t border-white/8 py-8">
        <Container className="flex flex-col items-center gap-3 text-center text-[13px] text-faint sm:flex-row sm:justify-between sm:text-left">
          <p>© {new Date().getFullYear()} OptoTech. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <Link href="/privacy-policy" className="transition-colors hover:text-muted">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-muted">
              Terms
            </Link>
            <a
              href={`mailto:${FEEDBACK_EMAIL}`}
              className="transition-colors hover:text-muted"
            >
              Contact
            </a>
          </nav>
        </Container>
      </footer>
    </>
  );
}
