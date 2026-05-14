import { ArrowRight } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

export const LUMA_URL = "https://luma.com/Team1Africa";

interface ApplyButtonProps extends Omit<ButtonProps, "asChild" | "onClick"> {
  label?: string;
  location: string;
  glow?: boolean;
}

/**
 * Universal Apply CTA. Always opens the official Luma page in a new tab.
 * Pulsing red glow + animated arrow.
 */
export const ApplyButton = ({
  label = "Apply Now",
  location,
  glow = true,
  variant = "brand",
  size = "lg",
  className,
  ...rest
}: ApplyButtonProps) => (
  <Button
    asChild
    variant={variant}
    size={size}
    className={cn(
      "group relative overflow-hidden",
      glow && "animate-pulse-red ring-1 ring-brand-red/60",
      className,
    )}
    {...rest}
  >
    <a
      href={LUMA_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("cta_click", { location, label, target: "luma" })}
    >
      <span className="relative z-10">{label}</span>
      <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      <span
        aria-hidden
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
      />
    </a>
  </Button>
);
