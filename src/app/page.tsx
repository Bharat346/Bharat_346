"use client";

import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { ResearchCard } from "@/components/research-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import Navbar from "@/components/navbar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Brain,
  Network,
  MessageSquare,
  Globe,
  Zap,
  Atom,
  Microscope,
} from "lucide-react";

import { useEffect, useState } from "react";

const BLUR_FADE_DELAY = 0.04;

const domainIcons: Record<string, any> = {
  brain: Brain,
  network: Network,
  "message-square": MessageSquare,
  globe: Globe,
  zap: Zap,
  atom: Atom,
  microscope: Microscope,
};

export default function Page() {
  const [resumeUrl, setResumeUrl] = useState("/img/resume.pdf");
  const [version, setVersion] = useState("");

  useEffect(() => {
    const v = new Date().getTime().toString();
    setVersion(v);

    // Prevent the browser from jumping to a hash section on reload
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
    window.scrollTo(0, 0);

    // Cache bust the resume URL once on mount
    setResumeUrl(`/img/resume.pdf?v=${v}`);
  }, []);

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-12">
      <Navbar />
      <section id="hero">
        <div className="w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-2">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none mt-10"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] text-lg md:text-2xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
              <div className="flex flex-wrap gap-3">
                <BlurFade delay={BLUR_FADE_DELAY * 2}>
                  <Link
                    href={resumeUrl}
                    target="_blank"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }),
                      "mt-6 text-base",
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
                      "mt-6 text-base",
                    )}
                  >
                    View LaTeX
                  </Link>
                </BlurFade>
              </div>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-32 border-2 mt-8">
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

      {/* Socials */}
      <section id="socials">
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="flex gap-3">
            {Object.entries(DATA.contact.social).map(([name, social]) => (
              <Tooltip key={name}>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12",
                    )}
                  >
                    <social.icon className="size-5" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm">{name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </BlurFade>
      </section>

      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-2xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="prose max-w-full text-pretty font-sans text-base md:text-lg text-muted-foreground dark:prose-invert leading-relaxed">
            <Markdown>{DATA.summary}</Markdown>
          </div>
        </BlurFade>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-2xl font-bold">Education</h2>
          </BlurFade>
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
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-2xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-3">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-5 py-2 text-base font-semibold shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  {skill}
                </Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="research">
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
          <div className="max-w-[800px] mx-auto">
            {DATA.research.map((item, id) => (
              <BlurFade
                key={item.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ResearchCard
                  title={item.title}
                  status={item.status as any}
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


      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 18}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-4 py-1.5 text-sm font-semibold">
                  My Projects
                </div>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground text-lg md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-[900px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 19 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  features={project.features}
                  dates={project.dates}
                  tags={project.technologies}
                  image={`${project.image}?v=${version}`}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="github-stats">
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
                  className="w-full h-auto border-1 hover:border-primary/30 transition-all duration-300 rounded-2xl"
                />
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 22} className="w-full">
              <div className="overflow-hidden h-full flex flex-col items-center justify-center">
                <img
                  src="https://streak-stats.demolab.com?user=Bharat346&theme=default&hide_border=true&background=ffffff&ring=000000&fire=000000&currStreakLabel=000000&sideNums=000000&sideLabels=000000"
                  alt="GitHub Streak Stats"
                  className="w-full h-auto border-1 hover:border-primary/30 transition-all duration-300 rounded-2xl"
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

      <section id="stats">
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
          <div className="flex flex-col gap-6 w-full ">
            <BlurFade
              delay={BLUR_FADE_DELAY * 25}
              className="w-full flex justify-center items-center mx-auto"
            >
              <img
                src={`https://leetcard.jacoblin.cool/Bharat346?theme=light&font=Outfit&ext=heatmap&v=${version}`}
                alt="LeetCode Stats"
                className="w-full h-auto border-2 rounded-2xl shadow-md px-1 py-1"
              />
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="achievements">
        <div className="space-y-12 w-full py-1">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-4 py-1.5 text-sm font-semibold">
                  Achievements
                </div>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                  Academic & Professional
                </h2>
                <p className="text-muted-foreground text-lg md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Certifications, hackathons, and awards I&apos;ve earned.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l-2">
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
      </section>

      <footer className="w-full border-t border-border mt-0 pt-16 pb-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight">{DATA.name}</h3>
              <p className="text-muted-foreground text-base leading-relaxed max-w-sm">
                A software engineer dedicated to building high-performance,
                accessible, and user-centric web applications.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-primary/80">
                Navigation
              </h4>
              <nav className="flex flex-col gap-2.5">
                {DATA.navbar.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-base text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-primary/80">
                Socials
              </h4>
              <div className="flex flex-wrap gap-4">
                {Object.entries(DATA.contact.social).map(([name, social]) => (
                  <Link
                    key={name}
                    href={social.url}
                    title={name}
                    className="size-11 rounded-xl bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300 shadow-sm"
                  >
                    <social.icon className="size-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground font-medium">
            <p>
              © {new Date().getFullYear()} {DATA.name}
            </p>
            <div className="flex gap-8">
              {/* <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Terms</Link> */}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
