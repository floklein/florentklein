import { cn } from "@/lib/utils";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
} from "@tanstack/react-query";
import { actions } from "astro:actions";
import { Ellipsis } from "lucide-react";
import { useState } from "react";
import Markdown from "react-markdown";
import { Input } from "./ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import { Textarea } from "./ui/textarea";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const queryClient = new QueryClient();

function ChatWithProviders() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hey! I'm a friendly assistant here to answer questions about Florent.",
    },
  ]);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const { mutateAsync: sendMessage, isPending } = useMutation({
    mutationFn: actions.sendMessage.orThrow,
    onSuccess: (content) => {
      setMessages((oldMessages) => [
        ...oldMessages,
        { role: "assistant", content },
      ]);
    },
  });

  async function handleSubmit(e?: React.FormEvent<HTMLFormElement>) {
    e?.preventDefault();
    setOpen(true);
    const content = text.trim();
    if (content.length === 0) {
      return;
    }
    setText("");
    setMessages((oldMessages) => [...oldMessages, { role: "user", content }]);
    await sendMessage({
      messages: [...messages, { role: "user", content }],
    });
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function handleTextareaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Ask about me..."
          value={text}
          onChange={handleInputChange}
          className="text-xl! px-4 h-12 focus-visible:scale-105 focus-visible:shadow-lg transition-all font-mono bg-card"
          autoFocus
        />
      </form>
      <SheetContent className="gap-0 max-w-xl!">
        <SheetHeader>
          <SheetTitle>Chat</SheetTitle>
          <SheetDescription hidden>
            Ask my AI assistant anything about me.
          </SheetDescription>
        </SheetHeader>
        <div className="space-y-4 flex-1 overflow-y-auto p-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "break-words max-w-full",
                message.role === "user" &&
                  "px-3 py-2 bg-accent justify-self-end block w-fit max-w-[80%]",
              )}
            >
              <Markdown>{message.content}</Markdown>
            </div>
          ))}
          {isPending && (
            <div>
              <Ellipsis className="animate-pulse" />
            </div>
          )}
        </div>
        <div className="p-4">
          <Textarea
            placeholder="Ask about me..."
            value={text}
            onChange={handleTextareaChange}
            onKeyDown={handleKeyDown}
            autoFocus
            className="bg-card resize-none font-mono"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function Chat() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChatWithProviders />
    </QueryClientProvider>
  );
}
