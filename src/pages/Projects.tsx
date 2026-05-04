import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { EcosystemCard } from "@/components/EcosystemCard";
import { useEcosystemProjects, ALL_CATEGORIES, type EcosystemCategory } from "@/lib/github";
import { Search, Loader2, AlertCircle, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Projects = () => {
  const { data: projects, isLoading, error } = useEcosystemProjects();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [language, setLanguage] = useState<string>("all");

  const languages = useMemo(() => {
    if (!projects) return [];
    const set = new Set(projects.map((p) => p.language).filter((l) => l !== "Unknown"));
    return Array.from(set).sort();
  }, [projects]);

  const filtered = useMemo(() => {
    if (!projects) return [];
    return projects.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (language !== "all" && p.language !== language) return false;
      if (search && !`${p.name} ${p.description} ${p.category}`.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [projects, search, category, language]);

  const hasFilters = search || category !== "all" || language !== "all";

  return (
    <div className="container py-12 md:py-16">
      <SectionHeader
        eyebrow="Directory"
        title="All Projects"
        description={`${filtered.length} of ${projects?.length ?? "..."} projects in the index`}
      />

      <div className="rounded-2xl bg-gradient-card border-hairline p-4 md:p-5 mb-8">
        <div className="grid gap-3 md:grid-cols-[1fr_180px_180px_auto]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 bg-surface-2 border-border h-11"
            />
          </div>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="h-11 bg-surface-2 border-border"><SelectValue placeholder="Category" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {ALL_CATEGORIES.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="h-11 bg-surface-2 border-border"><SelectValue placeholder="Language" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Languages</SelectItem>
              {languages.map((l) => <SelectItem key={l} value={l}>{l}</SelectItem>)}
            </SelectContent>
          </Select>
          {hasFilters && (
            <Button variant="ghost" onClick={() => { setSearch(""); setCategory("all"); setLanguage("all"); }} className="h-11">
              <X className="h-4 w-4" /> Clear
            </Button>
          )}
        </div>
      </div>

      {isLoading && (
        <div className="rounded-2xl bg-gradient-card border-hairline p-16 text-center">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground text-sm">Loading projects from GitHub...</p>
        </div>
      )}

      {error && (
        <div className="rounded-2xl bg-gradient-card border-hairline p-16 text-center">
          <AlertCircle className="h-8 w-8 text-destructive mx-auto mb-3" />
          <p className="font-semibold">Failed to load projects</p>
          <p className="text-muted-foreground text-sm mt-1">GitHub API may be rate-limited.</p>
        </div>
      )}

      {!isLoading && !error && (
        filtered.length === 0 ? (
          <div className="rounded-2xl bg-gradient-card border-hairline p-16 text-center">
            <h3 className="font-display text-xl font-semibold">No projects match</h3>
            <p className="text-muted-foreground mt-1 text-sm">Try different filters.</p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => <EcosystemCard key={p.id} project={p} />)}
          </div>
        )
      )}
    </div>
  );
};

export default Projects;
