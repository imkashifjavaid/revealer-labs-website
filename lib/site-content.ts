import {
  Bot,
  Braces,
  Gamepad2,
  LifeBuoy,
  PanelsTopLeft,
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

export const projectCategories = [
  "All",
  "Web Development",
  "Mobile Apps",
  "AI & Automation",
  "Game Development",
  "Brand & Motion",
] as const;

export type ProjectCategory = Exclude<(typeof projectCategories)[number], "All">;

export type ProjectGalleryImage = {
  path: string;
  alt: string;
  caption: string;
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
  demoStatus: "Concept Demo" | "Visual Showcase" | "Concept Campaign" | "Functional Prototype";
  detailHeading?: string;
  tagHeading?: string;
  galleryImages?: ProjectGalleryImage[];
  videoPath?: string;
  videoPosterPath?: string;
  videoLabel?: string;
  caseStudySlug?: string;
  caseStudyLinkLabel?: string;
  externalUrl?: string;
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
  proposedNext: string;
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

export const navigationItems: NavigationItem[] = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
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

export const projects: Project[] = [
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
    id: "meridian-commerce",
    title: "Meridian Commerce",
    category: "Web Development",
    description: "A focused storefront concept built to make product discovery feel calm and immediate.",
    summary:
      "An illustrative commerce experience exploring clear product hierarchy, confident calls to action and a friction-light path from browsing to checkout.",
    intendedFeatures: [
      "Proposed responsive product catalogue",
      "Proposed guided product comparison",
      "Proposed streamlined checkout flow",
    ],
    technologies: ["Next.js", "TypeScript", "Commerce API"],
    previewPath: "/previews/meridian-commerce.svg",
    previewAlt: "Concept preview of a dark commerce website with product cards and a featured item",
    demoStatus: "Concept Demo",
  },
  {
    id: "atlas-operations",
    title: "Atlas Operations",
    category: "Web Development",
    description: "A practical operations dashboard concept for seeing priorities without the noise.",
    summary:
      "A dashboard study designed around quick scanning, meaningful status cues and a compact view of work that needs attention.",
    intendedFeatures: [
      "Proposed real-time operational overview",
      "Proposed role-based dashboard views",
      "Proposed exportable performance reports",
    ],
    technologies: ["React", "Data Visualization", "REST API"],
    previewPath: "/previews/atlas-operations.svg",
    previewAlt: "Concept preview of an operations dashboard with charts, metrics and activity panels",
    demoStatus: "Concept Demo",
  },
  {
    id: "beacon-booking",
    title: "Beacon Booking",
    category: "Web Development",
    description: "A service-booking concept that turns availability into a simple, reassuring flow.",
    summary:
      "An appointment experience concept balancing useful service details, clear availability and a lightweight reservation journey.",
    intendedFeatures: [
      "Proposed live availability calendar",
      "Proposed service and staff selection",
      "Proposed booking reminders",
    ],
    technologies: ["Next.js", "Calendar API", "PostgreSQL"],
    previewPath: "/previews/beacon-booking.svg",
    previewAlt: "Concept preview of a booking website with a calendar and service selection panel",
    demoStatus: "Concept Demo",
  },
  {
    id: "flowline-ops",
    title: "Flowline Ops",
    category: "AI & Automation",
    description: "A workflow concept that moves incoming requests from review to the right next action.",
    summary:
      "A visual automation system concept for routing requests, enriching data and keeping human approval at the moments that matter.",
    intendedFeatures: [
      "Proposed multi-source request intake",
      "Proposed AI-assisted classification",
      "Proposed approval and exception routing",
    ],
    technologies: ["AI Workflows", "Webhooks", "Node.js"],
    previewPath: "/previews/flowline-ops.svg",
    previewAlt: "Concept preview of an automation workflow with connected processing steps",
    demoStatus: "Concept Demo",
    caseStudySlug: "ai-work-order-automation",
  },
  {
    id: "signal-desk",
    title: "Signal Desk",
    category: "AI & Automation",
    description: "An assisted support workspace concept that keeps context and suggested actions together.",
    summary:
      "A support automation concept combining conversation history, knowledge retrieval and suggested next steps while leaving final decisions to people.",
    intendedFeatures: [
      "Proposed knowledge-grounded responses",
      "Proposed priority and intent detection",
      "Proposed human review controls",
    ],
    technologies: ["LLM", "Vector Search", "Integrations"],
    previewPath: "/previews/signal-desk.svg",
    previewAlt: "Concept preview of an AI-assisted support desk with conversation and suggestion panels",
    demoStatus: "Concept Demo",
  },
  {
    id: "ledger-loop",
    title: "Ledger Loop",
    category: "AI & Automation",
    description: "A document-processing concept for turning recurring paperwork into review-ready records.",
    summary:
      "An automation concept for extracting structured information from business documents, flagging uncertain fields and preparing clean records for review.",
    intendedFeatures: [
      "Proposed structured document extraction",
      "Proposed confidence-based review queue",
      "Proposed accounting-system handoff",
    ],
    technologies: ["Document AI", "OCR", "Automation"],
    previewPath: "/previews/ledger-loop.svg",
    previewAlt: "Concept preview of a document automation queue with extracted fields and status indicators",
    demoStatus: "Concept Demo",
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
  {
    id: "neon-circuit",
    title: "Neon Circuit",
    category: "Game Development",
    description: "A kinetic arcade-racing concept built around readable action and fast decisions.",
    summary:
      "An interactive game concept exploring responsive vehicle handling, short competitive sessions and a bold neon visual language.",
    intendedFeatures: [
      "Proposed arcade driving system",
      "Proposed time-trial challenges",
      "Proposed modular track environments",
    ],
    technologies: ["Unity", "C#", "3D Systems"],
    previewPath: "/previews/neon-circuit.svg",
    previewAlt: "Concept preview of a neon arcade racing game scene",
    demoStatus: "Concept Demo",
  },
  {
    id: "driftline-arena",
    title: "Driftline Arena",
    category: "Game Development",
    description: "A compact strategy-arena concept where positioning matters more than complexity.",
    summary:
      "A top-down multiplayer concept testing clear spatial tactics, quick rounds and a restrained set of abilities with distinct roles.",
    intendedFeatures: [
      "Proposed team-based arena rounds",
      "Proposed character ability system",
      "Proposed local and online play modes",
    ],
    technologies: ["Unity", "Netcode", "Game Systems"],
    previewPath: "/previews/driftline-arena.svg",
    previewAlt: "Concept preview of a top-down strategy arena with players and objective zones",
    demoStatus: "Concept Demo",
  },
  {
    id: "orbital-courier",
    title: "Orbital Courier",
    category: "Game Development",
    description: "A narrative delivery-game concept about navigating small worlds under pressure.",
    summary:
      "An exploration concept combining compact planets, route planning and environmental storytelling in short, replayable missions.",
    intendedFeatures: [
      "Proposed physics-led traversal",
      "Proposed branching delivery missions",
      "Proposed upgradeable navigation tools",
    ],
    technologies: ["Unity", "C#", "Narrative Design"],
    previewPath: "/previews/orbital-courier.svg",
    previewAlt: "Concept preview of a small spacecraft navigating planets and delivery routes",
    demoStatus: "Concept Demo",
    caseStudySlug: "orbital-courier-mobile-prototype",
  },
  {
    id: "naseem-perfume-ad-concept",
    title: "Naseem — Perfume Ad Concept",
    category: "Brand & Motion",
    description:
      "An eight-second creator-style perfume concept built around a direct-to-camera product presentation.",
    summary:
      "A finished vertical video created as a Revealer Labs portfolio concept. Naseem appears only as the featured product; this is not a product sold by Revealer Labs, a client campaign or a claim of commercial results.",
    intendedFeatures: [
      "Creative concept and short-form ad execution by Revealer Labs",
      "Direct-to-camera presentation structured around the featured perfume",
      "Final eight-second vertical edit prepared for portfolio presentation",
    ],
    technologies: ["UGC-style Ad", "Vertical Video", "H.264 MP4"],
    previewPath: "/portfolio/naseem-perfume-concept/naseem-perfume-ad-poster.webp",
    previewAlt:
      "Woman holding a bottle of Naseem perfume beside a vanity in a vertical creator-style portrait",
    previewFit: "contain",
    demoStatus: "Concept Campaign",
    detailHeading: "CREATIVE CONTRIBUTION",
    tagHeading: "FORMAT",
    videoPath: "/portfolio/naseem-perfume-concept/naseem-perfume-concept-ad.mp4",
    videoPosterPath: "/portfolio/naseem-perfume-concept/naseem-perfume-ad-poster.webp",
    videoLabel: "Naseem perfume UGC-style concept ad",
  },
];

export const caseStudies: CaseStudy[] = [
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
    projectId: "flowline-ops",
    title: "AI Work-Order Automation",
    eyebrow: "OPERATIONS CONCEPT",
    summary:
      "A practical concept for turning inconsistent work requests into structured, reviewable work orders while keeping people responsible for exceptions and approvals.",
    problem:
      "Work requests can arrive through forms, inboxes and chat with missing details, inconsistent urgency and no shared routing logic. Teams then spend time rewriting requests, chasing context and manually deciding who should act next.",
    proposedSolution:
      "Create a controlled intake workflow that normalizes each request, proposes a category and priority, highlights missing information and routes the draft work order to a human reviewer before assignment. Automation supports the decision; it does not silently make the final call.",
    role: [
      "Concept definition and workflow mapping",
      "Exception and human-review design",
      "Interface direction for intake and triage",
      "Proposed integration architecture",
    ],
    tools: ["Next.js", "TypeScript", "Node.js", "Webhook integrations", "AI classification API"],
    deliverables: [
      "Work-order intake flow",
      "Classification and confidence model",
      "Human-review queue concept",
      "Integration and failure-state notes",
    ],
    heroPath: "/previews/flowline-ops.svg",
    heroAlt: "Concept workflow showing intake, enrichment, review and assignment steps",
    visualMode: "workflow",
    visualFrames: [
      {
        label: "01 / INTAKE",
        title: "Capture the request once",
        description: "Bring form, email or bot submissions into one consistent work-order draft.",
      },
      {
        label: "02 / ASSIST",
        title: "Suggest, never conceal",
        description: "Show proposed category, urgency and missing fields with visible confidence cues.",
      },
      {
        label: "03 / REVIEW",
        title: "Keep a human checkpoint",
        description: "Let an operator correct the draft before assignment or downstream actions.",
      },
    ],
    realNow:
      "The workflow map, interface direction and local preview artwork are original concept work prepared for Revealer Labs.",
    proposedNext:
      "A functioning intake service, AI model connection, integrations, audit trail and production testing are proposed—not delivered or connected to a real organization.",
  },
  {
    slug: "orbital-courier-mobile-prototype",
    projectId: "orbital-courier",
    title: "Orbital Courier: Mobile Prototype",
    eyebrow: "GAMEPLAY CONCEPT",
    summary:
      "A small-screen game prototype direction built around short delivery missions, readable touch controls and route choices that create pressure without visual overload.",
    problem:
      "Mobile action games often ask players to read too much, manage too many controls or commit to long sessions. A compact delivery game needs a clear loop that feels satisfying in a few minutes and remains understandable on a small display.",
    proposedSolution:
      "Prototype a one-thumb flight model with short planet-to-planet routes, visible fuel and risk trade-offs, and missions that can be completed in brief sessions. Start with one route and one meaningful upgrade before expanding the world.",
    role: [
      "Core-loop and mission concept",
      "Mobile interaction direction",
      "Progression and feedback planning",
      "Prototype art direction",
    ],
    tools: ["Unity", "C#", "Unity Input System", "Mobile profiling", "Narrative design"],
    deliverables: [
      "Core gameplay loop",
      "Touch-control proposal",
      "First mission and route outline",
      "Feedback and progression notes",
    ],
    heroPath: "/previews/orbital-courier.svg",
    heroAlt: "Concept game scene with a courier spacecraft moving between small planets",
    visualMode: "mobile",
    visualFrames: [
      {
        label: "MISSION BEAT",
        title: "Choose a route",
        description: "Balance distance, fuel and optional pickups before leaving the current orbit.",
      },
      {
        label: "TOUCH LOOP",
        title: "Steer with restraint",
        description: "Use a compact input model with strong visual feedback instead of a crowded control deck.",
      },
      {
        label: "SHORT REWARD",
        title: "Deliver and improve",
        description: "Complete a brief run, review the result and choose one useful navigation upgrade.",
      },
    ],
    realNow:
      "The gameplay premise, interaction direction and local space-scene artwork are original concept materials.",
    proposedNext:
      "A playable Unity build, device profiling, audio, progression balancing and user testing remain proposed and have not been presented as completed work.",
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((caseStudy) => caseStudy.slug === slug);

export const industryShowcases: IndustryShowcase[] = [
  {
    title: "Business Websites",
    label: "CLARITY THAT CONVERTS",
    description:
      "Purpose-built web experiences that explain the offer, guide the right next step and stay easy to manage as the business grows.",
    capabilities: ["Responsive product and service pages", "Conversion-focused user journeys", "Content and system integrations"],
    previewPath: "/previews/meridian-commerce.svg",
    previewAlt: "Concept business website preview",
  },
  {
    title: "Workflow Automation",
    label: "LESS REPETITION, MORE CONTROL",
    description:
      "Connected workflows that handle routine movement of information while preserving clear review points, ownership and exceptions.",
    capabilities: ["Intake and routing workflows", "AI-assisted classification", "Human approvals and audit trails"],
    previewPath: "/previews/flowline-ops.svg",
    previewAlt: "Concept workflow automation preview",
  },
  {
    title: "Interactive Experiences",
    label: "SYSTEMS PEOPLE CAN FEEL",
    description:
      "Playable prototypes and real-time experiences shaped around a strong interaction loop, readable feedback and a distinct visual identity.",
    capabilities: ["Unity gameplay prototypes", "Interactive product experiences", "Reusable real-time systems"],
    previewPath: "/previews/neon-circuit.svg",
    previewAlt: "Concept interactive game experience preview",
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
