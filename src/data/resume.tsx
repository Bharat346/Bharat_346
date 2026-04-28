import { Icons } from "@/components/icons";
import {
  Code,
  Medal,
  User,
  FileText,
  LayoutGrid,
} from "lucide-react";
import { projects } from "./data.projects";
import { research } from "./data.research";
import { work } from "./data.work";
import { education } from "./data.education";
import { achievements } from "./data.achievements";
import { socials } from "./data.socials";
import { skills } from "./data.skills";
import { contributions } from "./data.contributions";
import { packages } from "./data.packages";

export const DATA = {
  name: "Bharat Kumar",
  initials: "BK",
  url: "https://portfolio.bhdocs.in",
  location: "New Delhi, India",
  locationLink: "https://www.google.com/maps/place/New+Delhi",
  description:
    "Software Developer | Passionate about research and problem-solving",
  summary:
    "I am a full-stack , ML developer and a Computer Science student at NIT Delhi. I build high-performance web applications and enjoy solving complex problems. My focus is on React, Next.js, and modern web technologies. I also enjoy competitive programming and have solved 500+ LeetCode problems.",
  avatarUrl: "/img/me.jpg",
  resumeLatexUrl: "/img/resume.tex",
  skills,
  navbar: [
    { href: "/#about", icon: User, label: "About" },
    { href: "/#research", icon: FileText, label: "Research" },
    { href: "/#projects", icon: LayoutGrid, label: "Projects" },
    { href: "/#packages", icon: Icons.package, label: "Packages" },
    { href: "/#github-stats", icon: Icons.github, label: "GitHub Stats" },
    { href: "/#stats", icon: Icons.leetcode, label: "LeetCode Stats" },
    { href: "/#achievements", icon: Medal, label: "Achievements" },
  ],
  contact: {
    email: "bharat030406@gmail.com",
    tel: "+916376229199",
    social: socials,
  },
  work,
  education,
  projects,
  research,
  contributions,
  packages,
  hackathons: achievements,
};
