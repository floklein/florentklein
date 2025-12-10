import type { UIMessage } from "ai";
import { Ellipsis } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function Message({ message }: { message: UIMessage }) {
  const parts = message.parts.filter((part) => part.type === "text");

  return (
    <motion.div
      className={cn(
        "max-h-[50svh] max-w-[80%] self-start overflow-y-auto whitespace-pre-wrap rounded-lg border bg-secondary px-4 py-3",
        message.role === "user" &&
          "self-end bg-primary text-primary-foreground",
      )}
      key={message.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
    >
      {parts.map((part) => (
        <p key={part.type}>{part.text}</p>
      ))}
      {parts.length === 0 && <Ellipsis className="animate-pulse" />}
    </motion.div>
  );
}
