"use client";

import { useEffect } from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/sections/section-hero";
import SocialsSection from "@/components/sections/section-socials";
import AboutSection from "@/components/sections/section-about";
import EducationSection from "@/components/sections/section-education";
import SkillsSection from "@/components/sections/section-skills";
import ResearchSection from "@/components/sections/section-research";
import ProjectsSection from "@/components/sections/section-projects";
import ContributionsSection from "@/components/sections/section-contributions";
import PackagesSection from "@/components/sections/section-packages";
import GitHubStatsSection from "@/components/sections/section-github-stats";
import LeetCodeStatsSection from "@/components/sections/section-leetcode-stats";
import AchievementsSection from "@/components/sections/section-achievements";
import FooterSection from "@/components/sections/section-footer";

export default function Page() {
  useEffect(() => {
    // Prevent the browser from jumping to a hash section on reload
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-20 selection:bg-primary/10">
      <Navbar />
      
      {/* Introduction */}
      <div className="space-y-12">
        <HeroSection />
        <SocialsSection />
        <AboutSection />
      </div>

      {/* Main Content */}
      <div className="space-y-24">
        <EducationSection />
        <SkillsSection />
        <ResearchSection />
        <ProjectsSection />
        <PackagesSection />
      </div>

      {/* Stats & Activity */}
      <div className="space-y-24">
        <GitHubStatsSection />
        <ContributionsSection />
        <LeetCodeStatsSection />
        <AchievementsSection />
      </div>

      <FooterSection />
    </main>
  );
}
