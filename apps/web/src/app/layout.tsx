import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../index.css";
import Link from "next/link";
import { Chat } from "@/components/chat";
import { GitHub } from "@/components/github";
import { LinkedIn } from "@/components/linkedin";
import { ModeToggle } from "@/components/mode-toggle";
import Providers from "@/components/providers";
import { Button } from "@/components/ui/button";
import { links } from "@/lib/links";
import { texts } from "@/lib/texts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Florent Klein — Lead Frontend",
  description: texts.title,
  openGraph: {
    title: "Florent Klein — Lead Frontend",
    description: texts.title,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="relative mx-auto min-h-svh w-full max-w-[68rem] border-border sm:border-x">
            <header className="sticky top-0 z-40 border-border/80 border-b bg-background/70 backdrop-blur-md backdrop-saturate-150">
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
            {children}
          </div>
          <Chat />
        </Providers>
      </body>
    </html>
  );
}
