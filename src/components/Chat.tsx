import { cn } from "@/lib/utils";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
} from "@tanstack/react-query";
import { actions } from "astro:actions";
import { useState } from "react";
import { Input } from "./ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Textarea } from "./ui/textarea";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const queryClient = new QueryClient();

function ChatWithProviders() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(true);

  const { mutateAsync: sendMessage, isPending } = useMutation({
    mutationFn: actions.sendMessage,
  });

  async function handleSubmit(e?: React.FormEvent<HTMLFormElement>) {
    e?.preventDefault();
    const content = text.trim();
    if (content.length === 0) {
      return;
    }
    setMessages((oldMessages) => [...oldMessages, { role: "user", content }]);
    setOpen(true);
    const { data, error } = await sendMessage({
      messages: [...messages, { role: "user", content }],
    });
    if (error) {
      console.error(error);
      return;
    }
    setMessages((oldMessages) => [
      ...oldMessages,
      { role: "assistant", content: data },
    ]);
    setText("");
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
          disabled={isPending}
        />
      </form>
      <SheetContent className="gap-0">
        <SheetHeader>
          <SheetTitle>My AI assistant</SheetTitle>
        </SheetHeader>
        <div className="space-y-4 flex-1 overflow-y-auto p-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                message.role === "user" &&
                  "px-3 py-2 bg-accent rounded-md justify-self-end block w-fit",
              )}
            >
              {message.content}
            </div>
          ))}
        </div>
        <div className="p-4">
          <Textarea
            placeholder="Ask about me..."
            value={text}
            onChange={handleTextareaChange}
            onKeyDown={handleKeyDown}
            disabled={isPending}
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
