import { Icons } from "@/components/icons";

export const packages = [
  {
    title: "TempMail Guard",
    href: "https://github.com/Bharat346/tempmail-guard",
    dates: "2026",
    active: true,
    description:
      "A robust Node.js package for identifying disposable email addresses. Uses domain intelligence, DNS signals, and reputation scoring to prevent low-trust signups.",
    technologies: [
      "Node.js",
      "DNS",
      "SMTP",
      "API Design",
      "Email Validation",
      "SPF/DMARC Validation",
      "WHOIS",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/Bharat346/tempmail-guard",
        icon: <Icons.github className="size-3" />,
      },
      {
        type: "NPM",
        href: "https://www.npmjs.com/package/tempmail-guard",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    stats: [
      { label: "Version", value: "1.1.0" },
      { label: "Issues", value: "1" },
      { label: "Downloads", value: "100+" },
    ],
    image: "",
    video: "",
  },
];
