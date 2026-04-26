import { Link } from "react-router-dom";
import { Github, ExternalLink, Twitter, MapPin } from "lucide-react";
import { Project } from "@/types";

export const ProjectCard = ({ project }: { project: Project }) => (
  <Link
    to={`/projects/${project.slug}`}
    className="group block rounded-2xl overflow-hidden bg-gradient-card border-hairline hover:border-primary/40 transition-all duration-300 hover:-translate-y-0.5"
  >
    <div className="relative aspect-[16/9] overflow-hidden">
      <img src={project.imageUrl} alt={project.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
        <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-background/80 backdrop-blur border border-border/60">{project.stage}</span>
        {project.grantReady && <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-brand-orange/20 text-brand-orange border border-brand-orange/30">Grant Ready</span>}
        {project.lookingForCollaborators && <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-brand-blue/20 text-brand-blue border border-brand-blue/30">Open</span>}
      </div>
    </div>
    <div className="p-4">
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{project.track}</div>
      <h3 className="font-display font-semibold text-base tracking-tight truncate">{project.name}</h3>
      <p className="text-sm text-muted-foreground line-clamp-2 mt-1 min-h-[2.5rem]">{project.tagline}</p>
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/60">
        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="h-3 w-3" />{project.location}
        </span>
        <div className="flex items-center gap-2 text-muted-foreground">
          {project.githubUrl && <Github className="h-3.5 w-3.5 hover:text-foreground" />}
          {project.demoUrl && <ExternalLink className="h-3.5 w-3.5 hover:text-foreground" />}
          {project.xUrl && <Twitter className="h-3.5 w-3.5 hover:text-foreground" />}
        </div>
      </div>
    </div>
  </Link>
);
