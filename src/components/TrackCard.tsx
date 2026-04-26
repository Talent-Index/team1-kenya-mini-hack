import { Link } from "react-router-dom";
import * as LucideIcons from "lucide-react";
import { Track } from "@/types";
import { trackMeta } from "@/data/mock";

export const TrackCard = ({ track, count }: { track: Track; count: number }) => {
  const meta = trackMeta[track];
  const Icon = (LucideIcons as unknown as Record<string, LucideIcons.LucideIcon>)[meta.icon];
  return (
    <Link
      to={`/projects?track=${encodeURIComponent(track)}`}
      className="group relative block rounded-2xl bg-gradient-card border-hairline p-5 overflow-hidden hover:border-primary/40 transition-all hover:-translate-y-0.5"
    >
      <div className={`absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br ${meta.gradient} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`} />
      <div className="relative">
        <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${meta.gradient} shadow-glow`}>
          {Icon && <Icon className="h-5 w-5 text-primary-foreground" />}
        </div>
        <h3 className="font-display font-semibold mt-4 tracking-tight">{track}</h3>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-2 min-h-[2rem]">{meta.description}</p>
        <div className="mt-4 flex items-center justify-between text-xs">
          <span className="text-muted-foreground">{count} projects</span>
          <span className="text-foreground group-hover:text-primary transition-colors">Explore →</span>
        </div>
      </div>
    </Link>
  );
};
