# Revealer Labs launch checklist

Last reviewed: 2026-10-26

## Completed checks

- [x] Production lint, TypeScript and Next.js build complete successfully
- [x] Homepage, Privacy Policy draft, Terms of Service draft and all three case-study routes render successfully
- [x] Mobile and desktop layouts checked without horizontal overflow or broken local assets
- [x] Light/dark theme switching, persistence and readable green brand tokens retained
- [x] Mobile menu, portfolio filters, project dialog, FAQ accordions and keyboard Escape behavior regression-checked
- [x] One primary heading and one main landmark are present on every public route
- [x] Skip-to-content navigation, visible focus styles, labelled form controls and image alternative text are present
- [x] Page titles, descriptions, canonical URLs and route-specific case-study metadata are configured
- [x] Open Graph and Twitter sharing images are generated locally
- [x] `robots.txt` and `sitemap.xml` are generated from the configured production origin
- [x] Draft legal pages are marked `noindex, nofollow` and are excluded from the sitemap
- [x] Accessible 404 and recoverable route-error states are available
- [x] Baseline response headers cover MIME sniffing, framing, referrer data and unused camera/microphone/location access
- [x] Local Inter files, Next.js image optimization, static generation and the absence of third-party tracking scripts reduce launch-time overhead
- [x] Repository and browser assets were checked for committed email credentials
- [x] Netlify GitHub import is configured for `main` with `npm run build`, `.next` and the Next.js Runtime; the deploy action remains intentionally unsubmitted

## Contact delivery status

Mock/test verification and real delivery are different checks:

- [x] Local mock adapter acceptance tested; this proves the UI and server success path only
- [x] Local mock adapter rejection tested; this proves provider-failure handling only
- [x] Missing production configuration tested; the API returns an error and never reports a false success
- [ ] **Real Resend delivery is not verified.** A message must be accepted by Resend and received at the confirmed destination after production credentials are supplied.

Never enable the mock adapter in production. A mock acceptance is not evidence that email can be delivered.

## Launch blockers

- [ ] Set the final production origin in `SITE_URL`, rebuild, and confirm canonical, sitemap and social-image URLs use that domain rather than localhost
- [ ] Configure all four Resend values listed below, then complete a real end-to-end delivery and inbox receipt check
- [ ] Replace every `[REVIEW REQUIRED: ...]` marker in both legal drafts with the owner-approved business identity, address, effective date, lawful basis, retention policy, rights process, governing law and jurisdiction
- [ ] Obtain appropriate legal review and remove the draft/not-approved presentation only after approval
- [ ] Complete the pending Netlify project creation after testing approval, then decide whether the current per-instance in-memory rate limit is sufficient; multi-instance hosting should use a shared persistent limiter
- [ ] Confirm HTTPS on the final host before enabling a long-lived HSTS policy
- [ ] Run Lighthouse or an equivalent lab audit against the deployed production URL and begin collecting real Core Web Vitals; local browser checks are not field performance data

The public portfolio now contains only genuine work: one locally validated client prototype, one live ecommerce website, one functional Android prototype and one Unity visual showcase. Fictional and placeholder cards and routes are excluded from public listings.

## Required production environment values

Set these on the hosting platform. Do not commit them to Git.

```dotenv
SITE_URL=https://your-final-production-origin.example
CONTACT_EMAIL_PROVIDER=resend
RESEND_API_KEY=replace-with-a-live-resend-api-key
CONTACT_TO_EMAIL=replace-with-the-confirmed-recipient
CONTACT_FROM_EMAIL=Revealer Labs <replace-with-a-sender-on-a-verified-domain>
CONTACT_PUBLIC_EMAIL=replace-with-a-confirmed-public-address-if-using-the-email-fallback
CONTACT_PUBLIC_WHATSAPP=+15551234567
```

Value requirements:

- `SITE_URL`: public HTTPS origin only, without a path, query string or fragment
- `CONTACT_EMAIL_PROVIDER`: exactly `resend`
- `RESEND_API_KEY`: secret live API key from the production Resend account
- `CONTACT_TO_EMAIL`: confirmed inbox that should receive project enquiries
- `CONTACT_FROM_EMAIL`: display name and sender address accepted by the verified Resend domain
- `CONTACT_PUBLIC_EMAIL`: optional public `mailto:` fallback; omit it when the address must not be published
- `CONTACT_PUBLIC_WHATSAPP`: optional public WhatsApp fallback in E.164 form, including `+` and country code; omit it when the number must not be published

The following variables are for local testing only and must be absent in production:

```dotenv
CONTACT_ENABLE_TEST_ADAPTER=true
CONTACT_MOCK_RESULT=success
CONTACT_MOCK_DELAY_MS=500
```

## Final launch-day checks

- [ ] Build with the final environment configuration
- [ ] Inspect `/robots.txt`, `/sitemap.xml`, page canonicals and social previews on the real domain
- [ ] Submit one authorized real enquiry and confirm both provider acceptance and inbox receipt
- [ ] Verify legal copy is approved and no draft markers remain
- [ ] Confirm the host serves HTTPS and the expected security headers
- [ ] Recheck mobile navigation, portfolio dialogs, FAQ, contact form and both themes on the deployed URL
- [ ] Review browser console, 404 behavior and monitoring/error-reporting expectations
- [ ] Deploy only after the blockers above are closed
