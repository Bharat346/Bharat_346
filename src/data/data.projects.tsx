import { Icons } from "@/components/icons";
import { FileText } from "lucide-react";

export const projects = [
  {
    title: "BharatDocs",
    href: "https://bhdocs.in/",
    dates: "Oct 2025 - Present",
    active: true,
    description:
      "A documentation platform for developers. High-performance notes management.",
    features: [
      "MDX support for rich documentation",
      "Hierarchical note organization",
      "Admin dashboard for content management",
      "Vercel Blob integration for media",
      "Firewall Integration for unauthorised acess and data leakage",
      "RAG Integration for AI based search in PDF",
    ],
    technologies: [
      "Next.js",
      "TailwindCSS",
      "MDX",
      "Vercel Blob",
      "Firewall",
      "GenAI",
      "Tesseract.js",
      "LangChain",
      "SQL",
      "Node.js",
      "Github API",
      "PDF Viewer",
    ],
    links: [
      {
        type: "Website",
        href: "https://bhdocs.in/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Github",
        href: "https://github.com/Bharat346/Docs_and_Notes/tree/gh-pages",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/projects/BhDocs.png",
    video: "",
  },
  {
    title: "DNA Decoded",
    // href: "https://bhdocs.in/",
    dates: "Sep 2025 - Dec 2025",
    active: false,
    description:
      "Bioinformatics project that analyzes genomic variations such as SNPs to predict disease risk in individuals.",
    features: [
      "Analyze genetic variations (SNPs) from DNA data",
      "Compute Polygenic Risk Score (PRS) for individuals",
      "Train ML models for disease risk classification",
      "Support research in personalized medicine",
    ],
    technologies: [
      "Machine Learning",
      "Feature Engineering",
      "SVC",
      "Logistic Regression",
      "RandomForest",
      "Gradient Boosting",
      "DNA Sequencing",
      "Python",
    ],
    links: [
      {
        type: "Report",
        href: "https://github.com/Bharat346/DNA-Decoded/blob/main/DNA_Disease_Prediction.pdf",
        icon: <FileText className="size-3" />,
      },
      {
        type: "Github",
        href: "https://github.com/Bharat346/DNA-Decoded/",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/projects/dnadecoded.jpg",
    video: "",
  },
  {
    title: "ShareLink",
    href: "https://sharelink.bhdocs.in/",
    dates: "Aug 2025 - Nov 2025",
    active: false,
    description:
      "A secure real-time communication and file sharing platform enabling peer-to-peer chat, audio messaging, calls, and large file transfers without server storage.",
    features: [
      "Real-time chat between two peers using WebRTC DataChannels",
      "Audio message recording and direct P2P transfer",
      "Peer-to-peer audio calling using WebRTC MediaStreams",
      "Secure session-based connection using access codes",
      "End-to-end encrypted communication",
      "Large file transfer with real-time progress tracking",
      "Direct-to-disk download using File System Access API",
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "WebRTC",
      "WebSockets",
      "Redis",
      "TailwindCSS",
    ],
    links: [
      {
        type: "Website",
        href: "https://sharelink.bhdocs.in/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Github",
        href: "https://github.com/Bharat346/ShareLink",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/projects/ShareLink.png",
    video: "",
  },
  {
    title: "Water Distribution System",
    href: "https://bharat346.github.io/Water-Distribution-System/",
    dates: "Mar 2024 - Apr 2024",
    active: true,
    description:
      "Smart water distribution modeling with deep graph optimization.",
    features: [
      "Graph-based network modeling",
      "Physics-based flow optimization",
      "Real-time pressure visualizations",
      "Efficient D3.js rendering",
    ],
    technologies: [
      "React",
      "TailwindCSS",
      "Graph Algorithms",
      "Physics Engine",
    ],
    links: [
      {
        type: "Website",
        href: "https://bharat346.github.io/Water-Distribution-System/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Github",
        href: "https://github.com/Bharat346/Water-Distribution-System",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/projects/water_distri.png",
    video: "",
  },
  {
    title: "Scientific Calculator",
    href: "https://bharat346.github.io/calculator/",
    dates: "Sept 2024 - Oct 2024",
    active: true,
    description: "Advanced scientific calculator with complex math support.",
    features: [
      "Precision arithmetic logic",
      "Advanced math function support",
      "Fully responsive calculation history",
      "Sleek dark mode interface",
    ],
    technologies: ["React", "JavaScript", "TailwindCSS"],
    links: [
      {
        type: "Website",
        href: "https://bharat346.github.io/calculator/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Github",
        href: "https://github.com/Bharat346/calculator/tree/gh-pages",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/projects/Calculator.png",
    video: "",
  },
];
