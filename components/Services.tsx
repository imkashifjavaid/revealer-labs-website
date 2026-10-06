import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { services } from "@/lib/site-content";

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-24 sm:py-32">
      <Container>
        <SectionHeader
          eyebrow="SERVICES"
          title="Useful technology, thoughtfully built."
          description="From the customer-facing experience to the systems behind it, every solution starts with the problem it needs to solve."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="service-card group relative min-h-72 overflow-hidden rounded-3xl border border-white/[0.09] bg-[#160A0E]/80 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#FF1B56]/35 motion-reduce:transform-none sm:p-8"
              >
                <span className="absolute right-6 top-6 text-xs font-semibold tracking-[0.16em] text-white/20">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="grid size-12 place-items-center rounded-2xl border border-[#FF1B56]/25 bg-[#FF1B56]/10 text-[#ff5f8a] transition-colors group-hover:border-[#FF1B56]/45 group-hover:bg-[#FF1B56]/15">
                  <Icon aria-hidden="true" size={23} strokeWidth={1.7} />
                </div>
                <h3 className="mt-8 text-xl font-semibold tracking-[-0.03em] text-[#F9F2F7]">
                  {service.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-[#B8A8B6]">{service.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${service.title} skills`}>
                  {service.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-xs font-medium text-[#bdaeba]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
