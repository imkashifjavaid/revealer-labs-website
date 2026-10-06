# Revealer Labs website

The first milestone of the Revealer Labs agency website: a responsive one-page experience for services, studio positioning and a future project-enquiry flow.

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

- Navigation and service content live in `lib/site-content.ts`.
- Section copy lives in the corresponding files under `components/`.
- Brand colors and global visual treatments live in `app/globals.css`.
- Page metadata is defined in `app/layout.tsx`.

The contact form is intentionally a coming-soon state in this milestone. No delivery integration or contact details are configured yet.
