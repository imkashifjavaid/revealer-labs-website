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
          <p className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#FF1B56]/25 bg-[#FF1B56]/7 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-[#ff6f97] sm:text-sm">
            <span className="size-1.5 rounded-full bg-[#FF1B56] shadow-[0_0_14px_#FF1B56]" />
            CODE <span aria-hidden="true">•</span> AUTOMATION <span aria-hidden="true">•</span> DIGITAL SOLUTIONS
          </p>

          <h1 className="max-w-5xl text-balance text-[clamp(3rem,8vw,6.6rem)] font-semibold leading-[0.96] tracking-[-0.07em] text-[#F9F2F7]">
            Smart Solutions.
            <span className="mt-2 block bg-gradient-to-r from-[#ff2f65] via-[#ff6a9a] to-[#f5a1c5] bg-clip-text text-transparent">
              Built for Real Problems.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-pretty text-base leading-8 text-[#B8A8B6] sm:text-lg">
            Web development, AI automation and interactive experiences—built around what your business needs.
          </p>

          <div className="mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <a
              href="#contact"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#FF1B56] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_45px_rgba(255,27,86,0.28)] transition hover:-translate-y-0.5 hover:bg-[#ff356b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F9F2F7] motion-reduce:transform-none"
            >
              <MessageSquareText aria-hidden="true" size={17} />
              Discuss Your Project
            </a>
            <a
              href="#services"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-white/14 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-[#F9F2F7] backdrop-blur transition hover:-translate-y-0.5 hover:border-[#FF1B56]/50 hover:bg-[#FF1B56]/8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF1B56] motion-reduce:transform-none"
            >
              Explore Services
              <ArrowDown aria-hidden="true" size={17} />
            </a>
          </div>

          <div className="mt-20 flex items-center gap-4 text-[0.7rem] font-semibold tracking-[0.18em] text-[#7c6c78] sm:mt-24">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#FF1B56]/70" />
            ENGINEERED WITH PURPOSE
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#FF1B56]/70" />
          </div>
        </div>
      </Container>
    </section>
  );
}
