"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20">
      <div className="flex min-h-0 flex-col gap-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Skills</h2>
        </BlurFade>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {DATA.skills.map((skill, id) => (
            <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.02}>
              <Badge
                key={skill}
                variant="secondary"
                className="px-3 py-1 sm:px-5 sm:py-2 text-sm sm:text-base font-semibold shadow-sm hover:shadow-md hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
              >
                {skill}
              </Badge>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
