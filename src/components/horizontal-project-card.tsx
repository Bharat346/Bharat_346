"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Props {
  title: string;
  href?: string;
  description: string;
  features?: readonly string[];
  dates: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  stats?: readonly { label: string; value: string }[];
  badgeText?: string;
  className?: string;
}

export function HorizontalProjectCard({
  title,
  href,
  description,
  features,
  dates,
  tags,
  image,
  video,
  links,
  stats,
  badgeText = "Project",
  className,
}: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayFeatures = isExpanded ? features : features?.slice(0, 2);
  const hasMoreFeatures = features && features.length > 2;

  return (
    <Card
      className={cn(
        "flex flex-col md:flex-row overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 ease-in-out group bg-card/40 backdrop-blur-xl rounded-3xl",
        className,
      )}
    >
      {(image || video) && (
        <Link
          href={href || "#"}
          className={cn(
            "block cursor-pointer overflow-hidden relative w-full md:w-2/5 shrink-0",
            !href && "pointer-events-none"
          )}
        >
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="pointer-events-none h-full w-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 min-h-[200px]"
            />
          ) : (
            image && (
              <div className="relative overflow-hidden h-full min-h-[200px]">
                <Image
                  src={image}
                  alt={title}
                  width={500}
                  height={300}
                  unoptimized={true}
                  className="h-full w-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="flex items-center gap-2 text-white text-sm font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="w-8 h-px bg-white/50"></span>
                    Explore
                  </div>
                </div>
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-md border-none px-3 py-1 text-[10px] font-bold uppercase tracking-widest shadow-lg">
                    {badgeText}
                  </Badge>
                </div>
              </div>
            )
          )}
        </Link>
      )}

      <div className="flex flex-col flex-grow">
        <CardHeader className="px-5 sm:px-7 py-5 sm:py-6 space-y-4">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between gap-4">
              <CardTitle className="text-xl sm:text-2xl font-black tracking-tight group-hover:text-primary transition-colors leading-tight">
                {title}
              </CardTitle>
              {!image && !video && (
                <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-md border-none px-3 py-1 text-xs font-bold uppercase tracking-widest shadow-sm">
                  {badgeText}
                </Badge>
              )}
            </div>
            <time className="font-sans text-xs w-fit text-muted-foreground font-bold uppercase tracking-widest bg-muted/50 px-3 py-1 rounded-full">
              {dates}
            </time>
          </div>

          <div className="space-y-4">
            <p className="font-sans text-sm sm:text-base text-muted-foreground/90 leading-relaxed font-medium">
              {description}
            </p>

            {features && features.length > 0 && (
              <div className="space-y-2 pt-1">
                <ul className="space-y-2">
                  {displayFeatures?.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-xs sm:text-sm text-muted-foreground leading-snug"
                    >
                      <span className="mt-1.5 size-1.5 rounded-full bg-primary/60 shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                {hasMoreFeatures && (
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline transition-all mt-2"
                  >
                    {isExpanded ? (
                      <>
                        Show Less <ChevronUp className="size-3" />
                      </>
                    ) : (
                      <>
                        Show More <ChevronDown className="size-3" />
                      </>
                    )}
                  </button>
                )}
              </div>
            )}
          </div>
        </CardHeader>

        <CardContent className="mt-auto flex flex-col px-5 sm:px-7 py-2 space-y-4">
          {stats && stats.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-secondary/30 hover:bg-secondary/50 transition-colors border border-border/50 px-4 py-2 rounded-xl shadow-sm"
                >
                  <div className="flex flex-col">
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
                      {stat.label}
                    </span>
                    <span className="text-xs sm:text-sm font-black text-primary leading-none mt-0.5">
                      {stat.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags?.map((tag) => (
                <Badge
                  className="px-3 py-1 text-[11px] sm:text-xs font-bold bg-secondary/80 hover:bg-primary/20 hover:text-primary transition-colors border-none shadow-sm"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>

        <CardFooter className="px-5 sm:px-7 pb-6 pt-4">
          {links && links.length > 0 && (
            <div className="flex flex-row flex-wrap items-start gap-3">
              {links?.map((link, idx) => (
                <Link href={link?.href} key={idx} target="_blank">
                  <Badge
                    key={idx}
                    className="flex gap-2.5 px-4 py-2 text-xs font-bold transition-all hover:bg-primary hover:text-primary-foreground hover:scale-105 rounded-xl shadow-md hover:shadow-primary/20 border-transparent"
                  >
                    {link.icon}
                    {link.type}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </CardFooter>
      </div>
    </Card>
  );
}
