import { TRACKS, projects } from "@/data/mock";
import { TrackCard } from "@/components/TrackCard";
import { SectionHeader } from "@/components/SectionHeader";

const Tracks = () => (
  <div className="container py-12 md:py-16">
    <SectionHeader eyebrow="Tracks" title="Categories of innovation" description="What Kenyan builders are exploring across the Avalanche ecosystem." />
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {TRACKS.map((t) => <TrackCard key={t} track={t} count={projects.filter(p => p.track === t).length} />)}
    </div>
  </div>
);

export default Tracks;
