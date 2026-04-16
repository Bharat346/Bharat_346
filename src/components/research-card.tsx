"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LogEntry {
  week: string;
  update: string;
  description?: string;
  learnings?: string;
  challenges?: string;
}

interface Props {
  title: string;
  status?: "Ongoing" | "Completed";
  problemStatement: string;
  whyItMatters: string;
  approach: string;
  tools: readonly string[];
  progress: string;
  expectedOutcome: string;
  log?: readonly LogEntry[];
  driveLink?: string;
  mentor?: string;
  organization?: string;
  className?: string;
}

export function ResearchCard({
  title,
  status,
  problemStatement,
  whyItMatters,
  approach,
  tools,
  progress,
  expectedOutcome,
  log,
  driveLink,
  mentor,
  organization,
  className,
}: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      className={cn(
        "flex flex-col overflow-hidden border border-border/50 hover:border-primary/30 transition-shadow duration-500 ease-in-out h-full bg-card/40 backdrop-blur-xl rounded-2xl sm:rounded-3xl",
        className,
      )}
    >
      <CardHeader className="px-6 py-6 pb-2">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-start">
            <div className="flex gap-2">
              <Badge className="w-fit bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors uppercase tracking-widest text-[10px] font-bold px-3 py-1">
                Research Work
              </Badge>
              {status && (
                <Badge className={cn(
                  "w-fit uppercase tracking-widest text-[10px] font-bold px-3 py-1 border-none",
                  status === "Ongoing" ? "bg-orange-500/10 text-orange-500" : "bg-green-500/10 text-green-500"
                )}>
                  {status}
                </Badge>
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="h-8 w-8 p-0 rounded-full hover:bg-primary/10 text-primary group/btn"
            >
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <ChevronDown className="size-5 group-hover/btn:scale-110 transition-transform" />
              </motion.div>
            </Button>
          </div>
          <CardTitle className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
            {title}
          </CardTitle>
        </div>
      </CardHeader>

      <div className="relative">
        <motion.div
          initial={false}
          animate={{
            height: "auto",
            opacity: 1,
          }}
          transition={{ type: "spring", stiffness: 260, damping: 25 }}
          className="overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {!isExpanded ? (
              <motion.div
                key="collapsed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="px-6 pb-6 space-y-4"
              >
                <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                  {problemStatement}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {tools.slice(0, 3).map((tool) => (
                    <Badge key={tool} variant="outline" className="text-[11px] font-bold py-0.5 px-2 bg-muted/30">
                      {tool}
                    </Badge>
                  ))}
                  {tools.length > 3 && <span className="text-[9px] text-muted-foreground font-bold mt-1">+{tools.length - 3} more</span>}
                </div>
                <Button 
                  variant="link" 
                  size="sm" 
                  onClick={() => setIsExpanded(true)}
                  className="h-auto text-primary font-bold text-xs uppercase tracking-widest hover:no-underline flex items-center gap-1 group/more mt-2 p-0"
                >
                  Read more
                  <ChevronDown className="size-3 group-hover/more:translate-y-0.5 transition-transform" />
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="expanded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 pb-8 space-y-8"
              >
                <CardContent className="p-0 space-y-8">
                  <div className="space-y-6">
                    {(mentor || organization) && (
                      <div className="flex flex-wrap gap-4 pt-1">
                        {organization && (
                          <div className="space-y-1">
                            <h4 className="text-[10px] font-black uppercase tracking-widest text-primary/60">Organization</h4>
                            <p className="text-sm font-bold text-foreground">{organization}</p>
                          </div>
                        )}
                        {mentor && (
                          <div className="space-y-1">
                            <h4 className="text-[10px] font-black uppercase tracking-widest text-primary/60">Mentor</h4>
                            <p className="text-sm font-bold text-foreground">{mentor}</p>
                          </div>
                        )}
                      </div>
                    )}

                    {problemStatement && (
                      <section className="space-y-2">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-primary/80">Problem Statement</h4>
                        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{problemStatement}</p>
                      </section>
                    )}

                    {whyItMatters && (
                      <section className="space-y-2">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-primary/80">Why It Matters</h4>
                        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{whyItMatters}</p>
                      </section>
                    )}

                    {approach && (
                      <section className="space-y-2">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-primary/80">Our Approach</h4>
                        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{approach}</p>
                      </section>
                    )}

                    {tools && tools.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {tools.map((tool) => (
                          <Badge
                            key={tool}
                            variant="secondary"
                            className="px-3 py-1 text-[11px] font-bold bg-secondary/80 border-none shadow-sm"
                          >
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>

                  {(progress || expectedOutcome) && (
                    <>
                      <Separator className="bg-border/50" />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {progress && (
                          <section className="space-y-2">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-primary/80">Current Progress</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">{progress}</p>
                          </section>
                        )}
                        {expectedOutcome && (
                          <section className="space-y-2">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-primary/80">Expected Outcome</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">{expectedOutcome}</p>
                          </section>
                        )}
                      </div>
                    </>
                  )}

                  {driveLink && (
                    <div className="pt-2">
                      <Button asChild variant="outline" className="w-full sm:w-fit gap-2 border-primary/20 hover:bg-primary/5 text-primary">
                        <a href={driveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="size-4" />
                          View on Google Drive
                        </a>
                      </Button>
                    </div>
                  )}

                  {log && log.length > 0 && (
                    <div className="pt-4">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-primary/80 mb-6">Research Log</h4>
                      <div className="relative border-l-2 border-primary/20 ml-3 space-y-8 pb-4">
                        {log.map((entry, idx) => (
                          <div key={idx} className="relative pl-8">
                            <div className="absolute -left-[9px] top-1 size-4 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_rgba(var(--primary),0.3)]" />
                            <div className="space-y-3">
                              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">
                                {entry.week}
                              </span>
                              <p className="text-base font-bold text-foreground leading-relaxed">
                                {entry.update}
                              </p>
                              {entry.description && (
                                <p className="text-[15px] text-muted-foreground leading-relaxed">
                                  {entry.description}
                                </p>
                              )}
                              {(entry.learnings || entry.challenges) && (
                                <div className="space-y-4 bg-muted/30 p-5 rounded-2xl border border-border/50">
                                  {entry.learnings && (
                                    <section className="space-y-1">
                                      <span className="text-xs font-black uppercase tracking-widest text-blue-500/90 block">Key Learnings</span>
                                      <p className="text-sm text-muted-foreground leading-relaxed font-medium">{entry.learnings}</p>
                                    </section>
                                  )}
                                  {entry.learnings && entry.challenges && <Separator className="bg-border/30" />}
                                  {entry.challenges && (
                                    <section className="space-y-1">
                                      <span className="text-xs font-black uppercase tracking-widest text-orange-500/90 block">Challenges Faced</span>
                                      <p className="text-sm text-muted-foreground leading-relaxed font-medium">{entry.challenges}</p>
                                    </section>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="pt-4 flex justify-start">
                    <Button 
                      variant="link" 
                      size="sm" 
                      onClick={() => setIsExpanded(false)}
                      className="p-0 h-auto gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:no-underline"
                    >
                      Read less
                      <ChevronUp className="size-3" />
                    </Button>
                  </div>
                </CardContent>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </Card>
  );
}
  
  