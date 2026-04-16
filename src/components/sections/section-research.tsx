"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ResearchCard } from "@/components/research-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function ResearchSection() {
  return (
    <section id="research" className="scroll-mt-20">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-4 py-1.5 text-sm font-semibold">
                Research
              </div>
              <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl">
                Research Work
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[600px] mx-auto">
                Exploring new frontiers in communication and intelligence.
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="max-w-[800px] mx-auto space-y-8">
          {DATA.research.map((item, id) => (
            <BlurFade
              key={item.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            >
              <ResearchCard
                title={item.title}
                status={item.status}
                problemStatement={item.problemStatement}
                whyItMatters={item.whyItMatters}
                approach={item.approach}
                tools={item.tools}
                progress={item.progress}
                expectedOutcome={item.expectedOutcome}
                driveLink={item.driveLink}
                mentor={item.mentor}
                organization={item.organization}
                log={item.log}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
