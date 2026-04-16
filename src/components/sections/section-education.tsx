"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function EducationSection() {
  return (
    <section id="education" className="scroll-mt-20">
      <div className="flex min-h-0 flex-col gap-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Education</h2>
            <p className="text-muted-foreground text-lg">My academic journey and credentials.</p>
          </div>
        </BlurFade>
        <div className="space-y-4">
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
                description={education.description}
                logoUrl={education.logoUrl}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
