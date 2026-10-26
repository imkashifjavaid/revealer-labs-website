import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { services } from "@/lib/site-content";
import type { CSSProperties } from "react";

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="SERVICES"
            title="What We Can Help With"
            description="New websites, automation, internal tools, game prototypes and support for systems you already use."
            align="center"
          />
        </Reveal>

        <Reveal className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="service-card reveal-child group relative min-h-72 overflow-hidden rounded-3xl border border-line bg-panel/80 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-accent/35 focus-within:border-accent/35 motion-reduce:transform-none sm:p-8"
                style={{ "--reveal-order": index } as CSSProperties}
              >
                <span className="absolute right-6 top-6 text-xs font-semibold tracking-[0.16em] text-content/25">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="grid size-12 place-items-center rounded-2xl border border-accent/25 bg-accent/10 text-accent-ink transition-colors group-hover:border-accent/45 group-hover:bg-accent/15">
                  <Icon aria-hidden="true" size={23} strokeWidth={1.7} />
                </div>
                <h3 className="mt-8 text-xl font-semibold tracking-[-0.03em] text-content">
                  {service.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-muted">{service.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${service.title} skills`}>
                  {service.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-line bg-content/[0.025] px-3 py-1.5 text-xs font-medium text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
