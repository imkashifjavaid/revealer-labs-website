import { CheckCircle2, Code2, Lightbulb, Wrench } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";

const principles = [
  { label: "Understand the real constraint", icon: Lightbulb },
  { label: "Build the right-sized solution", icon: Code2 },
  { label: "Make it clear and maintainable", icon: Wrench },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24 sm:py-32">
      <Container>
        <div className="about-panel grid overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[#160A0E]/75 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-7 sm:p-10 lg:p-14">
            <SectionHeader eyebrow="ABOUT" title="Code with context." />
            <p className="mt-6 max-w-xl text-base leading-8 text-[#B8A8B6] sm:text-lg">
              Revealer Labs is a digital studio focused on coding and practical problem-solving. We turn unclear, manual or technically demanding challenges into useful digital products and dependable systems.
            </p>
            <p className="mt-4 max-w-xl text-base leading-8 text-[#B8A8B6] sm:text-lg">
              The work is shaped around the need—not a template—so the result stays focused, understandable and ready to evolve.
            </p>
          </div>

          <div className="relative border-t border-white/[0.08] bg-white/[0.018] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-14">
            <div aria-hidden="true" className="absolute right-0 top-0 size-48 rounded-full bg-[#FF1B56]/10 blur-3xl" />
            <p className="relative text-sm font-semibold tracking-[0.16em] text-[#8f7e8a]">HOW WE THINK</p>
            <ul className="relative mt-7 space-y-3">
              {principles.map((principle) => {
                const Icon = principle.icon;
                return (
                  <li
                    key={principle.label}
                    className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-[#0E0508]/55 p-4 text-base font-medium text-[#e4d9e1]"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#FF1B56]/10 text-[#ff5f8a]">
                      <Icon aria-hidden="true" size={19} />
                    </span>
                    {principle.label}
                    <CheckCircle2 aria-hidden="true" className="ml-auto text-white/20" size={18} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
