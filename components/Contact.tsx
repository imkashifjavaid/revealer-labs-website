import { Clock3, Sparkles } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 pb-24 pt-16 sm:pb-32 sm:pt-24">
      <Container>
        <Reveal className="contact-panel relative overflow-hidden rounded-[2rem] border border-accent/20 px-6 py-16 text-center sm:px-10 sm:py-20 lg:px-16">
          <div aria-hidden="true" className="contact-grid" />
          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="mx-auto grid size-13 place-items-center rounded-2xl border border-accent/25 bg-accent/10 text-accent-ink">
              <Sparkles aria-hidden="true" size={22} />
            </div>
            <p className="mt-7 text-sm font-semibold tracking-[0.18em] text-accent-ink">START A CONVERSATION</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.055em] text-content sm:text-5xl lg:text-6xl">
              Have a problem worth solving?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              Tell us what you&apos;re trying to improve, automate or create. The project enquiry form and delivery integration are coming in the next milestone.
            </p>
            <div className="mx-auto mt-9 inline-flex items-center gap-3 rounded-full border border-line-strong bg-canvas/60 px-5 py-3 text-sm font-medium text-content backdrop-blur">
              <Clock3 aria-hidden="true" size={17} className="text-accent-ink" />
              Project enquiry form coming soon
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
