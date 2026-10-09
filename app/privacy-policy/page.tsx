import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy Draft",
  description: "Draft privacy information for the Revealer Labs website and project enquiry form.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    type: "website",
    title: "Privacy Policy Draft | Revealer Labs",
    description: "Draft privacy information for the Revealer Labs website and project enquiry form.",
    url: "/privacy-policy",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy Draft | Revealer Labs",
    description: "Draft privacy information for the Revealer Labs website and project enquiry form.",
    images: ["/twitter-image"],
  },
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="PRIVACY POLICY"
      title="How enquiry information is handled"
      summary="This draft describes the information used by the current website and project enquiry form. It must be reviewed and completed with the final business identity, retention period, jurisdiction and privacy contact before publication."
    >
      <LegalSection title="1. Who is responsible">
        <p>
          The intended website operator and data controller is{" "}
          <strong className="text-content">[REVIEW REQUIRED: full legal business name and trading name]</strong>,
          with an address at <strong className="text-content">[REVIEW REQUIRED: business address]</strong>.
        </p>
        <p>
          Privacy questions may be sent through{" "}
          <strong className="text-content">[REVIEW REQUIRED: confirmed privacy contact method]</strong>.
        </p>
      </LegalSection>

      <LegalSection title="2. Information the enquiry form collects">
        <p>The form asks for the following information:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Name</li>
          <li>Email address</li>
          <li>The service needed</li>
          <li>Project details supplied by the visitor</li>
        </ul>
        <p>
          Visitors should not include passwords, access keys, financial information or other sensitive credentials in project details.
        </p>
      </LegalSection>

      <LegalSection title="3. Why the information is used">
        <p>
          Enquiry information is used to review the request, understand the proposed project and respond about possible next steps. The final lawful basis must be confirmed for the operator&apos;s jurisdiction:{" "}
          <strong className="text-content">[REVIEW REQUIRED: applicable lawful basis]</strong>.
        </p>
      </LegalSection>

      <LegalSection title="4. Delivery and service providers">
        <p>
          When email delivery is configured, the form sends the submitted fields to Resend, the selected transactional email provider, so the enquiry can reach the configured Revealer Labs recipient. If delivery is not configured or the provider rejects the request, the website reports an error instead of claiming the enquiry was sent.
        </p>
        <p>
          The hosting provider and email provider may process standard request metadata, such as an IP address and timestamps, to operate and secure their services. Their own terms and privacy documentation also apply.
        </p>
      </LegalSection>

      <LegalSection title="5. Abuse prevention">
        <p>
          The form uses a hidden honeypot field, payload limits, same-origin checks and a short-lived, best-effort rate limit. The server temporarily associates a request count with an IP address for up to 15 minutes in the running application instance. It is not used for marketing or visitor profiling.
        </p>
      </LegalSection>

      <LegalSection title="6. Storage and retention">
        <p>
          The website does not store enquiry records in its own database. Accepted enquiries are retained in the configured recipient mailbox and may appear in the email provider&apos;s delivery records.
        </p>
        <p>
          Retention and deletion periods must be defined before publication:{" "}
          <strong className="text-content">[REVIEW REQUIRED: mailbox and provider retention periods]</strong>.
        </p>
      </LegalSection>

      <LegalSection title="7. Theme preference and analytics">
        <p>
          The site stores an explicit light or dark theme choice in local browser storage. No advertising or analytics tools are currently configured. This draft must be updated if analytics, additional cookies or similar technologies are added.
        </p>
      </LegalSection>

      <LegalSection title="8. Rights and international processing">
        <p>
          Available privacy rights depend on the visitor&apos;s location and the operator&apos;s jurisdiction. The process for access, correction, deletion, objection or complaint requests is{" "}
          <strong className="text-content">[REVIEW REQUIRED: rights process and supervisory authority, if applicable]</strong>.
        </p>
        <p>
          Hosting or email delivery may involve processing in other countries. Applicable safeguards must be confirmed against the selected production hosting and Resend account configuration.
        </p>
      </LegalSection>

      <LegalSection title="9. Changes to this draft">
        <p>
          This text is a working draft, not legal advice or an approved policy. It should be reviewed whenever the form, hosting, provider configuration or business practices change.
        </p>
        <p>
          See the related{" "}
          <Link href="/terms-of-service" className="font-medium text-content underline decoration-accent/45 underline-offset-4 hover:decoration-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
            Terms of Service draft
          </Link>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
