import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ProjectCard } from "@/components/ProjectCard";
import { FilterBar, defaultFilters, Filters } from "@/components/FilterBar";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/mock";
import { Inbox } from "lucide-react";

const Projects = () => {
  const [params] = useSearchParams();
  const [filters, setFilters] = useState<Filters>(defaultFilters);

  useEffect(() => {
    const t = params.get("track");
    if (t) setFilters((f) => ({ ...f, track: t }));
  }, [params]);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (filters.q && !`${p.name} ${p.tagline} ${p.track} ${p.teamName}`.toLowerCase().includes(filters.q.toLowerCase())) return false;
      if (filters.track !== "all" && p.track !== filters.track) return false;
      if (filters.stage !== "all" && p.stage !== filters.stage) return false;
      if (filters.funding && !p.lookingForFunding) return false;
      if (filters.collab && !p.lookingForCollaborators) return false;
      if (filters.github && !p.githubUrl) return false;
      if (filters.demo && !p.demoUrl) return false;
      return true;
    });
  }, [filters]);

  return (
    <div className="container py-12 md:py-16">
      <SectionHeader eyebrow="Directory" title="All Projects" description={`${filtered.length} of ${projects.length} projects in the index`} />
      <FilterBar filters={filters} setFilters={setFilters} />
      <div className="mt-8">
        {filtered.length === 0 ? (
          <div className="rounded-2xl bg-gradient-card border-hairline p-16 text-center">
            <Inbox className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
            <h3 className="font-display text-xl font-semibold">No projects match your filters</h3>
            <p className="text-muted-foreground mt-1 text-sm">Try adjusting or clearing your filters.</p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => <ProjectCard key={p.id} project={p} />)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
