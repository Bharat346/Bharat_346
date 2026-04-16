"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { HackathonCard } from "@/components/hackathon-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function AchievementsSection() {
  return (
    <section id="achievements" className="scroll-mt-20">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-4 py-1.5 text-sm font-semibold">
                Achievements
              </div>
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Academic & Professional
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[600px] mx-auto">
                Certifications, hackathons, and awards I&apos;ve earned.
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="max-w-[800px] mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l-2 border-muted-foreground/30">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    image={project.image}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
