import { Icons } from "@/components/icons";

export const contributions = [
  {
    title: "Anonix",
    href: "https://github.com/Bharat346/anonix",
    dates: "2026",
    active: true,
    description:
      "Contributed to a secure, anonymous, and ephemeral chat application. Enhanced real-time communication features and improved state management using Upstash Redis.",
    technologies: [
      "Next.js",
      "Upstash Redis",
      "Pusher",
      "API Design",
      "TailwindCSS",
      "TypeScript",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/Bharat346/anonix",
        icon: <Icons.github className="size-3" />,
      },
    ],
    features: [
      "Refactored state management for better performance and scalability",
      "Add Emoji Support to the chat",
      "Add custom text formatting tools to the chat",
    ],
    image: "",
    video: "",
  },
];
