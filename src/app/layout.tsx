import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Outfit as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name} - Software Engineer & Researcher`,
  },
  description: DATA.description,
  keywords: [
    "Software Engineer",
    "Research Scientist",
    "Machine Learning",
    "React Developer",
    "Next.js Portfolio",
    "Bharat Kumar",
    "NIT Delhi",
    "Competitive Programming",
    "Full Stack Developer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${DATA.name} | Portfolio`,
    description: DATA.description,
    url: DATA.url,
    siteName: DATA.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/img/me.jpg",
        width: 1200,
        height: 630,
        alt: DATA.name,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
    images: ["/img/me.jpg"],
    creator: "@Bharat346", // Placeholder, user can update
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <body
        className={cn(
          "min-h-screen bg-background text-foreground font-sans antialiased text-[17px]",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
        >
          <TooltipProvider delayDuration={0}>
            <div className="min-h-screen w-full bg-[#f8fafc] relative">
              {/* Top Fade Grid Background - Limited to Top 200px */}
              <div
                className="absolute top-0 left-0 right-0 h-[200px] z-0 pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #e2e8f0 1px, transparent 1px),
                    linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
                  `,
                  backgroundSize: "20px 30px",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 70% 70% at 50% 0%, #000 40%, transparent 100%)",
                  maskImage:
                    "radial-gradient(ellipse 70% 70% at 50% 0%, #000 40%, transparent 100%)",
                }}
              />
              <div className="relative z-10 max-w-3xl mx-auto py-12 sm:py-24 px-6">
                {children}
              </div>
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
