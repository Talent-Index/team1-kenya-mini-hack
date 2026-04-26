import { MetricCard } from "@/components/MetricCard";
import { SectionHeader } from "@/components/SectionHeader";
import { TRACKS, STAGES, projects, builders } from "@/data/mock";
import { Layers, Users, Rocket, Github, HandCoins, Trophy, Activity, Target } from "lucide-react";

const Analytics = () => {
  const byTrack = TRACKS.map((t) => ({ t, n: projects.filter((p) => p.track === t).length }));
  const byStage = STAGES.map((s) => ({ s, n: projects.filter((p) => p.stage === s).length }));
  const max = Math.max(...byTrack.map((x) => x.n), 1);
  const maxStage = Math.max(...byStage.map((x) => x.n), 1);

  return (
    <div className="container py-12 md:py-16">
      <SectionHeader eyebrow="Analytics" title="Ecosystem intelligence" description="Live snapshot of Kenya's Avalanche builder ecosystem." />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
        <MetricCard label="Projects" value={projects.length} icon={Layers} accent="red" />
        <MetricCard label="Builders" value={builders.length} icon={Users} accent="orange" />
        <MetricCard label="Shipped (30d)" value={projects.filter(p => Date.now() - +new Date(p.lastShipped) < 30 * 864e5).length} icon={Rocket} accent="purple" />
        <MetricCard label="With GitHub" value={projects.filter(p => p.githubUrl).length} icon={Github} accent="blue" />
        <MetricCard label="Open to collab" value={projects.filter(p => p.lookingForCollaborators).length} icon={Users} accent="orange" />
        <MetricCard label="Grant ready" value={projects.filter(p => p.grantReady).length} icon={HandCoins} accent="red" />
        <MetricCard label="Demo day ready" value={projects.filter(p => p.demoDayReady).length} icon={Trophy} accent="purple" />
        <MetricCard label="Mainnet" value={projects.filter(p => p.stage === "Mainnet" || p.stage === "Traction" || p.stage === "Scaling").length} icon={Activity} accent="blue" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Chart title="Projects by track">
          {byTrack.map((b) => (
            <Bar key={b.t} label={b.t} value={b.n} max={max} />
          ))}
        </Chart>
        <Chart title="Projects by stage">
          {byStage.map((b) => (
            <Bar key={b.s} label={b.s} value={b.n} max={maxStage} />
          ))}
        </Chart>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 mt-6">
        <div className="rounded-2xl bg-gradient-card border-hairline p-6">
          <h3 className="font-display font-semibold mb-4 flex items-center gap-2"><Target className="h-4 w-4 text-brand-orange" /> Most active builders</h3>
          <ul className="divide-y divide-border/60">
            {builders.slice(0, 6).map((b, i) => (
              <li key={b.id} className="flex items-center gap-3 py-3">
                <span className="text-xs text-muted-foreground w-5">{i + 1}</span>
                <img src={b.avatarUrl} alt={b.name} className="h-8 w-8 rounded-full object-cover" />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">{b.name}</div>
                  <div className="text-xs text-muted-foreground truncate">{b.role}</div>
                </div>
                <span className="text-xs text-muted-foreground">{b.projects.length} project{b.projects.length === 1 ? "" : "s"}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-gradient-card border-hairline p-6">
          <h3 className="font-display font-semibold mb-4 flex items-center gap-2"><Rocket className="h-4 w-4 text-brand-orange" /> Distribution-ready projects</h3>
          <ul className="divide-y divide-border/60">
            {projects.filter(p => p.demoDayReady || p.visibilityScore >= 80).slice(0, 6).map((p) => (
              <li key={p.id} className="flex items-center gap-3 py-3">
                <img src={p.imageUrl} alt={p.name} className="h-8 w-8 rounded-lg object-cover" />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">{p.name}</div>
                  <div className="text-xs text-muted-foreground truncate">{p.track}</div>
                </div>
                <span className="text-xs font-medium">{p.visibilityScore}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Chart = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="rounded-2xl bg-gradient-card border-hairline p-6">
    <h3 className="font-display font-semibold mb-4">{title}</h3>
    <div className="space-y-2.5">{children}</div>
  </div>
);
const Bar = ({ label, value, max }: { label: string; value: number; max: number }) => (
  <div>
    <div className="flex items-center justify-between text-xs mb-1">
      <span className="text-muted-foreground truncate">{label}</span>
      <span className="text-foreground font-medium">{value}</span>
    </div>
    <div className="h-2 rounded-full bg-surface-2 overflow-hidden">
      <div className="h-full bg-gradient-spectrum" style={{ width: `${(value / max) * 100}%` }} />
    </div>
  </div>
);

export default Analytics;
