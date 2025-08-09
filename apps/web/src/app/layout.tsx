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
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Florent Klein",
  description: texts.title,
  openGraph: {
    title: "Florent Klein",
    description: texts.title,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="container sticky top-0 z-10 mx-auto flex items-center justify-between bg-background px-4 py-4 sm:px-8">
            <Link href="/">Florent Klein</Link>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHub />
                </Link>
              </Button>
              <ModeToggle />
            </div>
          </div>
          {children}
          <Chat />
        </Providers>
      </body>
    </html>
  );
}
