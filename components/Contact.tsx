import { MessageSquareText, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 pb-24 pt-16 sm:pb-32 sm:pt-24">
      <Container>
        <Reveal className="contact-panel relative overflow-hidden rounded-[2rem] border border-accent/20 px-5 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-16">
          <div aria-hidden="true" className="contact-grid" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-14">
            <div className="pt-2 lg:sticky lg:top-28">
              <div className="grid size-13 place-items-center rounded-2xl border border-accent/25 bg-accent/10 text-accent-ink">
                <MessageSquareText aria-hidden="true" size={22} />
              </div>
              <p className="mt-7 text-sm font-semibold tracking-[0.18em] text-accent-ink">
                CONTACT
              </p>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.055em] text-content sm:text-5xl">
                Tell us what you need.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
                Tell us what you want to build, fix or improve. Add any background that will help us understand the request.
              </p>
              <div className="mt-8 flex max-w-md items-start gap-3 rounded-2xl border border-line bg-canvas/45 p-4 text-sm leading-6 text-muted backdrop-blur">
                <ShieldCheck aria-hidden="true" className="mt-0.5 shrink-0 text-accent-ink" size={18} />
                The online form appears only when email delivery is configured. Until then, use the verified email or WhatsApp links.
              </div>
            </div>

            <ContactForm />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
