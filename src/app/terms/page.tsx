import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that apply when you use the EyeHIIT app and website, including eligibility, purchases, acceptable use, and disclaimers.",
};

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="August 25, 2026"
      intro={
        <>
          <strong className="font-semibold text-text">Read this first:</strong>{" "}
          EyeHIIT is a fitness app for your eyes. It is not a medical device and
          does not diagnose, treat, or correct any condition. If something hurts or
          your vision changes, stop and speak to a qualified professional.
        </>
      }
    >
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the EyeHIIT mobile
        app and this website (together, &ldquo;the Service&rdquo;), operated by OptoTech
        Ventures (&ldquo;we&rdquo;, &ldquo;us&rdquo;). By downloading, accessing, or using the
        Service, you agree to these Terms. If you do not agree, do not use the
        Service.
      </p>

      <h2>What EyeHIIT is — and is not</h2>
      <p>
        EyeHIIT provides guided visual exercise sessions for general fitness and
        performance purposes, in the same spirit as a workout app for the rest of
        your body.
      </p>
      <p>
        <strong>
          EyeHIIT is not a medical device and is not intended to diagnose, treat,
          cure, mitigate, or prevent any disease or condition.
        </strong>{" "}
        Nothing in the Service is medical advice, and it is not a substitute for
        examination or advice from a qualified eye care professional. Never
        disregard or delay seeking professional advice because of something you saw
        in the app.
      </p>
      <p>
        Stop using the Service and consult a professional if you experience pain,
        headaches, dizziness, nausea, double vision, or any change in your vision.
        Do not use the Service while driving, operating machinery, or in any
        situation where diverting your attention could cause harm.
      </p>

      <h2>Eligibility</h2>
      <p>
        You must be at least 13 years old to use the Service. If you are under the
        age of majority where you live, you may use the Service only with the
        involvement of a parent or guardian who agrees to these Terms. By using the
        Service you represent that you meet these requirements.
      </p>

      <h2>Your licence to use the Service</h2>
      <p>
        We grant you a personal, limited, non-exclusive, non-transferable,
        revocable licence to install and use the app on devices you own or control,
        for your own non-commercial use. We reserve all rights not expressly
        granted.
      </p>

      <h2>Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Copy, modify, translate, or create derivative works of the Service.</li>
        <li>
          Reverse engineer, decompile, or disassemble any part of the Service,
          except where that restriction is prohibited by law.
        </li>
        <li>Rent, lease, sell, sublicense, or redistribute the Service.</li>
        <li>
          Remove or obscure any copyright, trademark, or other proprietary notice.
        </li>
        <li>
          Use the Service to build a competing product, or to scrape or extract its
          content in bulk.
        </li>
        <li>
          Interfere with the Service&rsquo;s operation, or attempt to gain unauthorised
          access to any system connected to it.
        </li>
      </ul>

      <h2>Purchases and subscriptions</h2>
      <p>
        Parts of the Service may be offered as a paid one-time purchase or
        subscription. Any purchase is processed by the Apple App Store or Google
        Play, and is also governed by that store&rsquo;s terms.
      </p>
      <ul>
        <li>
          Prices are shown in the app before you buy and may change. Changes do not
          affect a subscription period you have already paid for.
        </li>
        <li>
          Subscriptions renew automatically until cancelled. You can cancel at any
          time in your App Store or Google Play account settings; cancellation takes
          effect at the end of the current billing period.
        </li>
        <li>
          Refunds are handled by Apple or Google under their policies, not by us.
        </li>
      </ul>

      <h2>Your content and data</h2>
      <p>
        Your training history and in-app responses are stored on your device. How we
        handle data is described in our{" "}
        <a href="/privacy-policy">Privacy Policy</a>. You are responsible for
        maintaining your own device and backups; deleting the app deletes your
        training history, and we cannot restore it.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The Service, including its exercises, software, text, graphics, and the
        EyeHIIT and OptoTech names and logos, is owned by us or our licensors and is
        protected by intellectual property laws. These Terms do not transfer any
        ownership to you.
      </p>

      <h2>Changes to the Service</h2>
      <p>
        We may add, change, suspend, or discontinue any part of the Service at any
        time. We may also update these Terms; if we make material changes we will
        update the &ldquo;last updated&rdquo; date above and give notice in the app or on
        this site. Continuing to use the Service after changes take effect means you
        accept the revised Terms.
      </p>

      <h2>Termination</h2>
      <p>
        You may stop using the Service at any time by uninstalling the app. We may
        suspend or terminate your access if you breach these Terms or if we
        discontinue the Service. Sections that by their nature should survive
        termination — including disclaimers, limitation of liability, and governing
        law — will survive.
      </p>

      <h2>Disclaimer of warranties</h2>
      <p>
        The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;, without
        warranties of any kind, whether express, implied, or statutory, including
        implied warranties of merchantability, fitness for a particular purpose, and
        non-infringement. We do not warrant that the Service will be uninterrupted,
        error-free, or that it will produce any particular result. Some
        jurisdictions do not allow the exclusion of implied warranties, so some of
        these exclusions may not apply to you.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, we will not be liable for any
        indirect, incidental, special, consequential, or punitive damages, or for
        any loss of data, profits, or goodwill, arising out of or relating to your
        use of the Service. Our total liability for any claim relating to the
        Service will not exceed the greater of the amount you paid us in the twelve
        months before the claim or fifty US dollars. Some jurisdictions do not allow
        these limitations, so they may not fully apply to you. Nothing in these
        Terms limits liability that cannot be limited by law.
      </p>

      <h2>Indemnity</h2>
      <p>
        You agree to indemnify and hold us harmless from any claim, loss, or expense
        (including reasonable legal fees) arising from your misuse of the Service or
        your breach of these Terms.
      </p>

      <h2>Governing law</h2>
      <p>
        These Terms are governed by the laws of [Governing jurisdiction], without
        regard to its conflict of laws rules, and the courts of [Governing
        jurisdiction] will have exclusive jurisdiction over any dispute, except
        where mandatory local consumer law gives you the right to bring proceedings
        elsewhere.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms? Email us at{" "}
        <a href="mailto:info@optotechventures.com">info@optotechventures.com</a>.
      </p>
    </LegalPage>
  );
}
