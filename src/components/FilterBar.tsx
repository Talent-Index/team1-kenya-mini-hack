import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { TRACKS, STAGES } from "@/data/mock";

export interface Filters {
  q: string;
  track: string;
  stage: string;
  funding: boolean;
  collab: boolean;
  github: boolean;
  demo: boolean;
}

export const defaultFilters: Filters = {
  q: "",
  track: "all",
  stage: "all",
  funding: false,
  collab: false,
  github: false,
  demo: false,
};

interface Props {
  filters: Filters;
  setFilters: (f: Filters) => void;
}

export const FilterBar = ({ filters, setFilters }: Props) => {
  const set = (patch: Partial<Filters>) => setFilters({ ...filters, ...patch });
  const active =
    filters.q ||
    filters.track !== "all" ||
    filters.stage !== "all" ||
    filters.funding ||
    filters.collab ||
    filters.github ||
    filters.demo;

  return (
    <div className="rounded-2xl bg-gradient-card border-hairline p-4 md:p-5">
      <div className="grid gap-3 md:grid-cols-[1fr_180px_180px_auto]">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search projects, tracks, builders..."
            value={filters.q}
            onChange={(e) => set({ q: e.target.value })}
            className="pl-9 bg-surface-2 border-border h-11"
          />
        </div>
        <Select value={filters.track} onValueChange={(v) => set({ track: v })}>
          <SelectTrigger className="h-11 bg-surface-2 border-border"><SelectValue placeholder="Track" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Tracks</SelectItem>
            {TRACKS.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
          </SelectContent>
        </Select>
        <Select value={filters.stage} onValueChange={(v) => set({ stage: v })}>
          <SelectTrigger className="h-11 bg-surface-2 border-border"><SelectValue placeholder="Stage" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Stages</SelectItem>
            {STAGES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
          </SelectContent>
        </Select>
        {active && (
          <Button variant="ghost" onClick={() => setFilters(defaultFilters)} className="h-11">
            <X className="h-4 w-4" /> Clear
          </Button>
        )}
      </div>
      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
        <Toggle id="funding" label="Looking for funding" checked={filters.funding} onChange={(v) => set({ funding: v })} />
        <Toggle id="collab" label="Looking for collaborators" checked={filters.collab} onChange={(v) => set({ collab: v })} />
        <Toggle id="github" label="Has GitHub" checked={filters.github} onChange={(v) => set({ github: v })} />
        <Toggle id="demo" label="Has live demo" checked={filters.demo} onChange={(v) => set({ demo: v })} />
      </div>
    </div>
  );
};

const Toggle = ({ id, label, checked, onChange }: { id: string; label: string; checked: boolean; onChange: (v: boolean) => void }) => (
  <div className="flex items-center gap-2">
    <Switch id={id} checked={checked} onCheckedChange={onChange} />
    <Label htmlFor={id} className="text-sm text-muted-foreground cursor-pointer">{label}</Label>
  </div>
);
