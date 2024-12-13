import { useState, useRef, useEffect } from "react";
import { streamChat, type Msg } from "@/lib/nelson-chat";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { NelsonHeader } from "@/components/NelsonHeader";
import { toast } from "sonner";
import skyBg from "@/assets/sky-bg.jpg";

const WELCOME: Msg = {
  role: "assistant",
  content: `## 🫵 Ha-ha!\n\nWelcome to the **Trenches**, degen.\n\nDrop me a token name, contract address, or describe any memecoin launch — and I'll roast it harder than a Springfield Elementary dodgeball game.`,
};

const Index = () => {
  const [messages, setMessages] = useState<Msg[]>([WELCOME]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const send = async (input: string) => {
    const userMsg: Msg = { role: "user", content: input };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setIsLoading(true);

    let assistantSoFar = "";
    const upsertAssistant = (chunk: string) => {
      assistantSoFar += chunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant" && prev.length > newMessages.length) {
          return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: assistantSoFar } : m));
        }
        return [...prev.slice(0, newMessages.length), { role: "assistant", content: assistantSoFar }];
      });
    };

    try {
      await streamChat({
        messages: newMessages.filter((m) => m !== WELCOME),
        onDelta: upsertAssistant,
        onDone: () => setIsLoading(false),
        onError: (err) => {
          toast.error(err);
          setIsLoading(false);
        },
      });
    } catch {
      toast.error("Ha-ha! Something broke. Even bullies have bad days.");
      setIsLoading(false);
    }
  };

  return (
    <div
      className="flex flex-col h-screen bg-background bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${skyBg})` }}
    >
      <NelsonHeader />

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <ChatMessage
            key={i}
            role={msg.role}
            content={msg.content}
            isStreaming={isLoading && i === messages.length - 1 && msg.role === "assistant"}
          />
        ))}
      </div>

      <ChatInput onSend={send} disabled={isLoading} />
    </div>
  );
};

export default Index;
