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

## Milestone 5 — concept case studies

Completed:

- Three dedicated, statically generated concept case-study routes
- AI work-order automation, mobile-game prototype and brand motion campaign narratives
- Clear problem, proposed solution, role, proposed tools, concept deliverables and visual direction for each study
- Prominent Concept Demo and honest-scope language with explicit real-versus-proposed summaries
- Data-driven case-study content and replaceable local media paths in `lib/site-content.ts`
- Existing Flowline Ops and Orbital Courier cards connected to their case studies
- New Brand & Motion portfolio category and Launch Signal campaign concept
- Case-study links in both portfolio cards and accessible project dialogs
- Original campaign-board artwork with no client identity, claim, testimonial or demo link
- Shared Revealer Labs dark/light palette across the case studies and main site

Verification completed:

- Portfolio filters still reset correctly and Show More advances from 6 to 9 to all 10 projects
- All three case-study routes load with route-specific metadata and no horizontal overflow
- Dark/light theme switching, responsive navigation, FAQ expansion, dialog behavior and contact validation remain functional
- Local case-study images load without broken assets and browser checks show no console errors
- `npm run lint`, `npm run typecheck` and `npm run build`

Current limitations:

- All three studies are concept demonstrations, not completed client work
- Work-order integrations, the Unity build and campaign production/media results remain proposed
- Case-study media should be replaced with approved screenshots and owned video when real project material is available

## Brand theme correction

Completed:

- Centralized the Revealer Labs dark and light palettes in shared semantic tokens
- Applied the same background, surface, text, muted-text and accent system to the homepage, case studies, legal pages and shared navigation
- Removed the page-scoped case-study palette and remaining pink/burgundy interface accents
- Unified gradients, glows, borders, shadows, hover states and focus rings around the restrained green brand accent
- Preserved semantic danger/success feedback and the original colors inside portfolio and case-study artwork
- Updated the favicon to the shared dark-surface and green-accent palette

Verification completed:

- Every public route checked in both themes at 1440px and 375px widths
- No horizontal overflow or broken images detected on the homepage, legal pages or three case-study routes
- Mobile navigation, theme persistence, FAQ expansion and project-dialog Escape/scroll-lock behavior regression-checked
- Browser console checked without warnings or errors during the route audit
- `npm run lint`, `npm run typecheck` and `npm run build`

## Next milestones

1. Replace concept media with approved portfolio work, screenshots and owned video
2. Provide business/legal details and approve final legal text
3. Confirm production hosting and activate real email delivery
4. Final content, accessibility, security and performance polish
