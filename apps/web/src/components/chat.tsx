"use client";

import { useChat } from "@ai-sdk/react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function Chat() {
  const { messages, sendMessage, status } = useChat();

  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  async function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      if (status !== "ready") return;
      await sendMessage({
        text: input,
      });
      setInput("");
    }
  }

  return (
    <div className="pointer-events-none fixed right-0 bottom-0 left-0 flex items-center justify-center">
      <div className="relative w-full max-w-2xl p-8">
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
        <div className="relative space-y-8">
          {isFocused && (
            <div className="pointer-events-auto flex flex-col gap-2">
              <AnimatePresence>
                {messages.slice(-1).map((message) => (
                  <motion.div
                    className={cn(
                      "max-h-[50svh] max-w-[80%] overflow-y-auto whitespace-pre-wrap rounded-lg border-1 bg-secondary px-4 py-3",
                      message.role === "user" &&
                        "self-end bg-primary text-primary-foreground",
                    )}
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {message.parts.map((part) => {
                      if (part.type === "text") {
                        return <p key={part.type}>{part.text}</p>;
                      }
                      return null;
                    })}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
          <div className="relative">
            <div
              className={cn(
                "-inset-10 absolute bg-radial from-indigo-400/50 via-transparent to-transparent opacity-50 transition-opacity",
                isFocused && "opacity-100",
                status === "streaming" || status === "submitted"
                  ? "animate-ai1-fast"
                  : "animate-ai1",
              )}
            />
            <div
              className={cn(
                "-inset-10 absolute bg-radial from-pink-400/50 via-transparent to-transparent opacity-50 transition-opacity",
                isFocused && "opacity-100",
                status === "streaming" || status === "submitted"
                  ? "animate-ai2-fast"
                  : "animate-ai2",
              )}
            />
            <Input
              className="pointer-events-auto relative h-12 w-full bg-background px-4 text-lg md:text-lg dark:bg-accent"
              placeholder="Posez une question à mon assistant..."
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onKeyDown={handleKeyDown}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
