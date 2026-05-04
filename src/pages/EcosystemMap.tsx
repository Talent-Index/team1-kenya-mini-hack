import { useMemo, useState } from "react";
import { Search, RefreshCw, Loader2, AlertCircle, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import { EcosystemCard } from "@/components/EcosystemCard";
import { useEcosystemProjects, useRefreshProjects, ALL_CATEGORIES, CATEGORY_COLORS, type EcosystemCategory } from "@/lib/github";

const EcosystemMap = () => {
  const { data: projects, isLoading, error, isFetching } = useEcosystemProjects();
  const refresh = useRefreshProjects();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<EcosystemCategory | "all">("all");

  const filtered = useMemo(() => {
    if (!projects) return [];
    return projects.filter((p) => {
      if (selectedCategory !== "all" && p.category !== selectedCategory) return false;
      if (search && !`${p.name} ${p.description} ${p.category}`.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [projects, search, selectedCategory]);

  const categoryCounts = useMemo(() => {
    if (!projects) return {};
    const counts: Record<string, number> = {};
    for (const p of projects) {
      counts[p.category] = (counts[p.category] || 0) + 1;
    }
    return counts;
  }, [projects]);

  return (
    <div className="container py-12 md:py-16">
      <SectionHeader
        eyebrow="Ecosystem"
        title="Avalanche Kenya Ecosystem Map"
        description={`${projects?.length ?? "..."} real projects built by Kenyan teams — live from GitHub.`}
      />

      {/* Controls */}
      <div className="rounded-2xl bg-gradient-card border-hairline p-4 md:p-5 mb-8">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 bg-surface-2 border-border h-11"
            />
          </div>
          <Button
            variant="glass"
            onClick={refresh}
            disabled={isFetching}
            className="h-11"
          >
            {isFetching ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
            Refresh Data
          </Button>
        </div>

        {/* Category chips */}
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
              selectedCategory === "all"
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-secondary text-muted-foreground border-border hover:text-foreground"
            }`}
          >
            All ({projects?.length ?? 0})
          </button>
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-secondary text-muted-foreground border-border hover:text-foreground"
              }`}
            >
              {cat} ({categoryCounts[cat] ?? 0})
            </button>
          ))}
          {(search || selectedCategory !== "all") && (
            <button
              onClick={() => { setSearch(""); setSelectedCategory("all"); }}
              className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-3 w-3 inline mr-1" />Clear
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      {isLoading && (
        <div className="rounded-2xl bg-gradient-card border-hairline p-16 text-center">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground text-sm">Fetching projects from GitHub...</p>
        </div>
      )}

      {error && (
        <div className="rounded-2xl bg-gradient-card border-hairline p-16 text-center">
          <AlertCircle className="h-8 w-8 text-destructive mx-auto mb-3" />
          <h3 className="font-display text-xl font-semibold">Failed to load projects</h3>
          <p className="text-muted-foreground mt-1 text-sm">GitHub API may be rate-limited. Try again in a minute.</p>
          <Button variant="glass" className="mt-4" onClick={refresh}>Retry</Button>
        </div>
      )}

      {!isLoading && !error && (
        <>
          {filtered.length === 0 ? (
            <div className="rounded-2xl bg-gradient-card border-hairline p-16 text-center">
              <h3 className="font-display text-xl font-semibold">No projects match</h3>
              <p className="text-muted-foreground mt-1 text-sm">Try adjusting your search or filters.</p>
            </div>
          ) : (
            <>
              {/* Grouped view when no search/filter */}
              {selectedCategory === "all" && !search ? (
                ALL_CATEGORIES.map((cat) => {
                  const catProjects = filtered.filter((p) => p.category === cat);
                  if (catProjects.length === 0) return null;
                  return (
                    <div key={cat} className="mb-12">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`h-3 w-3 rounded-full bg-gradient-to-r ${CATEGORY_COLORS[cat]}`} />
                        <h3 className="font-display text-lg font-semibold tracking-tight">{cat}</h3>
                        <span className="text-xs text-muted-foreground">({catProjects.length})</span>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {catProjects.map((p) => (
                          <EcosystemCard key={p.id} project={p} />
                        ))}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {filtered.map((p) => (
                    <EcosystemCard key={p.id} project={p} />
                  ))}
                </div>
              )}
              <p className="text-center text-xs text-muted-foreground mt-8">
                Showing {filtered.length} of {projects?.length ?? 0} projects · Data from{" "}
                <a href="https://github.com/Talent-Index" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
                  github.com/Talent-Index
                </a>
              </p>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default EcosystemMap;
