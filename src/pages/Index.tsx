import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, Layers, Calendar, Zap, Globe, GraduationCap, Github } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import { MetricCard } from "@/components/MetricCard";
import { CohortTimeline } from "@/components/CohortTimeline";
import { AcademyTracks } from "@/components/AcademyTracks";
import { FeaturedBuilders } from "@/components/FeaturedBuilders";
import { FAQ } from "@/components/FAQ";
import { useEcosystemProjects } from "@/lib/github";
import { EcosystemCard } from "@/components/EcosystemCard";
import { trackEvent } from "@/lib/analytics";

const Index = () => {
  const { data: projects } = useEcosystemProjects();
  const recentProjects = projects?.slice(0, 6) ?? [];
  const totalProjects = projects?.length ?? 0;

  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background" />
        <div className="container relative pt-20 md:pt-32 pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full glass border-hairline px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange animate-pulse" />
              June – August 2026 · Nairobi · Avalanche
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
              Team1 Kenya <span className="text-gradient-brand">Mini Hack</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              A 3-month builder program for Kenyan developers, founders, and teams shipping real products on Avalanche.
              Payments → Gamification → Agentic Systems → Hackathon.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                variant="brand"
                size="lg"
                onClick={() => trackEvent("cta_click", { location: "hero", label: "apply" })}
              >
                <Link to="/apply">Apply Now <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="glass" size="lg">
                <Link to="/resources">Explore Resources</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand-red/10 border border-brand-red/20 px-4 py-2 text-sm text-brand-red"
          >
            <Zap className="h-4 w-4" />
            Applications open — Cohort 1 (Payments) starts June 2026
          </motion.div>

          {/* Real metrics only */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard label="Projects Indexed" value={totalProjects || "…"} icon={Layers} accent="red" />
            <MetricCard label="Monthly Tracks" value={3} icon={Rocket} accent="orange" />
            <MetricCard label="Hackathon" value="Aug 28" icon={Calendar} accent="purple" />
            <MetricCard label="Source" value="GitHub" icon={Github} accent="blue" />
          </div>
        </div>
      </section>

      {/* ─── FEATURED BUILDERS (real GitHub data) ─── */}
      <section className="container py-16 md:py-20">
        <SectionHeader
          eyebrow="Featured Builders"
          title="Real projects, shipping now"
          description="Top repositories from the Talent-Index Kenya organization — pulled live from GitHub."
          href="/ecosystem"
          hrefLabel="View all"
        />
        <FeaturedBuilders />
      </section>

      {/* ─── ACADEMY TRACKS ─── */}
      <section className="container py-16 md:py-20">
        <SectionHeader
          eyebrow="Builder Tracks"
          title="Each cohort maps to Avalanche Academy"
          description="Structured learning paths so you graduate the program with real, deployable skills."
          href="/resources"
          hrefLabel="Resource hub"
        />
        <AcademyTracks />
        <div className="mt-6 flex justify-center">
          <Button asChild variant="glass" size="sm">
            <a
              href="https://build.avax.network/academy"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("cta_click", { location: "academy_section" })}
            >
              <GraduationCap className="h-4 w-4" /> Open Avalanche Academy
            </a>
          </Button>
        </div>
      </section>

      {/* ─── ECOSYSTEM PREVIEW ─── */}
      <section className="container py-16 md:py-20">
        <SectionHeader
          eyebrow="Ecosystem"
          title="What's being built"
          description={totalProjects ? `${totalProjects} live projects in the index.` : "Loading the index…"}
          href="/ecosystem"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recentProjects.map((p) => (
            <EcosystemCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      {/* ─── COHORT TIMELINE ─── */}
      <section className="container py-16 md:py-20">
        <SectionHeader
          eyebrow="The Program"
          title="3 months. 3 tracks. 1 hackathon."
          description="Each month focuses on a different vertical — build depth, not breadth."
          align="center"
        />
        <CohortTimeline />
      </section>

      {/* ─── EVENTS ─── */}
      <section className="container py-16 md:py-20">
        <SectionHeader
          eyebrow="Events"
          title="Workshops, meetups & demo days"
          description="In-person in Nairobi and streamed online via Luma."
          href="/events"
          hrefLabel="View all events"
        />
        <div className="rounded-2xl bg-gradient-card border-hairline overflow-hidden">
          <iframe
            src="https://lu.ma/embed/calendar/cal-team1africa/events?lt=light"
            className="w-full h-[400px] border-0"
            style={{ filter: "invert(1) hue-rotate(180deg)", borderRadius: "1rem" }}
            title="Team1 Africa Events"
            loading="lazy"
          />
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button asChild variant="glass" size="sm">
            <a
              href="https://lu.ma/Team1Africa"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("rsvp_click", { source: "home" })}
            >
              <Calendar className="h-4 w-4" /> View on Luma
            </a>
          </Button>
        </div>
      </section>

      {/* ─── WHY APPLY ─── */}
      <section className="container py-16 md:py-20">
        <SectionHeader
          eyebrow="Why Apply"
          title="Built to help builders get seen."
          description="Every approved project plugs into the Team1 distribution engine."
          align="center"
        />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { icon: Globe, title: "Ecosystem distribution", desc: "Get featured across Avalanche community channels and Team1 socials." },
            { icon: GraduationCap, title: "Academy + mentorship", desc: "Structured curriculum mapped to Avalanche Academy modules." },
            { icon: Rocket, title: "Ship with support", desc: "Workshops, code reviews, and grant pathways to take you to market." },
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

      {/* ─── FAQ ─── */}
      <section className="container py-16 md:py-20">
        <SectionHeader eyebrow="FAQ" title="Common questions" align="center" />
        <div className="max-w-2xl mx-auto">
          <FAQ />
        </div>
      </section>

      {/* ─── APPLY CTA ─── */}
      <section className="container py-16 md:py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-card border-hairline p-10 md:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-spectrum opacity-10" />
          <div className="absolute -inset-x-20 -bottom-20 h-40 bg-gradient-brand opacity-30 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight">Ready to build on Avalanche?</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Join the Mini Hack. Ship real products. Plug into the Avalanche ecosystem.</p>
            <Button
              asChild
              variant="brand"
              size="lg"
              className="mt-8"
              onClick={() => trackEvent("cta_click", { location: "bottom_cta" })}
            >
              <Link to="/apply">Apply Now <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
