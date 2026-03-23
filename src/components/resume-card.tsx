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
    <Link
      href={href || "#"}
      className="block cursor-pointer"
      onClick={handleClick}
    >
      <Card className="flex border-2 border-transparent hover:border-primary/20 hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm p-4 rounded-xl group/card">
        {logoUrl && (
          <div className="flex-none">
            <Avatar className="border-2 border-background size-12 m-auto bg-muted-background dark:bg-foreground shadow-sm group-hover/card:scale-110 transition-transform duration-300">
              <AvatarImage
                src={logoUrl}
                alt={altText}
                className="object-contain p-1"
              />
              <AvatarFallback className="font-bold">{altText[0]}</AvatarFallback>
            </Avatar>
          </div>
        )}
        <div
          className={cn(
            "flex-grow items-center flex-col group",
            logoUrl && "ml-4",
          )}
        >
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-bold leading-none text-sm sm:text-base group-hover/card:text-primary transition-colors">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1 ml-2">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-[10px] py-0 px-1.5"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 ml-1",
                    isExpanded ? "rotate-90" : "rotate-0",
                  )}
                />
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground font-medium text-right bg-muted/50 px-2 py-0.5 rounded-full">
                {period}
              </div>
            </div>
            {subtitle && <div className="font-sans text-xs sm:text-sm text-muted-foreground font-medium">{subtitle}</div>}
          </div>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isExpanded ? 1 : 0,
              height: isExpanded ? "auto" : 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed border-l-2 border-primary/20 pl-4 py-1"
          >
            {description}
          </motion.div>
        </div>
      </Card>
    </Link>
  );
};
