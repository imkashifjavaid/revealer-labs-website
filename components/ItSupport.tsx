import Image from "next/image";
import { ArrowRight, CheckCircle2, Wifi } from "lucide-react";
import type { CSSProperties } from "react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { itSupportCapabilities } from "@/lib/site-content";

export function ItSupport() {
  return (
    <section id="it-support" className="scroll-mt-20 py-24 sm:py-32">
      <Container>
        <Reveal className="overflow-hidden rounded-[2rem] border border-line bg-panel/75 shadow-[0_30px_90px_var(--surface-shadow-soft)]">
          <div className="grid lg:grid-cols-[0.94fr_1.06fr]">
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <p className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1.5 text-xs font-semibold tracking-[0.14em] text-accent-ink">
                <Wifi aria-hidden="true" size={14} />
                REMOTE IT SUPPORT
              </p>
              <h2 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-[-0.055em] text-content sm:text-5xl">
                Technical problems should not slow your work down.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
                Revealer Labs provides remote technical support for businesses and individuals. This includes everyday IT issues, software setup, connected systems and problems inside an existing codebase.
              </p>
              <p className="mt-4 max-w-xl text-base leading-8 text-muted">
                We can diagnose a problem remotely, fix the code behind it, improve a deployment or explain what needs to happen next.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent shadow-[0_12px_36px_var(--accent-glow)] transition hover:-translate-y-0.5 hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-content motion-reduce:transform-none"
              >
                Request Remote Support
                <ArrowRight aria-hidden="true" size={17} />
              </a>
            </div>

            <div className="relative min-h-80 border-t border-line bg-[var(--preview-background)] lg:min-h-full lg:border-l lg:border-t-0">
              <Image
                src="/images/it-support-remote-workspace.webp"
                alt="Dark technical workspace showing code diagnostics, secure remote connections and server monitoring"
                fill
                sizes="(max-width: 1023px) 100vw, 54vw"
                className="object-cover"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-canvas/45 via-transparent to-transparent lg:bg-gradient-to-r" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/55 p-4 text-white shadow-2xl backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-auto sm:max-w-sm">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-emerald-400/15 text-emerald-300">
                    <CheckCircle2 aria-hidden="true" size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Remote-first assistance</p>
                    <p className="mt-1 text-xs leading-5 text-white/65">
                      Remote review, targeted fixes and a summary of the work completed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-px border-t border-line bg-line sm:grid-cols-2 xl:grid-cols-4">
            {itSupportCapabilities.map((capability, index) => {
              const Icon = capability.icon;

              return (
                <article
                  key={capability.title}
                  className="reveal-child bg-panel/95 p-6 sm:p-7"
                  style={{ "--reveal-order": index } as CSSProperties}
                >
                  <span className="grid size-10 place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent-ink">
                    <Icon aria-hidden="true" size={19} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold tracking-[-0.025em] text-content">
                    {capability.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{capability.description}</p>
                </article>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
