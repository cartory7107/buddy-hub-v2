import { useState } from "react";
import { Bot, X, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const suggestions = [
  "How do I become a reseller?",
  "Explain the commission system",
  "How does order tracking work?",
  "How to find winning products?",
];

export function AIAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-gradient-primary text-primary-foreground shadow-glow grid place-items-center hover:scale-105 transition-transform"
        aria-label="Open AI Assistant"
      >
        <Bot className="h-6 w-6" />
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] glass rounded-2xl shadow-glow animate-fade-up overflow-hidden">
          <div className="bg-gradient-primary p-4 text-primary-foreground flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-white/20 grid place-items-center">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <div className="font-semibold text-sm">Cartory AI</div>
                <div className="text-xs opacity-90">Ask me anything</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="p-1 rounded hover:bg-white/10">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="p-4 space-y-2 max-h-72 overflow-y-auto">
            <div className="text-sm bg-muted/60 rounded-xl p-3">
              👋 Hi! I'm your Cartory assistant. How can I help you grow your reseller business today?
            </div>
            {suggestions.map((s) => (
              <button
                key={s}
                className="w-full text-left text-sm px-3 py-2 rounded-lg border hover:border-primary hover:bg-primary/5 transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
          <div className="p-3 border-t flex gap-2">
            <input
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 rounded-lg bg-muted/60 text-sm outline-none focus:ring-2 ring-primary"
            />
            <Button size="icon" className="bg-gradient-primary text-primary-foreground">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
}