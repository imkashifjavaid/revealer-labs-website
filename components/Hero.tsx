import { ArrowDown, MessageSquareText } from "lucide-react";
import { Container } from "@/components/Container";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[760px] scroll-mt-24 items-center overflow-hidden pb-24 pt-40 sm:min-h-[820px] sm:pt-44"
    >
      <div aria-hidden="true" className="hero-orbit" />
      <div aria-hidden="true" className="hero-glow hero-glow-left" />
      <div aria-hidden="true" className="hero-glow hero-glow-right" />

      <Container className="relative z-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <p className="mb-7 inline-flex items-center gap-3 rounded-full border border-accent/25 bg-accent/7 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-accent-ink sm:text-sm">
            <span className="size-1.5 rounded-full bg-accent shadow-[0_0_14px_var(--accent-glow-strong)]" />
            WEB <span aria-hidden="true">•</span> AUTOMATION <span aria-hidden="true">•</span> TECHNICAL SUPPORT
          </p>

          <h1 className="max-w-5xl text-balance text-[clamp(3rem,8vw,6.6rem)] font-semibold leading-[0.96] tracking-[-0.07em] text-content">
            Websites and Software.
            <span className="brand-gradient-text mt-2 block bg-clip-text text-transparent">
              Built for Real Work.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-pretty text-base leading-8 text-muted sm:text-lg">
            Web development, AI automation and interactive work based on your project requirements.
          </p>

          <div className="mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <a
              href="#contact"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-on-accent shadow-[0_14px_45px_var(--accent-glow)] transition hover:-translate-y-0.5 hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-content motion-reduce:transform-none"
            >
              <MessageSquareText aria-hidden="true" size={17} />
              Discuss Your Project
            </a>
            <a
              href="#portfolio"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-line-strong bg-content/[0.03] px-7 py-3.5 text-sm font-semibold text-content backdrop-blur transition hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent/8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transform-none"
            >
              View Our Work
              <ArrowDown aria-hidden="true" size={17} />
            </a>
          </div>

          <div className="mt-20 flex items-center gap-4 text-[0.7rem] font-semibold tracking-[0.18em] text-subtle sm:mt-24">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-accent/70" />
            BUILT TO SOLVE REAL PROBLEMS
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-accent/70" />
          </div>
        </div>
      </Container>
    </section>
  );
}
