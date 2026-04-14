"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResumeLatexPage() {
  const [latexCode, setLatexCode] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/img/resume.tex")
      .then((res) => res.text())
      .then((text) => {
        setLatexCode(text);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load LaTeX source:", err);
        setLoading(false);
      });
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(latexCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans p-4 md:p-6 max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between sticky top-0 bg-background/80 backdrop-blur-md py-4 z-10 border-b border-border mb-6">
        <Link href="/">
          <Button variant="ghost" size="sm" className="gap-2">
            <ChevronLeft className="size-4" />
            Back to Portfolio
          </Button>
        </Link>
        <div className="flex items-center gap-2">
          <h1 className="text-sm font-bold uppercase tracking-widest text-muted-foreground hidden sm:block">
            Resume Source (LaTeX)
          </h1>
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="gap-2 border-primary/20 hover:bg-primary/5"
          >
            {copied ? (
              <>
                <Check className="size-4 text-green-500" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="size-4" />
                Copy Code
              </>
            )}
          </Button>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-muted/30 overflow-hidden shadow-2xl">
        <div className="bg-muted px-4 py-2 border-b border-border flex items-center gap-2">
          <div className="size-3 rounded-full bg-red-500/50" />
          <div className="size-3 rounded-full bg-yellow-500/50" />
          <div className="size-3 rounded-full bg-green-500/50" />
          <span className="text-[10px] font-mono text-muted-foreground ml-2">resume.tex</span>
        </div>
        <div className="p-6 overflow-x-auto">
          {loading ? (
            <div className="space-y-4 animate-pulse">
              <div className="h-4 bg-primary/10 rounded w-3/4" />
              <div className="h-4 bg-primary/10 rounded w-1/2" />
              <div className="h-4 bg-primary/10 rounded w-5/6" />
              <div className="h-4 bg-primary/10 rounded w-2/3" />
            </div>
          ) : (
            <pre className="font-mono text-xs sm:text-sm leading-relaxed whitespace-pre hover:text-foreground/90 transition-colors">
              <code>{latexCode}</code>
            </pre>
          )}
        </div>
      </div>
      
      <p className="text-center text-xs text-muted-foreground pt-4 pb-8">
        This is the raw LaTeX source used to generate the resume PDF.
      </p>
    </div>
  );
}
