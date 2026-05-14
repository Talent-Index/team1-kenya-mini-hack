import { ArrowUpRight, MessageCircle, Send, Calendar, Hash } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const channels = [
  {
    label: "Telegram",
    description: "Daily builder chat, async help, announcements.",
    href: "https://t.me/team1africa",
    icon: Send,
    color: "text-[#229ED9]",
  },
  {
    label: "WhatsApp Builders",
    description: "Kenya-first WhatsApp group for IRL coordination.",
    href: "https://chat.whatsapp.com/team1kenya",
    icon: MessageCircle,
    color: "text-[#25D366]",
  },
  {
    label: "Luma Calendar",
    description: "RSVP to workshops, demo days and IRL events.",
    href: "https://luma.com/Team1Africa",
    icon: Calendar,
    color: "text-brand-red",
  },
  {
    label: "Discord",
    description: "Avalanche-wide builder community (global).",
    href: "https://discord.gg/avalanche",
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
        onClick={() => trackEvent("community_click", { channel: c.label })}
        className="group rounded-2xl bg-gradient-card border-hairline p-6 hover:border-brand-red/40 transition-all hover:-translate-y-0.5"
      >
        <div className="flex items-start justify-between mb-4">
          <c.icon className={`h-6 w-6 ${c.color}`} />
          <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>
        <div className="font-display font-semibold tracking-tight">{c.label}</div>
        <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{c.description}</p>
      </a>
    ))}
  </div>
);
