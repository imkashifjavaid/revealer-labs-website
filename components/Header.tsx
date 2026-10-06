"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Container } from "@/components/Container";
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#0E0508]/80 backdrop-blur-xl">
      <Container className="relative flex h-20 items-center justify-between">
        <a
          href="#home"
          className="group inline-flex items-center gap-3 rounded-md text-lg font-semibold tracking-[-0.03em] text-[#F9F2F7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF1B56]"
          onClick={() => setIsOpen(false)}
        >
          <span className="grid size-8 place-items-center rounded-lg border border-[#ff6b94]/30 bg-[#FF1B56]/10 text-sm font-bold text-[#ff6b94] transition-colors group-hover:border-[#ff6b94]/55">
            R
          </span>
          Revealer Labs
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-sm text-sm font-medium text-[#B8A8B6] transition-colors hover:text-[#F9F2F7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF1B56]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-[#FF1B56] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_28px_rgba(255,27,86,0.2)] transition hover:-translate-y-0.5 hover:bg-[#ff356b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F9F2F7] motion-reduce:transform-none md:inline-flex"
        >
          Let&apos;s Talk
        </a>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((current) => !current)}
          className="grid size-11 place-items-center rounded-full border border-white/12 text-[#F9F2F7] transition-colors hover:border-[#FF1B56]/60 hover:bg-[#FF1B56]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF1B56] md:hidden"
        >
          {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>

        <div
          id="mobile-navigation"
          className={`absolute left-5 right-5 top-[calc(100%+0.75rem)] rounded-2xl border border-white/10 bg-[#160A0E]/95 p-3 shadow-2xl backdrop-blur-2xl transition duration-200 md:hidden ${
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
                className="rounded-xl px-4 py-3 text-base font-medium text-[#d7cbd4] transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#FF1B56]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-xl bg-[#FF1B56] px-4 py-3 text-center text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Let&apos;s Talk
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
