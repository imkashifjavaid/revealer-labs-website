import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/CaseStudyPage";
import { caseStudies, getCaseStudy } from "@/lib/site-content";

type CaseStudyRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({ params }: CaseStudyRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return { title: "Concept Case Study | Revealer Labs" };
  }

  return {
    title: `${caseStudy.title} | Revealer Labs`,
    description: `${caseStudy.summary} Concept demo; not completed client work.`,
  };
}

export default async function CaseStudyRoute({ params }: CaseStudyRouteProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) notFound();

  return <CaseStudyPage caseStudy={caseStudy} />;
}
