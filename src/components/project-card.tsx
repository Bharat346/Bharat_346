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
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <Card
      className={cn(
        "flex flex-col overflow-hidden border-2 hover:shadow-2xl transition-all duration-300 ease-out h-full group bg-card/50 backdrop-blur-md",
        className,
      )}
    >
      <Link
        href={href || "#"}
        className={cn("block cursor-pointer", !href && "pointer-events-none")}
      >
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-48 w-full object-cover object-top transition-all duration-500 ease-in-out group-hover:scale-110"
          />
        ) : (
          image && (
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="h-48 w-full overflow-hidden object-cover object-top transition-all duration-500 ease-in-out group-hover:scale-110"
            />
          )
        )}
      </Link>
      <CardHeader className="px-6 py-4">
        <div className="space-y-2">
          <CardTitle className="text-lg font-bold tracking-tight group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <time className="font-sans text-xs text-muted-foreground font-medium">
            {dates}
          </time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <div className="prose max-w-full text-pretty font-sans text-sm md:text-base text-muted-foreground dark:prose-invert leading-relaxed">
            <Markdown>{description}</Markdown>
          </div>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-6 py-3">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {tags?.map((tag) => (
              <Badge
                className="px-2 py-0.5 text-[11px] leading-tight font-semibold bg-secondary/60 text-secondary-foreground border-none"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1.5">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge
                  key={idx}
                  className="flex gap-2 px-3 py-1.5 text-xs font-semibold transition-all hover:bg-primary hover:text-primary-foreground hover:scale-105"
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
