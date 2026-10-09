import Link from "next/link";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="grid min-h-[75vh] place-items-center px-5 pb-24 pt-32">
        <Container>
          <div className="mx-auto max-w-2xl rounded-[2rem] border border-line bg-panel/80 p-8 text-center shadow-[0_28px_90px_var(--surface-shadow-soft)] sm:p-12">
            <p className="text-sm font-semibold tracking-[0.18em] text-accent-ink">404 · PAGE NOT FOUND</p>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-content sm:text-5xl">
              This route does not exist.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-muted">
              The page may have moved, or the address may be incomplete. Return to the homepage to continue exploring Revealer Labs.
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-content"
            >
              Return home
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
