import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics";

export const StickyApplyCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 glass border-t border-border/60 py-3 animate-fade-in">
      <div className="container flex items-center justify-between gap-4">
        <div className="hidden sm:block">
          <p className="text-sm font-medium">Join the Mini Hack — June to August 2026</p>
          <p className="text-xs text-muted-foreground">Payments · Gamification · Agentic Systems</p>
        </div>
        <Button
          asChild
          variant="brand"
          size="sm"
          onClick={() => trackEvent("cta_click", { location: "sticky_bar" })}
        >
          <Link to="/apply">
            Apply Now <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};
