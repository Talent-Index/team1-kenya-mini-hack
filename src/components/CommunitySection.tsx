import { ArrowUpRight, MessageCircle, Send, Hash, Twitter } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const channels = [
  {
    label: "Telegram",
    description: "AVAX DAO Africa — daily builder chat & async help.",
    href: "https://t.me/avaxDAOAfrica",
    icon: Send,
    color: "text-[#229ED9]",
  },
  {
    label: "WhatsApp",
    description: "Kenya-first WhatsApp group for IRL coordination.",
    href: "https://chat.whatsapp.com/DIxi7F6uv8B7FhMr0soThA?mode=gi_t",
    icon: MessageCircle,
    color: "text-[#25D366]",
  },
  {
    label: "X (Twitter)",
    description: "@avaxafrica — announcements & ecosystem signal.",
    href: "https://x.com/avaxafrica?s=21",
    icon: Twitter,
    color: "text-foreground",
  },
  {
    label: "Discord",
    description: "Team1 Discord — voice rooms, working groups, demos.",
    href: "https://discord.gg/team1",
    icon: Hash,
    color: "text-[#5865F2]",
  },
];

export const CommunitySection = () => (
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {channels.map((c) => (
      <a
        key={c.label}
        href={c.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Join ${c.label}`}
        onClick={() => trackEvent("community_click", { channel: c.label })}
        className="group relative overflow-hidden rounded-2xl bg-gradient-card border-hairline p-6 hover:border-brand-red/40 transition-all hover:-translate-y-0.5"
      >
        <span aria-hidden className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-brand-red/0 via-brand-red/0 to-brand-red/30 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative flex items-start justify-between mb-4">
          <c.icon className={`h-6 w-6 ${c.color}`} />
          <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>
        <div className="relative font-display font-semibold tracking-tight">{c.label}</div>
        <p className="relative text-xs text-muted-foreground mt-1.5 leading-relaxed">{c.description}</p>
      </a>
    ))}
  </div>
);
