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
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  features?: readonly string[];
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  badgeText?: string;
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  features,
  dates,
  tags,
  link,
  image,
  video,
  links,
  badgeText = "Project",
  className,
}: Props) {
  return (
    <Card
      className={cn(
        "flex flex-col overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 ease-in-out h-full group bg-card/40 backdrop-blur-xl rounded-3xl",
        className,
      )}
    >
      <Link
        href={href || "#"}
        className={cn("block cursor-pointer overflow-hidden relative", !href && "pointer-events-none")}
      >
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-44 sm:h-52 w-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
          />
        ) : (
          image && (
            <div className="relative overflow-hidden h-44 sm:h-52">
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
                    Explore Project
                 </div>
              </div>
              <div className="absolute top-4 right-4 z-10">
                 <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-md border-none px-3 py-1 text-[10px] font-bold uppercase tracking-widest shadow-lg">
                    {badgeText}
                 </Badge>
              </div>
            </div>
          )
        )}
      </Link>
      <CardHeader className="px-5 sm:px-7 py-5 sm:py-6 space-y-4">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between gap-4">
            <CardTitle className="text-xl sm:text-2xl font-black tracking-tight group-hover:text-primary transition-colors leading-tight">
              {title}
            </CardTitle>
          </div>
          <time className="font-sans text-[10px] w-fit text-muted-foreground font-bold uppercase tracking-widest bg-muted/50 px-3 py-1 rounded-full">
            {dates}
          </time>
        </div>
        
        <div className="space-y-4">
          <p className="font-sans text-sm sm:text-base text-muted-foreground/90 leading-relaxed font-medium">
            {description}
          </p>
          
          {features && features.length > 0 && (
            <ul className="space-y-2.5 pt-1">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-muted-foreground leading-snug">
                  <span className="mt-1.5 size-1.5 rounded-full bg-primary/60 shrink-0" />
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="mt-auto flex flex-col px-5 sm:px-7 py-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {tags?.map((tag) => (
              <Badge
                className="px-3 py-1 text-[11px] font-bold bg-secondary/80 hover:bg-primary/20 hover:text-primary transition-colors border-none shadow-sm"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      
      <CardFooter className="px-5 sm:px-7 pb-2 sm:pb-3 pt-6">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-3">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge
                  key={idx}
                  className="flex gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-bold transition-all hover:bg-primary hover:text-primary-foreground hover:scale-105 rounded-xl shadow-md hover:shadow-primary/20 border-transparent"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
