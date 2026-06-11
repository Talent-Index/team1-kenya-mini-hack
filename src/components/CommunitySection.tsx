import { ArrowUpRight, Send, MessageCircle, Calendar, Github, CheckSquare, Trophy } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const TELEGRAM_URL = "https://t.me/avaxDAOAfrica/3";
const WHATSAPP_URL = "https://chat.whatsapp.com/JEOKw9yjlKcGbbdRlC5d12";
const LUMA_URL = "https://lu.ma/Team1Africa";
const GITHUB_ORG_URL = "https://github.com/Talent-Index";
const TALLY_URL = "https://tally.so/r/rjv4Zo";
const TRACKER_URL = "https://minihacktracker.vercel.app";

const channels = [
  {
    label: "Telegram",
    description: "Primary channel for announcements, session links, quest updates, and community help.",
    href: TELEGRAM_URL,
    icon: Send,
    color: "text-[#229ED9]",
    primary: true,
  },
  {
    label: "WhatsApp",
    description: "Secondary coordination and community updates.",
    href: WHATSAPP_URL,
    icon: MessageCircle,
    color: "text-[#25D366]",
    primary: false,
  },
  {
    label: "Tally",
    description: "Submit your weekly quests and upload Avalanche Academy certificates. All cohort deliverables go through Tally.",
    href: TALLY_URL,
    icon: CheckSquare,
    color: "text-brand-orange",
    primary: false,
  },
  {
    label: "Leaderboard",
    description: "Live quest tracker. See your points, quest completions, and where you stand on the board.",
    href: TRACKER_URL,
    icon: Trophy,
    color: "text-brand-red",
    primary: false,
  },
  {
    label: "Luma Calendar",
    description: "RSVP for sessions, Night of Code, and Builders Connect IRL events.",
    href: LUMA_URL,
    icon: Calendar,
    color: "text-brand-red",
    primary: false,
  },
  {
    label: "GitHub Org",
    description: "All cohort template repos, project submissions, and the Talent Index builder community.",
    href: GITHUB_ORG_URL,
    icon: Github,
    color: "text-foreground",
    primary: false,
  },
];

export const CommunitySection = () => (
  <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
    {channels.map((c) => (
      <a
        key={c.label}
        href={c.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Join ${c.label}`}
        onClick={() => trackEvent("community_click", { channel: c.label })}
        className={`group relative overflow-hidden rounded-2xl bg-gradient-card p-4 sm:p-6 hover:-translate-y-0.5 transition-all ${
          c.primary
            ? "border border-brand-red/60 ring-1 ring-brand-red/30"
            : "border-hairline hover:border-brand-red/40"
        }`}
      >
        <span aria-hidden className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-brand-red/0 via-brand-red/0 to-brand-red/30 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <c.icon className={`h-6 w-6 ${c.color}`} />
            {c.primary && (
              <span className="text-[9px] font-mono uppercase tracking-[0.18em] bg-brand-red/20 text-brand-red border border-brand-red/40 rounded-full px-2 py-0.5">
                Primary
              </span>
            )}
          </div>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>
        <div className="relative font-display font-semibold tracking-tight">{c.label}</div>
        <p className="relative text-xs text-muted-foreground mt-1.5 leading-relaxed">{c.description}</p>
      </a>
    ))}
  </div>
);
