import { ApplyButton } from "@/components/ApplyButton";

interface LumaEmbedProps {
  height?: number;
  showCta?: boolean;
}

/**
 * Official Team1 Africa Luma calendar embed — premium card container with red glow.
 */
export const LumaEmbed = ({ height = 560, showCta = true }: LumaEmbedProps) => (
  <div className="relative">
    <div className="absolute -inset-4 rounded-[2rem] bg-brand-red/15 blur-3xl opacity-60 pointer-events-none" />
    <div className="relative rounded-3xl bg-gradient-card border border-brand-red/20 overflow-hidden shadow-elevate">
      <iframe
        src="https://luma.com/embed/calendar/cal-LgF4fRCDgBrI9G3/events"
        className="w-full border-0 block"
        style={{ height }}
        allowFullScreen
        aria-hidden="false"
        tabIndex={0}
        title="Team1 Africa — Upcoming Cohorts & Sessions"
        loading="lazy"
      />
    </div>
    {showCta && (
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          Register for the tracks, workshops, and IRL events most relevant to your builder journey.
        </p>
        <ApplyButton location="luma_calendar" label="Apply on Luma" size="sm" glow={false} />
      </div>
    )}
  </div>
);
