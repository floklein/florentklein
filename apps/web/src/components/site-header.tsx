"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { GitHub } from "@/components/github";
import { LinkedIn } from "@/components/linkedin";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { links } from "@/lib/links";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Scroll sentinel: once it leaves the viewport the header earns its frame. */}
      <div
        ref={sentinelRef}
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-3"
      />
      <header
        className={cn(
          "sticky top-0 z-40 border-b backdrop-blur-md backdrop-saturate-150 transition-[background-color,border-color] duration-300 ease-out motion-reduce:transition-none",
          scrolled
            ? "border-border/80 bg-background/70"
            : "border-transparent bg-background/0",
        )}
      >
        <div className="flex items-center justify-between px-5 py-3.5 sm:px-8">
          <Link
            href="/"
            className="group flex items-baseline gap-2.5 rounded-sm outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            <span className="font-medium text-[0.9375rem] tracking-tight">
              Florent Klein
            </span>
            <span className="meta hidden text-[0.6875rem] text-muted-foreground sm:inline">
              Lead Frontend
            </span>
          </Link>
          <nav className="flex items-center gap-0.5">
            <Button variant="ghost" size="icon" asChild>
              <Link
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedIn />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GitHub />
              </Link>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </header>
    </>
  );
}
