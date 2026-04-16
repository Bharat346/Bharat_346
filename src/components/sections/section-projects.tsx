"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { useEffect, useState } from "react";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
  const [version, setVersion] = useState("");

  useEffect(() => {
    setVersion(new Date().getTime().toString());
  }, []);

  return (
    <section id="projects" className="scroll-mt-20">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 18}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-4 py-1.5 text-sm font-semibold">
                My Projects
              </div>
              <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl">
                Check out my latest work
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[600px] mx-auto">
                I&apos;ve worked on a variety of projects, from simple
                websites to complex web applications. Here are a few of my
                favorites.
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-[900px] mx-auto">
          {DATA.projects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 19 + id * 0.05}
            >
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                features={project.features}
                dates={project.dates}
                tags={project.technologies}
                image={version ? `${project.image}?v=${version}` : project.image}
                video={project.video}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
