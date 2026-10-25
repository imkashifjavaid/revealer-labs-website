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
    return { title: "Project Case Study" };
  }

  const description =
    caseStudy.metadataDescription ??
    caseStudy.summary;

  return {
    title: caseStudy.title,
    description,
    alternates: { canonical: `/work/${caseStudy.slug}` },
    openGraph: {
      type: "article",
      title: `${caseStudy.title} | Revealer Labs`,
      description,
      url: `/work/${caseStudy.slug}`,
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${caseStudy.title} | Revealer Labs`,
      description,
      images: ["/twitter-image"],
    },
  };
}

export default async function CaseStudyRoute({ params }: CaseStudyRouteProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) notFound();

  return <CaseStudyPage caseStudy={caseStudy} />;
}
