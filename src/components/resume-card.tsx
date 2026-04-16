"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl?: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="group/container relative">
      <Link
        href={href || "#"}
        className="block cursor-pointer"
        onClick={handleClick}
      >
        <Card className="flex border-2 border-transparent hover:border-primary/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 bg-card/40 backdrop-blur-md p-5 rounded-2xl group/card relative overflow-hidden">
          {/* Subtle background glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
          
          {logoUrl && (
            <div className="relative z-10 flex-none self-start mt-1">
              <Avatar className="border-2 border-background size-14 m-auto bg-white dark:bg-foreground shadow-sm group-hover/card:scale-110 group-hover/card:rotate-3 transition-all duration-500 ease-out">
                <AvatarImage
                  src={logoUrl}
                  alt={altText}
                  className="object-contain p-2"
                />
                <AvatarFallback className="font-bold text-lg">{altText[0]}</AvatarFallback>
              </Avatar>
            </div>
          )}
          <div
            className={cn(
              "relative z-10 flex-grow flex flex-col group",
              logoUrl && "ml-5",
            )}
          >
            <div className="flex flex-col gap-1.5">
              <div className="flex items-start justify-between gap-x-2">
                <div className="flex flex-col">
                  <h3 className="inline-flex items-center font-bold leading-tight text-base sm:text-lg group-hover/card:text-primary transition-colors duration-300">
                    {title}
                    {badges && (
                      <span className="inline-flex gap-x-1 ml-2">
                        {badges.map((badge, index) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-[10px] py-0 px-2 font-semibold"
                            key={index}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    )}
                    <ChevronRightIcon
                      className={cn(
                        "size-4 translate-x-0 transform opacity-0 transition-all duration-500 ease-out group-hover:translate-x-1 group-hover:opacity-100 ml-2 text-primary",
                        isExpanded ? "rotate-90" : "rotate-0",
                      )}
                    />
                  </h3>
                  {subtitle && (
                    <div className="font-sans text-xs sm:text-sm text-muted-foreground font-semibold tracking-wide mt-0.5">
                      {subtitle}
                    </div>
                  )}
                </div>
                <div className="text-[11px] sm:text-xs tabular-nums text-muted-foreground font-bold text-right bg-muted/60 px-3 py-1 rounded-full whitespace-nowrap self-start">
                  {period}
                </div>
              </div>
            </div>
            
            <motion.div
              initial={false}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
                marginTop: isExpanded ? 16 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="overflow-hidden text-sm text-muted-foreground/90 leading-relaxed border-l-2 border-primary/30 pl-5 pr-2 py-1 italic font-medium"
            >
              {description}
            </motion.div>
          </div>
        </Card>
      </Link>
    </div>
  );
};
