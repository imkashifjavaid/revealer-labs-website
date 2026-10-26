import { Container } from "@/components/Container";
import { BrandLogo } from "@/components/BrandLogo";
import { footerNavigationItems } from "@/lib/site-content";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <Link
          href="/#home"
          aria-label="Revealer Labs home"
          className="rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <BrandLogo compact />
        </Link>
        <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          {footerNavigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-subtle transition-colors hover:text-content focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="text-center text-sm text-subtle sm:text-right">
          © {new Date().getFullYear()} Revealer Labs
        </p>
      </Container>
    </footer>
  );
}
