import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Globe,
  Code,
  X as XIcon,
} from "lucide-react";

export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  github: Github,
  linkedin: Linkedin,
  x: XIcon,
  leetcode: Code, // Fallback as Lucide doesn't have LeetCode
  email: Mail,
  globe: Globe,
  code: Code,
};
