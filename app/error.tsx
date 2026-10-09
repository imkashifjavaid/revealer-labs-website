"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main id="main-content" tabIndex={-1} className="grid min-h-screen place-items-center bg-canvas px-5 py-24 text-content">
      <div className="w-full max-w-2xl rounded-[2rem] border border-line bg-panel p-8 text-center shadow-[0_28px_90px_var(--surface-shadow-soft)] sm:p-12">
        <p className="text-sm font-semibold tracking-[0.18em] text-accent-ink">SOMETHING WENT WRONG</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
          The page could not be displayed.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-muted">
          Try loading this page again. If the problem continues, return to the homepage and retry later.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="min-h-12 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-content"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-line-strong px-6 py-3 text-sm font-semibold text-content hover:border-accent/55 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Return home
          </Link>
        </div>
      </div>
    </main>
  );
}
