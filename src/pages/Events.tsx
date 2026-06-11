import { SectionHeader } from "@/components/SectionHeader";
import { CohortTimeline } from "@/components/CohortTimeline";
import { LumaEmbed } from "@/components/LumaEmbed";
import { ApplyButton } from "@/components/ApplyButton";
import { Video, ExternalLink } from "lucide-react";

const sessions = [
  {
    id: "s4",
    week: 2,
    cohort: "Cohort 1 — Payments",
    title: "Payments on Avalanche — Foundry, Smart Contracts and On-Chain Deployment",
    date: "Thursday 12 June 2026",
    time: "8:00 PM EAT",
    platform: "Google Meet",
    meetUrl: "https://meet.google.com/wcm-gmct-cbt",
    description:
      "Builders move from environment setup to live on-chain interaction. Using Foundry, scaffold a payments project, write a PaymentSplitter and Escrow contract in Solidity, deploy both to the Fuji C-Chain using forge and the Avalanche CLI, and execute live cast transactions against your deployed contracts.",
    status: "upcoming" as const,
  },
];

const Events = () => (
  <div className="container py-12 md:py-16">
    <SectionHeader
      eyebrow="Upcoming Cohorts & Sessions"
      title="Team1 Kenya — Live Events"
      description="Register for the tracks, workshops, and IRL events most relevant to your builder journey."
    />

    {/* ─── UPCOMING SESSIONS ─── */}
    <section className="mb-12">
      <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2">Upcoming Sessions</div>
      <h2 className="font-display text-xl font-semibold tracking-tight mb-5">This week</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {sessions.map((s) => (
          <div
            key={s.id}
            className="rounded-2xl bg-gradient-card border border-brand-red/30 ring-1 ring-brand-red/10 p-5 sm:p-6"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[9px] font-mono uppercase tracking-[0.18em] bg-brand-red/20 text-brand-red border border-brand-red/40 rounded-full px-2 py-0.5">
                {s.status === "upcoming" ? "Upcoming" : "Active"}
              </span>
              <span className="text-[9px] font-mono uppercase tracking-[0.16em] text-muted-foreground">
                Week {s.week} · {s.cohort}
              </span>
            </div>
            <h3 className="font-display font-semibold tracking-tight leading-snug mb-3">{s.title}</h3>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-4">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                {s.date}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                {s.time}
              </span>
              <span className="flex items-center gap-1.5">
                <Video className="h-3 w-3" />
                {s.platform}
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.description}</p>
            <a
              href={s.meetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-brand-red/40 bg-brand-red/10 hover:bg-brand-red/20 px-3 py-1.5 text-sm font-medium text-brand-red transition-colors"
            >
              Join on Google Meet
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        ))}
      </div>
    </section>

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
