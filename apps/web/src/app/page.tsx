import { ExternalLink } from "lucide-react";
import Link from "next/link";
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
import { projects } from "@/lib/projects";
import { texts } from "@/lib/texts";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="container mx-auto px-8 py-16">
      <div className="space-y-6 py-16">
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
      <div className="space-y-8 py-16">
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
                  <CardDescription>{experience.company}</CardDescription>
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
      <div className="space-y-8 py-16">
        <h2 className="font-medium text-2xl">Projets</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.name} className="gap-4">
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                <CardAction className="flex items-center">
                  {project.github && (
                    <Button variant="ghost" size="icon" asChild>
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.github}
                      >
                        <GitHub />
                      </Link>
                    </Button>
                  )}
                  {project.url && (
                    <Button variant="ghost" size="icon" asChild>
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.url}
                      >
                        <ExternalLink />
                      </Link>
                    </Button>
                  )}
                </CardAction>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
