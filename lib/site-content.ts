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
  "AI & Automation",
  "Game Development",
  "Brand & Motion",
] as const;

export type ProjectCategory = Exclude<(typeof projectCategories)[number], "All">;

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
  demoStatus: "Concept Demo";
  caseStudySlug?: string;
  externalUrl?: string;
};

export type CaseStudyVisualMode = "workflow" | "mobile" | "campaign";

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
  visualMode: CaseStudyVisualMode;
  visualFrames: CaseStudyVisualFrame[];
  realNow: string;
  proposedNext: string;
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
    id: "launch-signal-campaign",
    title: "Launch Signal Campaign",
    category: "Brand & Motion",
    description:
      "A motion-led campaign concept combining polished product moments with creator-style vertical ads.",
    summary:
      "An original campaign study exploring how one product story could adapt across cinematic motion, practical demonstrations and short vertical ad formats without presenting the work as a live client campaign.",
    intendedFeatures: [
      "Proposed modular campaign art direction",
      "Proposed motion and vertical-video storyboards",
      "Proposed creator-style production brief",
    ],
    technologies: ["Creative Direction", "Motion Storyboard", "Vertical Video"],
    previewPath: "/case-studies/launch-signal-campaign.png",
    previewAlt:
      "Original concept campaign board showing a desk light in product, creator-demo and motion frames",
    demoStatus: "Concept Demo",
    caseStudySlug: "launch-signal-campaign",
  },
];

export const caseStudies: CaseStudy[] = [
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
  {
    slug: "launch-signal-campaign",
    projectId: "launch-signal-campaign",
    title: "Launch Signal: Motion Campaign",
    eyebrow: "BRAND CAMPAIGN CONCEPT",
    summary:
      "An original campaign system showing how one product story could move between a controlled hero film, useful creator-style demonstrations and short vertical ad cuts.",
    problem:
      "Campaigns can lose consistency when polished brand footage and creator-led content are planned separately. The audience sees different promises, visual rules and calls to action instead of one adaptable idea.",
    proposedSolution:
      "Build a shared visual and message system first, then express it through three formats: a product reveal, a hands-on creator demonstration and a motion-led feature sequence. Each execution keeps the same core product truth while changing pace and framing for its channel.",
    role: [
      "Campaign concept and creative system",
      "Motion storyboard direction",
      "Vertical-ad format planning",
      "Original visual prototyping",
    ],
    tools: ["Creative direction", "Figma-style layout planning", "Motion storyboard", "Vertical edit plan"],
    deliverables: [
      "Campaign visual direction",
      "Three-format storyboard set",
      "Creator-shot brief",
      "Motion and edit notes",
    ],
    heroPath: "/case-studies/launch-signal-campaign.png",
    heroAlt:
      "Original campaign concept showing product photography, a hands-on creator demonstration and a motion sequence",
    visualMode: "campaign",
    visualFrames: [
      {
        label: "HERO FILM",
        title: "Product reveal",
        description: "A controlled opening that establishes the object, material and core movement.",
        imagePosition: "left",
      },
      {
        label: "CREATOR CUT",
        title: "Hands-on demonstration",
        description: "A direct vertical-format example focused on setup and practical use.",
        imagePosition: "center",
      },
      {
        label: "MOTION CUT",
        title: "Feature in motion",
        description: "A graphic sequence that turns adjustability into a clear visual beat.",
        imagePosition: "right",
      },
    ],
    realNow:
      "The campaign structure, written direction and generated product imagery are original concept assets created for this portfolio study.",
    proposedNext:
      "Filming, creator casting, editing, media placement, live campaign delivery and performance results are placeholders for a future real engagement.",
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
