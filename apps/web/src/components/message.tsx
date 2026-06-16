import type { UIMessage } from "ai";
import { Loader2 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export function Message({ message }: { message: UIMessage }) {
  const reduceMotion = useReducedMotion();
  const parts = message.parts.filter((part) => part.type === "text");
  const offset = reduceMotion ? 0 : 10;

  return (
    <motion.div
      className={cn(
        "max-h-[50svh] max-w-[80%] self-start overflow-y-auto whitespace-pre-wrap rounded-xl border bg-background/95 px-4 py-3 text-sm leading-relaxed shadow-sm backdrop-blur-sm",
        message.role === "user" &&
          "self-end border-transparent bg-primary text-primary-foreground",
      )}
      key={message.id}
      initial={{ opacity: 0, y: offset }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -offset }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {parts.map((part) => (
        <p key={part.type}>{part.text}</p>
      ))}
      {parts.length === 0 && (
        <span className="flex items-center gap-2 text-muted-foreground">
          <Loader2 className="size-3.5 animate-spin motion-reduce:animate-none" />
          <span className="meta text-xs">Réflexion…</span>
        </span>
      )}
    </motion.div>
  );
}
