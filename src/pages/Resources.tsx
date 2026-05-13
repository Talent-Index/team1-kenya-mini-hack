import {
  BookOpen, Droplet, Wallet, GraduationCap, HandCoins, Network,
  Boxes, Workflow, Github, FileCode2, Shield, Globe, ArrowUpRight,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { SectionHeader } from "@/components/SectionHeader";

interface Resource {
  title: string;
  description: string;
  href: string;
  icon: typeof BookOpen;
}

interface Group {
  label: string;
  description: string;
  items: Resource[];
}

const groups: Group[] = [
  {
    label: "Start here",
    description: "Get from zero to deploying your first contract on Avalanche.",
    items: [
      { title: "Avalanche Docs", description: "Official protocol & developer documentation.", href: "https://docs.avax.network/", icon: BookOpen },
      { title: "Builder Hub", description: "Tools, tutorials, and integrations in one place.", href: "https://build.avax.network/", icon: Globe },
      { title: "Avalanche Academy", description: "Structured courses on Fundamentals, L1s, and ICM.", href: "https://build.avax.network/academy", icon: GraduationCap },
      { title: "Core Wallet", description: "Avalanche-native wallet for builders and users.", href: "https://core.app/", icon: Wallet },
    ],
  },
  {
    label: "Build & deploy",
    description: "Faucet, RPCs, starter kits, and deployment paths.",
    items: [
      { title: "Fuji Testnet Faucet", description: "Get free testnet AVAX to deploy and test.", href: "https://core.app/tools/testnet-faucet/", icon: Droplet },
      { title: "Public RPCs & Chain Info", description: "Endpoints, chain IDs, and explorer links.", href: "https://build.avax.network/docs/dapps/toolchains/avalanchejs", icon: Network },
      { title: "Avalanche Starter Kit", description: "Hardhat-based template with examples.", href: "https://github.com/ava-labs/avalanche-starter-kit", icon: FileCode2 },
      { title: "Avalanche CLI", description: "Spin up local L1s and deploy in minutes.", href: "https://build.avax.network/docs/tooling/get-avalanche-cli", icon: Workflow },
    ],
  },
  {
    label: "Interoperability",
    description: "Move messages and value across Avalanche L1s.",
    items: [
      { title: "Interchain Messaging (ICM)", description: "Native cross-L1 messaging protocol.", href: "https://build.avax.network/docs/cross-chain/teleporter/overview", icon: Network },
      { title: "Interchain Token Transfer", description: "Bridge ERC-20s across L1s with ICTT.", href: "https://build.avax.network/docs/cross-chain/interchain-token-transfer/overview", icon: Boxes },
      { title: "Avalanche Bridge", description: "Production bridge to Avalanche C-Chain.", href: "https://core.app/bridge/", icon: Network },
    ],
  },
  {
    label: "L1 development",
    description: "Customize a chain — VM, gas, validators, tokenomics.",
    items: [
      { title: "Build an L1", description: "Step-by-step guide to launching your own L1.", href: "https://build.avax.network/docs/avalanche-l1s/build-first-avalanche-l1", icon: Boxes },
      { title: "Customize the EVM", description: "Precompiles, gas tokens, and custom logic.", href: "https://build.avax.network/academy/customizing-evm", icon: FileCode2 },
      { title: "L1 Validator Management", description: "Permissioning, staking, and validator ops.", href: "https://build.avax.network/academy/l1-validator-management", icon: Shield },
      { title: "HyperSDK", description: "Build custom high-performance VMs in Go.", href: "https://github.com/ava-labs/hypersdk", icon: FileCode2 },
    ],
  },
  {
    label: "Funding & ecosystem",
    description: "Grants, programs, and where to get supported.",
    items: [
      { title: "Avalanche Foundation Grants", description: "Funding for builders shipping on Avalanche.", href: "https://www.avax.network/grants", icon: HandCoins },
      { title: "Codebase Accelerator", description: "Avalanche's accelerator for early-stage teams.", href: "https://www.codebase.xyz/", icon: GraduationCap },
      { title: "Talent-Index GitHub", description: "Browse and contribute to Kenyan ecosystem repos.", href: "https://github.com/Talent-Index", icon: Github },
      { title: "Team1 Africa Events", description: "RSVP to workshops, demo days, and hackathons.", href: "https://lu.ma/Team1Africa", icon: Globe },
    ],
  },
];

const Resources = () => (
  <div className="container py-12 md:py-16">
    <Helmet>
      <title>Resources — Team1 Kenya Builder Hub</title>
      <meta name="description" content="Docs, Avalanche Academy modules, faucet, wallet, grants, ICM, L1 deployment guides, and starter templates for builders shipping on Avalanche." />
      <link rel="canonical" href="/resources" />
    </Helmet>

    <SectionHeader
      eyebrow="Resource Hub"
      title="Everything you need to ship on Avalanche"
      description="Curated docs, Academy modules, tools, and grants — pulled directly from official Avalanche sources."
    />

    <div className="space-y-12">
      {groups.map((g) => (
        <section key={g.label}>
          <div className="flex items-baseline justify-between mb-5">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-1">
                {g.label}
              </div>
              <h3 className="font-display text-xl font-semibold tracking-tight">{g.description}</h3>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {g.items.map((r) => (
              <a
                key={r.href}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl bg-gradient-card border-hairline p-5 hover:border-primary/40 transition-all hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/80 text-foreground">
                    <r.icon className="h-4 w-4" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div className="font-display font-semibold tracking-tight">{r.title}</div>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{r.description}</p>
              </a>
            ))}
          </div>
        </section>
      ))}
    </div>
  </div>
);

export default Resources;
