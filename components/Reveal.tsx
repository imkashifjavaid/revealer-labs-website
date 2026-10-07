"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

export function Reveal({ children, className = "" }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "pending" | "entered">("idle");

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let stateFrame = 0;
    const enter = () => {
      stateFrame = window.requestAnimationFrame(() => setState("entered"));
    };

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      enter();
      return () => window.cancelAnimationFrame(stateFrame);
    }

    if (element.getBoundingClientRect().top < window.innerHeight * 0.92) {
      enter();
      return () => window.cancelAnimationFrame(stateFrame);
    }

    let observer: IntersectionObserver | null = null;

    try {
      observer = new IntersectionObserver(
        (entries) => {
          if (!entries.some((entry) => entry.isIntersecting)) return;
          enter();
          observer?.disconnect();
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
      );
      observer.observe(element);
      stateFrame = window.requestAnimationFrame(() => setState("pending"));
    } catch {
      enter();
    }

    return () => {
      window.cancelAnimationFrame(stateFrame);
      observer?.disconnect();
    };
  }, []);

  return (
    <div ref={elementRef} data-reveal-state={state} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
