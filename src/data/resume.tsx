import { Icons } from "@/components/icons";
import { Home, Code, GraduationCap, Medal } from "lucide-react";

export const DATA = {
  name: "Bharat Kumar",
  initials: "BK",
  url: "https://portfolio.bhdocs.in",
  location: "New Delhi, India",
  locationLink: "https://www.google.com/maps/place/New+Delhi",
  description:
    "Software Engineer turned Entrepreneur. Love building things and helping people. Very active on Twitter.",
  summary:
    "I'm a full-stack developer and a computer science student at NIT Delhi. I build high-performance web applications and love solving complex problems. My focus is on React, Next.js, and modern web technologies. I also enjoy competitive programming and have solved 150+ LeetCode problems.",
  avatarUrl: "/img/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Java",
    "C++",
    "Git",
    "ORM",
    "ML",
    "DL",
    "LangChain",
    "Hugging Face",
    "System Design",
    "Kafka",
    "Kubernetes",
    "Computer Network",
    "Network Security",
    "Cryptography",
    "OS",
    "COA",
    "DBMS",
    "TailwindCSS",
    "Data Structure",
    "Algorithm"
  ],
  navbar: [
    { href: "/", icon: Home, label: "Home" },
    { href: "/#projects", icon: Code, label: "Projects" },
    { href: "/#education", icon: GraduationCap, label: "Education" },
    { href: "/#achievements", icon: Medal, label: "Achievements" },
  ],
  contact: {
    email: "bharat030406@gmail.com",
    tel: "+916376229199",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Bharat346",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bharat-kumar-ab49b9297",
        icon: Icons.linkedin,
        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/Bharat346",
        icon: Icons.leetcode,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:bharat030406@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "ShareLink",
      href: "https://sharelink-psi.vercel.app/",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/projects/ShareLink.png",
      start: "Aug 2025",
      end: "Present",
      description:
        "Developing a secure real-time file sharing application. Implemented WebSockets for peer-to-peer transfer, password protection, and end-to-end encryption. Built using React, Node.js, and Express.",
    },
    {
      company: "BharatDocs",
      href: "https://bhdocs.in/",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/projects/BharatDocs.png",
      start: "Dec 2024",
      end: "Feb 2025",
      description:
        "Built a comprehensive documentation platform with MDX support, hierarchical note organization, and an admin dashboard. Used React, Next.js, and Tailwind CSS. Integrated Vercel Blob for storage.",
    },
    {
      company: "Water Supply",
      href: "https://bharat346.github.io/Water-Distribution-System/",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/projects/water_distri.png",
      start: "March 2024",
      end: "April 2024",
      description:
        "Developed a smart water distribution visualization using graph algorithms and physics-based flow optimization. Modeled network flow and pressure dynamics using React and D3.js.",
    },
  ],
  education: [
    {
      school: "National Institute of Technology, Delhi",
      href: "https://nitdelhi.ac.in",
      degree: "B.Tech in Computer Science & Engineering",
      logoUrl: "/img/nitd_logo.png",
      start: "2023",
      end: "2027",
      description:
        "CGPA: 8.43 (Till 4th Sem). Coursework: DSA, DBMS, OS, Computer Networks.",
    },
    {
      school: "Allen Career Institute",
      href: "https://allen.ac.in",
      degree: "JEE Main & Advanced Preparation",
      logoUrl: "/img/allen_logo.png",
      start: "2022",
      end: "2023",
      description: "JEE Main: 98.83 %tile. JEE Advanced: Qualified.",
    },
    {
      school: "Adarsh Vidya Mandir",
      href: "#",
      degree: "Class XII (RBSE Board)",
      logoUrl: "/img/school_logo.png",
      start: "2021",
      end: "2022",
      description:
        "Percentage: 96.2%. Scored 100/100 in Mathematics. Tahsil Topper.",
    },
  ],
  projects: [
    {
      title: "BharatDocs",
      href: "https://bhdocs.in/",
      dates: "Dec 2024 - Feb 2025",
      active: true,
      description:
        "A documentation platform for developers. Features MDX support, hierarchical notes, and admin dashboard.",
      technologies: ["React", "Next.js", "TailwindCSS", "MDX", "Vercel Blob"],
      links: [
        {
          type: "Website",
          href: "https://bhdocs.in/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Bharat346/Docs_and_Notes/tree/gh-pages",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/BharatDocs.png",
      video: "",
    },
    {
      title: "ShareLink",
      href: "https://sharelink-psi.vercel.app/",
      dates: "Aug 2025 - Present",
      active: true,
      description:
        "Secure real-time file sharing app with P2P transfer and password protection.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "WebSockets",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://sharelink-psi.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
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
        "Smart water distribution modeling with graph algorithms and physics flow logic.",
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
          type: "Source",
          href: "https://github.com/Bharat346/Water-Distribution-System",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/water_distri.png",
      video: "",
    },
    {
      title: "Calculator",
      href: "https://bharat346.github.io/calculator/",
      dates: "Sept 2024 - Oct 2024",
      active: true,
      description:
        "Scientific calculator with advanced math functions and responsive UI.",
      technologies: ["React", "JavaScript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://bharat346.github.io/calculator/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Bharat346/calculator/tree/gh-pages",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/Calculator.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "National Students Paryavaran Competition (NSPC) 2025",
      dates: "July 14, 2025",
      location: "Ministry of Education",
      description:
        "Successfully participated in NSPC 2025, representing NIT Delhi.",
      image: "/certificates/NSPC/NSPC_2025_Participation.jpg",
      links: [],
    },
    {
      title: "AInCAT Top Performer",
      dates: "May 24, 2025",
      location: "Naukari Campus",
      description:
        "Scored in top 10% percentile in All India Naukari Campus Aptitude Test among 50,000+ candidates.",
      image: "/certificates/NCAT.pdf", // Note: will need to handle PDF rendering or thumbnail
      links: [],
    },
    {
      title: "Ethical Hacking Competition",
      dates: "May 18, 2025",
      location: "Naukari Campus",
      description:
        "Participated in national-level penetration testing and vulnerability assessment competition.",
      image: "/certificates/Ethical_Hacking_part_Naukari_Campus.pdf",
      links: [],
    },
    {
      title: "Hindi Diwas Essay Competition",
      dates: "Sept 14, 2024",
      location: "Ministry of Education",
      description:
        "Awarded 2nd position in All-India Hindi Diwas Essay Competition among 500+ participants.",
      image: "/certificates/Essay_Competition.pdf",
      links: [],
    },
    {
      title: "AI & Robotics Workshop",
      dates: "April 6, 2024",
      location: "NIT Delhi",
      description:
        "Completed intensive 1-week workshop on AI and Robotics, building an autonomous robotic car.",
      image: "/certificates/AI_Robotic_WorkShop.pdf",
      links: [],
    },
  ],
};
