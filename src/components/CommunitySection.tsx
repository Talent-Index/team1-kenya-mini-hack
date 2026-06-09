import { ArrowUpRight, Send, MessageCircle, Calendar, Github, CheckSquare } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const TELEGRAM_URL = "https://t.me/avaxDAOAfrica/3";
const LUMA_URL = "https://lu.ma/Team1Africa";
const GITHUB_ORG_URL = "https://github.com/Talent-Index";
const TALLY_URL = "https://tally.so/r/rjv4Zo";
// TODO: Replace WHATSAPP_URL with the real WhatsApp group link when available
const WHATSAPP_URL = "#TODO-whatsapp-group-link";

const channels = [
  {
    label: "Telegram",
    description: "Primary channel for announcements, help, session links, and community discussion. This is where the programme runs.",
    href: TELEGRAM_URL,
    icon: Send,
    color: "text-[#229ED9]",
    primary: true,
  },
  {
    label: "WhatsApp Group",
    description: "Secondary coordination channel for builders and community updates.",
    href: WHATSAPP_URL,
    icon: MessageCircle,
    color: "text-[#25D366]",
    primary: false,
    todo: true,
  },
  {
    label: "Tally",
    description: "Submit your weekly quests and upload Avalanche Academy certificates here. All cohort deliverables are submitted through Tally.",
    href: TALLY_URL,
    icon: CheckSquare,
    color: "text-brand-orange",
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
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
    {channels.map((c) => (
      <a
        key={c.label}
        href={c.href}
        target={c.href.startsWith("#") ? undefined : "_blank"}
        rel="noopener noreferrer"
        aria-label={`Join ${c.label}`}
        onClick={() => trackEvent("community_click", { channel: c.label })}
        className={`group relative overflow-hidden rounded-2xl bg-gradient-card p-6 hover:-translate-y-0.5 transition-all ${
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
            {"todo" in c && c.todo && (
              <span className="text-[9px] font-mono uppercase tracking-[0.18em] bg-amber-500/20 text-amber-400 border border-amber-500/40 rounded-full px-2 py-0.5">
                Link TODO
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
