import { ArrowUpRight } from "lucide-react";

interface AcademyModule {
  title: string;
  description: string;
  href: string;
}

interface CohortTrack {
  month: string;
  track: string;
  focus: string;
  modules: AcademyModule[];
  gradient: string;
}

const cohorts: CohortTrack[] = [
  {
    month: "June",
    track: "Payments",
    focus: "Stablecoins, M-Pesa bridges, merchant rails, cross-border remittance.",
    gradient: "from-brand-orange to-brand-red",
    modules: [
      { title: "Avalanche Fundamentals", description: "Consensus, subnets, native tokens.", href: "https://build.avax.network/academy/avalanche-fundamentals" },
      { title: "Multi-Chain Apps", description: "Build apps spanning multiple chains.", href: "https://build.avax.network/academy/multi-chain-architecture" },
      { title: "Interchain Token Transfer", description: "Move value across L1s with ICTT.", href: "https://build.avax.network/academy/interchain-token-transfer" },
    ],
  },
  {
    month: "July",
    track: "Gamification for Scaling",
    focus: "Loyalty engines, quests, on-chain rewards, retention loops.",
    gradient: "from-brand-red to-brand-purple",
    modules: [
      { title: "Avalanche L1 Tokenomics", description: "Design native token economies.", href: "https://build.avax.network/academy/l1-tokenomics" },
      { title: "Customizing the EVM", description: "Precompiles, gas, custom logic.", href: "https://build.avax.network/academy/customizing-evm" },
      { title: "HyperSDK", description: "Build custom high-performance VMs.", href: "https://build.avax.network/academy/hypersdk" },
    ],
  },
  {
    month: "August",
    track: "Agentic Systems",
    focus: "Autonomous on-chain agents, oracles, governance bots, automation.",
    gradient: "from-brand-purple to-brand-blue",
    modules: [
      { title: "Interchain Messaging (ICM)", description: "Send arbitrary messages across L1s.", href: "https://build.avax.network/academy/interchain-messaging" },
      { title: "Chainlink VRF & Oracles", description: "Bring off-chain data on-chain.", href: "https://build.avax.network/academy/chainlink-vrf" },
      { title: "L1 Validator Management", description: "Run, stake, and manage validators.", href: "https://build.avax.network/academy/l1-validator-management" },
    ],
  },
];

export const AcademyTracks = () => (
  <div className="grid gap-4 md:grid-cols-3">
    {cohorts.map((c) => (
      <div key={c.month} className="rounded-2xl bg-gradient-card border-hairline p-6 flex flex-col">
        <div className="flex items-baseline justify-between mb-4">
          <span className={`text-[10px] font-mono uppercase tracking-[0.2em] bg-gradient-to-r ${c.gradient} bg-clip-text text-transparent`}>
            {c.month} · Cohort
          </span>
        </div>
        <h3 className="font-display text-xl font-semibold tracking-tight">{c.track}</h3>
        <p className="text-sm text-muted-foreground mt-2 mb-5">{c.focus}</p>

        <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-2">
          Avalanche Academy modules
        </div>
        <ul className="space-y-2 flex-1">
          {c.modules.map((m) => (
            <li key={m.href}>
              <a
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-2 rounded-lg p-2 -mx-2 hover:bg-secondary/60 transition-colors"
              >
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium tracking-tight flex items-center gap-1">
                    {m.title}
                    <ArrowUpRight className="h-3 w-3 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  <div className="text-xs text-muted-foreground">{m.description}</div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
