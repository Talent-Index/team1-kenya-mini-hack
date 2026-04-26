import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { BuilderCard } from "@/components/BuilderCard";
import { SectionHeader } from "@/components/SectionHeader";
import { builders } from "@/data/mock";

const Builders = () => {
  const [q, setQ] = useState("");
  const filtered = useMemo(
    () => builders.filter((b) => `${b.name} ${b.role} ${b.location} ${b.skills.join(" ")}`.toLowerCase().includes(q.toLowerCase())),
    [q]
  );
  return (
    <div className="container py-12 md:py-16">
      <SectionHeader eyebrow="Builders" title="Kenyan builders shipping on Avalanche" description={`${filtered.length} active builders`} />
      <div className="relative max-w-md mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search builders, skills, locations..." className="pl-9 h-11 bg-surface-2" />
      </div>
      {filtered.length === 0 ? (
        <div className="rounded-2xl bg-gradient-card border-hairline p-16 text-center text-muted-foreground">No builders found.</div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((b) => <BuilderCard key={b.id} builder={b} />)}
        </div>
      )}
    </div>
  );
};

export default Builders;
