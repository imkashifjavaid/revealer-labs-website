import { contactServiceOptions } from "@/lib/site-content";

export type ContactPayload = {
  name: string;
  email: string;
  service: string;
  details: string;
  companyWebsite: string;
};

export type ContactField = "name" | "email" | "service" | "details";
export type ContactFieldErrors = Partial<Record<ContactField, string>>;

export type DeliveryResult =
  | { ok: true; providerId: string }
  | { ok: false; reason: "configuration" | "provider" };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactAvailability =
  | { mode: "form" }
  | { mode: "direct"; email?: string; whatsapp?: string }
  | { mode: "unavailable" };

function normalizePublicWhatsApp(value: string | undefined) {
  if (!value) return undefined;

  const normalized = value.trim().replace(/[\s()-]/g, "");
  return /^\+[1-9]\d{7,14}$/.test(normalized)
    ? normalized.slice(1)
    : undefined;
}

export function getContactAvailability(
  environment: NodeJS.ProcessEnv = process.env,
): ContactAvailability {
  const provider = environment.CONTACT_EMAIL_PROVIDER?.toLowerCase();
  const mockEnabled = environment.NODE_ENV !== "production"
    || environment.CONTACT_ENABLE_TEST_ADAPTER === "true";
  const resendConfigured = provider === "resend"
    && Boolean(environment.RESEND_API_KEY)
    && Boolean(environment.CONTACT_TO_EMAIL)
    && Boolean(environment.CONTACT_FROM_EMAIL);

  if (resendConfigured || (provider === "mock" && mockEnabled)) {
    return { mode: "form" };
  }

  const publicEmail = environment.CONTACT_PUBLIC_EMAIL?.trim();
  const email = publicEmail && publicEmail.length <= 254 && emailPattern.test(publicEmail)
    ? publicEmail
    : undefined;
  const whatsapp = normalizePublicWhatsApp(environment.CONTACT_PUBLIC_WHATSAPP);

  if (email || whatsapp) {
    return { mode: "direct", email, whatsapp };
  }

  return { mode: "unavailable" };
}

export function parseContactPayload(value: unknown): ContactPayload {
  const payload = value && typeof value === "object" ? value as Record<string, unknown> : {};
  const read = (key: string) => typeof payload[key] === "string" ? payload[key].trim() : "";

  return {
    name: read("name"),
    email: read("email"),
    service: read("service"),
    details: read("details"),
    companyWebsite: read("companyWebsite"),
  };
}

export function validateContactPayload(payload: ContactPayload): ContactFieldErrors {
  const errors: ContactFieldErrors = {};

  if (payload.name.length < 2) errors.name = "Enter your name using at least 2 characters.";
  else if (payload.name.length > 80) errors.name = "Keep your name to 80 characters or fewer.";

  if (!payload.email) errors.email = "Enter your email address.";
  else if (payload.email.length > 254 || !emailPattern.test(payload.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!contactServiceOptions.includes(payload.service as (typeof contactServiceOptions)[number])) {
    errors.service = "Choose the service that best fits your project.";
  }

  if (payload.details.length < 20) {
    errors.details = "Tell us a little more using at least 20 characters.";
  } else if (payload.details.length > 4000) {
    errors.details = "Keep project details to 4,000 characters or fewer.";
  }

  return errors;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] ?? character);
}

export async function deliverContactEnquiry(
  payload: ContactPayload,
  environment: NodeJS.ProcessEnv = process.env,
  request: typeof fetch = fetch,
): Promise<DeliveryResult> {
  const provider = environment.CONTACT_EMAIL_PROVIDER?.toLowerCase();

  const mockEnabled = environment.NODE_ENV !== "production"
    || environment.CONTACT_ENABLE_TEST_ADAPTER === "true";

  if (provider === "mock" && mockEnabled) {
    const delay = Math.min(Math.max(Number(environment.CONTACT_MOCK_DELAY_MS ?? "0"), 0), 2_000);
    if (delay > 0) await new Promise((resolve) => setTimeout(resolve, delay));

    return environment.CONTACT_MOCK_RESULT === "failure"
      ? { ok: false, reason: "provider" }
      : { ok: true, providerId: "local-mock-accepted" };
  }

  const apiKey = environment.RESEND_API_KEY;
  const to = environment.CONTACT_TO_EMAIL;
  const from = environment.CONTACT_FROM_EMAIL;

  if (provider !== "resend" || !apiKey || !to || !from) {
    return { ok: false, reason: "configuration" };
  }

  const safeName = escapeHtml(payload.name);
  const safeEmail = escapeHtml(payload.email);
  const safeService = escapeHtml(payload.service);
  const safeDetails = escapeHtml(payload.details).replace(/\n/g, "<br />");

  try {
    const response = await request("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": `revealer-contact/${crypto.randomUUID()}`,
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: payload.email,
        subject: `New Revealer Labs enquiry: ${payload.service}`,
        html: [
          "<h1>New project enquiry</h1>",
          `<p><strong>Name:</strong> ${safeName}</p>`,
          `<p><strong>Email:</strong> ${safeEmail}</p>`,
          `<p><strong>Service:</strong> ${safeService}</p>`,
          `<p><strong>Project details:</strong><br />${safeDetails}</p>`,
        ].join(""),
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) return { ok: false, reason: "provider" };

    const result = await response.json() as { id?: unknown };
    return typeof result.id === "string" && result.id
      ? { ok: true, providerId: result.id }
      : { ok: false, reason: "provider" };
  } catch {
    return { ok: false, reason: "provider" };
  }
}
