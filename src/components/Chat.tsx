import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
} from "@tanstack/react-query";
import { Ellipsis } from "lucide-react";
import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import Markdown from "react-markdown";

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
        "Hey! I'm Florent's assistant here to answer questions about him.",
    },
  ]);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const { mutate: sendMessage, isPending: isStreaming } = useMutation({
    mutationFn: async (messages: Message[]) => {
      const response = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ messages }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      if (!response.body) {
        throw new Error("No response body");
      }
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = "";
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value);
          const lines = chunk.split("\n");
          for (const line of lines) {
            if (!line.startsWith("data: ")) continue;
            const data = line.slice(6);
            if (data === "[DONE]") break;
            try {
              const parsed = JSON.parse(data);
              if (!parsed.content) continue;
              assistantMessage += parsed.content;
              setMessages((prev) => [
                ...prev.slice(0, -1),
                { role: "assistant", content: assistantMessage },
              ]);
            } catch (e) {
              console.error(e);
            }
          }
        }
      } finally {
        reader.releaseLock();
      }
    },
  });

  function handleSubmit(e?: FormEvent<HTMLFormElement>) {
    e?.preventDefault();
    setOpen(true);
    const content = text.trim();
    if (content.length === 0) {
      return;
    }
    setText("");
    const newMessages: Message[] = [...messages, { role: "user", content }];
    setMessages(newMessages);
    sendMessage(newMessages);
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function handleTextareaChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
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
          className="border-none bg-accent text-xl! px-4 h-12 focus-visible:scale-105 focus-visible:shadow-lg transition-all rounded-none"
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
          {isStreaming && !messages.at(-1)?.content && (
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
            className="border-none bg-accent resize-none rounded-none"
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
