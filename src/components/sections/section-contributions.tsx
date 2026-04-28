"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { HorizontalProjectCard } from "@/components/horizontal-project-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function ContributionsSection() {
  return (
    <section id="contributions" className="scroll-mt-20">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 18}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-4 py-1.5 text-sm font-semibold">
                Open Source
              </div>
              <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl">
                Open Source Contributions
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[600px] mx-auto">
                I love giving back to the community. Here are some of the open source projects I&apos;ve contributed to.
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-8 max-w-[1000px] mx-auto">
          {DATA.contributions?.map((contribution, id) => (
            <BlurFade
              key={contribution.title}
              delay={BLUR_FADE_DELAY * 19 + id * 0.05}
            >
              <HorizontalProjectCard
                href={contribution.href}
                key={contribution.title}
                title={contribution.title}
                description={contribution.description}
                features={contribution.features}
                dates={contribution.dates}
                tags={contribution.technologies}
                image={contribution.image}
                video={contribution.video}
                links={contribution.links}
                badgeText="OSS"
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
