"use client";

import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export default function GitHubStatsSection() {
  return (
    <section id="github-stats" className="scroll-mt-20">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 20}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-4 py-1.5 text-sm font-semibold">
                GitHub
              </div>
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Coding Activity & Stats
              </h2>
            </div>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 21} className="w-full">
            <div className="backdrop-blur-xl overflow-hidden h-full flex flex-col items-center justify-center">
              <img
                src="https://github-readme-stats-sigma-five.vercel.app/api?username=Bharat346&show_icons=true&theme=default&bg_color=ffffff&title_color=000000&text_color=000000&icon_color=000000"
                alt="GitHub Stats"
                className="w-full h-auto border shadow-sm hover:border-primary/30 transition-all duration-300 rounded-2xl"
              />
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 22} className="w-full">
            <div className="overflow-hidden h-full flex flex-col items-center justify-center">
              <img
                src="https://streak-stats.demolab.com?user=Bharat346&theme=default&hide_border=true&background=ffffff&ring=000000&fire=000000&currStreakLabel=000000&sideNums=000000&sideLabels=000000"
                alt="GitHub Streak Stats"
                className="w-full h-auto border shadow-sm hover:border-primary/30 transition-all duration-300 rounded-2xl"
              />
            </div>
          </BlurFade>
          <BlurFade
            delay={BLUR_FADE_DELAY * 23}
            className="w-full md:col-span-2"
          >
            <div className="rounded-3xl border border-border/50 bg-card/40 p-6 backdrop-blur-xl overflow-hidden hover:border-primary/30 transition-all duration-300 h-full flex flex-col items-center justify-center min-h-[150px]">
              <img
                src={`https://ghchart.rshah.org/000000/Bharat346`}
                alt="GitHub Heatmap"
                className="w-full h-auto dark:brightness-110"
              />
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
