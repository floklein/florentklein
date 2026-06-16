import { ArrowUpRight, ExternalLink, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Apple } from "@/components/apple";
import { GitHub } from "@/components/github";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { experiences } from "@/lib/experiences";
import { links } from "@/lib/links";
import { type FeaturedProject, type Project, projects } from "@/lib/projects";
import { texts } from "@/lib/texts";
import { cn } from "@/lib/utils";

type FeaturedProjectItem = Project & { featured: FeaturedProject };

const featuredKickerClasses: Record<FeaturedProject["tone"], string> = {
  cinema: "text-red-700 dark:text-red-300",
  health: "text-emerald-700 dark:text-emerald-300",
};

const featuredTagClasses: Record<FeaturedProject["tone"], string> = {
  cinema:
    "border-transparent bg-red-100/80 text-red-950 [a&]:hover:bg-red-100 dark:bg-red-950/70 dark:text-red-100 dark:[a&]:hover:bg-red-950",
  health:
    "border-transparent bg-emerald-100/80 text-emerald-950 [a&]:hover:bg-emerald-100 dark:bg-emerald-950/70 dark:text-emerald-100 dark:[a&]:hover:bg-emerald-950",
};

function delay(ms: number): CSSProperties {
  return { transitionDelay: `${ms}ms` };
}

function hasFeaturedProject(project: Project): project is FeaturedProjectItem {
  return project.featured !== undefined;
}

function getProjectHref(project: Project) {
  return project.appStore ?? project.url ?? project.github;
}

function ProjectTags({ project }: { project: Project }) {
  return (
    <>
      {project.tags.map(([tagName, tagUrl]) => (
        <Badge
          key={`${project.name}-${tagName}`}
          variant="secondary"
          className={cn(
            "meta h-[1.375rem] rounded-md px-2 text-[0.6875rem] leading-none tracking-tight",
            project.featured
              ? featuredTagClasses[project.featured.tone]
              : "border-border bg-transparent text-muted-foreground [a&]:hover:border-foreground/25 [a&]:hover:bg-accent [a&]:hover:text-foreground",
          )}
          asChild
        >
          <Link target="_blank" rel="noopener noreferrer" href={tagUrl}>
            {tagName}
          </Link>
        </Badge>
      ))}
    </>
  );
}

function SectionHeader({
  title,
  meta,
  children,
}: {
  title: string;
  meta: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="border-border border-t">
      <div className="px-5 pt-12 pb-6 sm:px-8 sm:pt-16">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="display font-medium text-2xl sm:text-3xl">{title}</h2>
          <span className="meta shrink-0 text-[0.6875rem] text-muted-foreground uppercase tracking-wider">
            {meta}
          </span>
        </div>
        {children && (
          <p className="mt-2 max-w-xl text-muted-foreground text-sm leading-relaxed">
            {children}
          </p>
        )}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="px-5 sm:px-8">
      <div className="max-w-2xl py-16 sm:py-24">
        <p
          className="meta rise flex items-center gap-2.5 text-muted-foreground text-xs"
          style={delay(0)}
        >
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground/60 motion-reduce:hidden" />
            <span className="relative inline-flex size-1.5 rounded-full bg-foreground" />
          </span>
          <span>Ouvert aux opportunités</span>
          <span aria-hidden className="text-border">
            /
          </span>
          <span>Paris, France</span>
        </p>
        <h1
          className="display rise mt-6 text-balance font-medium text-[clamp(2.25rem,1.5rem+3vw,3.5rem)] leading-[1.05]"
          style={delay(70)}
        >
          {texts.title}
        </h1>
        <p
          className="rise mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed"
          style={delay(140)}
        >
          {texts.description}
        </p>
        <div
          className="rise mt-9 flex flex-wrap items-center gap-2.5"
          style={delay(210)}
        >
          <Button asChild>
            <Link href={links.email}>
              <Mail className="size-4" />
              Me contacter
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={links.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="px-5 pt-2 pb-14 sm:px-8 sm:pb-20">
      <ol className="relative ml-[3px] border-border border-l">
        {experiences.map((experience, index) => (
          <li
            key={`${experience.title}-${experience.startDate}`}
            className="rise relative pb-10 pl-7 last:pb-0 sm:pl-9"
            style={delay(Math.min(index * 60, 240))}
          >
            <span
              className={cn(
                "absolute top-1.5 left-[-5px] size-2.5 rounded-full border-2 border-background",
                index === 0 ? "bg-foreground" : "bg-muted-foreground/40",
              )}
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-medium text-base">{experience.title}</h3>
              <span className="meta text-muted-foreground text-xs">
                {experience.startDate} — {experience.endDate}
              </span>
            </div>
            <Link
              href={experience.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-0.5 inline-flex w-fit items-center gap-1 text-muted-foreground text-sm underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              {experience.company}
            </Link>
            <ul className="mt-3.5 space-y-1.5">
              {experience.description.map((description) => (
                <li
                  key={description}
                  className="flex gap-2.5 text-muted-foreground text-sm leading-relaxed"
                >
                  <span
                    aria-hidden
                    className="select-none text-muted-foreground/50"
                  >
                    —
                  </span>
                  <span>{description}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}

function FeaturedProjectMedia({
  featured,
  projectName,
  className,
}: {
  featured: FeaturedProject;
  projectName: string;
  className?: string;
}) {
  const imageClassName =
    "h-auto w-full max-w-full select-none transition-transform duration-500 ease-out group-hover:scale-[1.015]";

  return (
    <div
      className={cn(
        "relative flex min-h-64 items-center overflow-visible sm:min-h-80 lg:min-h-96",
        featured.imagePosition === "left" ? "justify-end" : "justify-start",
        className,
      )}
    >
      <Image
        src={featured.lightImage}
        alt={featured.imageAlt}
        width={1920}
        height={1440}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className={cn("block dark:hidden", imageClassName)}
        priority={projectName === "MacGuffin"}
      />
      <Image
        src={featured.darkImage}
        alt={featured.imageAlt}
        width={1920}
        height={1440}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className={cn("hidden dark:block", imageClassName)}
        priority={projectName === "MacGuffin"}
      />
    </div>
  );
}

function FeaturedProjectCard({
  project,
  style,
}: {
  project: FeaturedProjectItem;
  style?: CSSProperties;
}) {
  const href = getProjectHref(project);

  return (
    <article
      className="rise group relative border-border border-t"
      style={style}
    >
      <div className="grid gap-8 px-5 py-12 sm:px-8 lg:min-h-[360px] lg:grid-cols-2 lg:items-center lg:gap-14">
        <div
          className={cn(
            "max-w-lg space-y-5",
            project.featured.imagePosition === "left"
              ? "lg:order-2"
              : "lg:ml-auto",
          )}
        >
          <div className="space-y-3">
            <p
              className={cn(
                "font-semibold text-[0.6875rem] uppercase leading-none tracking-[0.18em]",
                featuredKickerClasses[project.featured.tone],
              )}
            >
              {project.featured.kicker}
            </p>
            <h3 className="display font-semibold text-4xl sm:text-5xl">
              {project.name}
            </h3>
            <p className="max-w-md text-base text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <ProjectTags project={project} />
          </div>
          {href && (
            <Button className="mt-2 gap-2" asChild>
              <Link target="_blank" rel="noopener noreferrer" href={href}>
                {project.appStore && <Apple />}
                <span>{project.featured.ctaLabel}</span>
                {!project.appStore && <ArrowUpRight className="size-4" />}
              </Link>
            </Button>
          )}
        </div>
        <FeaturedProjectMedia
          featured={project.featured}
          projectName={project.name}
          className={cn(
            project.featured.imagePosition === "left" && "lg:order-1",
          )}
        />
      </div>
    </article>
  );
}

function ProjectCell({
  project,
  style,
}: {
  project: Project;
  style?: CSSProperties;
}) {
  return (
    <li
      className="rise group relative flex flex-col gap-4 border-border border-b px-5 py-6 transition-colors duration-300 hover:bg-accent/40 sm:px-8 sm:odd:border-r"
      style={style}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1.5">
          <h3 className="font-medium text-base leading-none">{project.name}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>
        </div>
        <div className="-mt-1.5 -mr-1.5 flex shrink-0 items-center">
          {project.github && (
            <Button variant="ghost" size="icon" className="size-8" asChild>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={project.github}
                aria-label={`${project.name} sur GitHub`}
              >
                <GitHub />
              </Link>
            </Button>
          )}
          {project.appStore && (
            <Button variant="ghost" size="icon" className="size-8" asChild>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={project.appStore}
                aria-label={`${project.name} sur l'App Store`}
              >
                <Apple />
              </Link>
            </Button>
          )}
          {project.url && (
            <Button variant="ghost" size="icon" className="size-8" asChild>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={project.url}
                aria-label={`Visiter ${project.name}`}
              >
                <ExternalLink className="size-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
      <div className="mt-auto flex flex-wrap gap-1.5">
        <ProjectTags project={project} />
      </div>
    </li>
  );
}

export default function Home() {
  const featuredProjects = projects.filter(hasFeaturedProject);
  const regularProjects = projects.filter((project) => !project.featured);

  return (
    <main>
      <Hero />

      <SectionHeader title="Expérience" meta="2019 — Aujourd'hui" />
      <Experience />

      <SectionHeader title="Projets" meta={`${projects.length} projets`}>
        Une sélection de projets personnels réalisés avec React et TypeScript,
        et auto-déployés avec Coolify.
      </SectionHeader>
      <section className="pb-24 sm:pb-28">
        {featuredProjects.map((project, index) => (
          <FeaturedProjectCard
            key={project.name}
            project={project}
            style={delay(index * 80)}
          />
        ))}
        <ul className="grid grid-cols-1 border-border border-t sm:grid-cols-2">
          {regularProjects.map((project, index) => (
            <ProjectCell
              key={project.name}
              project={project}
              style={delay(Math.min(index * 40, 240))}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
