"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { HorizontalProjectCard } from "@/components/horizontal-project-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function PackagesSection() {
  return (
    <section id="packages" className="scroll-mt-20">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 18}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-4 py-1.5 text-sm font-semibold">
                Packages
              </div>
              <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl">
                NPM Packages
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[600px] mx-auto">
                I build and maintain reusable packages to help other developers build better software faster.
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-8 max-w-[1000px] mx-auto">
          {DATA.packages?.map((pkg, id) => (
            <BlurFade
              key={pkg.title}
              delay={BLUR_FADE_DELAY * 19 + id * 0.05}
            >
              <HorizontalProjectCard
                href={pkg.href}
                key={pkg.title}
                title={pkg.title}
                description={pkg.description}
                dates={pkg.dates}
                tags={pkg.technologies}
                image={pkg.image}
                video={pkg.video}
                links={pkg.links}
                stats={pkg.stats}
                badgeText="Package"
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
