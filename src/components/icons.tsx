import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Globe,
  Code,
  X as XIcon,
  LayoutGrid,
  Package,
  Terminal,
} from "lucide-react";

export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  github: Github,
  linkedin: Linkedin,
  x: XIcon,
  leetcode: Terminal,
  email: Mail,
  globe: Globe,
  code: Code,
  projects: LayoutGrid,
  package: Package,
};
