import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eyehiit.app"),
  title: {
    default: "EyeHIIT — Train your eyes like an athlete",
    template: "%s · EyeHIIT",
  },
  description:
    "EyeHIIT is the eye gym in your pocket. Guided workouts across Focus, Coordination, Agility, and Stability — level up, build streaks, and track your progress. Free on iOS and Android.",
  keywords: [
    "EyeHIIT",
    "eye gym",
    "eye training",
    "focus training app",
    "eye workout",
    "OptoTech",
  ],
  openGraph: {
    title: "EyeHIIT — Train your eyes like an athlete",
    description:
      "The eye gym in your pocket. Guided workouts, levels, and streaks across Focus, Coordination, Agility, and Stability.",
    type: "website",
    siteName: "EyeHIIT",
    images: [{ url: "/app/eyegym.png", width: 1200, height: 630, alt: "EyeHIIT" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EyeHIIT — Train your eyes like an athlete",
    description:
      "The eye gym in your pocket. Guided workouts, levels, and streaks.",
    images: ["/app/eyegym.png"],
  },
  icons: {
    icon: "/app/icon.png",
    apple: "/app/icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#2d2d2d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
