import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { industryShowcases } from "@/lib/site-content";

export function IndustryShowcases() {
  return (
    <section aria-labelledby="industry-showcases-title" className="pb-24 pt-8 sm:pb-32 sm:pt-12">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-[0.18em] text-accent-ink">EXAMPLES</p>
          <h2
            id="industry-showcases-title"
            className="mt-4 text-balance text-4xl font-semibold tracking-[-0.05em] text-content sm:text-5xl"
          >
            Examples of What We Build
          </h2>
        </Reveal>

        <div className="mt-16 space-y-8 sm:space-y-12">
          {industryShowcases.map((showcase, index) => {
            const isReversed = index % 2 === 1;
            return (
              <Reveal
                key={showcase.title}
                className="grid overflow-hidden rounded-[2rem] border border-line bg-panel/70 transition-colors hover:border-accent/25 lg:grid-cols-2"
              >
                <div className={`preview-frame relative min-h-72 overflow-hidden sm:min-h-96 ${isReversed ? "lg:order-2" : ""}`}>
                  {showcase.videoPath ? (
                    <video
                      src={showcase.videoPath}
                      poster={showcase.previewPath}
                      aria-label={showcase.previewAlt}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="size-full object-cover"
                    />
                  ) : (
                    <Image
                      src={showcase.previewPath}
                      alt={showcase.previewAlt}
                      fill
                      sizes="(max-width: 1023px) 100vw, 50vw"
                      className="object-cover"
                    />
                  )}
                </div>

                <div className={`flex flex-col justify-center p-7 sm:p-10 lg:p-14 ${isReversed ? "lg:order-1" : ""}`}>
                  <p className="text-xs font-semibold tracking-[0.16em] text-accent-ink">{showcase.label}</p>
                  <h3 className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-content sm:text-4xl">
                    {showcase.title}
                  </h3>
                  <p className="mt-5 text-base leading-8 text-muted sm:text-lg">{showcase.description}</p>
                  <ul className="mt-7 space-y-3">
                    {showcase.capabilities.map((capability) => (
                      <li key={capability} className="flex items-center gap-3 text-sm font-medium text-content sm:text-base">
                        <span className="grid size-7 shrink-0 place-items-center rounded-full border border-accent/25 bg-accent/10 text-accent-ink">
                          <Check aria-hidden="true" size={14} strokeWidth={2.2} />
                        </span>
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
