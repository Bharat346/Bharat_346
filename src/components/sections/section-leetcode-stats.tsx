"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { useEffect, useState } from "react";

const BLUR_FADE_DELAY = 0.04;

export default function LeetCodeStatsSection() {
  const [version, setVersion] = useState("");

  useEffect(() => {
    setVersion(new Date().getTime().toString());
  }, []);

  return (
    <section id="stats" className="scroll-mt-20">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 24}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-4 py-1.5 text-sm font-semibold">
                LeetCode
              </div>
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Competitive Programming
              </h2>
            </div>
          </div>
        </BlurFade>
        <div className="flex flex-col gap-6 w-full max-w-[800px] mx-auto">
          <BlurFade
            delay={BLUR_FADE_DELAY * 25}
            className="w-full flex justify-center items-center"
          >
            <img
              src={`https://leetcard.jacoblin.cool/Bharat346?theme=light&font=Outfit&ext=heatmap&v=${version}`}
              alt="LeetCode Stats"
              className="w-full h-auto border-2 rounded-2xl shadow-lg px-1 py-1 hover:scale-[1.02] transition-transform duration-300 bg-white"
            />
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
