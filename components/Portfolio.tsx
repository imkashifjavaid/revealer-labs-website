"use client";

import Image from "next/image";
import Link from "next/link";
import { BookOpenText, ExternalLink, SearchX, X } from "lucide-react";
import type { CSSProperties, KeyboardEvent as ReactKeyboardEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import {
  projectCategories,
  projects,
  type Project,
  type ProjectCategory,
} from "@/lib/site-content";

const INITIAL_VISIBLE_COUNT = 6;
const LOAD_MORE_COUNT = 3;

type SelectedCategory = ProjectCategory | "All";

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<SelectedCategory>("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);
  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const changeCategory = (category: SelectedCategory) => {
    setSelectedCategory(category);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  const openProject = (project: Project) => {
    returnFocusRef.current = document.activeElement as HTMLElement | null;
    setSelectedProject(project);
  };

  const closeProject = () => setSelectedProject(null);

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusDialog = window.requestAnimationFrame(() => {
      dialogRef.current
        ?.querySelector<HTMLElement>(
          "button, a[href], video[controls], [tabindex]:not([tabindex='-1'])",
        )
        ?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeProject();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          "button:not([disabled]), a[href], video[controls], [tabindex]:not([tabindex='-1'])",
        ),
      ).filter((element) => element.offsetParent !== null);

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey && activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      } else if (!dialogRef.current.contains(activeElement)) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusDialog);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      returnFocusRef.current?.focus();
    };
  }, [selectedProject]);

  return (
    <section id="portfolio" className="scroll-mt-20 py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="PORTFOLIO"
            title="Ideas Shaped Into Digital Work"
            description="A look at focused digital work Revealer Labs can shape—from useful web platforms to automated workflows, interactive concepts and visual showcases."
            align="center"
          />

          <p className="mx-auto mt-7 max-w-3xl text-center text-base leading-7 text-muted">
            Each entry is labelled by its real status—live website, concept demo, visual showcase, concept campaign or functional prototype.
          </p>

          <div
            className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2"
            role="group"
            aria-label="Filter portfolio projects"
          >
          {projectCategories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => changeCategory(category)}
                className={`rounded-full border px-4 py-2.5 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none sm:px-5 ${
                  isActive
                    ? "border-accent bg-accent text-on-accent shadow-[0_8px_26px_var(--accent-glow)]"
                    : "border-line-strong bg-content/[0.025] text-muted hover:border-accent/40 hover:text-content"
                }`}
              >
                {category}
              </button>
            );
          })}
          </div>
        </Reveal>

        <p className="sr-only" aria-live="polite">
          Showing {visibleProjects.length} of {filteredProjects.length} projects in {selectedCategory}.
        </p>

        {visibleProjects.length > 0 ? (
          <Reveal className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project, index) => (
              <article
                key={project.id}
                className="portfolio-card reveal-child group relative overflow-hidden rounded-3xl border border-line bg-panel/80 transition duration-300 hover:-translate-y-1 hover:border-accent/35 focus-within:border-accent/35 motion-reduce:transform-none"
                style={{ "--reveal-order": index } as CSSProperties}
              >
                <button
                  type="button"
                  aria-haspopup="dialog"
                  aria-label={`View details for ${project.title}`}
                  onClick={() => openProject(project)}
                  className="absolute inset-0 z-10 rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                />
                <div className="preview-frame relative aspect-[16/10] overflow-hidden border-b border-line">
                  <Image
                    src={project.previewPath}
                    alt={project.previewAlt}
                    fill
                    preload={index === 0}
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className={`${project.previewFit === "contain" ? "object-contain" : "object-cover"} transition duration-500 group-hover:scale-[1.025] motion-reduce:transform-none`}
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-accent/25 bg-panel/90 px-3 py-1.5 text-xs font-semibold tracking-[0.08em] text-accent-ink backdrop-blur-md">
                    {project.demoStatus}
                  </span>
                </div>
                <div className="p-6 sm:p-7">
                  <p className="text-xs font-semibold tracking-[0.14em] text-accent-ink">
                    {project.category}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-content">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-muted">{project.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} tags`}>
                    {project.technologies.map((technology) => (
                      <li
                        key={technology}
                        className="rounded-full border border-line px-3 py-1.5 text-xs font-medium text-subtle"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                  {project.caseStudySlug ? (
                    <Link
                      href={`/work/${project.caseStudySlug}`}
                      className="relative z-20 mt-6 inline-flex items-center gap-2 rounded-full border border-accent/35 bg-accent/10 px-4 py-2.5 text-sm font-semibold text-accent-ink transition-colors hover:border-accent/65 hover:bg-accent/15 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent"
                    >
                      <BookOpenText aria-hidden="true" size={16} />
                      {project.caseStudyLinkLabel ?? "Read concept case study"}
                    </Link>
                  ) : null}
                </div>
              </article>
            ))}
          </Reveal>
        ) : (
          <div className="mt-12 rounded-3xl border border-dashed border-line-strong bg-panel/60 px-6 py-14 text-center">
            <SearchX aria-hidden="true" className="mx-auto text-accent-ink" size={28} />
            <h3 className="mt-5 text-xl font-semibold text-content">No concepts in this category yet</h3>
            <p className="mx-auto mt-2 max-w-md text-base leading-7 text-muted">
              Choose another category to explore the current concept collection.
            </p>
          </div>
        )}

        {hasMore ? (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((count) => count + LOAD_MORE_COUNT)}
              className="rounded-full border border-accent/35 bg-accent/8 px-6 py-3 text-sm font-semibold text-content transition hover:border-accent/65 hover:bg-accent/13 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Show More
            </button>
          </div>
        ) : null}
      </Container>

      {selectedProject ? (
        <div
          className="dialog-backdrop fixed inset-0 z-[100] grid place-items-center overflow-y-auto p-4 backdrop-blur-md sm:p-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeProject();
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            aria-describedby="project-dialog-summary"
            className="relative my-auto w-full max-w-5xl overflow-hidden rounded-[2rem] border border-line-strong bg-panel shadow-[0_40px_120px_var(--surface-shadow)]"
          >
            <button
              type="button"
              aria-label="Close project details"
              onClick={closeProject}
              className="absolute right-4 top-4 z-20 grid size-11 place-items-center rounded-full border border-line-strong bg-canvas/80 text-content backdrop-blur transition hover:border-accent/55 hover:bg-accent/12 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <X aria-hidden="true" size={19} />
            </button>

            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              {selectedProject.videoPath ? (
                <ProjectVideo project={selectedProject} />
              ) : selectedProject.galleryImages?.length ? (
                <ProjectGallery key={selectedProject.id} project={selectedProject} />
              ) : (
                <div className="preview-frame relative min-h-64 border-b border-line sm:min-h-96 lg:min-h-[38rem] lg:border-b-0 lg:border-r">
                  <Image
                    src={selectedProject.previewPath}
                    alt={selectedProject.previewAlt}
                    fill
                    sizes="(max-width: 1023px) 100vw, 55vw"
                    className={selectedProject.previewFit === "contain" ? "object-contain" : "object-cover"}
                  />
                </div>
              )}

              <div className="max-h-[82vh] overflow-y-auto p-6 sm:p-9 lg:p-11">
                <span className="inline-flex rounded-full border border-accent/25 bg-accent/10 px-3 py-1.5 text-xs font-semibold tracking-[0.1em] text-accent-ink">
                  {selectedProject.demoStatus}
                </span>
                <p className="mt-6 text-xs font-semibold tracking-[0.14em] text-accent-ink">
                  {selectedProject.category}
                </p>
                <h2
                  id="project-dialog-title"
                  className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-content sm:text-4xl"
                >
                  {selectedProject.title}
                </h2>
                <p id="project-dialog-summary" className="mt-5 text-base leading-8 text-muted">
                  {selectedProject.summary}
                </p>

                <div className="mt-8">
                  <h3 className="text-sm font-semibold tracking-[0.12em] text-content">
                    {selectedProject.detailHeading ?? "FEATURE DIRECTION"}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {selectedProject.intendedFeatures.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm leading-6 text-muted">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <h3 className="text-sm font-semibold tracking-[0.12em] text-content">
                    {selectedProject.tagHeading ?? "TECHNOLOGY"}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {selectedProject.technologies.map((technology) => (
                      <li
                        key={technology}
                        className="rounded-full border border-line-strong bg-content/[0.025] px-3 py-1.5 text-xs font-medium text-muted"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedProject.caseStudySlug || selectedProject.externalUrl ? (
                  <div className="mt-9 flex flex-wrap gap-3">
                    {selectedProject.caseStudySlug ? (
                      <Link
                        href={`/work/${selectedProject.caseStudySlug}`}
                        className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-content"
                      >
                        <BookOpenText aria-hidden="true" size={16} />
                        {selectedProject.caseStudyLinkLabel ?? "Read concept case study"}
                      </Link>
                    ) : null}
                    {selectedProject.externalUrl ? (
                      <a
                        href={selectedProject.externalUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-sm font-semibold text-content focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                      >
                        {selectedProject.externalLinkLabel ?? "Visit Project"}
                        <ExternalLink aria-hidden="true" size={16} />
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function ProjectVideo({ project }: { project: Project }) {
  if (!project.videoPath) return null;

  return (
    <div className="preview-frame border-b border-line p-3 sm:p-5 lg:border-b-0 lg:border-r">
      <div className="mx-auto max-w-sm overflow-hidden rounded-2xl border border-line-strong bg-black shadow-[0_24px_70px_var(--surface-shadow)]">
        <video
          controls
          preload="none"
          playsInline
          poster={project.videoPosterPath ?? project.previewPath}
          aria-label={project.videoLabel ?? `${project.title} video`}
          className="aspect-[9/16] w-full bg-black object-contain"
        >
          <source src={project.videoPath} type="video/mp4" />
          Your browser does not support HTML video playback.
        </video>
      </div>
      <div className="mx-auto mt-4 flex max-w-sm flex-wrap items-center justify-between gap-2 px-1 text-xs font-semibold tracking-[0.08em] text-subtle">
        <span>FINAL VERTICAL CONCEPT VIDEO</span>
        <span>UGC-STYLE AD · 00:08</span>
      </div>
    </div>
  );
}

function ProjectGallery({ project }: { project: Project }) {
  const images = project.galleryImages ?? [];
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbnailRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeImage = images[activeIndex];

  if (!activeImage) return null;

  const selectImage = (index: number, moveFocus = false) => {
    setActiveIndex(index);
    if (moveFocus) thumbnailRefs.current[index]?.focus();
  };

  const handleThumbnailKeyDown = (
    event: ReactKeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let nextIndex: number | null = null;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % images.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (index - 1 + images.length) % images.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = images.length - 1;
    }

    if (nextIndex === null) return;
    event.preventDefault();
    selectImage(nextIndex, true);
  };

  return (
    <div className="preview-frame border-b border-line p-3 sm:p-4 lg:border-b-0 lg:border-r">
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-black/45">
        <Image
          src={activeImage.path}
          alt={activeImage.alt}
          fill
          sizes="(max-width: 1023px) 100vw, 55vw"
          className="object-contain"
        />
        <span
          aria-hidden="true"
          className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/65 px-3 py-1 font-mono text-xs font-semibold tracking-wider text-white backdrop-blur-sm"
        >
          {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </span>
      </div>

      <div
        role="group"
        aria-label={`${project.title} image gallery`}
        className="mt-3 grid grid-cols-3 gap-2 sm:gap-3"
      >
        {images.map((image, index) => {
          const isActive = activeIndex === index;

          return (
            <button
              key={image.path}
              ref={(element) => {
                thumbnailRefs.current[index] = element;
              }}
              type="button"
              aria-label={`View ${index + 1} of ${images.length}: ${image.caption}`}
              aria-pressed={isActive}
              onClick={() => selectImage(index)}
              onKeyDown={(event) => handleThumbnailKeyDown(event, index)}
              className={`relative aspect-video overflow-hidden rounded-xl border bg-black/35 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                isActive ? "border-accent" : "border-line-strong hover:border-accent/55"
              }`}
            >
              <Image
                src={image.path}
                alt=""
                fill
                sizes="(max-width: 1023px) 30vw, 16vw"
                className="object-contain"
              />
              <span
                aria-hidden="true"
                className={`absolute bottom-1.5 left-1.5 grid size-6 place-items-center rounded-md border font-mono text-[10px] font-bold backdrop-blur-sm sm:bottom-2 sm:left-2 ${
                  isActive
                    ? "border-accent/60 bg-accent text-accent-contrast"
                    : "border-white/20 bg-black/65 text-white"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-3 px-1 text-sm leading-6 text-muted">
        <p>{activeImage.caption}</p>
        <p className="sr-only" aria-live="polite">
          Showing image {activeIndex + 1} of {images.length}: {activeImage.caption}
        </p>
      </div>
    </div>
  );
}
