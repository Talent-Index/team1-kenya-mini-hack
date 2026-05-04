import { useQuery, useQueryClient } from "@tanstack/react-query";

const ORG = "Talent-Index";
const API = "https://api.github.com";

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  topics: string[];
  created_at: string;
  updated_at: string;
  pushed_at: string;
  homepage: string | null;
  fork: boolean;
  archived: boolean;
  owner: { avatar_url: string; html_url: string };
}

export type EcosystemCategory =
  | "Payments & Finance"
  | "Gaming & NFTs"
  | "Identity & Credentials"
  | "Developer Tooling"
  | "AI & Agents"
  | "Community & Education"
  | "DeFi"
  | "Real World Assets"
  | "Infrastructure"
  | "Other";

export interface EcosystemProject {
  id: number;
  name: string;
  displayName: string;
  description: string;
  category: EcosystemCategory;
  language: string;
  stars: number;
  forks: number;
  url: string;
  homepage: string | null;
  updatedAt: string;
  createdAt: string;
}

const CATEGORY_KEYWORDS: Record<EcosystemCategory, string[]> = {
  "Payments & Finance": ["pay", "pesa", "mpesa", "m-pesa", "payment", "finance", "budget", "wallet", "stablecoin", "remit", "merchant", "invoice", "subscription"],
  "Gaming & NFTs": ["game", "gaming", "nft", "play", "arena", "flap", "quest", "memorabilia", "collectible", "lottery"],
  "Identity & Credentials": ["identity", "id", "certificate", "credential", "merit", "verify", "auth", "kyc", "soulbound"],
  "Developer Tooling": ["tool", "sdk", "cli", "scaffold", "scarfold", "template", "starter", "boilerplate", "dev", "hub"],
  "AI & Agents": ["ai", "agent", "ml", "model", "gpt", "llm", "bot", "sentinel", "predict"],
  "Community & Education": ["campus", "community", "education", "learn", "event", "crowd", "fund", "dao", "chama", "club"],
  "DeFi": ["defi", "swap", "yield", "vault", "stake", "lend", "borrow", "dex", "amm", "liquidity"],
  "Real World Assets": ["rwa", "real", "asset", "property", "land", "agri", "farm", "solar", "carbon", "fraction", "shamba"],
  "Infrastructure": ["infra", "node", "validator", "subnet", "bridge", "oracle", "relay", "index", "track"],
  "Other": [],
};

function categorize(repo: GitHubRepo): EcosystemCategory {
  const text = `${repo.name} ${repo.description ?? ""} ${(repo.topics ?? []).join(" ")}`.toLowerCase();
  for (const [cat, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    if (cat === "Other") continue;
    if (keywords.some((kw) => text.includes(kw))) return cat as EcosystemCategory;
  }
  return "Other";
}

function toDisplayName(name: string): string {
  return name
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function transformRepo(repo: GitHubRepo): EcosystemProject {
  return {
    id: repo.id,
    name: repo.name,
    displayName: toDisplayName(repo.name),
    description: repo.description || `A project built on Avalanche by Talent-Index Kenya.`,
    category: categorize(repo),
    language: repo.language || "Unknown",
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    url: repo.html_url,
    homepage: repo.homepage,
    updatedAt: repo.updated_at,
    createdAt: repo.created_at,
  };
}

async function fetchAllRepos(): Promise<EcosystemProject[]> {
  const allRepos: GitHubRepo[] = [];
  let page = 1;
  const perPage = 100;

  while (true) {
    const res = await fetch(`${API}/orgs/${ORG}/repos?per_page=${perPage}&page=${page}&sort=updated`);
    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
    const repos: GitHubRepo[] = await res.json();
    allRepos.push(...repos);
    if (repos.length < perPage) break;
    page++;
  }

  return allRepos
    .filter((r) => !r.fork && !r.archived)
    .map(transformRepo)
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
}

export function useEcosystemProjects() {
  return useQuery({
    queryKey: ["ecosystem-projects"],
    queryFn: fetchAllRepos,
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    retry: 2,
  });
}

export function useRefreshProjects() {
  const qc = useQueryClient();
  return () => qc.invalidateQueries({ queryKey: ["ecosystem-projects"] });
}

export const ALL_CATEGORIES: EcosystemCategory[] = [
  "Payments & Finance",
  "Gaming & NFTs",
  "Identity & Credentials",
  "Developer Tooling",
  "AI & Agents",
  "Community & Education",
  "DeFi",
  "Real World Assets",
  "Infrastructure",
  "Other",
];

export const CATEGORY_COLORS: Record<EcosystemCategory, string> = {
  "Payments & Finance": "from-brand-orange to-brand-red",
  "Gaming & NFTs": "from-brand-red to-brand-purple",
  "Identity & Credentials": "from-brand-purple to-brand-blue",
  "Developer Tooling": "from-brand-blue to-brand-orange",
  "AI & Agents": "from-brand-purple to-brand-red",
  "Community & Education": "from-brand-orange to-brand-blue",
  "DeFi": "from-brand-red to-brand-purple",
  "Real World Assets": "from-brand-orange to-brand-purple",
  "Infrastructure": "from-brand-blue to-brand-red",
  "Other": "from-muted to-muted-foreground",
};
