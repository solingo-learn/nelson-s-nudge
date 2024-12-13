import ReactMarkdown from "react-markdown";
import nelsonImg from "@/assets/nelson.png";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
  isStreaming?: boolean;
}

export function ChatMessage({ role, content, isStreaming }: ChatMessageProps) {
  const isNelson = role === "assistant";

  return (
    <div
      className={cn(
        "flex gap-3 animate-slide-up",
        isNelson ? "flex-row" : "flex-row-reverse"
      )}
    >
      {isNelson && (
        <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-foreground overflow-hidden cartoon-shadow bg-primary">
          <img src={nelsonImg} alt="Nelson" className="w-full h-full object-cover" />
        </div>
      )}
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-3 border-2 border-foreground cartoon-shadow",
          isNelson
            ? "bg-chat-nelson text-foreground rounded-tl-sm"
            : "bg-chat-user text-secondary-foreground rounded-tr-sm"
        )}
      >
        {isNelson ? (
          <div className="prose prose-sm max-w-none [&_h2]:font-bangers [&_h2]:text-lg [&_h2]:mt-3 [&_h2]:mb-1 [&_p]:my-1 [&_ul]:my-1 [&_li]:my-0">
            <ReactMarkdown>{content}</ReactMarkdown>
            {isStreaming && (
              <span className="inline-block w-2 h-4 bg-foreground animate-pulse ml-1" />
            )}
          </div>
        ) : (
          <p className="font-comic font-bold">{content}</p>
        )}
      </div>
    </div>
  );
}
