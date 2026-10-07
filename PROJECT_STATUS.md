# Project status

## Milestone 1 — agency homepage

Completed:

- Responsive fixed header and accessible mobile navigation
- Centered hero with project and services calls to action
- Data-driven six-card services grid
- Concise studio about section
- Project-enquiry CTA with an explicit coming-soon state
- Responsive footer and working in-page navigation
- Branded dark theme, local Inter variable font and custom favicon
- Reduced-motion, keyboard-focus and responsive layout support

## Milestone 2 — portfolio and industry showcases

Completed:

- Portfolio navigation and updated hero call to action
- Typed, locally stored project and showcase datasets
- Nine clearly labeled concept-demo projects across web, automation and game development
- Responsive one-, two- and three-column portfolio grid
- Accessible category filters with reset behavior, result announcements and future-ready empty state
- Conditional Show More behavior with six projects shown initially
- Accessible project detail dialog with Escape handling, focus trap, focus restoration and background scroll locking
- Proposed feature labeling and conditional real-project links
- Three alternating capability showcases with local preview artwork and optional future video paths
- Nine owned local SVG concept previews with no hotlinked assets
- Responsive browser verification at mobile, tablet and desktop widths

Current limitations:

- Portfolio entries are illustrative concepts rather than completed client projects
- No external project links are shown because no verified project URLs are configured
- Industry showcases use static previews until owned video assets are available
- Real email delivery requires confirmed Resend credentials and sender/recipient addresses

## Milestone 3 — themes, motion and FAQ

Completed:

- Accessible light/dark theme toggle in desktop and mobile headers
- First-visit system theme detection, persisted explicit choice and pre-paint initialization
- Centralized semantic color tokens for both palettes across every section and dialog
- One-time section and card entrance animations with restrained stagger timing
- Reduced-motion handling for entrances, transitions and in-page scrolling
- Accessible nested FAQ with three groups and nine data-driven questions
- Animated FAQ expansion with semantic controls, linked panels and keyboard focus styles
- FAQ footer navigation and responsive theme support for all existing milestone features
- First portfolio preview preloading to keep the development console clear when restored in view

Verification completed:

- `npm run lint`, `npm run typecheck` and `npm run build`
- Browser layouts at 375px, 768px and 1440px in both palettes with no horizontal overflow
- Clean-origin system preference, explicit theme persistence across reload and action-oriented toggle labels
- Mobile menu, anchored section offset, every FAQ control by mouse and keyboard, all portfolio filters, conditional Show More, and dialog focus/scroll behavior
- Local preview assets loaded successfully and a clean browser console on a fresh page load
- Representative mobile and desktop screenshots captured in light and dark themes

Verification limitation:

- The browser harness did not expose media emulation, so reduced-motion behavior was verified from the active compiled media rule rather than by changing the host operating-system preference.

## Milestone 4 — enquiry delivery and legal drafts

Completed:

- Responsive project-enquiry form for name, email, service and project details
- Visible labels, required indicators, client/server validation and announced field errors
- Accurate loading, accepted, provider-failure and missing-configuration states
- Server-only `/api/contact` delivery handler with honeypot, payload and origin checks
- Best-effort five-request, 15-minute per-IP in-memory abuse limit
- Dependency-free Resend HTTP adapter with server-only environment configuration
- Development test adapter for accepted and rejected delivery scenarios
- Privacy Policy and Terms of Service draft routes with shared header, footer and themes
- Clearly marked placeholders for legal identity, address, jurisdiction, retention and review
- Footer links and cross-page navigation for the legal routes
- Environment template and setup instructions without committed credentials

Verification completed:

- Empty and malformed server payloads returned field-level validation errors
- A valid payload returned a configuration error when credentials were absent
- The test adapter returned acceptance only in its success mode and a provider error in failure mode
- Honeypot submissions were rejected and the rate limit returned HTTP 429 after the threshold
- Production build generated both legal pages and the dynamic contact route successfully
- Browser validation covered keyboard submission, error focus/announcements, themes, responsive layout and legal navigation
- Static browser assets and repository content were checked for credentials
- Full interaction regression testing on `127.0.0.1`: theme switching and persistence, all FAQ controls, portfolio filters, Show More, dialog focus/scroll/Escape behavior, form validation and legal navigation
- Next.js development assets explicitly allow the numeric loopback hostname, preventing the shared hydration failure that previously left client-side controls unresponsive

Remaining verification:

- A real Resend delivery cannot be tested until the owner provides a valid API key, confirmed recipient and verified sender identity
- The legal drafts require owner input and appropriate legal review before publication
- The in-memory limiter is best-effort per application instance; a shared persistent limiter may be appropriate after the final hosting platform is selected

## Next milestones

1. Replace concept media with approved portfolio work and owned video
2. Provide business/legal details and approve final legal text
3. Confirm production hosting and activate real email delivery
4. Final content, accessibility, security and performance polish
