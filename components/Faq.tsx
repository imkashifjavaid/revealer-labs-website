"use client";

import { ChevronDown } from "lucide-react";
import type { CSSProperties } from "react";
import { useState } from "react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { faqGroups } from "@/lib/site-content";

export function Faq() {
  const [openGroups, setOpenGroups] = useState<Set<string>>(
    () => new Set([faqGroups[0]?.id]),
  );
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());

  const toggle = (
    id: string,
    setter: React.Dispatch<React.SetStateAction<Set<string>>>,
  ) => {
    setter((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section id="faq" className="scroll-mt-20 py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Frequently asked questions"
            title="Clear Answers Before We Start"
            description="A practical overview of services, delivery and handover. Project-specific details are agreed together before work begins."
          />
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-4xl space-y-4">
          {faqGroups.map((group, groupIndex) => {
            const isGroupOpen = openGroups.has(group.id);
            const groupButtonId = `faq-group-button-${group.id}`;
            const groupPanelId = `faq-group-panel-${group.id}`;

            return (
              <div
                key={group.id}
                className="reveal-child overflow-hidden rounded-3xl border border-line bg-panel shadow-[0_20px_70px_rgba(18,4,10,0.12)]"
                style={{ "--reveal-order": groupIndex } as CSSProperties}
              >
                <h3>
                  <button
                    id={groupButtonId}
                    type="button"
                    aria-expanded={isGroupOpen}
                    aria-controls={groupPanelId}
                    onClick={() => toggle(group.id, setOpenGroups)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left text-lg font-semibold text-content transition-colors hover:bg-content/[0.035] focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-accent sm:px-7"
                  >
                    {group.title}
                    <ChevronDown
                      aria-hidden="true"
                      className={`size-5 shrink-0 text-accent transition-transform duration-200 ${isGroupOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </h3>

                <div
                  id={groupPanelId}
                  role="region"
                  aria-labelledby={groupButtonId}
                  aria-hidden={!isGroupOpen}
                  inert={!isGroupOpen}
                  className={`accordion-grid ${isGroupOpen ? "is-open" : ""}`}
                >
                  <div className="overflow-hidden">
                    <div className="space-y-2 border-t border-line p-3 sm:p-4">
                      {group.questions.map((item) => {
                        const isQuestionOpen = openQuestions.has(item.id);
                        const questionButtonId = `faq-question-button-${item.id}`;
                        const answerPanelId = `faq-answer-panel-${item.id}`;

                        return (
                          <div key={item.id} className="rounded-2xl bg-content/[0.025]">
                            <h4>
                              <button
                                id={questionButtonId}
                                type="button"
                                aria-expanded={isQuestionOpen}
                                aria-controls={answerPanelId}
                                onClick={() => toggle(item.id, setOpenQuestions)}
                                className="flex w-full items-center justify-between gap-4 rounded-2xl px-4 py-4 text-left font-medium text-content transition-colors hover:bg-content/[0.035] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent sm:px-5"
                              >
                                {item.question}
                                <ChevronDown
                                  aria-hidden="true"
                                  className={`size-4 shrink-0 text-accent-ink transition-transform duration-200 ${isQuestionOpen ? "rotate-180" : ""}`}
                                />
                              </button>
                            </h4>
                            <div
                              id={answerPanelId}
                              role="region"
                              aria-labelledby={questionButtonId}
                              aria-hidden={!isQuestionOpen}
                              className={`accordion-grid ${isQuestionOpen ? "is-open" : ""}`}
                            >
                              <div className="overflow-hidden">
                                <p className="px-4 pb-5 text-sm leading-7 text-muted sm:px-5 sm:text-base">
                                  {item.answer}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
