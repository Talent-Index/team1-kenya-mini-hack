import { SectionHeader } from "@/components/SectionHeader";
import { CohortTimeline } from "@/components/CohortTimeline";
import { LumaEmbed } from "@/components/LumaEmbed";
import { ApplyButton } from "@/components/ApplyButton";

const Events = () => (
  <div className="container py-12 md:py-16">
    <SectionHeader
      eyebrow="Upcoming Cohorts & Sessions"
      title="Team1 Kenya — Live Events"
      description="Register for the tracks, workshops, and IRL events most relevant to your builder journey."
    />

    <LumaEmbed height={620} showCta={false} />

    <div className="mt-6 flex flex-wrap gap-3">
      <ApplyButton location="events_page" label="Apply on Luma" size="lg" />
    </div>

    <div className="mt-20">
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
  </div>
);

export default Events;
