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
  <div className="relative rounded-2xl bg-gradient-card border-hairline p-4 sm:p-5 overflow-hidden">
    <div className={`absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${accents[accent]} blur-2xl opacity-50`} />
    <div className="relative">
      <div className="flex items-start justify-between gap-2">
        <span className="text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-muted-foreground leading-tight">{label}</span>
        {Icon && <Icon className={`h-4 w-4 shrink-0 mt-0.5 ${accents[accent].split(" ").pop()}`} />}
      </div>
      <div className="mt-2 sm:mt-3 font-display text-2xl sm:text-3xl font-semibold tracking-tight">{value}</div>
      {delta && <div className="text-[11px] sm:text-xs text-muted-foreground mt-1 leading-snug">{delta}</div>}
    </div>
  </div>
);
