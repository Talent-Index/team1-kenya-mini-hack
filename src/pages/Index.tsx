import { motion } from "framer-motion";
import { Rocket, Globe, GraduationCap, Layers, Github } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { MetricCard } from "@/components/MetricCard";
import { CurriculumTracks } from "@/components/CurriculumTracks";
import { BuilderResources } from "@/components/BuilderResources";
import { FeaturedBuilders } from "@/components/FeaturedBuilders";
import { CommunitySection } from "@/components/CommunitySection";
import { LumaEmbed } from "@/components/LumaEmbed";
import { HeroMiniHack } from "@/components/HeroMiniHack";
import { ApplyButton } from "@/components/ApplyButton";
import { FAQ } from "@/components/FAQ";
import { useEcosystemProjects } from "@/lib/github";
import { ProjectShowcase } from "@/components/ProjectShowcase";

const Index = () => {
  const { data: projects } = useEcosystemProjects();
  const totalProjects = projects?.length ?? 0;

  return (
    <div>
      <HeroMiniHack />

      {/* ─── METRICS ─── */}
      <section className="container -mt-4 md:-mt-8 pb-8 md:pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <MetricCard label="Projects Indexed" value={totalProjects || "…"} icon={Layers} accent="red" />
          <MetricCard label="Monthly Tracks" value={3} icon={Rocket} accent="orange" />
          <MetricCard label="Cohort Window" value="Jun–Aug" icon={GraduationCap} accent="purple" />
          <MetricCard label="Source" value="GitHub" icon={Github} accent="blue" />
        </div>
      </section>

      {/* ─── UPCOMING EVENTS / LUMA ─── */}
      <section className="container py-16 md:py-24">
        <SectionHeader
          eyebrow="Upcoming Cohorts & Sessions"
          title="Live calendar — RSVP on Luma"
          description="Workshops, IRL meetups, demo days and the hackathon. Updated in real time."
        />
        <LumaEmbed />
      </section>

      {/* ─── CURRICULUM ─── */}
      <section className="container py-16 md:py-24">
        <SectionHeader
          eyebrow="Curriculum"
          title="Three pathways. One builder accelerator."
          description="Pick the track that matches your ambition. Each cohort is 4 weeks of focused, project-based learning."
        />
        <CurriculumTracks />
      </section>

      {/* ─── BUILDER RESOURCES ─── */}
      <section className="container py-16 md:py-24">
        <SectionHeader
          eyebrow="Builder Resources"
          title="The Avalanche stack at your fingertips"
          description="Official tooling from build.avax.network — Academy, AI assistant, console, docs, explorer and integrations."
        />
        <BuilderResources />
      </section>

      {/* ─── PROJECT SHOWCASE (Retro9000-style) ─── */}
      <section className="container py-16 md:py-24">
        <SectionHeader
          eyebrow="Project Showcase"
          title="Projects built during the Mini Hack"
          description={totalProjects ? `${totalProjects} live projects indexed from Talent-Index. Filter by category to explore what's shipping in Kenya.` : "Loading the ecosystem index…"}
          href="/ecosystem"
          hrefLabel="Open full map"
        />
        <ProjectShowcase limit={9} />
      </section>


      {/* ─── FEATURED BUILDERS ─── */}
      <section className="container py-16 md:py-24">
        <SectionHeader
          eyebrow="Recently Shipped"
          title="Real builders, real repos"
          description="Top projects by activity from the Kenyan ecosystem."
        />
        <FeaturedBuilders />
      </section>

      {/* ─── COMMUNITY ─── */}
      <section className="container py-16 md:py-24">
        <SectionHeader
          eyebrow="Community"
          title="Find your people"
          description="Daily chat, weekly events, and a global Avalanche network."
          align="center"
        />
        <CommunitySection />
      </section>

      {/* ─── WHY APPLY ─── */}
      <section className="container py-16 md:py-24">
        <SectionHeader
          eyebrow="Why Apply"
          title="Built to help builders get seen."
          description="Every approved team plugs into the Team1 distribution engine."
          align="center"
        />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { icon: Globe, title: "Ecosystem distribution", desc: "Featured across Avalanche community channels and Team1 socials." },
            { icon: GraduationCap, title: "Academy + mentorship", desc: "Curriculum mapped to Avalanche Academy modules with weekly mentors." },
            { icon: Rocket, title: "Ship with support", desc: "Workshops, code reviews, and grant pathways to take you to market." },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl bg-gradient-card border-hairline p-6 hover:border-brand-red/40 transition-colors">
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
      <section className="container py-16 md:py-24">
        <SectionHeader eyebrow="FAQ" title="Common questions" align="center" />
        <div className="max-w-2xl mx-auto">
          <FAQ />
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="container py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-card border border-brand-red/30 p-10 md:p-16 text-center"
        >
          <div className="absolute inset-0 grid-overlay-red opacity-50" />
          <div className="absolute -inset-x-20 -bottom-20 h-40 bg-gradient-brand opacity-30 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-balance">
              Ready to build on Avalanche?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Join the Mini Hack. Ship real products. Plug into the Avalanche ecosystem.
            </p>
            <div className="mt-8 flex justify-center">
              <ApplyButton location="bottom_cta" label="Apply on Luma" size="lg" />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
