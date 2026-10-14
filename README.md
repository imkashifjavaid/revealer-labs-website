# Revealer Labs website

A responsive agency website for Revealer Labs, covering services, portfolio concepts, detailed concept case studies, capability showcases, studio positioning, an accessible FAQ, a server-backed project-enquiry form and legal-page drafts.

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
SITE_URL=https://your-production-domain.example
CONTACT_EMAIL_PROVIDER=resend
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=your_confirmed_recipient_address
CONTACT_FROM_EMAIL=Revealer Labs <enquiries@your_verified_domain>
```

`SITE_URL` is the public production origin used for canonical metadata,
`robots.txt` and `sitemap.xml`. Include `https://` and do not include a path,
query string or fragment.

`CONTACT_FROM_EMAIL` must use a sender/domain accepted by the Resend account. Restart the development server after changing environment values. None of these values use a `NEXT_PUBLIC_` prefix, so they remain server-only.

For local response testing only, the built-in test adapter accepts `CONTACT_EMAIL_PROVIDER=mock` and `CONTACT_MOCK_RESULT=success` or `failure`. Production-like local testing additionally requires `CONTACT_ENABLE_TEST_ADAPTER=true`. Never enable the test adapter in a deployed environment.

## Editing content

- Navigation, services, portfolio projects, case studies, industry showcases and FAQ groups live in `lib/site-content.ts`.
- Section copy lives in the corresponding files under `components/`.
- Semantic light/dark theme tokens, reduced-motion rules and global visual treatments live in `app/globals.css`.
- Page metadata is defined in `app/layout.tsx`.
- Local concept artwork lives in `public/previews/`. Replace a project’s `previewPath` when owned imagery is ready.
- Case-study artwork lives in `public/case-studies/`. Replace a study’s `heroPath` and matching portfolio `previewPath` when approved media is ready.

## Themes, motion and FAQ

- The header theme control follows the operating-system preference on a first visit and stores an explicit selection in local storage under `revealer-theme`.
- The before-interactive initializer in `app/layout.tsx` applies the theme before the page paints.
- `components/Reveal.tsx` provides one-time, dependency-free section entrances. Reduced-motion preferences disable nonessential movement and smooth scrolling.
- FAQ group and question content is data-driven. Edit or add typed entries in the `faqGroups` export in `lib/site-content.ts`.
- The privacy and terms routes are clearly marked drafts. Replace every `[REVIEW REQUIRED: ...]` marker and obtain appropriate legal review before publication.

## Portfolio concepts

The portfolio entries are clearly labelled as concept demos or visual showcases. Each project record includes its category, summary, supporting notes, technology tags, preview path, status and optional gallery, case-study or external-link fields. External links render only when a real URL is provided.

The Driving Game Scene visual showcase uses three user-supplied older Unity renders stored under `public/portfolio/driving-game-scene-unity/`. The copied PNG bytes are unchanged. The entry does not claim authorship of individual vehicle or environment assets, and the owner's exact contribution and underlying asset-licensing details remain to be documented before the images are licensed or reused outside this portfolio context.

Industry showcases also include an optional `videoPath`. Until owned video is available, the local SVG preview is shown.

## Concept case studies

Three portfolio entries link to dedicated pages under `/work/[slug]`:

- AI work-order automation
- Orbital Courier mobile-game prototype
- Launch Signal motion and creator-style campaign

The page content is generated from the typed `caseStudies` dataset in `lib/site-content.ts`. Each entry separates original concept material from proposed implementation, tools, production and outcomes. The campaign board is an original generated asset created for this website; it does not represent a client, working product or live campaign.

Real contact delivery remains inactive until the four contact-delivery environment values above are configured. No contact address is displayed publicly.

## Launch readiness

See `LAUNCH_CHECKLIST.md` for completed QA, unresolved launch blockers, the exact
production environment values and the distinction between mock email tests and
verified real delivery.
