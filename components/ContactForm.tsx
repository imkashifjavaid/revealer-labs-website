"use client";

import { LoaderCircle, Mail, MessageCircle, Send } from "lucide-react";
import Link from "next/link";
import type { FormEvent, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { contactServiceOptions } from "@/lib/site-content";

type ContactField = "name" | "email" | "service" | "details";
type FieldErrors = Partial<Record<ContactField, string>>;

type FormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors: FieldErrors;
};

const initialState: FormState = { status: "idle", message: "", fieldErrors: {} };
const fieldOrder: ContactField[] = ["name", "email", "service", "details"];
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactAvailability =
  | { mode: "checking" }
  | { mode: "form" }
  | { mode: "direct"; email?: string; whatsapp?: string }
  | { mode: "unavailable" };

const whatsappPattern = /^[1-9]\d{7,14}$/;

function validate(values: Record<ContactField, string>): FieldErrors {
  const errors: FieldErrors = {};

  if (values.name.trim().length < 2) errors.name = "Enter your name using at least 2 characters.";
  else if (values.name.trim().length > 80) errors.name = "Keep your name to 80 characters or fewer.";

  if (!values.email.trim()) errors.email = "Enter your email address.";
  else if (values.email.trim().length > 254 || !emailPattern.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.service) errors.service = "Choose the service that best fits your project.";

  if (values.details.trim().length < 20) {
    errors.details = "Tell us a little more using at least 20 characters.";
  } else if (values.details.trim().length > 4000) {
    errors.details = "Keep project details to 4,000 characters or fewer.";
  }

  return errors;
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [availability, setAvailability] = useState<ContactAvailability>({ mode: "checking" });

  useEffect(() => {
    const controller = new AbortController();

    async function checkAvailability() {
      try {
        const response = await fetch("/api/contact", {
          cache: "no-store",
          signal: controller.signal,
        });
        const result = await response.json() as ContactAvailability;

        if (
          response.ok
          && (
            result.mode === "form"
            || result.mode === "unavailable"
            || (
              result.mode === "direct"
              && (
                (typeof result.email === "string" && emailPattern.test(result.email))
                || (typeof result.whatsapp === "string" && whatsappPattern.test(result.whatsapp))
              )
            )
          )
        ) {
          setAvailability(result);
          return;
        }
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
      }

      setAvailability({ mode: "unavailable" });
    }

    void checkAvailability();
    return () => controller.abort();
  }, []);

  const focusFirstError = (errors: FieldErrors) => {
    const firstField = fieldOrder.find((field) => errors[field]);
    if (!firstField) return;
    window.requestAnimationFrame(() => {
      const element = formRef.current?.elements.namedItem(firstField);
      if (element instanceof HTMLElement) element.focus();
    });
  };

  const clearFieldError = (field: ContactField) => {
    if (!state.fieldErrors[field]) return;
    setState((current) => ({
      ...current,
      fieldErrors: { ...current.fieldErrors, [field]: undefined },
      message: "",
      status: "idle",
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const values = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      service: String(data.get("service") ?? ""),
      details: String(data.get("details") ?? ""),
    };
    const fieldErrors = validate(values);

    if (Object.keys(fieldErrors).length > 0) {
      setState({
        status: "error",
        message: "Check the highlighted fields and try again.",
        fieldErrors,
      });
      focusFirstError(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    setState(initialState);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          companyWebsite: String(data.get("companyWebsite") ?? ""),
        }),
      });
      const result = await response.json() as {
        ok?: boolean;
        message?: string;
        fieldErrors?: FieldErrors;
      };

      if (response.ok && result.ok) {
        form.reset();
        setState({
          status: "success",
          message: result.message ?? "Your enquiry was accepted by the email provider.",
          fieldErrors: {},
        });
      } else {
        const serverErrors = result.fieldErrors ?? {};
        setState({
          status: "error",
          message: result.message ?? "The enquiry could not be sent. Please try again later.",
          fieldErrors: serverErrors,
        });
        focusFirstError(serverErrors);
      }
    } catch {
      setState({
        status: "error",
        message: "The enquiry could not reach the server. Check your connection and try again.",
        fieldErrors: {},
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass =
    "mt-2 w-full rounded-2xl border border-line-strong bg-canvas/65 px-4 py-3.5 text-base text-content outline-none transition placeholder:text-subtle/80 hover:border-accent/35 focus:border-accent focus:ring-3 focus:ring-accent/15 aria-[invalid=true]:border-danger aria-[invalid=true]:ring-3 aria-[invalid=true]:ring-danger/15 disabled:cursor-not-allowed disabled:opacity-60";

  if (availability.mode === "checking") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="grid min-h-64 place-items-center rounded-3xl border border-line bg-panel/85 p-7 text-center shadow-[0_24px_80px_var(--surface-shadow-soft)] backdrop-blur"
      >
        <div>
          <LoaderCircle aria-hidden="true" className="mx-auto animate-spin text-accent motion-reduce:animate-none" size={24} />
          <p className="mt-4 text-sm text-muted">Checking contact availability…</p>
        </div>
      </div>
    );
  }

  if (availability.mode !== "form") {
    const hasDirectContact = availability.mode === "direct";
    const email = hasDirectContact ? availability.email : undefined;
    const whatsapp = hasDirectContact ? availability.whatsapp : undefined;

    return (
      <div className="rounded-3xl border border-line bg-panel/85 p-7 shadow-[0_24px_80px_var(--surface-shadow-soft)] backdrop-blur sm:p-9">
        <div className="grid size-12 place-items-center rounded-2xl border border-accent/25 bg-accent/10 text-accent-ink">
          <Mail aria-hidden="true" size={21} />
        </div>
        <p className="mt-6 text-sm font-semibold tracking-[0.16em] text-accent-ink">
          {hasDirectContact ? "DIRECT ENQUIRIES" : "CONTACT SETUP IN PROGRESS"}
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-content sm:text-3xl">
          {hasDirectContact ? "Choose how to reach us." : "Enquiries are not open just yet."}
        </h3>
        <p className="mt-4 max-w-xl text-base leading-7 text-muted">
          {hasDirectContact
            ? "The online form is temporarily unavailable while delivery is being verified. Email and WhatsApp remain available for project enquiries."
            : "A confirmed public email address and reliable delivery are still being prepared. The form will stay unavailable until one of those contact paths is verified."}
        </p>
        {hasDirectContact ? (
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {email ? (
              <a
                href={`mailto:${email}?subject=Project%20enquiry%20%E2%80%94%20Revealer%20Labs`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent shadow-[0_12px_36px_var(--accent-glow)] transition hover:-translate-y-0.5 hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-content motion-reduce:transform-none"
              >
                <Mail aria-hidden="true" size={17} />
                Email Revealer Labs
              </a>
            ) : null}
            {whatsapp ? (
              <a
                href={`https://wa.me/${whatsapp}?text=Hello%20Revealer%20Labs%2C%20I%27d%20like%20to%20discuss%20a%20project.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-accent/35 bg-accent/10 px-6 py-3 text-sm font-semibold text-accent-ink transition hover:-translate-y-0.5 hover:border-accent/60 hover:bg-accent/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-content motion-reduce:transform-none"
              >
                <MessageCircle aria-hidden="true" size={17} />
                WhatsApp Revealer Labs
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      noValidate
      aria-busy={isSubmitting}
      onSubmit={handleSubmit}
      className="rounded-3xl border border-line bg-panel/85 p-5 shadow-[0_24px_80px_var(--surface-shadow-soft)] backdrop-blur sm:p-7"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Name" name="name" error={state.fieldErrors.name}>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            minLength={2}
            maxLength={80}
            disabled={isSubmitting}
            aria-invalid={Boolean(state.fieldErrors.name)}
            aria-describedby={state.fieldErrors.name ? "contact-name-error" : undefined}
            onChange={() => clearFieldError("name")}
            className={fieldClass}
          />
        </FormField>

        <FormField label="Email" name="email" error={state.fieldErrors.email}>
          <input
            id="contact-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            maxLength={254}
            disabled={isSubmitting}
            aria-invalid={Boolean(state.fieldErrors.email)}
            aria-describedby={state.fieldErrors.email ? "contact-email-error" : undefined}
            onChange={() => clearFieldError("email")}
            className={fieldClass}
          />
        </FormField>
      </div>

      <FormField label="Service needed" name="service" error={state.fieldErrors.service} className="mt-5">
        <select
          id="contact-service"
          name="service"
          required
          defaultValue=""
          disabled={isSubmitting}
          aria-invalid={Boolean(state.fieldErrors.service)}
          aria-describedby={state.fieldErrors.service ? "contact-service-error" : undefined}
          onChange={() => clearFieldError("service")}
          className={fieldClass}
        >
          <option value="" disabled>Select a service</option>
          {contactServiceOptions.map((service) => (
            <option key={service} value={service}>{service}</option>
          ))}
        </select>
      </FormField>

      <FormField label="Project details" name="details" error={state.fieldErrors.details} className="mt-5">
        <textarea
          id="contact-details"
          name="details"
          required
          minLength={20}
          maxLength={4000}
          rows={7}
          disabled={isSubmitting}
          aria-invalid={Boolean(state.fieldErrors.details)}
          aria-describedby={state.fieldErrors.details ? "contact-details-error" : "contact-details-help"}
          onChange={() => clearFieldError("details")}
          className={`${fieldClass} resize-y`}
          placeholder="What are you trying to build or improve? Include useful context, constraints or goals."
        />
        {!state.fieldErrors.details ? (
          <p id="contact-details-help" className="mt-2 text-sm leading-6 text-subtle">
            Please include at least 20 characters. Do not include passwords or other sensitive credentials.
          </p>
        ) : null}
      </FormField>

      <div className="absolute -left-[10000px] top-auto size-px overflow-hidden" aria-hidden="true">
        <label htmlFor="contact-company-website">Company website</label>
        <input
          id="contact-company-website"
          name="companyWebsite"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div
        aria-live="polite"
        aria-atomic="true"
        className={`mt-5 min-h-12 rounded-2xl border px-4 py-3 text-sm leading-6 ${ 
          state.status === "success"
            ? "border-success/30 bg-success/10 text-success-ink"
            : state.status === "error"
              ? "border-danger/35 bg-danger/10 text-danger-ink"
              : "border-transparent text-muted"
        }`}
      >
        {isSubmitting ? "Sending your enquiry…" : state.message || "Required fields are marked with an asterisk."}
      </div>

      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-sm leading-6 text-subtle">
          By submitting, you acknowledge the{" "}
          <Link href="/privacy-policy" className="font-medium text-content underline decoration-accent/45 underline-offset-4 hover:decoration-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
            privacy policy draft
          </Link>.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent shadow-[0_12px_36px_var(--accent-glow)] transition hover:-translate-y-0.5 hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-content disabled:cursor-not-allowed disabled:opacity-65 motion-reduce:transform-none"
        >
          {isSubmitting ? (
            <LoaderCircle aria-hidden="true" size={17} className="animate-spin motion-reduce:animate-none" />
          ) : (
            <Send aria-hidden="true" size={17} />
          )}
          {isSubmitting ? "Sending…" : "Send Enquiry"}
        </button>
      </div>
    </form>
  );
}

function FormField({
  label,
  name,
  error,
  className = "",
  children,
}: {
  label: string;
  name: ContactField;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={`contact-${name}`} className="text-sm font-semibold text-content">
        {label} <span className="text-accent-ink" aria-hidden="true">*</span>
        <span className="sr-only"> (required)</span>
      </label>
      {children}
      {error ? (
        <p id={`contact-${name}-error`} className="mt-2 text-sm leading-6 text-danger-ink">
          {error}
        </p>
      ) : null}
    </div>
  );
}
