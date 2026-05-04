import { Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import { CohortTimeline } from "@/components/CohortTimeline";
import { trackEvent } from "@/lib/analytics";

const Events = () => (
  <div className="container py-12 md:py-16">
    <SectionHeader
      eyebrow="Events & Calendar"
      title="Team1 Kenya Events"
      description="Workshops, meetups, demo days, and the hackathon — all in one place."
    />

    {/* Luma Calendar Embed */}
    <div className="rounded-2xl bg-gradient-card border-hairline overflow-hidden mb-8">
      <iframe
        src="https://lu.ma/embed/calendar/cal-team1africa/events?lt=light"
        className="w-full h-[500px] md:h-[600px] border-0"
        style={{ filter: "invert(1) hue-rotate(180deg)", borderRadius: "1rem" }}
        title="Team1 Africa Events Calendar"
        loading="lazy"
      />
    </div>

    <div className="flex flex-wrap gap-3 mb-16">
      <Button
        asChild
        variant="brand"
        onClick={() => trackEvent("rsvp_click", { source: "events_page" })}
      >
        <a href="https://lu.ma/Team1Africa" target="_blank" rel="noopener noreferrer">
          <Calendar className="h-4 w-4" /> RSVP on Luma
        </a>
      </Button>
      <Button
        asChild
        variant="glass"
        onClick={() => trackEvent("calendar_add", { source: "events_page" })}
      >
        <a href="https://lu.ma/Team1Africa" target="_blank" rel="noopener noreferrer">
          <ExternalLink className="h-4 w-4" /> Add to Calendar
        </a>
      </Button>
    </div>

    {/* Cohort Program */}
    <SectionHeader
      eyebrow="Cohort Program"
      title="June – August 2026"
      description="Three focused tracks, one per month, culminating in a hackathon."
      align="center"
    />
    <div className="max-w-3xl mx-auto">
      <CohortTimeline />
    </div>
  </div>
);

export default Events;
