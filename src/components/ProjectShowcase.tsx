import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Star, GitFork, Sparkles } from "lucide-react";
import { useEcosystemProjects, EcosystemProject, EcosystemCategory, CATEGORY_COLORS } from "@/lib/github";
import { trackEvent } from "@/lib/analytics";
import { Skeleton } from "@/components/ui/skeleton";

type FilterTab = "All" | EcosystemCategory;

const FILTERS: FilterTab[] = [
  "All",
  "AI & Agents",
  "Gaming & NFTs",
  "Payments & Finance",
  "Infrastructure",
  "Community & Education",
  "DeFi",
  "Developer Tooling",
];

const initial = (s: string) => s.replace(/[^a-zA-Z0-9]/g, "").charAt(0).toUpperCase() || "•";

const ProjectCard = ({ project }: { project: EcosystemProject }) => {
  const gradient = CATEGORY_COLORS[project.category];
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl bg-gradient-card border-hairline overflow-hidden hover:-translate-y-1 transition-all duration-300"
    >
      {/* Animated gradient border on hover */}
      <span aria-hidden className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "linear-gradient(135deg, hsl(var(--brand-red)/0.6), transparent 40%, hsl(var(--brand-orange)/0.5))", padding: 1, WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }} />

      {/* Cover with logo monogram */}
      <div className="relative h-32 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-30 group-hover:opacity-50 transition-opacity`} />
        <div className="absolute inset-0 grid-overlay-red opacity-40" />
        <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-brand-red/30 blur-3xl group-hover:bg-brand-red/50 transition-colors" />
        <div className="relative h-full flex items-center justify-between px-5">
          <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center font-display text-2xl font-bold text-white shadow-glow ring-1 ring-white/10`}>
            {initial(project.displayName)}
          </div>
          <span className="text-[10px] font-mono uppercase tracking-[0.18em] px-2.5 py-1 rounded-full glass border border-white/10 text-foreground/80">
            {project.category}
          </span>
        </div>
      </div>

      <div className="relative p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display font-semibold tracking-tight text-base truncate">{project.displayName}</h3>
          {project.stars > 0 && (
            <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground shrink-0">
              <Sparkles className="h-3 w-3 text-brand-orange" />Active
            </span>
          )}
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mt-1.5 min-h-[2.5rem] leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.language !== "Unknown" && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border/50">{project.language}</span>
          )}
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border/50">Avalanche</span>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/60">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1"><Star className="h-3 w-3" />{project.stars}</span>
            <span className="inline-flex items-center gap-1"><GitFork className="h-3 w-3" />{project.forks}</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.displayName} on GitHub`}
              className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              onClick={() => trackEvent("project_click", { name: project.name, source: "showcase" })}
            >
              <Github className="h-4 w-4" />
            </a>
            {project.homepage && (
              <a
                href={project.homepage}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.displayName} live demo`}
                className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export const ProjectShowcase = ({ limit = 9 }: { limit?: number }) => {
  const { data, isLoading } = useEcosystemProjects();
  const [filter, setFilter] = useState<FilterTab>("All");

  const filtered = useMemo(() => {
    const list = data ?? [];
    const f = filter === "All" ? list : list.filter((p) => p.category === filter);
    return f.slice(0, limit);
  }, [data, filter, limit]);

  return (
    <div>
      {/* Filter pills */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-3 mb-6 -mx-1 px-1">
        {FILTERS.map((f) => {
          const active = filter === f;
          return (
            <button
              key={f}
              onClick={() => {
                setFilter(f);
                trackEvent("filter_change", { filter: f });
              }}
              className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide border transition-all ${
                active
                  ? "bg-gradient-brand text-primary-foreground border-transparent shadow-glow"
                  : "glass border-border/60 text-muted-foreground hover:text-foreground hover:border-brand-red/40"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      {isLoading && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-[280px] rounded-2xl" />
          ))}
        </div>
      )}

      {!isLoading && filtered.length === 0 && (
        <div className="text-center py-16 text-muted-foreground text-sm">No projects in this category yet.</div>
      )}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
};
