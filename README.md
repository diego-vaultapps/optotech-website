# EyeHIIT — Marketing Landing Page

A standalone Next.js marketing site for **EyeHIIT**, the eye-training app by OptoTech.
Its single job is to drive traffic to the iOS App Store and Google Play.

The page is intentionally framed as a **performance / fitness** product ("the eye gym
in your pocket") and contains **no medical terminology**, by design.

## Stack

- **Next.js 16** (App Router, Turbopack) + React 19 + TypeScript
- **Tailwind CSS v4** — brand tokens defined in `src/app/globals.css` (`@theme`), sourced
  from the app's `constants/Colors.ts`
- **Motion** (Framer Motion) for entrance, scroll, and looping animations
- **lucide-react** icons
- Animation craft follows Emil Kowalski's design-engineering skill: transform/opacity-only
  animations, strong custom easing curves, `prefers-reduced-motion` support, and
  pressable feedback on interactive elements.

## Structure

```
src/
  app/
    layout.tsx        # fonts, metadata, viewport
    page.tsx          # composes all sections
    globals.css       # brand tokens + base styles + easings
  components/
    PhoneFrame.tsx    # CSS device frame + status bar
    screens/          # high-fidelity recreations of in-app screens
      DashboardScreen, ExercisesScreen, WorkoutScreen, ProgressScreen, BottomNav
    sections/         # Navbar, Hero, Stats, Features, HowItWorks,
                      # ScreenShowcase, ProgressHighlight, FAQ, FinalCTA, Footer
    Reveal, AnimatedNumber, StoreBadges, Wordmark, ui  # primitives
  lib/
    content.ts        # all page copy (with an FDA copy guardrail comment)
    utils.ts          # cn() class helper
public/
  eyemark.svg         # eye logomark (recolorable via currentColor)
  app/                # brand assets copied from the app (icon, logos, art)
```

> **Note:** No real app screenshots existed, so the "app screens" are pixel-faithful
> recreations built with the app's real colors, layout, and content.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
```

## To go live

- Replace the placeholder `#` store links in `src/components/StoreBadges.tsx`
  (`APP_STORE_URL`, `PLAY_STORE_URL`) and `src/components/sections/Footer.tsx`.
- Swap the Open Graph image / favicon in `public/app/` if desired.
- Point the `metadataBase` URL in `src/app/layout.tsx` at the production domain.
