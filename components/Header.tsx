"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Container } from "@/components/Container";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navigationItems } from "@/lib/site-content";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-line backdrop-blur-xl">
      <Container className="relative flex h-20 items-center justify-between">
        <a
          href="#home"
          className="group inline-flex items-center gap-3 rounded-md text-lg font-semibold tracking-[-0.03em] text-content focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          onClick={() => setIsOpen(false)}
        >
          <span className="grid size-8 place-items-center rounded-lg border border-accent/30 bg-accent/10 text-sm font-bold text-accent-ink transition-colors group-hover:border-accent/55">
            R
          </span>
          Revealer Labs
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-sm text-sm font-medium text-muted transition-colors hover:text-content focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent shadow-[0_0_28px_rgba(255,27,86,0.2)] transition hover:-translate-y-0.5 hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-content motion-reduce:transform-none lg:inline-flex"
          >
            Let&apos;s Talk
          </a>
          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsOpen((current) => !current)}
            className="grid size-11 place-items-center rounded-full border border-line-strong text-content transition-colors hover:border-accent/60 hover:bg-accent/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:hidden"
          >
            {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`absolute left-5 right-5 top-[calc(100%+0.75rem)] rounded-2xl border border-line bg-panel/95 p-3 shadow-2xl backdrop-blur-2xl transition duration-200 lg:hidden ${
            isOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          }`}
        >
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-muted transition-colors hover:bg-content/5 hover:text-content focus-visible:outline-2 focus-visible:outline-accent"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-xl bg-accent px-4 py-3 text-center text-sm font-semibold text-on-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-content"
            >
              Let&apos;s Talk
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
