# Revealer Labs website

A responsive agency website for Revealer Labs, covering services, verified portfolio work, detailed case studies, capability showcases, studio positioning, an accessible FAQ, a server-backed project-enquiry form and legal-page drafts.

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

The build script uses Next.js 16's supported `--webpack` flag. This avoids an intermittent Turbopack CSS-worker startup panic observed in the local Windows sandbox while preserving the same production route and TypeScript validation.

## Contact form configuration

The form posts to `/api/contact`, which validates every field again on the server, checks a honeypot, limits payload size, verifies same-origin browser requests and applies a best-effort in-memory limit of five requests per IP address every 15 minutes.

Copy `.env.example` to `.env.local` and provide:

```bash
SITE_URL=https://your-production-domain.example
CONTACT_EMAIL_PROVIDER=resend
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=your_confirmed_recipient_address
CONTACT_FROM_EMAIL=Revealer Labs <enquiries@your_verified_domain>
CONTACT_PUBLIC_EMAIL=optional_override_for_public_contact_address
CONTACT_PUBLIC_WHATSAPP=optional_override_in_E.164_format
```

`SITE_URL` is the public production origin used for canonical metadata,
`robots.txt` and `sitemap.xml`. Include `https://` and do not include a path,
query string or fragment.

`CONTACT_FROM_EMAIL` must use a sender/domain accepted by the Resend account. Restart the development server after changing environment values. None of these values use a `NEXT_PUBLIC_` prefix, so they remain server-only.

The contact section checks `/api/contact` before exposing a submission path.
It shows the form only when the complete Resend configuration is available. If
delivery is unavailable and either public fallback contains a confirmed value,
it shows honest email and/or WhatsApp CTAs instead. With no path configured, it
shows a non-submitting availability notice rather than a broken form.
The confirmed public email and WhatsApp details are stored in `lib/site-content.ts`,
so the direct-contact CTAs remain available when Resend is not configured.
`CONTACT_PUBLIC_EMAIL` and `CONTACT_PUBLIC_WHATSAPP` can override those public
defaults. They are returned to the browser intentionally while their CTAs are
active; WhatsApp values must use E.164 form with a leading `+` and country code.

For local response testing only, the built-in test adapter accepts `CONTACT_EMAIL_PROVIDER=mock` and `CONTACT_MOCK_RESULT=success` or `failure`. Production-like local testing additionally requires `CONTACT_ENABLE_TEST_ADAPTER=true`. Never enable the test adapter in a deployed environment.

## Editing content

- Navigation, services, portfolio projects, case studies, industry showcases and FAQ groups live in `lib/site-content.ts`.
- Section copy lives in the corresponding files under `components/`.
- Semantic light/dark theme tokens, reduced-motion rules and global visual treatments live in `app/globals.css`.
- Page metadata is defined in `app/layout.tsx`.
- Older illustrative artwork remains in `public/previews/` for archive purposes but is no longer listed in the public portfolio.
- Case-study artwork lives in `public/case-studies/`. Replace a study’s `heroPath` and matching portfolio `previewPath` when approved media is ready.

## Themes, motion and FAQ

- The header theme control follows the operating-system preference on a first visit and stores an explicit selection in local storage under `revealer-theme`.
- The before-interactive initializer in `app/layout.tsx` applies the theme before the page paints.
- `components/Reveal.tsx` provides one-time, dependency-free section entrances. Reduced-motion preferences disable nonessential movement and smooth scrolling.
- FAQ group and question content is data-driven. Edit or add typed entries in the `faqGroups` export in `lib/site-content.ts`.
- The privacy and terms routes are clearly marked drafts. Replace every `[REVIEW REQUIRED: ...]` marker and obtain appropriate legal review before publication.

## Portfolio content

The public portfolio contains four genuine entries: Revealer AI Work Orders, Ash Blades, Grow Counter and the Unity driving-scene visual showcase. Entries are labelled as a client prototype, live ecommerce website, functional prototype or visual showcase. Fictional and placeholder cards are excluded from the dataset, so every visible category contains published work and no removed case-study links remain.

Revealer AI Work Orders was created for Nawar Al Hulool. Its public screenshots are redacted derivatives stored under `public/case-studies/revealer-ai-work-orders/`; usernames, client records, work-order references and operational details are not published. The case study reflects verified Django administration, Telegram dispatch and technician updates, voice transcription, and manager review behavior. The inspected source remains a locally validated SQLite prototype and is not described as a production deployment.

The Driving Game Scene visual showcase uses three user-supplied older Unity renders stored under `public/portfolio/driving-game-scene-unity/`. The copied PNG bytes are unchanged. The entry does not claim authorship of individual vehicle or environment assets, and the owner's exact contribution and underlying asset-licensing details remain to be documented before the images are licensed or reused outside this portfolio context.

Industry showcases use imagery from the current published project set rather than fictional project previews.

## Case studies

Three portfolio entries link to dedicated pages under `/work/[slug]`:

- Ash Blades live ecommerce storefront
- Grow Counter functional Android prototype
- Revealer AI Work Orders client prototype

The page content is generated from the typed `caseStudies` dataset in `lib/site-content.ts`. Each entry documents its verified status and limitations. Grow Counter remains a functional prototype with pending device validation; Revealer AI Work Orders remains a locally validated client prototype without a claimed production deployment.

Grow Counter uses ten supplied product visuals stored as optimized WebP files under `public/portfolio/grow-counter/`. The case study documents version 2.5 as a packaged Android prototype, not a public store release.

Ash Blades uses three optimized screenshots under `public/case-studies/ash-blades/` and links to the verified live storefront at `https://ashblades.com/`. The case study describes visible catalog, search, wishlist, cart and purchase controls without claiming sales results, conversion changes, custom payment engineering or an unverified technology stack. The reviewed live site currently exposes `Dashboard > Static Blocks > Topbar` in its top bar and `undefined...` labels in category filters; those storefront issues are documented but are not changed by this portfolio repository.

Real contact delivery remains inactive until the four contact-delivery environment values above are configured. No contact address is displayed publicly.

## Launch readiness

See `LAUNCH_CHECKLIST.md` for completed QA, unresolved launch blockers, the exact
production environment values and the distinction between mock email tests and
verified real delivery.
