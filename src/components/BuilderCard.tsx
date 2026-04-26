import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, MapPin } from "lucide-react";
import { Builder } from "@/types";

export const BuilderCard = ({ builder }: { builder: Builder }) => (
  <Link
    to={`/builders/${builder.id}`}
    className="group block rounded-2xl bg-gradient-card border-hairline p-5 hover:border-primary/40 transition-all hover:-translate-y-0.5"
  >
    <div className="flex items-start gap-4">
      <div className="relative">
        <img src={builder.avatarUrl} alt={builder.name} loading="lazy" className="h-14 w-14 rounded-full object-cover ring-2 ring-border" />
        {builder.openToCollaborate && (
          <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-brand-orange ring-2 ring-background" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-display font-semibold tracking-tight truncate">{builder.name}</h3>
        <p className="text-xs text-muted-foreground truncate">{builder.role}</p>
        <p className="text-xs text-muted-foreground mt-0.5 inline-flex items-center gap-1"><MapPin className="h-3 w-3" />{builder.location}</p>
      </div>
    </div>
    <p className="text-sm text-muted-foreground mt-3 line-clamp-2 min-h-[2.5rem]">{builder.bio}</p>
    <div className="flex flex-wrap gap-1 mt-3">
      {builder.skills.slice(0, 3).map((s) => (
        <span key={s} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">{s}</span>
      ))}
    </div>
    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/60">
      {builder.openToCollaborate ? (
        <span className="text-[10px] uppercase tracking-widest text-brand-orange font-medium">Open to collaborate</span>
      ) : <span />}
      <div className="flex items-center gap-2 text-muted-foreground">
        {builder.githubUrl && <Github className="h-3.5 w-3.5 hover:text-foreground" />}
        {builder.xUrl && <Twitter className="h-3.5 w-3.5 hover:text-foreground" />}
        {builder.linkedinUrl && <Linkedin className="h-3.5 w-3.5 hover:text-foreground" />}
      </div>
    </div>
  </Link>
);
