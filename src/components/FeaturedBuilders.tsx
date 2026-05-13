import { Star, GitFork, ArrowUpRight, Loader2 } from "lucide-react";
import { useEcosystemProjects } from "@/lib/github";
import { trackEvent } from "@/lib/analytics";

/**
 * Real project highlights pulled from the Talent-Index GitHub org.
 * No fabricated testimonials — surfaces actual repos with measurable signal.
 */
export const FeaturedBuilders = () => {
  const { data, isLoading } = useEcosystemProjects();

  const featured = (data ?? [])
    .filter((p) => p.description && p.description.length > 20)
    .sort((a, b) => b.stars - a.stars || new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, 3);

  if (isLoading) {
    return (
      <div className="rounded-2xl bg-gradient-card border-hairline p-12 text-center">
        <Loader2 className="h-5 w-5 animate-spin text-muted-foreground mx-auto" />
      </div>
    );
  }

  if (featured.length === 0) return null;

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {featured.map((p) => (
        <a
          key={p.id}
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("project_click", { name: p.name, source: "featured_builders" })}
          className="group rounded-2xl bg-gradient-card border-hairline p-6 hover:border-primary/40 transition-all hover:-translate-y-0.5 flex flex-col"
        >
          <div className="flex items-start justify-between mb-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
              {p.category}
            </span>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </div>
          <h3 className="font-display text-lg font-semibold tracking-tight">{p.displayName}</h3>
          <p className="text-sm text-muted-foreground mt-2 line-clamp-3 flex-1">{p.description}</p>
          <div className="flex items-center justify-between mt-5 pt-4 border-t border-border/60 text-xs text-muted-foreground">
            <span className="font-mono">{p.language}</span>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1"><Star className="h-3 w-3" />{p.stars}</span>
              <span className="inline-flex items-center gap-1"><GitFork className="h-3 w-3" />{p.forks}</span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};
