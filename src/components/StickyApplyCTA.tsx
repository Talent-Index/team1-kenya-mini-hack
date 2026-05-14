import { useEffect, useState } from "react";
import { ApplyButton } from "@/components/ApplyButton";

export const StickyApplyCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 glass border-t border-brand-red/20 py-3 animate-fade-in">
      <div className="container flex items-center justify-between gap-4">
        <div className="hidden sm:block">
          <p className="text-sm font-medium">Join the Mini Hack — June to August 2026</p>
          <p className="text-xs text-muted-foreground">Payments · Gamified Systems · Agentic Systems</p>
        </div>
        <ApplyButton location="sticky_bar" label="Apply on Luma" size="sm" />
      </div>
    </div>
  );
};
