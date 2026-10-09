import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Layers3, ShieldCheck, Wrench } from "lucide-react";
import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import type { CaseStudy } from "@/lib/site-content";

export function CaseStudyPage({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <div className="min-h-screen bg-canvas text-content">
      <Header />
      <main id="main-content" tabIndex={-1}>
        <section className="relative overflow-hidden pb-20 pt-32 sm:pb-24 sm:pt-40">
          <div aria-hidden="true" className="case-study-grid absolute inset-0" />
          <div aria-hidden="true" className="case-study-glow absolute -right-40 top-16 size-[32rem] rounded-full" />
          <Container className="relative">
            <Link
              href="/#portfolio"
              className="inline-flex rounded-full border border-line-strong bg-panel/65 px-4 py-2 text-sm font-semibold text-muted transition-colors hover:border-accent/55 hover:text-content focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Back to portfolio
            </Link>

            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(19rem,0.55fr)] lg:items-end">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-accent/35 bg-accent/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-accent-ink">
                    Concept Demo
                  </span>
                  <span className="text-xs font-semibold tracking-[0.16em] text-subtle">
                    {caseStudy.eyebrow}
                  </span>
                </div>
                <h1 className="mt-7 max-w-4xl text-balance text-[clamp(3rem,8vw,6.5rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-content">
                  {caseStudy.title}
                </h1>
                <p className="mt-7 max-w-3xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
                  {caseStudy.summary}
                </p>
              </div>

              <aside className="rounded-3xl border border-accent/25 bg-accent/[0.07] p-6 sm:p-7">
                <div className="flex items-center gap-3 text-accent-ink">
                  <ShieldCheck aria-hidden="true" size={21} />
                  <h2 className="text-sm font-bold uppercase tracking-[0.12em]">Honest scope</h2>
                </div>
                <p className="mt-4 text-sm leading-7 text-muted">
                  This is an illustrative Revealer Labs concept—not completed client work. Features, production and outcomes are described as proposed.
                </p>
              </aside>
            </div>

            <div className="mt-12 overflow-hidden rounded-[2rem] border border-line-strong bg-panel shadow-[0_35px_100px_var(--surface-shadow)] sm:mt-16">
              <div className="relative aspect-[16/10] sm:aspect-[16/8.5]">
                <Image
                  src={caseStudy.heroPath}
                  alt={caseStudy.heroAlt}
                  fill
                  priority
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 border-t border-line px-5 py-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-7">
                <span>Original concept visual</span>
                <span>No client identity, live product or performance result is represented.</span>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-y border-line bg-panel-soft/55 py-20 sm:py-24">
          <Container className="grid gap-6 lg:grid-cols-2">
            <NarrativeBlock number="01" title="The problem" copy={caseStudy.problem} />
            <NarrativeBlock number="02" title="Proposed solution" copy={caseStudy.proposedSolution} />
          </Container>
        </section>

        <section className="py-20 sm:py-28">
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent-ink">Concept contribution</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-content sm:text-5xl">
                What the study includes
              </h2>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              <DetailList icon={<Layers3 aria-hidden="true" size={22} />} title="My role" items={caseStudy.role} />
              <DetailList icon={<Wrench aria-hidden="true" size={22} />} title="Proposed tools" items={caseStudy.tools} />
              <DetailList
                icon={<CheckCircle2 aria-hidden="true" size={22} />}
                title="Concept deliverables"
                items={caseStudy.deliverables}
              />
            </div>
          </Container>
        </section>

        <section className="border-y border-line bg-panel-soft/55 py-20 sm:py-28">
          <Container>
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent-ink">Visual direction</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-content sm:text-5xl">
                A system, not a single screen
              </h2>
              <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                These frames explain the intended experience and production direction. They are portfolio concept artifacts, not evidence of a launched product or campaign.
              </p>
            </div>

            <CaseStudyVisual caseStudy={caseStudy} />
          </Container>
        </section>

        <section className="py-20 sm:py-28">
          <Container>
            <div className="grid overflow-hidden rounded-[2rem] border border-line-strong bg-panel lg:grid-cols-2">
              <RealityBlock label="REAL NOW" title="What exists" copy={caseStudy.realNow} />
              <RealityBlock label="PROPOSED NEXT" title="What remains illustrative" copy={caseStudy.proposedNext} bordered />
            </div>

            <div className="mt-16 flex flex-col items-start justify-between gap-8 rounded-[2rem] border border-accent/25 bg-accent/[0.07] p-7 sm:p-10 lg:flex-row lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent-ink">Have a related problem?</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-content sm:text-4xl">
                  Start with the real constraint.
                </h2>
              </div>
              <Link
                href="/#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-bold text-on-accent transition hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-content"
              >
                Discuss a project like this
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function NarrativeBlock({ number, title, copy }: { number: string; title: string; copy: string }) {
  return (
    <article className="rounded-3xl border border-line bg-panel p-7 sm:p-9">
      <span className="text-sm font-bold tracking-[0.16em] text-accent-ink">{number}</span>
      <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-content">{title}</h2>
      <p className="mt-5 text-base leading-8 text-muted sm:text-lg">{copy}</p>
    </article>
  );
}

function DetailList({
  icon,
  title,
  items,
}: {
  icon: ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <article className="rounded-3xl border border-line bg-panel p-7 sm:p-8">
      <div className="grid size-11 place-items-center rounded-2xl border border-accent/25 bg-accent/10 text-accent-ink">
        {icon}
      </div>
      <h3 className="mt-6 text-2xl font-semibold tracking-[-0.035em] text-content">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-7 text-muted">
            <span aria-hidden="true" className="mt-3 size-1.5 shrink-0 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

function CaseStudyVisual({ caseStudy }: { caseStudy: CaseStudy }) {
  if (caseStudy.visualMode === "campaign") {
    return (
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {caseStudy.visualFrames.map((frame) => (
          <article key={frame.title} className="overflow-hidden rounded-3xl border border-line bg-panel">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={caseStudy.heroPath}
                alt=""
                fill
                sizes="(max-width: 767px) 100vw, 33vw"
                className="scale-[1.55] object-cover"
                style={{ objectPosition: frame.imagePosition }}
              />
            </div>
            <FrameCopy frame={frame} />
          </article>
        ))}
      </div>
    );
  }

  if (caseStudy.visualMode === "mobile") {
    return (
      <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[2rem] border border-line bg-panel p-5 sm:p-8">
          <div className="mx-auto max-w-sm rounded-[2.4rem] border border-line-strong bg-[#050806] p-3 shadow-[0_30px_80px_var(--surface-shadow)]">
            <div className="relative aspect-[9/16] overflow-hidden rounded-[1.8rem]">
              <Image
                src={caseStudy.heroPath}
                alt="Mobile-format crop of the Orbital Courier concept scene"
                fill
                sizes="384px"
                className="scale-[1.35] object-cover"
              />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-black/55 p-4 text-white backdrop-blur-md">
                <p className="text-xs font-bold tracking-[0.14em] text-emerald-300">ROUTE READY</p>
                <p className="mt-2 text-sm text-white/75">Touch-control and mission HUD direction</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
          {caseStudy.visualFrames.map((frame) => (
            <article key={frame.title} className="rounded-3xl border border-line bg-panel p-6 sm:p-7">
              <FrameCopy frame={frame} compact />
            </article>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-12 rounded-[2rem] border border-line bg-panel p-5 sm:p-8">
      <div className="grid gap-4 lg:grid-cols-3">
        {caseStudy.visualFrames.map((frame, index) => (
          <article key={frame.title} className="relative rounded-3xl border border-line-strong bg-panel-soft p-6 sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-bold tracking-[0.14em] text-accent-ink">{frame.label}</span>
              <span className="grid size-8 place-items-center rounded-full border border-accent/25 bg-accent/10 text-xs font-bold text-accent-ink">
                {index + 1}
              </span>
            </div>
            <h3 className="mt-8 text-2xl font-semibold tracking-[-0.035em] text-content">{frame.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{frame.description}</p>
          </article>
        ))}
      </div>
      <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-accent/25 bg-accent/[0.07] px-5 py-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <span className="font-semibold text-content">Human review checkpoint</span>
        <span>Low-confidence or incomplete work orders stop here before assignment.</span>
      </div>
    </div>
  );
}

function FrameCopy({
  frame,
  compact = false,
}: {
  frame: CaseStudy["visualFrames"][number];
  compact?: boolean;
}) {
  return (
    <div className={compact ? "" : "p-6 sm:p-7"}>
      <p className="text-xs font-bold tracking-[0.14em] text-accent-ink">{frame.label}</p>
      <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-content">{frame.title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{frame.description}</p>
    </div>
  );
}

function RealityBlock({
  label,
  title,
  copy,
  bordered = false,
}: {
  label: string;
  title: string;
  copy: string;
  bordered?: boolean;
}) {
  return (
    <article className={`p-7 sm:p-10 ${bordered ? "border-t border-line lg:border-l lg:border-t-0" : ""}`}>
      <p className="text-xs font-bold tracking-[0.16em] text-accent-ink">{label}</p>
      <h2 className="mt-4 text-2xl font-semibold tracking-[-0.035em] text-content">{title}</h2>
      <p className="mt-4 text-base leading-8 text-muted">{copy}</p>
    </article>
  );
}
