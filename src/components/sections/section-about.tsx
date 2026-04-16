"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20">
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <h2 className="text-2xl font-bold">About</h2>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <div className="prose max-w-full text-pretty font-sans text-base md:text-lg text-muted-foreground dark:prose-invert leading-relaxed mt-4">
          <Markdown>{DATA.summary}</Markdown>
        </div>
      </BlurFade>
    </section>
  );
}
