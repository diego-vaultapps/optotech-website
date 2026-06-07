import { Container } from "../ui";
import { Wordmark } from "../Wordmark";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how" },
      { label: "The app", href: "#showcase" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Get the app",
    links: [
      { label: "App Store", href: "#" },
      { label: "Google Play", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-bg-2/60 py-14">
      <Container>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Wordmark className="text-lg" />
            <p className="mt-3 max-w-xs text-[14px] leading-relaxed text-muted">
              The eye gym in your pocket. Train focus, coordination, agility, and
              stability — a few minutes a day.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-[12px] font-semibold uppercase tracking-wide text-faint">
                {col.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[14px] text-muted transition-colors hover:text-text"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/8 pt-6 text-[13px] text-faint sm:flex-row">
          <p>© {new Date().getFullYear()} OptoTech. All rights reserved.</p>
          <p>Made for iPhone &amp; Android.</p>
        </div>
      </Container>
    </footer>
  );
}
