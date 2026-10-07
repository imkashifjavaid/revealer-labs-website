# Revealer Labs website

A responsive agency website for Revealer Labs, covering services, portfolio concepts, capability showcases, studio positioning, an accessible FAQ, a server-backed project-enquiry form and legal-page drafts.

## Local setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) or
[http://127.0.0.1:3000](http://127.0.0.1:3000). The Next.js development
configuration explicitly permits the numeric loopback address so client-side
controls hydrate correctly when that URL is used.

## Validation

```bash
npm run lint
npm run typecheck
npm run build
```

## Contact form configuration

The form posts to `/api/contact`, which validates every field again on the server, checks a honeypot, limits payload size, verifies same-origin browser requests and applies a best-effort in-memory limit of five requests per IP address every 15 minutes.

Copy `.env.example` to `.env.local` and provide:

```bash
CONTACT_EMAIL_PROVIDER=resend
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=your_confirmed_recipient_address
CONTACT_FROM_EMAIL=Revealer Labs <enquiries@your_verified_domain>
```

`CONTACT_FROM_EMAIL` must use a sender/domain accepted by the Resend account. Restart the development server after changing environment values. None of these values use a `NEXT_PUBLIC_` prefix, so they remain server-only.

For local response testing only, the built-in test adapter accepts `CONTACT_EMAIL_PROVIDER=mock` and `CONTACT_MOCK_RESULT=success` or `failure`. Production-like local testing additionally requires `CONTACT_ENABLE_TEST_ADAPTER=true`. Never enable the test adapter in a deployed environment.

## Editing content

- Navigation, services, portfolio projects, industry showcases and FAQ groups live in `lib/site-content.ts`.
- Section copy lives in the corresponding files under `components/`.
- Semantic light/dark theme tokens, reduced-motion rules and global visual treatments live in `app/globals.css`.
- Page metadata is defined in `app/layout.tsx`.
- Local concept artwork lives in `public/previews/`. Replace a project’s `previewPath` when owned imagery is ready.

## Themes, motion and FAQ

- The header theme control follows the operating-system preference on a first visit and stores an explicit selection in local storage under `revealer-theme`.
- The before-interactive initializer in `app/layout.tsx` applies the theme before the page paints.
- `components/Reveal.tsx` provides one-time, dependency-free section entrances. Reduced-motion preferences disable nonessential movement and smooth scrolling.
- FAQ group and question content is data-driven. Edit or add typed entries in the `faqGroups` export in `lib/site-content.ts`.
- The privacy and terms routes are clearly marked drafts. Replace every `[REVIEW REQUIRED: ...]` marker and obtain appropriate legal review before publication.

## Portfolio concepts

The current portfolio entries are clearly labeled concept demos, not client work. Each project record includes its category, summary, proposed feature direction, technology tags, preview path, demo status and an optional `externalUrl` field. External links render only when a real URL is provided.

Industry showcases also include an optional `videoPath`. Until owned video is available, the local SVG preview is shown.

Real contact delivery remains inactive until the four production environment values above are configured. No contact address is displayed publicly.
