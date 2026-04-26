import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Twitter, Globe, MapPin, CheckCircle2, Circle, Users, Rocket, HandCoins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects, builders } from "@/data/mock";
import { BuilderCard } from "@/components/BuilderCard";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="container py-24 text-center">
        <h1 className="font-display text-3xl">Project not found</h1>
        <Button asChild variant="ghost" className="mt-4"><Link to="/projects"><ArrowLeft className="h-4 w-4" /> Back</Link></Button>
      </div>
    );
  }

  const team = builders.filter((b) => project.builderIds.includes(b.id));
  const checklist = [
    { label: "Pitch deck", done: project.demoDayReady },
    { label: "Live demo", done: !!project.demoUrl },
    { label: "GitHub repo", done: !!project.githubUrl },
    { label: "Avalanche integration", done: true },
    { label: "Traction metrics", done: project.visibilityScore > 75 },
    { label: "Team page", done: team.length > 0 },
  ];

  return (
    <div>
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img src={project.imageUrl} alt={project.name} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <div className="container relative h-full flex flex-col justify-end pb-8">
          <Link to="/projects" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4 w-fit">
            <ArrowLeft className="h-4 w-4" /> Back to projects
          </Link>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-gradient-brand text-primary-foreground">{project.stage}</span>
            <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full glass border-hairline">{project.track}</span>
            {project.grantReady && <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-brand-orange/20 text-brand-orange border border-brand-orange/30">Grant Ready</span>}
            {project.demoDayReady && <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-brand-purple/20 text-brand-purple border border-brand-purple/30">Demo Day Ready</span>}
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight">{project.name}</h1>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl">{project.tagline}</p>
        </div>
      </div>

      <div className="container py-12 grid gap-8 lg:grid-cols-[1fr_360px]">
        <div className="space-y-10">
          <Section title="Problem & Solution">
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
          </Section>
          <Section title="Avalanche Integration">
            <p className="text-muted-foreground">{project.avalancheIntegration}</p>
          </Section>
          <Section title="Latest milestone">
            <div className="rounded-2xl bg-gradient-card border-hairline p-5">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{new Date(project.lastShipped).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</div>
              <p className="mt-2 text-foreground">{project.shippingUpdate}</p>
            </div>
          </Section>
          <Section title="Team">
            {team.length === 0 ? (
              <p className="text-muted-foreground text-sm">No builders linked yet.</p>
            ) : (
              <div className="grid sm:grid-cols-2 gap-4">{team.map((b) => <BuilderCard key={b.id} builder={b} />)}</div>
            )}
          </Section>
          <Section title="Grant readiness checklist">
            <ul className="space-y-2">
              {checklist.map((c) => (
                <li key={c.label} className="flex items-center gap-3 text-sm">
                  {c.done ? <CheckCircle2 className="h-4 w-4 text-brand-orange" /> : <Circle className="h-4 w-4 text-muted-foreground" />}
                  <span className={c.done ? "text-foreground" : "text-muted-foreground"}>{c.label}</span>
                </li>
              ))}
            </ul>
          </Section>
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl bg-gradient-card border-hairline p-5">
            <h3 className="font-display font-semibold mb-3">Project info</h3>
            <dl className="space-y-3 text-sm">
              <Row label="Team"><span className="text-foreground">{project.teamName}</span></Row>
              <Row label="Location"><span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" />{project.location}</span></Row>
              <Row label="Visibility"><span className="text-foreground font-medium">{project.visibilityScore}/100</span></Row>
              <Row label="Last update"><span>{new Date(project.lastShipped).toLocaleDateString()}</span></Row>
            </dl>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {project.githubUrl && <Button asChild variant="glass" size="sm"><a href={project.githubUrl} target="_blank" rel="noreferrer"><Github className="h-4 w-4" /> GitHub</a></Button>}
              {project.demoUrl && <Button asChild variant="glass" size="sm"><a href={project.demoUrl} target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4" /> Demo</a></Button>}
              {project.xUrl && <Button asChild variant="glass" size="sm"><a href={project.xUrl} target="_blank" rel="noreferrer"><Twitter className="h-4 w-4" /> X</a></Button>}
              {project.websiteUrl && <Button asChild variant="glass" size="sm"><a href={project.websiteUrl} target="_blank" rel="noreferrer"><Globe className="h-4 w-4" /> Website</a></Button>}
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-card border-hairline p-5">
            <h3 className="font-display font-semibold mb-3">Current needs</h3>
            <div className="space-y-2 text-sm">
              {project.lookingForFunding && <Need icon={HandCoins} label="Looking for funding" />}
              {project.lookingForCollaborators && <Need icon={Users} label="Open to collaborators" />}
              {project.demoDayReady && <Need icon={Rocket} label="Demo day ready" />}
            </div>
            <Button variant="brand" className="w-full mt-4">Contact / Collaborate</Button>
          </div>
        </aside>
      </div>
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section>
    <h2 className="font-display text-xl font-semibold mb-3 tracking-tight">{title}</h2>
    {children}
  </section>
);
const Row = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="flex items-center justify-between text-sm">
    <dt className="text-muted-foreground">{label}</dt>
    <dd>{children}</dd>
  </div>
);
const Need = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
  <div className="flex items-center gap-2 text-sm">
    <Icon className="h-4 w-4 text-brand-orange" /> {label}
  </div>
);

export default ProjectDetail;
