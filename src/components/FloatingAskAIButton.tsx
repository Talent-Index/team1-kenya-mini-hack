import { Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription
} from "@/components/ui/dialog";

export const FloatingAskAIButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className="fixed bottom-6 right-6 z-40 group"
          aria-label="Ask Team1 AI"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-brand blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
          <span className="relative flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-3 font-medium text-primary-foreground shadow-glow animate-pulse-glow">
            <Sparkles className="h-4 w-4" />
            Ask Team1 AI
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="bg-surface-1 border-border">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            Team1 AI · Ecosystem Intelligence
          </DialogTitle>
          <DialogDescription>
            Ask anything about Kenyan Avalanche builders, projects, or tracks. (Connect Lovable AI to enable live answers.)
          </DialogDescription>
        </DialogHeader>
        <div className="rounded-lg bg-surface-2 border-hairline p-4 text-sm text-muted-foreground">
          <p className="mb-2 text-foreground">Try asking:</p>
          <ul className="space-y-1.5">
            <li>· Which payments projects are grant-ready?</li>
            <li>· Show me builders open to collaborate in Nairobi.</li>
            <li>· Who recently shipped this month?</li>
          </ul>
        </div>
        <Button variant="brand">Coming soon</Button>
      </DialogContent>
    </Dialog>
  );
};
