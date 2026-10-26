import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  summary: string;
  children: ReactNode;
};

export function LegalPage({ eyebrow, title, summary, children }: LegalPageProps) {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="pb-24 pt-32 sm:pb-32 sm:pt-40">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="rounded-[2rem] border border-line bg-panel/75 p-6 shadow-[0_28px_90px_var(--surface-shadow-soft)] sm:p-10 lg:p-14">
              <span className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent-ink">
                Draft for review. Not legally approved.
              </span>
              <p className="mt-8 text-sm font-semibold tracking-[0.18em] text-accent-ink">{eyebrow}</p>
              <h1 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.055em] text-content sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">{summary}</p>
              <p className="mt-5 rounded-2xl border border-line bg-canvas/55 px-4 py-3 text-sm leading-6 text-muted">
                Effective date: <strong className="font-semibold text-content">[REVIEW REQUIRED: effective date]</strong>
              </p>

              <article className="legal-copy mt-12 space-y-10">{children}</article>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-[-0.035em] text-content sm:text-3xl">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-8 text-muted">{children}</div>
    </section>
  );
}
