import {
  Bot,
  Braces,
  Cable,
  Code2,
  Gamepad2,
  LifeBuoy,
  Monitor,
  PanelsTopLeft,
  Wrench,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type NavigationItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
};

export type ItSupportCapability = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const projectCategories = [
  "All",
  "Web Development",
  "Mobile Apps",
  "AI & Automation",
  "Game Development",
] as const;

export type ProjectCategory = Exclude<(typeof projectCategories)[number], "All">;

export type ProjectGalleryImage = {
  path: string;
  alt: string;
  caption: string;
  aspect?: "portrait" | "landscape";
};

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  summary: string;
  intendedFeatures: string[];
  technologies: string[];
  previewPath: string;
  previewAlt: string;
  previewFit?: "cover" | "contain";
  demoStatus:
    | "Client Prototype"
    | "Visual Showcase"
    | "Functional Prototype"
    | "Ecommerce Website";
  detailHeading?: string;
  tagHeading?: string;
  galleryImages?: ProjectGalleryImage[];
  videoPath?: string;
  videoPosterPath?: string;
  videoLabel?: string;
  caseStudySlug?: string;
  caseStudyLinkLabel?: string;
  externalUrl?: string;
  externalLinkLabel?: string;
};

export type CaseStudyVisualMode = "workflow" | "mobile" | "campaign" | "gallery";

export type CaseStudyVisualFrame = {
  label: string;
  title: string;
  description: string;
  imagePosition?: "left" | "center" | "right";
};

export type CaseStudy = {
  slug: string;
  projectId: string;
  title: string;
  eyebrow: string;
  summary: string;
  problem: string;
  proposedSolution: string;
  role: string[];
  tools: string[];
  deliverables: string[];
  heroPath: string;
  heroAlt: string;
  heroFit?: "cover" | "contain";
  visualMode: CaseStudyVisualMode;
  visualFrames: CaseStudyVisualFrame[];
  galleryImages?: ProjectGalleryImage[];
  realNow: string;
  proposedNext?: string;
  statusLabel?: string;
  scopeTitle?: string;
  scopeCopy?: string;
  solutionTitle?: string;
  contributionEyebrow?: string;
  contributionTitle?: string;
  roleTitle?: string;
  toolsTitle?: string;
  deliverablesTitle?: string;
  visualEyebrow?: string;
  visualTitle?: string;
  visualDescription?: string;
  heroCaptionPrimary?: string;
  heroCaptionSecondary?: string;
  realNowLabel?: string;
  realNowTitle?: string;
  proposedNextLabel?: string;
  proposedNextTitle?: string;
  metadataDescription?: string;
  externalUrl?: string;
  externalLabel?: string;
};

export type IndustryShowcase = {
  title: string;
  label: string;
  description: string;
  capabilities: string[];
  previewPath: string;
  previewAlt: string;
  videoPath?: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type FaqGroup = {
  id: string;
  title: string;
  questions: FaqItem[];
};

export const contactServiceOptions = [
  "Web Development",
  "AI Automation",
  "Bots & Integrations",
  "Unity Game Development",
  "Business Tools",
  "Technical Support",
  "Not sure yet",
] as const;

export const publicContact = {
  email: "revealerlabs@gmail.com",
  whatsapp: "+966580058130",
} as const;

export const navigationItems: NavigationItem[] = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "IT Support", href: "/#it-support" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const footerNavigationItems: NavigationItem[] = [
  ...navigationItems,
  { label: "FAQ", href: "/#faq" },
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms-of-service" },
];

export const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Fast, responsive websites and web applications built around clear business goals.",
    tags: ["Next.js", "TypeScript", "APIs"],
    icon: PanelsTopLeft,
  },
  {
    title: "AI Automation",
    description:
      "Focused AI workflows that reduce repetitive work and keep people in control.",
    tags: ["AI Workflows", "Automation", "Data"],
    icon: Workflow,
  },
  {
    title: "Bots & Integrations",
    description:
      "Reliable bots and connected systems that help your existing tools work together.",
    tags: ["Bots", "Webhooks", "Integrations"],
    icon: Bot,
  },
  {
    title: "Unity Game Development",
    description:
      "Interactive prototypes and polished gameplay systems for engaging digital experiences.",
    tags: ["Unity", "C#", "Prototyping"],
    icon: Gamepad2,
  },
  {
    title: "Business Tools",
    description:
      "Practical dashboards and internal software shaped around how your team actually works.",
    tags: ["Dashboards", "Workflows", "Internal Tools"],
    icon: Braces,
  },
  {
    title: "Technical Support",
    description:
      "Hands-on help diagnosing, improving and maintaining the systems your business depends on.",
    tags: ["Troubleshooting", "Maintenance", "Guidance"],
    icon: LifeBuoy,
  },
];

export const itSupportCapabilities: ItSupportCapability[] = [
  {
    title: "Remote Troubleshooting",
    description:
      "Practical help with software errors, configuration problems, slow systems and day-to-day technical blockers.",
    icon: Monitor,
  },
  {
    title: "Existing Codebase Support",
    description:
      "Debugging and targeted improvements for websites, web applications, APIs and deployment workflows.",
    icon: Code2,
  },
  {
    title: "Systems & Integrations",
    description:
      "Support for hosting, domains, business tools, bots and the connections between the services you rely on.",
    icon: Cable,
  },
  {
    title: "Maintenance & Guidance",
    description:
      "Scoped updates, technical cleanup and clear next-step guidance so your systems remain understandable and dependable.",
    icon: Wrench,
  },
];

export const projects: Project[] = [
  {
    id: "revealer-ai-work-orders",
    title: "Revealer AI Work Orders",
    category: "AI & Automation",
    description:
      "A client workflow prototype for Nawar Al Hulool, connecting Django work-order management with Telegram technician updates and manager review.",
    summary:
      "A locally validated client prototype that manages work orders and technician assignments in Django, dispatches jobs through Telegram, stores text or transcribed voice updates, and keeps AI-assisted status changes behind a manager review checkpoint.",
    intendedFeatures: [
      "Django admin for work orders, clients and technician assignments",
      "Telegram dispatch, acceptance and technician reply updates",
      "Voice-note transcription with manager-controlled review",
    ],
    technologies: ["Django", "Python", "Telegram Bot API", "Gemini API"],
    previewPath:
      "/case-studies/revealer-ai-work-orders/telegram-voice-transcription-redacted.webp",
    previewAlt:
      "Redacted Telegram conversation showing voice work-order updates being transcribed and saved",
    previewFit: "contain",
    demoStatus: "Client Prototype",
    detailHeading: "IMPLEMENTED WORKFLOW",
    tagHeading: "IMPLEMENTATION",
    galleryImages: [
      {
        path: "/case-studies/revealer-ai-work-orders/telegram-voice-transcription-redacted.webp",
        alt: "Redacted Telegram conversation showing three voice work-order updates acknowledged as transcribed and saved",
        caption: "Voice updates transcribed and stored through the Telegram workflow",
        aspect: "landscape",
      },
      {
        path: "/case-studies/revealer-ai-work-orders/telegram-dispatch-redacted.webp",
        alt: "Redacted Telegram work-order dispatch with an acceptance control and saved technician reply",
        caption: "Technician dispatch, acceptance and reply-based status update flow",
        aspect: "landscape",
      },
      {
        path: "/case-studies/revealer-ai-work-orders/django-admin-modules-redacted.webp",
        alt: "Redacted Django administration dashboard listing work orders, technician updates, clients and Telegram dispatch modules",
        caption: "Django admin modules for operational records and assignments",
        aspect: "landscape",
      },
      {
        path: "/case-studies/revealer-ai-work-orders/manager-review-redacted.webp",
        alt: "Redacted manager review screen with confirmation state, attention flags, AI summary and work comparison sections",
        caption: "Manager review checkpoint before an AI-assisted status update is confirmed",
        aspect: "landscape",
      },
    ],
    caseStudySlug: "ai-work-order-automation",
    caseStudyLinkLabel: "Read client case study",
  },
  {
    id: "ash-blades-ecommerce",
    title: "Ash Blades",
    category: "Web Development",
    description:
      "A live ecommerce storefront for swords, knives and cosplay collectibles, bringing category browsing, product imagery and detailed listings together in one shopping experience.",
    summary:
      "Ash Blades is a live online storefront where shoppers can browse collectible swords, knives and cosplay pieces through category pages, product listings and detailed purchase views.",
    intendedFeatures: [
      "Category navigation, search and product listings",
      "Product image galleries, descriptions and prices",
      "Wishlist, cart and visible purchase controls",
    ],
    technologies: ["Ecommerce", "Product Catalog", "Responsive Web"],
    previewPath: "/case-studies/ash-blades/ash-blades-product-detail.webp",
    previewAlt:
      "Ash Blades live product page showing a collectible sword image gallery, price and purchase controls",
    demoStatus: "Ecommerce Website",
    detailHeading: "LIVE STOREFRONT FEATURES",
    tagHeading: "EXPERIENCE",
    galleryImages: [
      {
        path: "/case-studies/ash-blades/ash-blades-product-detail.webp",
        alt: "Ash Blades product detail page showing a collectible sword gallery, description, price, cart and buy controls",
        caption: "Product detail experience with imagery, price and purchase controls",
        aspect: "landscape",
      },
      {
        path: "/case-studies/ash-blades/ash-blades-swords-category.webp",
        alt: "Ash Blades swords category page showing a collection grid, prices, sorting and visible incomplete filter labels",
        caption: "Swords collection page with catalog browsing, pricing and sorting",
        aspect: "landscape",
      },
      {
        path: "/case-studies/ash-blades/ash-blades-home-storefront.webp",
        alt: "Ash Blades home page showing best-selling products, new arrivals and recommended collectibles",
        caption: "Homepage merchandising for best sellers, new arrivals and recommendations",
        aspect: "landscape",
      },
    ],
    caseStudySlug: "ash-blades-ecommerce",
    caseStudyLinkLabel: "Read live website case study",
    externalUrl: "https://ashblades.com/",
    externalLinkLabel: "Visit Live Website",
  },
  {
    id: "grow-counter-android",
    title: "Grow Counter",
    category: "Mobile Apps",
    description:
      "A native Android counter that turns repeated actions into tree growth and a personal garden.",
    summary:
      "A functional Revealer Labs Android prototype for dhikr, personal routines and everyday counting, combining multiple counters, offline progress, bilingual layouts and a garden that grows with consistent use.",
    intendedFeatures: [
      "Multiple counters with daily goals, reminders and history",
      "Tree-growth stages and a persistent personal garden",
      "English and Arabic layouts with offline local storage",
    ],
    technologies: ["Java", "Android Views", "Offline-first"],
    previewPath: "/portfolio/grow-counter/count-and-grow-moonlit-garden.webp",
    previewAlt:
      "Grow Counter promotional screen showing a moonlit garden, a mature tree and a 2,500-count total on an Android phone",
    previewFit: "contain",
    demoStatus: "Functional Prototype",
    detailHeading: "CURRENT BUILD",
    tagHeading: "IMPLEMENTATION",
    caseStudySlug: "grow-counter-android",
    caseStudyLinkLabel: "Read product case study",
  },
  {
    id: "driving-game-scene-unity-visual-showcase",
    title: "Driving Game Scene — Unity Visual Showcase",
    category: "Game Development",
    description:
      "Vehicle and highway scenes presented as renders from my Unity work, showing a visual direction for a driving game.",
    summary:
      "Three older Unity scene renders previously used in a Fiverr gig, presented here as a visual showcase rather than gameplay footage, a released title, a client commission or a finished game.",
    intendedFeatures: [
      "Highway scene with a green car beside a police car",
      "Garage presentation scene featuring the green car",
      "Rear highway view featuring green and orange cars",
    ],
    technologies: ["Unity"],
    previewPath: "/portfolio/driving-game-scene-unity/unity-highway-police-car-render.png",
    previewAlt:
      "Unity scene render showing a bright green car beside a police car on a highway with a helicopter overhead",
    previewFit: "contain",
    demoStatus: "Visual Showcase",
    detailHeading: "SHOWCASE VIEWS",
    galleryImages: [
      {
        path: "/portfolio/driving-game-scene-unity/unity-highway-police-car-render.png",
        alt: "Unity scene render showing a bright green car beside a police car on a highway with a helicopter overhead",
        caption: "Highway scene — front view with the green car and police car",
      },
      {
        path: "/portfolio/driving-game-scene-unity/unity-garage-green-car-render.png",
        alt: "Unity scene render showing a bright green car displayed inside a garage",
        caption: "Garage scene — green car presentation view",
      },
      {
        path: "/portfolio/driving-game-scene-unity/unity-highway-rear-cars-render.png",
        alt: "Unity scene render showing rear views of green and orange cars on a highway with a police helicopter overhead",
        caption: "Highway scene — rear view of the green and orange cars",
      },
    ],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "ash-blades-ecommerce",
    projectId: "ash-blades-ecommerce",
    title: "Ash Blades — Ecommerce Storefront",
    eyebrow: "LIVE ECOMMERCE WEBSITE",
    summary:
      "A live ecommerce storefront for swords, knives and cosplay collectibles, bringing category browsing, product imagery and detailed listings together in one shopping experience.",
    problem:
      "A broad catalog of fantasy, historical and cosplay collectibles needs clear paths from discovery to product detail. Shoppers need to move between themed categories, compare imagery and prices, and understand the available purchase controls without losing context.",
    proposedSolution:
      "Ash Blades brings that catalog into a single live storefront with category navigation, searchable product listings, collection views and detailed product pages. Visible shopping controls support wishlists, carts and purchase actions while product imagery and descriptions provide the detail needed for consideration.",
    role: [
      "Live ecommerce storefront delivery",
      "Catalog and category presentation",
      "Product-detail shopping experience",
      "Responsive storefront presentation",
    ],
    tools: [
      "Category navigation",
      "Product search",
      "Wishlist and cart",
      "Product galleries and pricing",
    ],
    deliverables: [
      "Published ecommerce website",
      "Homepage merchandising sections",
      "Category and product-listing pages",
      "Product detail and purchase views",
    ],
    heroPath: "/case-studies/ash-blades/ash-blades-product-detail.webp",
    heroAlt:
      "Ash Blades live product page showing a collectible sword image gallery, price and purchase controls",
    visualMode: "gallery",
    visualFrames: [],
    galleryImages: [
      {
        path: "/case-studies/ash-blades/ash-blades-product-detail.webp",
        alt: "Ash Blades product detail page showing a collectible sword gallery, description, price, cart and buy controls",
        caption: "Product detail experience with imagery, price and purchase controls",
        aspect: "landscape",
      },
      {
        path: "/case-studies/ash-blades/ash-blades-swords-category.webp",
        alt: "Ash Blades swords category page showing a collection grid, prices, sorting and visible incomplete filter labels",
        caption: "Swords collection page with catalog browsing, pricing and sorting",
        aspect: "landscape",
      },
      {
        path: "/case-studies/ash-blades/ash-blades-home-storefront.webp",
        alt: "Ash Blades home page showing best-selling products, new arrivals and recommended collectibles",
        caption: "Homepage merchandising for best sellers, new arrivals and recommendations",
        aspect: "landscape",
      },
    ],
    realNow:
      "Ash Blades is live at ashblades.com. The public storefront currently exposes category navigation, search, product listings, image galleries, descriptions, prices, wishlist, cart and purchase controls.",
    statusLabel: "Live Website",
    scopeTitle: "Live project status",
    scopeCopy:
      "This is a real, publicly accessible ecommerce website. The case study describes only visible storefront behavior and does not claim sales results, conversion improvements, custom payment engineering or an unverified technology stack.",
    solutionTitle: "The storefront experience",
    contributionEyebrow: "Website scope",
    contributionTitle: "A live catalog and shopping experience",
    roleTitle: "Project scope",
    toolsTitle: "Visible storefront systems",
    deliverablesTitle: "Published experience",
    visualEyebrow: "Live website screens",
    visualTitle: "From browsing to product detail",
    visualDescription:
      "These screenshots were captured from the live public website and show the homepage, a swords category and a product detail page. Individual franchise artwork and product imagery remain part of the storefront content and are not presented as original Revealer Labs artwork.",
    heroCaptionPrimary: "Live product-detail page",
    heroCaptionSecondary: "Public storefront screenshot · 19 October 2026",
    realNowLabel: "LIVE NOW",
    realNowTitle: "What is publicly available",
    metadataDescription:
      "Ash Blades is a live ecommerce storefront for swords, knives and cosplay collectibles, presented as a Revealer Labs web-development case study.",
    externalUrl: "https://ashblades.com/",
    externalLabel: "Visit Live Website",
  },
  {
    slug: "grow-counter-android",
    projectId: "grow-counter-android",
    title: "Grow Counter",
    eyebrow: "ANDROID PRODUCT DEVELOPMENT",
    summary:
      "A native Android counter that connects small repeated actions with visible progress: every 500 counts advances a tree, and every completed tree becomes part of a personal garden.",
    problem:
      "Most counter apps reduce progress to a number. That works functionally, but it gives people little sense of momentum across a daily practice or long-running routine. Grow Counter explores how a direct one-tap utility can stay simple while making consistency feel tangible.",
    proposedSolution:
      "Pair independent counters with a calm growth system. Each counter keeps its own lifetime total, daily history and active tree. Progress moves from seed to mature tree at fixed 500-count stages; at 3,000 counts, the completed tree joins the garden and a new seed begins.",
    role: [
      "Product concept and interaction design",
      "Artwork direction and layered scene integration",
      "Native Android implementation in Java",
      "Iterative refinement and automated validation",
    ],
    tools: [
      "Java",
      "Android Views",
      "Custom Canvas rendering",
      "SharedPreferences and JSON",
      "SoundPool",
      "Android notifications",
    ],
    deliverables: [
      "Functional Android prototype",
      "Packaged and signature-verified APK",
      "English and Arabic interfaces",
      "Offline storage and JSON backup flow",
    ],
    heroPath: "/portfolio/grow-counter/count-and-grow-moonlit-garden.webp",
    heroAlt:
      "Grow Counter product presentation showing a mature oak tree in a moonlit garden and the main counting controls",
    heroFit: "contain",
    visualMode: "gallery",
    visualFrames: [],
    galleryImages: [
      {
        path: "/portfolio/grow-counter/count-and-grow-moonlit-garden.webp",
        alt: "Grow Counter main screen with a mature oak tree, moonlit garden and a 2,500-count total",
        caption: "Core counting view with visible tree-growth progress",
      },
      {
        path: "/portfolio/grow-counter/garden-taking-root.webp",
        alt: "Grow Counter garden containing oak, date palm, cherry blossom and pine trees at night",
        caption: "Personal garden collecting completed trees",
      },
      {
        path: "/portfolio/grow-counter/personalized-dhikr-counters.webp",
        alt: "Grow Counter list of personalised Arabic dhikr counters with individual totals and daily progress",
        caption: "Independent counters with phrases, totals and daily goals",
      },
      {
        path: "/portfolio/grow-counter/settings-night-scenery.webp",
        alt: "Grow Counter settings screen with night scenery, theme, language and sound controls",
        caption: "Appearance, scenery, language and sound settings",
      },
      {
        path: "/portfolio/grow-counter/accent-colour-picker.webp",
        alt: "Grow Counter accent colour dialog with a colour wheel, brightness slider and presets",
        caption: "Custom accent colour and brightness controls",
      },
      {
        path: "/portfolio/grow-counter/daily-goal-reminders.webp",
        alt: "Grow Counter daily goal and count reminder dialog over the main counter screen",
        caption: "Daily goals and configurable count reminders",
      },
      {
        path: "/portfolio/grow-counter/count-history.webp",
        alt: "Grow Counter history screen with daily, weekly and lifetime totals plus a seven-day chart",
        caption: "Daily history, weekly totals and lifetime progress",
      },
      {
        path: "/portfolio/grow-counter/arabic-dhikr-counter.webp",
        alt: "Grow Counter Arabic right-to-left interface showing a dhikr counter and garden scene",
        caption: "Arabic interface with right-to-left layout and localized numerals",
      },
      {
        path: "/portfolio/grow-counter/garden-tree-collection.webp",
        alt: "Grow Counter daylight garden showing four labelled tree varieties",
        caption: "Garden navigation and four initially available tree varieties",
      },
      {
        path: "/portfolio/grow-counter/settings-controls.webp",
        alt: "Grow Counter settings screen showing appearance, sound, touch and routine controls",
        caption: "Detailed controls for counting sessions and personal preferences",
      },
    ],
    realNow:
      "Version 2.5 is a functional native Android prototype with a packaged, signature-verified APK. Core counting, tree growth, gardens, bilingual layouts, local history, backup, themes, sound, reminders and automated checks are implemented.",
    proposedNext:
      "The latest interface changes still need complete validation across physical Android devices. Public distribution, broader device coverage and release operations are not presented as completed.",
    statusLabel: "Functional Prototype",
    scopeTitle: "Current build status",
    scopeCopy:
      "This is a Revealer Labs personal product prototype—not a released Play Store listing or client project. The packaged APK exists, while the latest interface changes still require complete Android device validation.",
    solutionTitle: "The product approach",
    contributionEyebrow: "Product development",
    contributionTitle: "Designed and built by Revealer Labs",
    roleTitle: "Contribution",
    toolsTitle: "Implementation",
    deliverablesTitle: "Current deliverables",
    visualEyebrow: "Product screens",
    visualTitle: "A counter that makes progress visible",
    visualDescription:
      "These supplied product visuals show the implemented counter, garden, personalization, history and bilingual interface direction. They document the prototype presentation; they are not a store listing or evidence of public release.",
    heroCaptionPrimary: "Functional Android prototype · Version 2.5",
    heroCaptionSecondary: "Packaged APK; complete device validation remains",
    realNowLabel: "FUNCTIONAL NOW",
    realNowTitle: "What exists",
    proposedNextLabel: "VALIDATION NEXT",
    proposedNextTitle: "What remains",
    metadataDescription:
      "Grow Counter is a functional native Android prototype by Revealer Labs, combining offline counters, tree-growth progress, a personal garden and English/Arabic support.",
  },
  {
    slug: "ai-work-order-automation",
    projectId: "revealer-ai-work-orders",
    title: "Revealer AI Work Orders",
    eyebrow: "CLIENT WORKFLOW PROTOTYPE",
    summary:
      "A client prototype created for Nawar Al Hulool to manage work orders in Django, dispatch assignments through Telegram and keep AI-assisted technician updates under manager review.",
    problem:
      "Operational work orders, technician assignments and field updates need one traceable workflow. Managers need structured records and review controls, while technicians need a low-friction way to receive assignments and report progress from the field.",
    proposedSolution:
      "The implemented prototype uses Django admin for client, technician and work-order records. Managers dispatch assigned work orders to linked technicians in Telegram; technicians accept and reply with text or voice updates. Voice notes are transcribed and saved, then AI-assisted analysis is presented for an authorized manager to review and confirm before the work-order status changes.",
    role: [
      "Designed the work-order and technician-assignment workflow",
      "Implemented the Django models, admin operations and review screens",
      "Built Telegram dispatch, acceptance and reply-based update handling",
      "Integrated voice transcription and manager-controlled AI review",
    ],
    tools: ["Python", "Django", "Telegram Bot API", "Gemini API", "SQLite prototype database"],
    deliverables: [
      "Django work-order administration",
      "Telegram technician dispatch and update workflow",
      "Text and voice technician-update records",
      "AI analysis review and confirmation controls",
    ],
    heroPath:
      "/case-studies/revealer-ai-work-orders/telegram-voice-transcription-redacted.webp",
    heroAlt:
      "Redacted Telegram conversation showing voice work-order updates being transcribed and saved",
    heroFit: "contain",
    visualMode: "gallery",
    visualFrames: [],
    galleryImages: [
      {
        path: "/case-studies/revealer-ai-work-orders/telegram-voice-transcription-redacted.webp",
        alt: "Redacted Telegram conversation showing three voice work-order updates acknowledged as transcribed and saved",
        caption: "Voice updates transcribed and stored through the Telegram workflow",
        aspect: "landscape",
      },
      {
        path: "/case-studies/revealer-ai-work-orders/telegram-dispatch-redacted.webp",
        alt: "Redacted Telegram work-order dispatch with an acceptance control and saved technician reply",
        caption: "Technician dispatch, acceptance and reply-based status update flow",
        aspect: "landscape",
      },
      {
        path: "/case-studies/revealer-ai-work-orders/django-admin-modules-redacted.webp",
        alt: "Redacted Django administration dashboard listing work orders, technician updates, clients and Telegram dispatch modules",
        caption: "Django admin modules for operational records and assignments",
        aspect: "landscape",
      },
      {
        path: "/case-studies/revealer-ai-work-orders/manager-review-redacted.webp",
        alt: "Redacted manager review screen with confirmation state, attention flags, AI summary and work comparison sections",
        caption: "Manager review checkpoint before an AI-assisted status update is confirmed",
        aspect: "landscape",
      },
    ],
    realNow:
      "The codebase implements Django work orders and assignments, Telegram dispatch and acceptance, text and voice technician updates, Gemini-backed voice transcription, AI analysis records and permission-controlled manager confirmation. These paths have been exercised locally with test and sample records.",
    proposedNext:
      "Production deployment is not verified. The inspected configuration still uses Django development settings and SQLite, and the project README documents a local-prototype limitation of one Telegram dispatch audit record per work order. Multi-instance deployment, production hardening and dispatch-history expansion remain future work.",
    statusLabel: "Client Prototype",
    scopeTitle: "Verified project status",
    scopeCopy:
      "Created for Nawar Al Hulool. The workflow is implemented and locally validated, but it is not presented as a production deployment. Screenshots are redacted and no client records, credentials, private links, results or performance claims are published.",
    solutionTitle: "The implemented workflow",
    contributionEyebrow: "Verified contribution",
    contributionTitle: "Built from administration to field updates",
    roleTitle: "My contribution",
    toolsTitle: "Implementation",
    deliverablesTitle: "Implemented scope",
    visualEyebrow: "Redacted product screens",
    visualTitle: "A connected, reviewable field workflow",
    visualDescription:
      "These screenshots show the implemented Django and Telegram paths. Usernames, client records, work-order references and operational details have been removed or replaced for public use.",
    heroCaptionPrimary: "Telegram voice-update workflow",
    heroCaptionSecondary: "Public-safe screenshot · confidential records redacted",
    realNowLabel: "IMPLEMENTED",
    realNowTitle: "What is verified in the prototype",
    proposedNextLabel: "NOT CLAIMED",
    proposedNextTitle: "What is not yet verified",
    metadataDescription:
      "Revealer AI Work Orders is a client workflow prototype for Nawar Al Hulool, connecting Django work-order administration, Telegram technician updates, voice transcription and manager review.",
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((caseStudy) => caseStudy.slug === slug);

export const industryShowcases: IndustryShowcase[] = [
  {
    title: "Business Websites",
    label: "LIVE STOREFRONT DELIVERY",
    description:
      "Responsive web experiences that organize real content, support confident browsing and give each page a clear purpose.",
    capabilities: ["Responsive catalog experiences", "Product-detail presentation", "Search and shopping journeys"],
    previewPath: "/case-studies/ash-blades/ash-blades-product-detail.webp",
    previewAlt: "Ash Blades live ecommerce product page with gallery, price and purchase controls",
  },
  {
    title: "Workflow Automation",
    label: "IMPLEMENTED CLIENT PROTOTYPE",
    description:
      "Connected operational tools that move assignments and updates between managers and field teams while preserving a human review checkpoint.",
    capabilities: ["Django work-order administration", "Telegram technician updates", "AI-assisted manager review"],
    previewPath:
      "/case-studies/revealer-ai-work-orders/telegram-voice-transcription-redacted.webp",
    previewAlt: "Redacted Telegram voice updates being transcribed and saved for a work-order workflow",
  },
  {
    title: "Interactive Experiences",
    label: "UNITY VISUAL WORK",
    description:
      "Real-time visual work shaped around readable scenes, strong presentation and a clear direction for future interactive development.",
    capabilities: ["Unity scene presentation", "Vehicle and environment composition", "Interactive prototype direction"],
    previewPath:
      "/portfolio/driving-game-scene-unity/unity-highway-police-car-render.png",
    previewAlt: "Unity highway scene render with a green car, police car and helicopter",
  },
];

export const faqGroups: FaqGroup[] = [
  {
    id: "services-projects",
    title: "Services & Projects",
    questions: [
      {
        id: "services-offered",
        question: "What services does Revealer Labs offer?",
        answer:
          "Revealer Labs builds websites, web applications, AI-assisted workflows, bots and integrations, Unity experiences, internal business tools and practical technical support. The exact mix is shaped around the problem being solved.",
      },
      {
        id: "improve-existing",
        question: "Can you improve an existing website or application?",
        answer:
          "Yes. Existing products can be reviewed for usability, performance, reliability and maintainability, then improved in focused stages without rebuilding everything by default.",
      },
      {
        id: "small-prototype",
        question: "Can a project start with a small prototype?",
        answer:
          "Yes. A focused prototype can test the riskiest idea, workflow or interaction first, helping define the next step before committing to a larger build.",
      },
    ],
  },
  {
    id: "development-quality",
    title: "Development & Quality",
    questions: [
      {
        id: "testing-quality",
        question: "How do you approach testing and quality?",
        answer:
          "Quality checks are matched to the product: code review, type and build checks, responsive and accessibility testing, and targeted functional testing for the workflows that matter most.",
      },
      {
        id: "integrations",
        question: "Can you integrate APIs, bots and AI services?",
        answer:
          "Yes. Integrations can connect existing tools, automate handoffs and add AI-assisted steps where they provide clear value, with sensible controls for errors and human review.",
      },
      {
        id: "mobile-support",
        question: "Will the website work on mobile devices?",
        answer:
          "Responsive behavior is part of the build. Layouts and interactions are designed and checked across practical mobile, tablet and desktop widths.",
      },
    ],
  },
  {
    id: "process-handover",
    title: "Process & Handover",
    questions: [
      {
        id: "scope-pricing",
        question: "How are project scope and pricing agreed?",
        answer:
          "The problem, priorities, deliverables and constraints are clarified first. Scope, pricing and any staged milestones are then agreed in writing for that specific project.",
      },
      {
        id: "project-start",
        question: "What do you need to start a project?",
        answer:
          "A useful starting point is the business goal, who the product is for, what is not working today, and any existing content, systems or technical constraints that need to be considered.",
      },
      {
        id: "after-delivery",
        question: "What happens after delivery?",
        answer:
          "Handover materials, access, deliverable ownership and any ongoing maintenance or support are agreed for each project. Continued support is available when it is included in that agreement.",
      },
    ],
  },
];
