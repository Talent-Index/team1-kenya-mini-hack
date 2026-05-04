import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import { EcosystemProject, CATEGORY_COLORS } from "@/lib/github";
import { trackEvent } from "@/lib/analytics";

export const EcosystemCard = ({ project }: { project: EcosystemProject }) => {
  const gradient = CATEGORY_COLORS[project.category];

  return (
    <div className="group rounded-2xl bg-gradient-card border-hairline p-5 hover:border-primary/40 transition-all hover:-translate-y-0.5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <span className={`inline-block text-[10px] uppercase tracking-widest font-medium bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-2`}>
            {project.category}
          </span>
          <h3 className="font-display font-semibold tracking-tight truncate">{project.displayName}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1 min-h-[2.5rem]">{project.description}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-3">
        {project.language !== "Unknown" && (
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">{project.language}</span>
        )}
      </div>

      <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/60">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1"><Star className="h-3 w-3" />{project.stars}</span>
          <span className="inline-flex items-center gap-1"><GitFork className="h-3 w-3" />{project.forks}</span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => trackEvent("project_click", { name: project.name, source: "ecosystem" })}
          >
            <Github className="h-4 w-4" />
          </a>
          {project.homepage && (
            <a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
