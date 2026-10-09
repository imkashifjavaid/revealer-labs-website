import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service Draft",
  description: "Draft terms for using the Revealer Labs website and project enquiry form.",
  alternates: { canonical: "/terms-of-service" },
  openGraph: {
    type: "website",
    title: "Terms of Service Draft | Revealer Labs",
    description: "Draft terms for using the Revealer Labs website and project enquiry form.",
    url: "/terms-of-service",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service Draft | Revealer Labs",
    description: "Draft terms for using the Revealer Labs website and project enquiry form.",
    images: ["/twitter-image"],
  },
  robots: { index: false, follow: false },
};

export default function TermsOfServicePage() {
  return (
    <LegalPage
      eyebrow="TERMS OF SERVICE"
      title="Terms for using this website"
      summary="These draft terms cover the current informational website and project enquiry form. They do not replace a project proposal or contract and require legal review before publication."
    >
      <LegalSection title="1. Website operator">
        <p>
          This website is intended to be operated by{" "}
          <strong className="text-content">[REVIEW REQUIRED: full legal business name and trading name]</strong>,
          located at <strong className="text-content">[REVIEW REQUIRED: business address]</strong>.
        </p>
      </LegalSection>

      <LegalSection title="2. Informational purpose">
        <p>
          The website describes possible digital services and capabilities. Portfolio entries marked “Concept Demo” are illustrative examples, not completed client projects, endorsements or promises that identical results will be delivered.
        </p>
      </LegalSection>

      <LegalSection title="3. Project enquiries">
        <p>
          Submitting an enquiry does not create a client relationship, guarantee availability or commit either party to a project. A project begins only after scope, deliverables, timing, pricing and other relevant terms are agreed separately in writing.
        </p>
        <p>
          Visitors are responsible for providing accurate contact information and for avoiding confidential credentials or unlawful content in the form.
        </p>
      </LegalSection>

      <LegalSection title="4. Project agreements and ownership">
        <p>
          Each project&apos;s deliverables, payment terms, intellectual-property ownership, third-party licences, handover and ongoing support are defined in its own proposal or agreement. Nothing on this website grants ownership of source code, designs, concepts or other materials.
        </p>
      </LegalSection>

      <LegalSection title="5. Acceptable use">
        <p>Visitors must not attempt to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Submit malicious code, automated spam or misleading information</li>
          <li>Interfere with the site, form delivery or security controls</li>
          <li>Use the website or its content in violation of applicable law or third-party rights</li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Availability and external services">
        <p>
          The website and enquiry service may be changed, interrupted or unavailable. Email delivery depends on the configured hosting and Resend services. No statement on this site guarantees uninterrupted availability or successful email delivery.
        </p>
      </LegalSection>

      <LegalSection title="7. Website content">
        <p>
          Reasonable care is taken with website content, but it may become incomplete or outdated. Service descriptions are general and do not constitute a fixed offer, professional guarantee or substitute for a project-specific agreement.
        </p>
      </LegalSection>

      <LegalSection title="8. Liability">
        <p>
          Any exclusions or limits of liability must be tailored to the operator and applicable law:{" "}
          <strong className="text-content">[REVIEW REQUIRED: legally reviewed liability wording]</strong>.
          Nothing in the final terms should exclude liability that cannot legally be excluded.
        </p>
      </LegalSection>

      <LegalSection title="9. Governing law and disputes">
        <p>
          These terms are intended to be governed by{" "}
          <strong className="text-content">[REVIEW REQUIRED: governing law and jurisdiction]</strong>.
          The appropriate dispute process and courts must be confirmed before publication.
        </p>
      </LegalSection>

      <LegalSection title="10. Status of this draft">
        <p>
          This text is a working draft and has not been legally approved. The operator should obtain appropriate legal review and replace every review marker before treating it as final.
        </p>
        <p>
          See how enquiry information is handled in the{" "}
          <Link href="/privacy-policy" className="font-medium text-content underline decoration-accent/45 underline-offset-4 hover:decoration-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
            Privacy Policy draft
          </Link>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
