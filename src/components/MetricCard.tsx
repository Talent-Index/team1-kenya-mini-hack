import { LucideIcon } from "lucide-react";

interface Props {
  label: string;
  value: string | number;
  icon?: LucideIcon;
  delta?: string;
  accent?: "red" | "orange" | "purple" | "blue";
}

const accents = {
  red: "from-brand-red/20 to-transparent text-brand-red",
  orange: "from-brand-orange/20 to-transparent text-brand-orange",
  purple: "from-brand-purple/20 to-transparent text-brand-purple",
  blue: "from-brand-blue/20 to-transparent text-brand-blue",
};

export const MetricCard = ({ label, value, icon: Icon, delta, accent = "red" }: Props) => (
  <div className="relative rounded-2xl bg-gradient-card border-hairline p-5 overflow-hidden">
    <div className={`absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${accents[accent]} blur-2xl opacity-50`} />
    <div className="relative">
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
        {Icon && <Icon className={`h-4 w-4 ${accents[accent].split(" ").pop()}`} />}
      </div>
      <div className="mt-3 font-display text-3xl font-semibold tracking-tight">{value}</div>
      {delta && <div className="text-xs text-muted-foreground mt-1">{delta}</div>}
    </div>
  </div>
);
