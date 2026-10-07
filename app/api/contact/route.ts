import {
  deliverContactEnquiry,
  parseContactPayload,
  validateContactPayload,
} from "@/lib/contact";

export const runtime = "nodejs";

const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;
const MAX_BODY_BYTES = 12_000;

type RateLimitEntry = { count: number; resetAt: number };
const rateLimitStore = new Map<string, RateLimitEntry>();

function json(body: unknown, status: number) {
  return Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

function getClientAddress(request: Request) {
  return request.headers.get("cf-connecting-ip")
    ?? request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    ?? "unknown";
}

function isRateLimited(key: string) {
  const now = Date.now();
  const existing = rateLimitStore.get(key);

  if (!existing || existing.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  existing.count += 1;
  return existing.count > MAX_REQUESTS;
}

function hasValidOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  try {
    const originUrl = new URL(origin);
    const requestUrl = new URL(request.url);
    const forwardedHost = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim();
    const host = forwardedHost ?? request.headers.get("host") ?? requestUrl.host;
    const forwardedProtocol = request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim();
    const protocol = forwardedProtocol ? `${forwardedProtocol}:` : requestUrl.protocol;

    return originUrl.host === host && originUrl.protocol === protocol;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!hasValidOrigin(request)) {
    return json({ ok: false, message: "This request could not be verified." }, 403);
  }

  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (contentLength > MAX_BODY_BYTES) {
    return json({ ok: false, message: "The enquiry is too large to process." }, 413);
  }

  if (isRateLimited(getClientAddress(request))) {
    return json(
      { ok: false, message: "Too many enquiries were submitted. Please wait before trying again." },
      429,
    );
  }

  let rawPayload: unknown;
  try {
    rawPayload = await request.json();
  } catch {
    return json({ ok: false, message: "The enquiry could not be read." }, 400);
  }

  const payload = parseContactPayload(rawPayload);
  if (payload.companyWebsite) {
    return json({ ok: false, message: "The enquiry could not be processed." }, 400);
  }

  const fieldErrors = validateContactPayload(payload);
  if (Object.keys(fieldErrors).length > 0) {
    return json(
      { ok: false, message: "Check the highlighted fields and try again.", fieldErrors },
      422,
    );
  }

  const delivery = await deliverContactEnquiry(payload);
  if (!delivery.ok) {
    const message = delivery.reason === "configuration"
      ? "Email delivery is not configured yet. Please try again later."
      : "The email provider did not accept this enquiry. Please try again later.";
    return json({ ok: false, message }, 503);
  }

  return json(
    { ok: true, message: "Your enquiry was accepted by the email provider." },
    200,
  );
}
