"use client";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

const BLUR_FADE_DELAY = 0.04;

export default function HeroSection() {
  const [resumeUrl, setResumeUrl] = useState("/img/resume.pdf");
  const [version, setVersion] = useState("");

  useEffect(() => {
    const v = new Date().getTime().toString();
    setVersion(v);
    setResumeUrl(`/img/resume.pdf?v=${v}`);
  }, []);

  return (
    <section id="hero">
      <div className="w-full max-w-2xl space-y-8">
        <div className="gap-2 flex flex-col-reverse sm:flex-row justify-between items-center sm:items-start text-center sm:text-left">
          <div className="flex-col flex flex-1 space-y-2">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none mt-4 sm:mt-10 mx-auto sm:mx-0"
              yOffset={8}
              text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
            />
            <BlurFadeText
              className="max-w-[600px] text-lg md:text-2xl mx-auto sm:mx-0"
              delay={BLUR_FADE_DELAY}
              text={DATA.description}
            />
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start mt-6">
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <Link
                  href={resumeUrl}
                  target="_blank"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "text-base w-full sm:w-auto",
                  )}
                >
                  View Resume
                </Link>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <Link
                  href="/resume-latex"
                  target="_blank"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "text-base w-full sm:w-auto",
                  )}
                >
                  View LaTeX
                </Link>
              </BlurFade>
            </div>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Avatar className="size-24 sm:size-32 border-2 mt-4 sm:mt-8 shrink-0">
              <AvatarImage
                alt={DATA.name}
                src={`${DATA.avatarUrl}?v=${version}`}
              />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
