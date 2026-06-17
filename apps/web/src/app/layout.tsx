import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../index.css";
import { Chat } from "@/components/chat";
import Providers from "@/components/providers";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteHeader } from "@/components/site-header";
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

// Runs before first paint: arms reveal-on-enter only when JS is on and motion is
// allowed, so no-JS / reduced-motion / crawlers get the page fully visible and
// on-screen content never flashes. The fallback force-shows everything if the
// observer never boots. See scroll-reveal.tsx / index.css.
const revealInitScript = `(function(){try{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;var r=document.documentElement;r.classList.add('reveal-enabled');window.__revealFallback=setTimeout(function(){r.classList.add('reveal-fallback')},3000);}catch(e){}})();`;

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
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: static, pre-paint reveal bootstrap */}
        <script dangerouslySetInnerHTML={{ __html: revealInitScript }} />
        <Providers>
          <div className="relative mx-auto min-h-svh w-full max-w-[68rem] border-border sm:border-x">
            <SiteHeader />
            {children}
          </div>
          <ScrollReveal />
          <Chat />
        </Providers>
      </body>
    </html>
  );
}
