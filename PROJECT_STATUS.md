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
- Brand & Motion portfolio category introduced for campaign work
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

## Milestone 6 — final QA and launch readiness

Completed:

- Production-origin helper and canonical metadata for every public route
- Generated Open Graph and Twitter sharing artwork using the Revealer Labs green palette
- Generated `robots.txt` and a sitemap covering the homepage and three indexable case studies
- `noindex, nofollow` metadata for the unapproved legal drafts
- Skip-to-content navigation plus accessible custom 404 and route-error states
- Baseline security headers for MIME sniffing, framing, referrer data and unused device permissions
- Production-origin and contact-delivery variables documented in `.env.example`, README and `LAUNCH_CHECKLIST.md`
- Explicit separation of mock email-path checks from unverified real Resend delivery

Verification completed:

- `npm run lint`, `npm run typecheck` and `npm run build`
- All six public routes checked at 375px and 1440px in light and dark themes
- One main landmark and primary heading per route, labelled controls, image alternatives, unique IDs and skip navigation checked
- Mobile menu, portfolio filters, Show More, project dialog, FAQ, contact validation focus and theme persistence regression-tested
- Canonical URLs, descriptions, route titles, draft-page robots directives and social-image metadata inspected in the production build
- `robots.txt`, `sitemap.xml`, generated social image, custom 404 and response security headers verified over HTTP
- Local mock contact adapter returned HTTP 200 in success mode and HTTP 503 in failure mode
- Missing delivery configuration returned HTTP 503; invalid fields returned HTTP 422 with field errors
- No horizontal overflow, broken images or browser console warnings/errors in the final route matrix
- The 1.79 MB source campaign image was delivered through Next.js image optimization at approximately 88 KB for the checked 640px mobile rendition

Launch blockers:

- Configure the final `SITE_URL` and rebuild so public metadata does not use the local fallback
- Provide live Resend credentials, verified sender and confirmed recipient, then verify provider acceptance and inbox receipt
- Complete every legal review marker and obtain appropriate legal approval
- Select the production host and decide whether the per-instance in-memory rate limiter is sufficient
- Run deployed Lighthouse/Core Web Vitals checks on the final HTTPS origin

Verification limitations:

- No real email was sent because live credentials were not provided
- Local QA is not a substitute for deployed network performance or field Core Web Vitals
- Automated Axe and Lighthouse runners were not installed; accessibility was checked with linting, semantic DOM inspection, the browser accessibility tree and keyboard interaction tests

## Next milestones

1. Close the blockers in `LAUNCH_CHECKLIST.md`
2. Replace concept media with approved portfolio work, screenshots and owned video when available
3. Configure the selected production host and verify real email delivery
4. Complete deployed performance, security and launch-day checks

## Portfolio addition — Unity driving scene visual showcase

Completed:

- Added one Game Development entry titled “Driving Game Scene — Unity Visual Showcase”
- Used the user-supplied highway/police-car render as the portfolio cover
- Added the garage render and rear highway render to the same project gallery
- Preserved all three original PNG files without recolouring, regeneration or byte-level modification
- Added responsive `next/image` delivery with contain-fit presentation so the vehicles remain visible
- Added click, Tab/Enter and arrow-key gallery controls inside the existing accessible project dialog
- Displayed “Visual Showcase” on both the card and detailed dialog view
- Limited the stated technology to Unity and avoided claims about gameplay, release status, clients, modelling, asset ownership or development results
- Kept the entry in the existing Game Development filter without creating a duplicate section or case-study route

Verification completed:

- `npm run lint`, `npm run typecheck` and `npm run build`
- Game Development filtering and the existing Show More/reset behavior
- Gallery selection with click, Tab/Enter, arrow keys, Home and End
- Dialog Escape close, focus restoration and background scroll locking
- Desktop and 375px mobile layouts in light and dark themes
- Image loading, contain-fit presentation, horizontal overflow and browser console output

Details still needed from the owner:

- Exact contribution to the scenes
- Provenance and reuse/licensing rights for vehicle, environment and other third-party assets
- Whether any additional production context should be published with the renders

## Portfolio addition — Naseem perfume concept ad

Completed:

- Added one Brand & Motion entry titled “Naseem — Perfume Ad Concept”
- Classified the eight-second vertical video as a UGC-style Ad after reviewing its direct-to-camera, creator-led presentation
- Labelled the entry “Concept Campaign” and clearly stated that Naseem is the featured product, not a Revealer Labs product or client campaign
- Added the supplied finished video with native controls, no autoplay, inline mobile playback and `preload="none"`
- Added a 222,552-byte WebP poster derived from the supplied 941×1672 still; the portfolio grid loads only this optimized still
- Preserved the supplied 3,845,684-byte video unchanged because it is already a web-compatible 720×1280 H.264/AAC MP4 with fast-start metadata
- Added the playable video to the existing accessible project dialog without creating an external or dummy link
- Omitted captions because an accurate spoken transcript was not available from the supplied files

Details still needed from the owner:

- Confirmation of the exact production roles beyond the stated Revealer Labs concept creation
- An approved transcript if captions should be added
- Confirmation that the supplied performer, product imagery, music/audio and other included media are cleared for public portfolio use

## Portfolio addition — Grow Counter Android prototype

Completed:

- Added Grow Counter as a Mobile Apps portfolio entry and labelled it “Functional Prototype”
- Added a dedicated `/work/grow-counter-android` case-study route with product-specific metadata
- Documented the implemented counting, tree-growth, garden, bilingual, personalization, history, reminder and offline-storage features
- Kept version 2.5, packaged APK and signature verification separate from the remaining full Android device-validation requirement
- Added ten supplied product visuals with descriptive alternative text and captions
- Converted the 17.9 MB PNG source set into ten full-resolution WebP assets totaling approximately 1.67 MB
- Extended the shared case-study component so functional products can use accurate status, scope, implementation and validation labels without weakening the existing concept disclosures
- Added Mobile Apps filtering while preserving the existing Show More and project-dialog behavior

Verification completed:

- `npm run lint`, `npm run typecheck` and `npm run build` all pass
- Confirmed the Mobile Apps filter shows the single Grow Counter entry and resets the visible result count correctly
- Confirmed the project dialog opens, exposes the accurate Functional Prototype status and product case-study link, closes with Escape and restores focus to its trigger
- Checked the dedicated case study at desktop and 375 × 812 mobile widths in both dark and light themes
- Confirmed the mobile menu, theme toggle, ten gallery images, descriptive image alternatives and page metadata in the browser
- Confirmed all ten gallery images load without broken assets after lazy loading, no horizontal overflow is present and the browser console is clean
- Confirmed the production build generates `/work/grow-counter-android` and includes it in the generated sitemap

Details still needed from the owner:

- Confirmation that the ten supplied promotional visuals are approved for public portfolio use
- Final physical-device validation results for the latest interface changes
- A public store or download URL only if one is intentionally released later; no link is currently shown

## Portfolio removal — Launch Signal Campaign

Completed:

- Removed the Launch Signal Campaign portfolio card and its dedicated case-study dataset at the owner's request
- Removed the generated campaign-board asset and all current documentation references
- The `/work/launch-signal-campaign` route is no longer generated; the remaining Brand & Motion work is unaffected

## Portfolio addition — Ash Blades live ecommerce website

Completed:

- Added Ash Blades to the Web Development portfolio with the accurate “Ecommerce Website” card label
- Added a dedicated `/work/ash-blades-ecommerce` case study and verified live-site CTA
- Documented only storefront features visible on the public site: categories, search, listings, galleries, descriptions, prices, wishlist, cart and purchase controls
- Added the supplied product-detail, category and homepage screenshots as three optimized WebP assets totaling approximately 303 KB
- Used the product-detail view as the card and case-study cover and added a responsive, lazy-loaded case-study gallery
- Avoided sales, conversion, testimonial, custom-payment and unverified technology claims
- Kept the case study focused on the delivered storefront experience and verified public shopping features

Verification completed:

- `npm run lint`, `npm run typecheck` and `npm run build` all pass
- Confirmed the Web Development filter shows Ash Blades with the accurate Ecommerce Website label
- Confirmed the accessible project dialog, three-image keyboard gallery, Escape close and focus restoration
- Confirmed `/work/ash-blades-ecommerce`, route metadata and the prominent live-site CTA to `https://ashblades.com/`
- Checked desktop and 375 × 812 mobile layouts in dark and light themes
- Confirmed below-the-fold gallery images remain lazy-loaded until approached, then load without broken assets
- Confirmed no horizontal overflow and no browser console warnings or errors during the case-study checks
- Confirmed the production build generates the Ash Blades case-study route and sitemap entry

## Public portfolio launch cleanup — 25 October 2026

Completed:

- Replaced the fictional AI work-order concept with **Revealer AI Work Orders**, a client prototype created for **Nawar Al Hulool**
- Verified the implemented scope against the separate Django project source: work orders and technician assignments, Telegram dispatch and reply updates, voice-note transcription, AI analysis records and permission-controlled manager review
- Labelled the work accurately as a locally validated **Client Prototype**; no production deployment, client result, time-saving or performance claim is made
- Added four optimized, public-safe WebP screenshots with usernames, client records, work-order references and operational details removed or replaced
- Removed all fictional and placeholder cards from the public project dataset, including their dialog entries and generated case-study routes
- Kept four genuine portfolio entries: Revealer AI Work Orders, Ash Blades, Grow Counter and the Unity driving-scene visual showcase
- Removed the empty Brand & Motion filter and retained only categories that contain published work
- Replaced fictional homepage showcase artwork with imagery from the genuine published project set
- Preserved older concept assets on disk without exposing them in public listings

Verified limitations:

- The work-order source README calls the system a local prototype and documents one Telegram dispatch audit record per work order
- The inspected Django configuration uses development settings and SQLite; production deployment of the work-order system is not claimed
- Revealer Labs contact delivery remains unverified without live Resend credentials
- Production hosting for this website is not configured in the repository; `.openai/hosting.json`, `vercel.json` and a linked host project are absent

Verification completed:

- `npm run lint` and `npm run typecheck` pass
- `npm run build` passes with the documented Next.js 16 Webpack flag after the sandboxed Turbopack CSS worker repeatedly exited before connecting
- The production build generates only three case-study routes: Ash Blades, Grow Counter and Revealer AI Work Orders
- Desktop 1280px and mobile 375 × 812 browser checks covered all four cards, all non-empty filters, both themes, mobile navigation, dialog focus/scroll locking, Escape focus restoration and keyboard gallery navigation
- All published routes load without horizontal overflow, broken images or browser console warnings/errors
- The removed Orbital Courier route returns the custom 404 and no longer exposes its project title
- Browser checks found none of the sampled confidential usernames, work-order references or client-record values in the public AI case-study DOM

## Contact availability and Netlify preparation — 26 October 2026

Completed:

- Added a runtime contact-availability response to `GET /api/contact`
- Kept the enquiry form hidden unless the complete Resend delivery configuration is present
- Added confirmed public email and WhatsApp fallbacks in the central site content, with optional `CONTACT_PUBLIC_EMAIL` and `CONTACT_PUBLIC_WHATSAPP` environment overrides
- Added an honest non-submitting contact status when neither delivery nor a direct contact path is configured
- Added a minimal `netlify.toml` build command without secrets or deployment side effects
- Connected the Netlify project to GitHub, published it at `https://revealerlabs.netlify.app`, and confirmed Netlify detects `main`, `npm run build`, `.next` and the Next.js Runtime

Pending:

- Complete verified Resend delivery values later if the full server-backed form should replace the direct contact CTAs

## Dedicated IT support section — 26 October 2026

Completed:

- Added a dedicated `#it-support` section between Services and Portfolio
- Added IT Support to desktop, mobile and footer navigation through the shared navigation dataset
- Added clear remote-support positioning for software troubleshooting, existing codebase fixes, systems and integrations, maintenance and technical guidance
- Added a direct “Request Remote Support” path to the existing contact section
- Generated an original black-and-green remote technical workspace visual and optimized it from a 1.78 MB PNG to a 127 KB WebP
- Preserved the shared light/dark theme, responsive layout, visible focus treatment and reduced-motion behavior

Verification:

- `npm run lint` and `npm run typecheck` pass
- `npm run build` passes after the required retry; Next.js reports a security upgrade recommendation for the currently installed version
- Local production HTTP checks returned `200` for the homepage and generated image and confirmed the section and navigation anchors in rendered HTML
- Headless browser DOM output contains the full IT support section; automated screenshot capture remained blank because the one-time reveal state did not advance in that headless capture environment, so final visual inspection remains recommended in a normal browser

## Ash Blades case-study cleanup — 26 October 2026

Completed:

- Removed the “Live-site note / Visible issues to address” panel from the Ash Blades case study
- Made the secondary case-study status panel optional so the other case studies retain their existing validation notes
- Removed the matching issue wording from current project documentation

## Public copy cleanup — 26 October 2026

Completed:

- Rewrote the main homepage headings and supporting copy in direct, plain English
- Removed repeated em dashes and replaced generic agency phrases such as “Code with context” and “Selected Work, Clearly Labelled”
- Simplified service descriptions, IT support copy, portfolio introductions, capability examples, FAQ answers and contact instructions
- Updated case-study labels and fallback copy without changing project facts, status labels or verified limitations
- Updated page metadata and social-image text to match the clearer service description

Verification:

- `npm run lint`, `npm run typecheck` and `npm run build` pass
- All six public routes returned HTTP 200 from the local production server
- Rendered homepage checks confirmed the removed phrases are absent, the replacement headings are present and no em dashes remain
- Next.js 16.4.0 reports a security upgrade recommendation; the dependency was not changed as part of this copy-only update

## RL brand mark — 26 October 2026

Completed:

- Replaced the single-letter header badge with an original `RL` monogram
- Added a reusable Revealer Labs wordmark with white main text and a green “Labs” accent
- Applied the updated branding to the header, footer and browser favicon
- Kept the mark as a local SVG so it stays sharp at every screen size and does not rely on an external asset

Verification:

- `npm run lint`, `npm run typecheck` and `npm run build` pass
- Local production checks returned HTTP 200 for the homepage, RL mark and favicon
- Confirmed the same reusable wordmark is rendered in both the header and footer
