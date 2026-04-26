import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Github, Twitter, Linkedin, MapPin, Award } from "lucide-react";
import { builders, projects } from "@/data/mock";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";

const BuilderProfile = () => {
  const { id } = useParams();
  const b = builders.find((x) => x.id === id);
  if (!b) return <div className="container py-24 text-center"><h1 className="font-display text-3xl">Builder not found</h1></div>;
  const myProjects = projects.filter((p) => b.projects.includes(p.id));

  return (
    <div className="container py-12 md:py-16">
      <Link to="/builders" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="h-4 w-4" /> Back to builders
      </Link>

      <div className="rounded-3xl bg-gradient-card border-hairline p-6 md:p-10">
        <div className="flex flex-col md:flex-row gap-6 md:items-center">
          <div className="relative shrink-0">
            <img src={b.avatarUrl} alt={b.name} className="h-24 w-24 md:h-32 md:w-32 rounded-2xl object-cover ring-2 ring-border" />
            {b.openToCollaborate && <span className="absolute -bottom-2 -right-2 text-[10px] uppercase tracking-widest font-medium px-2 py-1 rounded-full bg-gradient-brand text-primary-foreground">Open</span>}
          </div>
          <div className="flex-1">
            <h1 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">{b.name}</h1>
            <p className="text-muted-foreground mt-1">{b.role}</p>
            <p className="text-sm text-muted-foreground mt-2 inline-flex items-center gap-1"><MapPin className="h-3 w-3" />{b.location}</p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {b.skills.map((s) => <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-foreground">{s}</span>)}
            </div>
          </div>
          <div className="flex md:flex-col gap-2">
            {b.githubUrl && <Button asChild variant="glass" size="sm"><a href={b.githubUrl} target="_blank" rel="noreferrer"><Github className="h-4 w-4" /></a></Button>}
            {b.xUrl && <Button asChild variant="glass" size="sm"><a href={b.xUrl} target="_blank" rel="noreferrer"><Twitter className="h-4 w-4" /></a></Button>}
            {b.linkedinUrl && <Button asChild variant="glass" size="sm"><a href={b.linkedinUrl} target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" /></a></Button>}
          </div>
        </div>
        <p className="mt-6 text-muted-foreground leading-relaxed">{b.bio}</p>
      </div>

      {b.badges.length > 0 && (
        <section className="mt-10">
          <h2 className="font-display text-xl font-semibold mb-3">Badges</h2>
          <div className="flex flex-wrap gap-2">
            {b.badges.map((bd) => (
              <span key={bd} className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-gradient-card border-hairline">
                <Award className="h-3.5 w-3.5 text-brand-orange" />{bd}
              </span>
            ))}
          </div>
        </section>
      )}

      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold mb-4">Current projects</h2>
        {myProjects.length === 0 ? (
          <p className="text-muted-foreground text-sm">No projects yet.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {myProjects.map((p) => <ProjectCard key={p.id} project={p} />)}
          </div>
        )}
      </section>
    </div>
  );
};

export default BuilderProfile;
