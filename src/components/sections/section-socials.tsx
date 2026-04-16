"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default function SocialsSection() {
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>, email: string) => {
    // If it's a mobile device, mailto: works best
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) return; // Let default mailto: handle it

    e.preventDefault();
    const mailtoUrl = `mailto:${email}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    
    // Attempt to open the mail client
    const windowTarget = window.open(mailtoUrl, "_self");

    // Fallback logic: If focus remains on the current window after a short delay, 
    // it likely means no mail client was opened.
    setTimeout(() => {
      if (document.hasFocus()) {
        window.open(gmailUrl, "_blank");
      }
    }, 500);
  };

  return (
    <section id="socials">
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <div className="flex gap-4 flex-wrap">
          {Object.entries(DATA.contact.social).map(([name, social]) => {
            const isEmail = name.toLowerCase().includes("email");
            return (
              <Tooltip key={name}>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    onClick={(e) => isEmail ? handleEmailClick(e, DATA.contact.email) : undefined}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-2xl border bg-white/40 backdrop-blur-md shadow-sm hover:shadow-md hover:scale-110 hover:-translate-y-1 hover:bg-primary/5 hover:text-primary transition-all duration-300",
                    )}
                    target={social.url.startsWith("http") ? "_blank" : undefined}
                  >
                    <social.icon className="size-5" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent sideOffset={8}>
                  <p className="font-semibold">{name}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </BlurFade>
    </section>
  );
}
