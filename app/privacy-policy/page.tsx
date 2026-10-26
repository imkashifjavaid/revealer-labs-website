import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Revealer Labs collects, uses, protects and retains personal information.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    type: "website",
    title: "Privacy Policy | Revealer Labs",
    description: "How Revealer Labs collects, uses, protects and retains personal information.",
    url: "/privacy-policy",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Revealer Labs",
    description: "How Revealer Labs collects, uses, protects and retains personal information.",
    images: ["/twitter-image"],
  },
};

const externalLinkClass =
  "font-medium text-content underline decoration-accent/45 underline-offset-4 hover:decoration-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="PRIVACY POLICY"
      title="How we handle your information"
      summary="This policy explains what Revealer Labs collects when you use this website or contact us, why we use it, who may process it and the choices available to you."
      effectiveDate="26 October 2026"
      isDraft={false}
    >
      <LegalSection title="1. Who we are">
        <p>
          Revealer Labs is the trading identity used for the digital services presented on this website. We operate from the Kingdom of Saudi Arabia and are responsible for deciding how personal information submitted through our website and contact channels is used.
        </p>
        <p>
          Privacy questions and requests can be sent to{" "}
          <a href="mailto:revealerlabs@gmail.com" className={externalLinkClass}>
            revealerlabs@gmail.com
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="2. Information we collect">
        <p>We may collect the following information when you contact us or use the website:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Your name, email address, phone number and any profile information made visible by the contact service you choose.</li>
          <li>The service you are interested in and the project details, files or other information you choose to send.</li>
          <li>Correspondence, call or message timestamps, and information needed to respond to or manage an enquiry.</li>
          <li>Basic technical information processed by our hosting provider, such as IP address, browser or device type, requested page and request time.</li>
          <li>Your light or dark theme preference, stored in your browser on this device.</li>
        </ul>
        <p>
          If the website enquiry form is enabled, its required fields are name, email address, service needed and project details. Please do not send passwords, access keys, payment-card information, identity documents or other sensitive information through the form, email or WhatsApp unless we have agreed on a secure transfer method.
        </p>
      </LegalSection>

      <LegalSection title="3. How we receive information">
        <p>
          Most personal information comes directly from you when you email us, use WhatsApp, submit the website form, request a quote or work with us on a project. Limited technical data is generated automatically when your browser requests pages from the hosting platform.
        </p>
      </LegalSection>

      <LegalSection title="4. Why we use information">
        <p>We use personal information only where it is relevant to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Respond to an enquiry and understand the work you are considering.</li>
          <li>Prepare a scope, estimate, proposal or other steps you request before a project begins.</li>
          <li>Deliver and support agreed services, communicate about progress, and keep necessary project records.</li>
          <li>Protect the website and contact channels from spam, misuse, fraud or security threats.</li>
          <li>Meet accounting, contractual, dispute-resolution or other legal obligations.</li>
        </ul>
        <p>
          Depending on the situation, processing may be based on your consent, steps you ask us to take before entering a contract, performance of an agreement, a legal obligation, or a legitimate operational or security need permitted by applicable law. We do not sell personal information or use enquiry details for unrelated advertising.
        </p>
      </LegalSection>

      <LegalSection title="5. Services that may process information">
        <p>Information may be processed by the services needed to run the website and respond to you:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <a href="https://www.netlify.com/privacy/" target="_blank" rel="noreferrer" className={externalLinkClass}>Netlify</a>{" "}
            hosts and delivers the website and may process request and security logs.
          </li>
          <li>
            <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className={externalLinkClass}>Google</a>{" "}
            processes messages sent to our Gmail contact address.
          </li>
          <li>
            <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noreferrer" className={externalLinkClass}>WhatsApp</a>{" "}
            processes messages and related account information if you choose that contact option.
          </li>
          <li>
            <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noreferrer" className={externalLinkClass}>Resend</a>{" "}
            will process enquiry-form delivery data only if the website form is configured and enabled.
          </li>
        </ul>
        <p>
          We may also share information with professional advisers or public authorities when reasonably necessary to protect rights, resolve a dispute or comply with law. We do not provide personal information to third parties for them to sell or advertise to you.
        </p>
      </LegalSection>

      <LegalSection title="6. International processing">
        <p>
          Some hosting, email, messaging or delivery providers may process information on infrastructure outside Saudi Arabia. Where applicable, we will take reasonable steps required by Saudi data-protection rules for international transfers and will consider the provider, purpose, information involved and available contractual or technical safeguards.
        </p>
      </LegalSection>

      <LegalSection title="7. How long we keep information">
        <ul className="list-disc space-y-2 pl-6">
          <li>General enquiries that do not become projects are normally kept for no longer than 12 months after the last meaningful contact.</li>
          <li>Project, payment and contractual records are kept only as long as needed to deliver the work, handle support or disputes, and meet applicable accounting or legal requirements.</li>
          <li>Email, WhatsApp, hosting and delivery providers may keep service or security records under their own policies and account settings.</li>
          <li>The website&apos;s temporary rate limit may associate a request count with an IP address for up to 15 minutes in the active application instance.</li>
          <li>Your theme preference stays in your browser until you change it or clear the site&apos;s stored data.</li>
        </ul>
        <p>
          When information is no longer needed, we delete it, anonymise it or allow it to expire, unless keeping it is required by law or needed for an unresolved claim.
        </p>
      </LegalSection>

      <LegalSection title="8. How we protect information">
        <p>
          We use reasonable administrative and technical safeguards appropriate to this website. These include HTTPS in production, restricted account access, server-side validation, same-origin checks, payload limits, a hidden anti-spam field and short-lived rate limiting. The enquiry form does not create a customer database in this website.
        </p>
        <p>
          No website, messaging service or storage system can guarantee absolute security. Customers should avoid sending credentials or highly sensitive data through ordinary contact channels. If a project requires access to systems or code, we will agree on a more suitable access method and limit access to what is needed.
        </p>
      </LegalSection>

      <LegalSection title="9. Data incidents">
        <p>
          If we become aware of loss, misuse or unauthorised access involving personal information under our control, we will investigate, contain and document the incident. We will notify the competent Saudi authority within the applicable period and inform affected individuals where required by the Saudi Personal Data Protection Law and its Implementing Regulations.
        </p>
      </LegalSection>

      <LegalSection title="10. Your privacy rights">
        <p>
          Subject to applicable exceptions, Saudi data-protection rules may give you the right to be informed, access or obtain a readable copy of your personal information, correct incomplete or inaccurate information, request destruction when it is no longer needed, and withdraw consent where consent is the basis for processing.
        </p>
        <p>
          Email your request to{" "}
          <a href="mailto:revealerlabs@gmail.com" className={externalLinkClass}>revealerlabs@gmail.com</a>.
          We may need to verify your identity before acting on a request. If a request cannot be completed, we will explain the reason where we are permitted to do so. You may also raise a complaint with the competent Saudi data-protection authority. The official{" "}
          <a href="https://dgp.sdaia.gov.sa/" target="_blank" rel="noreferrer" className={externalLinkClass}>Saudi Data and Artificial Intelligence Authority data-governance platform</a>{" "}
          provides further information.
        </p>
      </LegalSection>

      <LegalSection title="11. Browser storage, cookies and analytics">
        <p>
          The website stores only the light or dark theme choice in local browser storage. Revealer Labs has not configured advertising trackers or analytics tools on this website. Hosting providers may still use essential technical mechanisms and logs to deliver and protect their services. This policy will be updated before adding analytics, advertising or non-essential cookies.
        </p>
      </LegalSection>

      <LegalSection title="12. Children">
        <p>
          This website and its project services are not directed to children. If we learn that a child has submitted personal information without appropriate authorisation, we will take reasonable steps to delete it.
        </p>
      </LegalSection>

      <LegalSection title="13. Changes to this policy">
        <p>
          We may update this policy when the website, contact methods, providers or legal requirements change. The effective date at the top will show when the current version took effect. Material changes will be presented clearly where appropriate.
        </p>
        <p>
          See the related{" "}
          <Link href="/terms-of-service" className={externalLinkClass}>
            Terms of Service draft
          </Link>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
