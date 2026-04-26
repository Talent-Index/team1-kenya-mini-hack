import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Rocket, Users, Activity, Github, Trophy, HandCoins, Layers, Target } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import { FeaturedProjectCard } from "@/components/FeaturedProjectCard";
import { ProjectCard } from "@/components/ProjectCard";
import { BuilderCard } from "@/components/BuilderCard";
import { MetricCard } from "@/components/MetricCard";
import { TrackCard } from "@/components/TrackCard";
import { projects, builders, TRACKS } from "@/data/mock";

const Index = () => {
  const featured = projects.filter((p) => p.featured);
  const recent = [...projects].sort((a, b) => +new Date(b.lastShipped) - +new Date(a.lastShipped)).slice(0, 6);
  const spotlight = builders.slice(0, 6);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        <div className="container relative pt-20 md:pt-32 pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full glass border-hairline px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange animate-pulse" />
              Avalanche Team1 · Kenya
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
              Discover Kenya's <span className="text-gradient-brand">Avalanche</span> builders
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Track the founders, developers, designers, communities, and products building on Avalanche from Kenya — from idea to launch, traction, and go-to-market.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="brand" size="lg">
                <Link to="/submit">Submit Your Project <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="glass" size="lg">
                <Link to="/projects">Explore Projects</Link>
              </Button>
            </div>
          </motion.div>

          {/* live metrics strip */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard label="Projects Listed" value={projects.length} icon={Layers} accent="red" />
            <MetricCard label="Active Builders" value={builders.length} icon={Users} accent="orange" />
            <MetricCard label="Shipped This Month" value={recent.length} icon={Rocket} accent="purple" />
            <MetricCard label="Grant-Ready" value={projects.filter(p => p.grantReady).length} icon={HandCoins} accent="blue" />
          </div>
        </div>
      </section>

      {/* Featured horizontal */}
      <section className="container py-16 md:py-20">
        <SectionHeader
          eyebrow="Featured"
          title="Projects shipping right now"
          description="Hand-picked projects from Avalanche Team1 Kenya going to market this cycle."
          href="/projects"
        />
        <div className="-mx-4 md:-mx-6 px-4 md:px-6 flex gap-4 overflow-x-auto no-scrollbar scroll-snap-x pb-4">
          {featured.map((p, i) => <FeaturedProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </section>

      {/* Recently Shipped */}
      <section className="container py-16 md:py-20">
        <SectionHeader
          eyebrow="Recently Shipped"
          title="What just dropped"
          description="MVPs launched, demos shared, hackathons won, grants secured."
          href="/projects"
        />
        <div className="rounded-2xl bg-gradient-card border-hairline divide-y divide-border/60">
          {recent.map((p) => (
            <Link key={p.id} to={`/projects/${p.slug}`} className="flex items-center gap-4 p-4 md:p-5 hover:bg-secondary/40 transition-colors">
              <img src={p.imageUrl} alt={p.name} loading="lazy" className="h-14 w-14 rounded-xl object-cover" />
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display font-semibold tracking-tight truncate">{p.name}</h3>
                  <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">{p.stage}</span>
                </div>
                <p className="text-sm text-muted-foreground truncate">{p.shippingUpdate}</p>
              </div>
              <div className="hidden md:flex items-center gap-3 text-xs text-muted-foreground">
                <span>{new Date(p.lastShipped).toLocaleDateString()}</span>
                {p.githubUrl && <Github className="h-4 w-4" />}
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Builder Spotlight */}
      <section className="container py-16 md:py-20">
        <SectionHeader
          eyebrow="Builder Spotlight"
          title="Meet the builders"
          description="Founders, engineers, designers and operators shipping from Kenya."
          href="/builders"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {spotlight.map((b) => <BuilderCard key={b.id} builder={b} />)}
        </div>
      </section>

      {/* Tracks */}
      <section className="container py-16 md:py-20">
        <SectionHeader
          eyebrow="Tracks"
          title="Categories of innovation"
          description="What Kenyan builders are exploring across the Avalanche ecosystem."
        />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {TRACKS.map((t) => (
            <TrackCard key={t} track={t} count={projects.filter(p => p.track === t).length} />
          ))}
        </div>
      </section>

      {/* GTM Visibility */}
      <section className="container py-16 md:py-20">
        <SectionHeader
          eyebrow="Visibility Layer"
          title="Built to help builders get seen."
          description="Every approved project plugs into the Team1 distribution engine."
          align="center"
        />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { icon: Sparkles, title: "Distribution through Team1 Kenya", desc: "Featured across Avalanche community channels and editorial." },
            { icon: Users, title: "Investor & partner discovery", desc: "Surface in front of partners actively scouting Kenyan teams." },
            { icon: Trophy, title: "Hackathon & grant tracking", desc: "Stay aligned with deadlines, opportunities, and bounties." },
            { icon: Activity, title: "Founder support & mentorship", desc: "Get matched with operators who have been there before." },
            { icon: Target, title: "Demo day readiness", desc: "Prep with the Team1 GTM playbook and feedback loops." },
            { icon: Rocket, title: "Community visibility", desc: "Show your traction. Build in public. Earn distribution." },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl bg-gradient-card border-hairline p-6 hover:border-primary/40 transition-colors">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand shadow-glow mb-4">
                <c.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold tracking-tight">{c.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Projects Grid */}
      <section className="container py-16 md:py-20">
        <SectionHeader eyebrow="Directory" title="Latest in the index" href="/projects" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16 md:py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-card border-hairline p-10 md:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-spectrum opacity-10" />
          <div className="absolute -inset-x-20 -bottom-20 h-40 bg-gradient-brand opacity-30 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight">Building on Avalanche from Kenya?</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Join the index. Get visibility. Reach users, investors and grants.</p>
            <Button asChild variant="brand" size="lg" className="mt-8">
              <Link to="/submit">Submit Your Project <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
