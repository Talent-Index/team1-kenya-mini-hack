import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  href?: string;
  hrefLabel?: string;
  align?: "left" | "center";
}

export const SectionHeader = ({ eyebrow, title, description, href, hrefLabel = "View all", align = "left" }: Props) => (
  <div className={`flex flex-col gap-2 mb-6 sm:mb-8 ${align === "center" ? "text-center items-center" : "md:flex-row md:items-end md:justify-between"}`}>
    <div className={align === "center" ? "max-w-2xl" : ""}>
      {eyebrow && (
        <span className="inline-block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">{eyebrow}</span>
      )}
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
      {description && <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-2xl">{description}</p>}
    </div>
    {href && (
      <Link
        to={href}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors group whitespace-nowrap"
      >
        {hrefLabel}
        <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </Link>
    )}
  </div>
);
