"use client";

import { useChat } from "@ai-sdk/react";
import { ArrowUp } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Message } from "./message";

export function Chat() {
  const { messages, sendMessage, status } = useChat();

  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const isBusy = status === "streaming" || status === "submitted";
  const canSend = status === "ready" && input.trim().length > 0;

  function submit() {
    if (status !== "ready") return;
    const text = input.trim();
    if (!text) return;
    sendMessage({ text });
    setInput("");
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      submit();
    }
  }

  return (
    <div className="pointer-events-none fixed right-0 bottom-0 left-0 z-50 flex items-center justify-center">
      <div className="relative w-full max-w-2xl p-4 sm:p-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100%"
          height="100%"
          className="absolute inset-0"
        >
          <title>Chat</title>
          <defs>
            <filter id="filter">
              <feGaussianBlur stdDeviation="10" />
            </filter>
            <mask id="mask">
              <rect
                x="20"
                y="20"
                width="calc(100% - 40px)"
                height="100%"
                fill="white"
                filter="url(#filter)"
              />
            </mask>
          </defs>
        </svg>
        <div className="mask-[url(#mask)] absolute inset-0 backdrop-blur-sm" />
        <div className="relative space-y-4">
          {isFocused && messages.length > 0 && (
            <div className="pointer-events-auto flex flex-col gap-2">
              <AnimatePresence>
                {messages.slice(-1).map((message) => (
                  <Message key={message.id} message={message} />
                ))}
              </AnimatePresence>
            </div>
          )}
          <div className="relative">
            <div
              className={cn(
                "absolute -inset-10 bg-radial from-indigo-400/70 via-transparent to-transparent opacity-40 transition-opacity duration-500",
                isFocused && "opacity-100",
                isBusy ? "animate-ai1-fast" : "animate-ai1",
              )}
            />
            <div
              className={cn(
                "absolute -inset-10 bg-radial from-pink-400/70 via-transparent to-transparent opacity-40 transition-opacity duration-500",
                isFocused && "opacity-100",
                isBusy ? "animate-ai2-fast" : "animate-ai2",
              )}
            />
            <Input
              className="pointer-events-auto relative h-12 w-full rounded-lg bg-background pr-12 pl-4 text-base shadow-sm md:text-base dark:bg-accent"
              placeholder="Posez une question à mon assistant…"
              aria-label="Poser une question à l'assistant IA de Florent"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onKeyDown={handleKeyDown}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={submit}
              disabled={!canSend}
              aria-label="Envoyer le message"
              className="group pointer-events-auto absolute top-1/2 right-2 flex size-8 -translate-y-1/2 items-center justify-center rounded-md bg-primary text-primary-foreground outline-none transition-all duration-150 ease-out hover:bg-primary/90 focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-30 disabled:active:scale-100 motion-safe:active:scale-90"
            >
              <ArrowUp className="size-4 transition-transform duration-200 ease-out motion-safe:group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
