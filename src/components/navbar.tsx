import { Dock, DockIcon } from "@/components/magicui/dock";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background/80 to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background/80"></div>
      <Dock
        magnification={60}
        distance={100}
        className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-2 bg-background/50 backdrop-blur-md [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] gap-0 sm:gap-1 rounded-full border border-border"
      >
        {DATA.navbar.map((item) => (
          <DockIcon key={item.href}>
            <Link
              href={item.href}
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "mt-2 rounded-full hover:bg-primary/10 transition-colors flex items-center justify-center",
              )}
            >
              {item.icon ? (
                <item.icon className="size-4 sm:size-6" />
              ) : (
                <span className="text-xs font-black uppercase tracking-tighter">{item.label[0]}</span>
              )}
            </Link>
          </DockIcon>
        ))}
      </Dock>
    </div>
  );
}
