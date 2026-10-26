import type { Metadata } from "next";
import Script from "next/script";
import "@fontsource-variable/inter";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const themeInitializer = `(() => {
  try {
    const savedTheme = localStorage.getItem("revealer-theme");
    const theme = savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch {
    document.documentElement.dataset.theme = "dark";
    document.documentElement.style.colorScheme = "dark";
  }
})();`;

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: "Revealer Labs | Web, Automation & Technical Support",
    template: "%s | Revealer Labs",
  },
  description:
    "Web development, automation, mobile apps, game prototypes and remote technical support.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Revealer Labs",
    title: "Revealer Labs | Web, Automation & Technical Support",
    description:
      "Web development, automation, mobile apps, game prototypes and remote technical support.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revealer Labs | Web, Automation & Technical Support",
    description:
      "Web development, automation, mobile apps, game prototypes and remote technical support.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <Script
          id="revealer-theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitializer }}
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="fixed left-4 top-3 z-[200] -translate-y-24 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-on-accent shadow-lg transition-transform focus:translate-y-0 focus:outline-2 focus:outline-offset-2 focus:outline-content motion-reduce:transition-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
