import { ArrowUpRight, GraduationCap, Bot, Terminal, BookOpen, Search, Plug } from "lucide-react";
import { motion } from "framer-motion";
import { trackEvent } from "@/lib/analytics";

const resources = [
  {
    title: "Start Learning Avalanche",
    label: "Academy",
    description: "Structured courses on fundamentals, L1s, ICM, HyperSDK and more.",
    href: "https://build.avax.network/academy",
    icon: GraduationCap,
    accent: "from-brand-red to-brand-orange",
  },
  {
    title: "Ask the Avalanche AI Assistant",
    label: "Chat",
    description: "Conversational AI trained on the entire Avalanche developer corpus.",
    href: "https://build.avax.network/chat",
    icon: Bot,
    accent: "from-brand-orange to-brand-red",
  },
  {
    title: "Launch & Manage Infrastructure",
    label: "Console",
    description: "Spin up L1s, manage validators, deploy contracts — all from one console.",
    href: "https://build.avax.network/console",
    icon: Terminal,
    accent: "from-brand-purple to-brand-red",
  },
  {
    title: "Read Avalanche Documentation",
    label: "Docs",
    description: "Primary network reference, tooling guides, and protocol internals.",
    href: "https://build.avax.network/docs/primary-network",
    icon: BookOpen,
    accent: "from-brand-blue to-brand-purple",
  },
  {
    title: "Explore On-Chain Activity",
    label: "Explorer",
    description: "Search transactions, blocks, validators and contracts across L1s.",
    href: "https://build.avax.network/explorer",
    icon: Search,
    accent: "from-brand-red to-brand-purple",
  },
  {
    title: "Explore Integrations",
    label: "Integrations",
    description: "Discover the partners, wallets, oracles and tools in the Avalanche stack.",
    href: "https://build.avax.network/integrations",
    icon: Plug,
    accent: "from-brand-orange to-brand-purple",
  },
];

export const BuilderResources = () => (
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {resources.map((r, i) => (
      <motion.a
        key={r.href}
        href={r.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("resource_click", { label: r.label })}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, delay: i * 0.05 }}
        className="group relative rounded-2xl bg-gradient-card border-hairline p-6 hover:border-brand-red/40 transition-all hover:-translate-y-0.5 overflow-hidden"
      >
        <div className={`absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br ${r.accent} opacity-0 blur-3xl group-hover:opacity-30 transition-opacity`} />
        <div className="relative flex items-start justify-between mb-5">
          <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${r.accent} shadow-glow`}>
            <r.icon className="h-5 w-5 text-primary-foreground" />
          </div>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-brand-red group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>
        <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground mb-1.5">
          build.avax.network · {r.label}
        </div>
        <h3 className="font-display text-lg font-semibold tracking-tight">{r.title}</h3>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{r.description}</p>
      </motion.a>
    ))}
  </div>
);
