# Revealer Labs website

A responsive one-page agency website for Revealer Labs, covering services, portfolio concepts, capability showcases, studio positioning, an accessible FAQ and a future project-enquiry flow.

## Local setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation

```bash
npm run lint
npm run typecheck
npm run build
```

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

## Portfolio concepts

The current portfolio entries are clearly labeled concept demos, not client work. Each project record includes its category, summary, proposed feature direction, technology tags, preview path, demo status and an optional `externalUrl` field. External links render only when a real URL is provided.

Industry showcases also include an optional `videoPath`. Until owned video is available, the local SVG preview is shown.

The contact form is intentionally a coming-soon state in this milestone. No delivery integration or contact details are configured yet.
