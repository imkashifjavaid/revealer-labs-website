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

export const navigationItems: NavigationItem[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
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
