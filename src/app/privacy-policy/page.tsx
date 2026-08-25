import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How EyeHIIT handles your data. No accounts, no personal details — your training history stays on your device, and usage analytics are anonymous.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="August 25, 2026"
      intro={
        <>
          <strong className="font-semibold text-text">The short version:</strong>{" "}
          EyeHIIT has no accounts and asks for no personal details. Your training
          history stays on your device. We collect anonymous usage analytics to
          understand which parts of the app people actually use — never your name,
          email, or location.
        </>
      }
    >
      <p>
        This policy explains what EyeHIIT (&ldquo;the app&rdquo;) collects, why, and what
        control you have over it. It applies to the EyeHIIT mobile app and this
        website. EyeHIIT is operated by OptoTech Ventures (&ldquo;we&rdquo;, &ldquo;us&rdquo;).
      </p>

      <h2>Information we collect</h2>

      <h3>Information stored on your device</h3>
      <p>
        EyeHIIT has no user accounts and no server-side profile. The following is
        written to your device&rsquo;s local storage and is not transmitted to us:
      </p>
      <ul>
        <li>Your training history — sessions completed, levels reached, streaks, and progress.</li>
        <li>Setup answers you give in the app, such as your age range and training goals.</li>
        <li>Comfort check-in responses you provide before or after a session.</li>
        <li>App preferences and settings.</li>
      </ul>
      <p>
        Because this data lives only on your device, deleting the app deletes it.
        We cannot recover it for you, and we cannot see it.
      </p>

      <h3>Anonymous usage analytics</h3>
      <p>
        To understand how the app is used and where it can be improved, we collect
        anonymous product analytics through Mixpanel. When the app first runs, it
        generates a random identifier that is stored on your device and used to
        group events from the same installation. It is not derived from your name,
        email, phone number, advertising ID, or any device identifier, and it
        cannot be traced back to you.
      </p>
      <p>Alongside that identifier we record:</p>
      <ul>
        <li>Which screens you open and which exercises you start, complete, or leave.</li>
        <li>App version, platform (iOS or Android), and environment.</li>
        <li>The time an event occurred.</li>
      </ul>

      <h3>What we do not collect</h3>
      <ul>
        <li>Your name, email address, phone number, or postal address.</li>
        <li>Precise location. The app requests no location permission.</li>
        <li>Camera or microphone access. The app requests neither.</li>
        <li>Your contacts, photos, calendar, or health records.</li>
        <li>Payment details — see <a href="#payments">Payments</a> below.</li>
      </ul>

      <h2>How we use this information</h2>
      <ul>
        <li>To operate the app and show you your own progress.</li>
        <li>To understand which features are used, so we know what to build and fix.</li>
        <li>To diagnose crashes and performance problems.</li>
      </ul>
      <p>
        We do not sell your data, share it with data brokers, or use it for
        advertising or ad targeting.
      </p>

      <h2 id="payments">Payments</h2>
      <p>
        If EyeHIIT offers paid features, purchases are processed by the Apple App
        Store or Google Play under their own terms. Payment details — card numbers,
        billing addresses — go to Apple or Google, never to us. We may receive
        confirmation that a purchase or subscription is active, without the
        underlying payment information.
      </p>

      <h2>Service providers</h2>
      <p>We rely on a small number of third parties to run EyeHIIT:</p>
      <ul>
        <li>
          <strong>Mixpanel</strong> — anonymous product analytics, as described above.
        </li>
        <li>
          <strong>Apple App Store and Google Play</strong> — app distribution,
          updates, and payments. Each applies its own privacy policy to data it
          collects when you download or purchase an app.
        </li>
        <li>
          <strong>Amazon Web Services</strong> — hosting for this website. Standard
          web server logs may record IP addresses and browser user-agent strings.
        </li>
      </ul>

      <h2>Data retention</h2>
      <p>
        Data on your device is kept until you delete it or uninstall the app.
        Anonymous analytics events are retained by Mixpanel according to our
        configured retention period and are not linked to an identifiable person.
      </p>

      <h2>Your choices and rights</h2>
      <ul>
        <li>
          <strong>Delete everything on your device</strong> — uninstall the app, or
          use the reset option in settings where available.
        </li>
        <li>
          <strong>Analytics</strong> — because analytics events are anonymous and not
          tied to an identifiable person, we generally cannot locate the events from
          a specific installation. If you would like analytics collection stopped or
          your installation&rsquo;s events removed, contact us and we will do what is
          technically possible.
        </li>
        <li>
          <strong>Regional rights</strong> — depending on where you live, you may have
          rights to access, correct, delete, or restrict processing of personal data
          under laws such as the GDPR or the CCPA. Since we hold no account or
          contact information, most such requests concern data that never leaves your
          device. Contact us and we will help.
        </li>
      </ul>

      <h2>Children</h2>
      <p>
        EyeHIIT is not directed to children under 13, and we do not knowingly collect
        personal information from them. If you believe a child has provided us with
        personal information, contact us and we will delete it.
      </p>

      <h2>Security</h2>
      <p>
        Data on your device is protected by your device&rsquo;s own security — your
        passcode, biometric lock, and operating system sandboxing. Data in transit to
        our service providers is encrypted using TLS. No method of storage or
        transmission is perfectly secure, and we cannot guarantee absolute security.
      </p>

      <h2>International transfers</h2>
      <p>
        Our service providers may process data on servers outside your country,
        including in the United States. Where required, we rely on appropriate
        safeguards for those transfers.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy as the app changes. We will revise the &ldquo;last
        updated&rdquo; date above, and for material changes we will give notice in the
        app or on this site.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy or your data? Email us at{" "}
        <a href="mailto:info@optotechventures.com">info@optotechventures.com</a>.
      </p>
    </LegalPage>
  );
}
