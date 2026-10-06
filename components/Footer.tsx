import { Container } from "@/components/Container";
import { navigationItems } from "@/lib/site-content";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-8">
      <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <a
          href="#home"
          className="text-base font-semibold tracking-[-0.03em] text-[#F9F2F7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF1B56]"
        >
          Revealer Labs
        </a>
        <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[#9d8d99] transition-colors hover:text-[#F9F2F7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF1B56]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <p className="text-center text-sm text-[#7f707b] sm:text-right">
          © {new Date().getFullYear()} Revealer Labs
        </p>
      </Container>
    </footer>
  );
}
