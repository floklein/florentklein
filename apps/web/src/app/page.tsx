import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Apple } from "@/components/apple";
import { GitHub } from "@/components/github";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
    "bg-red-100/80 text-red-950 [a&]:hover:bg-red-100 dark:bg-red-950/70 dark:text-red-100 dark:[a&]:hover:bg-red-950",
  health:
    "bg-emerald-100/80 text-emerald-950 [a&]:hover:bg-emerald-100 dark:bg-emerald-950/70 dark:text-emerald-100 dark:[a&]:hover:bg-emerald-950",
};

const featuredImageClassName = "w-full max-w-full";

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
            "h-5 rounded-md px-2 text-[11px] leading-none",
            project.featured && featuredTagClasses[project.featured.tone],
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

function FeaturedProjectMedia({
  featured,
  projectName,
  className,
}: {
  featured: FeaturedProject;
  projectName: string;
  className?: string;
}) {
  const imageClassName = cn(
    "h-auto select-none transition-transform duration-250 group-hover:scale-[1.01]",
    featuredImageClassName,
  );

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
        sizes="(min-width: 1024px) 52vw, 100vw"
        className={cn("block dark:hidden", imageClassName)}
        priority={projectName === "MacGuffin"}
      />
      <Image
        src={featured.darkImage}
        alt={featured.imageAlt}
        width={1920}
        height={1440}
        sizes="(min-width: 1024px) 52vw, 100vw"
        className={cn("hidden dark:block", imageClassName)}
        priority={projectName === "MacGuffin"}
      />
    </div>
  );
}

function FeaturedProjectCard({ project }: { project: FeaturedProjectItem }) {
  const href = getProjectHref(project);

  return (
    <Card className="group overflow-visible">
      <div className="grid gap-8 px-6 lg:min-h-[420px] lg:grid-cols-2 lg:items-center lg:gap-12">
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
                "font-semibold text-[0.68rem] uppercase leading-none tracking-[0.18em]",
                featuredKickerClasses[project.featured.tone],
              )}
            >
              {project.featured.kicker}
            </p>
            <h3 className="font-semibold text-4xl leading-none sm:text-5xl">
              {project.name}
            </h3>
            <p className="text-base text-muted-foreground leading-7 sm:text-lg">
              {project.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <ProjectTags project={project} />
          </div>
          {href && (
            <Button className="mt-2 h-9 gap-2 rounded-md px-4" asChild>
              <Link target="_blank" rel="noopener noreferrer" href={href}>
                {project.appStore && <Apple />}
                <span>{project.featured.ctaLabel}</span>
                {!project.appStore && <ExternalLink className="size-3.5" />}
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
    </Card>
  );
}

export default function Home() {
  const featuredProjects = projects.filter(hasFeaturedProject);
  const regularProjects = projects.filter((project) => !project.featured);

  return (
    <div className="container mx-auto px-4 pt-8 pb-20 sm:px-8 sm:pt-16 sm:pb-24">
      <div className="space-y-6 py-8 sm:py-16">
        <div className="max-w-lg space-y-3">
          <h1 className="font-medium text-4xl">{texts.title}</h1>
          <p className="text-lg text-muted-foreground">{texts.description}</p>
        </div>
        <div className="flex items-center gap-2">
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
          <Button asChild>
            <Link href={links.email}>Me contacter</Link>
          </Button>
        </div>
      </div>
      <div className="space-y-8 py-8 sm:py-16">
        <h2 className="font-medium text-2xl">Expérience</h2>
        <div>
          {experiences.map((experience, index) => (
            <div
              key={`${experience.title}-${experience.company}`}
              className="flex"
            >
              <div className="flex flex-col items-center pr-5 pl-3">
                <Separator orientation="vertical" className="h-7!" />
                <div className="h-2 w-2 rounded-full bg-primary" />
                <Separator orientation="vertical" className="flex-1" />
              </div>
              <Card
                className={cn(
                  "flex-1",
                  index !== experiences.length - 1 && "mb-6",
                )}
              >
                <CardHeader>
                  <CardTitle>{experience.title}</CardTitle>
                  <CardDescription>
                    <Link
                      href={experience.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {experience.company}
                    </Link>
                  </CardDescription>
                  <CardAction>
                    <p className="text-muted-foreground text-xs">
                      {experience.startDate} - {experience.endDate}
                    </p>
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <ul className="list-inside list-['-_']">
                    {experience.description.map((description) => (
                      <li key={description}>{description}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-8 py-8 sm:py-16">
        <div className="space-y-0.5">
          <h2 className="font-medium text-2xl">Projets</h2>
          <p className="text-muted-foreground">
            Une sélection de projets personnels que j&apos;ai réalisés avec
            React et TypeScript, et auto-déployés avec Coolify.
          </p>
        </div>
        <div className="space-y-5">
          <div className="space-y-5">
            {featuredProjects.map((project) => (
              <FeaturedProjectCard key={project.name} project={project} />
            ))}
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {regularProjects.map((project) => (
              <Card key={project.name}>
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                  <CardAction className="flex items-center">
                    {project.github && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-8"
                        asChild
                      >
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
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-8"
                        asChild
                      >
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
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-8"
                        asChild
                      >
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
                  </CardAction>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-1.5">
                  <ProjectTags project={project} />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
