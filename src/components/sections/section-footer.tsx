"use client";

import { DATA } from "@/data/resume";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="w-full border-t border-border mt-0 pt-16 pb-28 bg-muted/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tight">{DATA.name}</h3>
            <p className="text-muted-foreground text-base leading-relaxed max-w-sm">
              A software engineer dedicated to building high-performance,
              accessible, and user-centric web applications.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary/80">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2.5">
              {DATA.navbar.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary/80">
              Socials
            </h4>
            <div className="flex flex-wrap gap-4">
              {Object.entries(DATA.contact.social).map(([name, social]) => (
                <Link
                  key={name}
                  href={social.url}
                  title={name}
                  className="size-11 rounded-xl bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300 shadow-sm"
                >
                  <social.icon className="size-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground font-medium">
          <p>
            © {new Date().getFullYear()} {DATA.name}
          </p>
          <div className="flex gap-8">
            {/* Additional links can go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
