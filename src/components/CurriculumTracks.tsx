import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wallet, Gamepad2, Bot, ChevronDown, Target, Wrench, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

interface Module {
  week: string;
  title: string;
  outcomes: string[];
  tools: string[];
}

interface Track {
  id: string;
  badge: string;
  title: string;
  theme: string;
  description: string;
  icon: typeof Wallet;
  gradient: string;
  modules: Module[];
}

const tracks: Track[] = [
  {
    id: "payments",
    badge: "Track 01 · June",
    title: "Payments",
    theme: "Building Financial Infrastructure on Avalanche",
    description: "Stablecoins, M-Pesa bridges, merchant rails, consumer payments and cross-border remittance — built on Avalanche L1s.",
    icon: Wallet,
    gradient: "from-brand-orange to-brand-red",
    modules: [
      {
        week: "Week 1",
        title: "Blockchain, Avalanche Fundamentals, and Core Wallet",
        outcomes: ["Understand C-Chain, L1s and subnets", "Set up Core Wallet + Fuji testnet", "Deploy your first contract"],
        tools: ["Core Wallet", "Fuji Faucet", "Avalanche CLI"],
      },
      {
        week: "Week 2",
        title: "Smart Contracts with Solidity",
        outcomes: ["Write and test ERC-20 and payment contracts", "Build a merchant checkout", "Handle invoices & receipts on-chain"],
        tools: ["Hardhat", "Solidity", "ethers.js"],
      },
      {
        week: "Week 3",
        title: "Integrations: Core Wallet, Oracles, and M-Pesa",
        outcomes: ["Bridge fiat ↔ stablecoin via Daraja API", "Integrate Chainlink price feeds", "Mobile-first payment UX"],
        tools: ["Daraja API", "Chainlink", "Core Wallet SDK"],
      },
      {
        week: "Week 4",
        title: "Full-stack Payment Backend and On-chain Payments",
        outcomes: ["Full-stack payment backend", "Cross-border remittance flow", "Public demo + live product"],
        tools: ["ICTT", "Snowtrace", "Node.js"],
      },
    ],
  },
  {
    id: "gamified",
    badge: "Track 02 · July",
    title: "Gaming and Gamified Solutions",
    theme: "Building On-chain Games and Gamified Experiences",
    description: "NFT assets, on-chain game logic, token economies, and multiplayer systems — built on Avalanche subnets.",
    icon: Gamepad2,
    gradient: "from-brand-red to-brand-purple",
    modules: [
      {
        week: "Week 1",
        title: "NFTs and In-game Asset Ownership",
        outcomes: ["Deploy ERC-721 and ERC-1155 contracts", "IPFS for game asset metadata", "Wallet abstraction for players"],
        tools: ["Hardhat", "IPFS / Pinata", "OpenZeppelin"],
      },
      {
        week: "Week 2",
        title: "On-chain Game Logic and Token Economies",
        outcomes: ["Design XP and level systems on-chain", "Quest engines and soulbound NFTs", "Token reward mechanics"],
        tools: ["Soulbound NFTs", "The Graph", "ERC-20"],
      },
      {
        week: "Week 3",
        title: "Multiplayer Systems and Avalanche Subnets",
        outcomes: ["Spin up a game-specific Avalanche subnet", "Multiplayer state and session management", "Cross-chain asset transfers"],
        tools: ["Avalanche CLI", "ICM", "Supabase"],
      },
      {
        week: "Week 4",
        title: "Build Sprint and Demo Day",
        outcomes: ["Ship a playable prototype", "Sponsored transactions for gasless UX", "Live cohort demo"],
        tools: ["Phaser / Unity", "Paymasters", "Snowtrace"],
      },
    ],
  },
  {
    id: "agentic",
    badge: "Track 03 · August",
    title: "Agentic Systems",
    theme: "Building Autonomous AI Systems on Avalanche",
    description: "AI agents, LLM workflows, on-chain automation, autonomous payments and orchestration — the agentic stack on Avalanche.",
    icon: Bot,
    gradient: "from-brand-purple to-brand-blue",
    modules: [
      {
        week: "Week 1",
        title: "AI and LLM Fundamentals",
        outcomes: [
          "Agent architectures and the difference between a chatbot and an agent",
          "Tool use and function calling with the Claude API",
          "Prompt engineering: system prompts, temperature, context windows, token costs",
          "Building a first CLI agent in Node.js",
        ],
        tools: ["Anthropic", "LangGraph", "Vercel AI SDK"],
      },
      {
        week: "Week 2",
        title: "On-chain Data and Blockchain-aware Agents",
        outcomes: ["Query on-chain data with Alchemy and The Graph", "Build agents that read blockchain state", "Multi-step workflows and background jobs"],
        tools: ["Alchemy", "The Graph", "ethers.js"],
      },
      {
        week: "Week 3",
        title: "RAG, Knowledge Bases, and Agentic Payments",
        outcomes: ["Build a RAG pipeline with Chroma vector DB", "Agent-controlled smart accounts and spending limits", "On-chain triggers and autonomous payments"],
        tools: ["Chroma", "ethers.js", "Hardhat"],
      },
      {
        week: "Week 4",
        title: "Build Sprint and Demo Day",
        outcomes: ["Multi-agent orchestration and production deployment", "Ship a working agentic product", "Pitch your agent at Demo Day"],
        tools: ["Anthropic", "Alchemy", "Snowtrace"],
      },
    ],
  },
];

export const CurriculumTracks = () => {
  const [active, setActive] = useState<string>("payments");
  const [openWeek, setOpenWeek] = useState<string | null>("Week 1");
  const track = tracks.find((t) => t.id === active)!;

  return (
    <div className="rounded-3xl bg-gradient-card border-hairline overflow-hidden">
      {/* Track tabs */}
      <div className="flex flex-col sm:flex-row border-b border-border/60">
        {tracks.map((t) => {
          const isActive = t.id === active;
          return (
            <button
              key={t.id}
              onClick={() => {
                setActive(t.id);
                setOpenWeek("Week 1");
              }}
              className={cn(
                "flex-1 group relative px-4 sm:px-5 py-3 sm:py-5 text-left transition-colors",
                isActive ? "bg-secondary/40" : "hover:bg-secondary/20",
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="track-bar"
                  className={cn("absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r", t.gradient)}
                />
              )}
              <div className="flex items-center gap-3">
                <div className={cn("h-9 w-9 rounded-xl bg-gradient-to-br flex items-center justify-center", t.gradient)}>
                  <t.icon className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">{t.badge}</div>
                  <div className="font-display font-semibold tracking-tight">{t.title}</div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Track content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={track.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
          className="p-4 sm:p-6 md:p-8"
        >
          <div className="mb-6">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-brand-red mb-2">
              {track.theme}
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">{track.title}</h3>
            <p className="text-sm text-muted-foreground mt-2 max-w-2xl">{track.description}</p>
          </div>

          <ol className="space-y-3">
            {track.modules.map((m, i) => {
              const open = openWeek === m.week;
              return (
                <li
                  key={m.week}
                  className={cn(
                    "rounded-2xl border transition-colors",
                    open ? "border-brand-red/40 bg-secondary/30" : "border-border/60 bg-surface-1/50 hover:border-border",
                  )}
                >
                  <button
                    onClick={() => setOpenWeek(open ? null : m.week)}
                    className="w-full flex items-center gap-3 sm:gap-4 p-3 sm:p-4 text-left"
                  >
                    <div
                      className={cn(
                        "h-9 w-9 shrink-0 rounded-lg bg-gradient-to-br flex items-center justify-center font-mono text-xs text-primary-foreground",
                        track.gradient,
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">{m.week}</div>
                      <div className="font-display font-medium tracking-tight truncate">{m.title}</div>
                    </div>
                    <ChevronDown className={cn("h-4 w-4 text-muted-foreground transition-transform", open && "rotate-180")} />
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-3 sm:px-4 pb-4 sm:pb-5 pt-1 grid sm:grid-cols-2 gap-4 sm:gap-5">
                          <div>
                            <div className="flex items-center gap-2 mb-2 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                              <Target className="h-3 w-3" /> Learning outcomes
                            </div>
                            <ul className="space-y-1.5 text-sm">
                              {m.outcomes.map((o) => (
                                <li key={o} className="flex gap-2 text-foreground/90">
                                  <span className={cn("mt-2 h-1 w-1 rounded-full bg-gradient-to-r shrink-0", track.gradient)} />
                                  {o}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-2 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                              <Wrench className="h-3 w-3" /> Tools you'll use
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {m.tools.map((t) => (
                                <span
                                  key={t}
                                  className="text-xs rounded-full border border-border bg-surface-2 px-2.5 py-1 font-mono text-muted-foreground"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
            <li className="rounded-2xl border border-brand-red/30 bg-gradient-to-r from-brand-red/10 to-transparent p-4 flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-brand flex items-center justify-center">
                <Trophy className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-red">Quest</div>
                <div className="text-sm font-medium">Ship a working prototype + demo on Cohort Demo Day.</div>
              </div>
            </li>
          </ol>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
