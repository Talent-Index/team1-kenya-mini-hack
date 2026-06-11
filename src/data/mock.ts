import { Builder, Project, Submission, Track } from "@/types";
import questArena from "@/assets/project-plugplay.jpg";
import core from "@/assets/project-core.jpg";
import campus from "@/assets/project-campus.jpg";
import exion from "@/assets/project-exion.jpg";
import grants from "@/assets/project-grants.jpg";
import ai from "@/assets/project-ai.jpg";

export const TRACKS: Track[] = [
  "Gaming & Onboarding",
  "Payments & Stablecoins",
  "AI Agents",
  "Consumer Apps",
  "Developer Tooling",
  "Real World Assets",
  "Public Sector / SDGs",
  "DeFi",
  "Wallet & Identity",
  "Community Infrastructure",
];

export const STAGES = [
  "Idea",
  "Prototype",
  "MVP",
  "Testnet",
  "Mainnet",
  "Traction",
  "Fundraising",
  "Scaling",
] as const;

const img = [questArena, core, campus, exion, grants, ai];

export const builders: Builder[] = [
  { id: "b1", name: "Wanjiru Kamau", role: "Full-stack Engineer", bio: "Building consumer-grade web3 onboarding experiences for African users.", skills: ["React", "Solidity", "Avalanche", "Node"], location: "Nairobi", avatarUrl: "https://i.pravatar.cc/200?img=47", githubUrl: "#", xUrl: "#", linkedinUrl: "#", projects: ["p1"], openToCollaborate: true, badges: ["Hackathon Winner", "Demo Day Ready"], createdAt: "2025-01-12" },
  { id: "b2", name: "Brian Otieno", role: "Smart Contract Engineer", bio: "Subnet enthusiast. Shipping rewards & loyalty primitives.", skills: ["Solidity", "Rust", "Subnets"], location: "Kisumu", avatarUrl: "https://i.pravatar.cc/200?img=12", githubUrl: "#", xUrl: "#", projects: ["p2"], openToCollaborate: true, badges: ["Core Builder"], createdAt: "2025-02-03" },
  { id: "b3", name: "Faith Achieng", role: "Founder & Product Lead", bio: "Bringing 100 universities to web3 through hands-on builder programs.", skills: ["Product", "Community", "GTM"], location: "Nairobi", avatarUrl: "https://i.pravatar.cc/200?img=45", githubUrl: "#", linkedinUrl: "#", projects: ["p3"], openToCollaborate: true, badges: ["Female-led", "Campus Ambassador"], createdAt: "2025-02-22" },
  { id: "b4", name: "Kevin Mwangi", role: "Payments Engineer", bio: "Bridging M-Pesa and Avalanche for everyday merchants.", skills: ["TypeScript", "Stablecoins", "Payments"], location: "Mombasa", avatarUrl: "https://i.pravatar.cc/200?img=14", githubUrl: "#", projects: ["p4"], openToCollaborate: false, badges: ["Fintech"], createdAt: "2025-03-01" },
  { id: "b5", name: "Aisha Noor", role: "Designer & Frontend", bio: "Designing premium UI for ecosystem tooling.", skills: ["Figma", "React", "Motion"], location: "Nairobi", avatarUrl: "https://i.pravatar.cc/200?img=44", githubUrl: "#", xUrl: "#", projects: ["p5"], openToCollaborate: true, badges: ["Demo Day Ready"], createdAt: "2025-03-10" },
  { id: "b6", name: "Daniel Kiprop", role: "AI Engineer", bio: "Autonomous agents that interact with on-chain data.", skills: ["Python", "LLMs", "Agents"], location: "Eldoret", avatarUrl: "https://i.pravatar.cc/200?img=33", githubUrl: "#", projects: ["p6"], openToCollaborate: true, badges: ["Hackathon Winner"], createdAt: "2025-03-18" },
  { id: "b7", name: "Lillian Wairimu", role: "Community Lead", bio: "Growing the Avalanche Kenya developer community.", skills: ["DevRel", "Events", "Content"], location: "Nairobi", avatarUrl: "https://i.pravatar.cc/200?img=48", linkedinUrl: "#", projects: [], openToCollaborate: true, badges: ["Community"], createdAt: "2025-03-25" },
  { id: "b8", name: "Samuel Mutiso", role: "Solidity Engineer", bio: "DeFi primitives for emerging markets.", skills: ["Solidity", "DeFi"], location: "Nakuru", avatarUrl: "https://i.pravatar.cc/200?img=15", githubUrl: "#", projects: ["p7"], openToCollaborate: true, badges: [], createdAt: "2025-04-01" },
  { id: "b9", name: "Grace Mumbi", role: "Student Builder", bio: "CS student at JKUAT. Building NFT identity primitives.", skills: ["React", "Solidity"], location: "Nairobi", avatarUrl: "https://i.pravatar.cc/200?img=49", githubUrl: "#", projects: ["p8"], openToCollaborate: true, badges: ["Student-led", "Youth-led"], createdAt: "2025-04-08" },
  { id: "b10", name: "Mark Ouma", role: "RWA Engineer", bio: "Tokenizing real-world assets — agriculture & solar.", skills: ["Solidity", "RWA"], location: "Kisumu", avatarUrl: "https://i.pravatar.cc/200?img=8", githubUrl: "#", projects: ["p9"], openToCollaborate: false, badges: ["Grant Recipient"], createdAt: "2025-04-15" },
];

const mk = (i: number, p: Partial<Project>): Project => ({
  id: `p${i}`,
  name: "",
  slug: "",
  tagline: "",
  description: "",
  track: "Consumer Apps",
  stage: "MVP",
  location: "Nairobi, Kenya",
  teamName: "",
  builderIds: [],
  imageUrl: img[i % img.length],
  avalancheIntegration: "C-Chain smart contracts",
  lastShipped: "2025-04-20",
  shippingUpdate: "Shipped MVP update",
  lookingForFunding: false,
  lookingForCollaborators: true,
  grantReady: false,
  demoDayReady: false,
  visibilityScore: 70,
  hasGithub: true,
  hasDemo: true,
  createdAt: "2025-01-01",
  updatedAt: "2025-04-20",
  ...p,
});

export const projects: Project[] = [
  mk(0, { id: "p1", name: "QuestArena", slug: "questarena", tagline: "Gamified Avalanche onboarding & missions platform", description: "QuestArena turns onboarding into a quest. Users complete missions across the Avalanche ecosystem to earn XP, NFT badges, and unlock real rewards from partner protocols.", track: "Gaming & Onboarding", stage: "Testnet", teamName: "QuestArena Labs", builderIds: ["b1"], imageUrl: questArena, lastShipped: "2025-04-22", shippingUpdate: "Launched Quest v2 with 14 partner missions", lookingForFunding: true, grantReady: true, demoDayReady: true, visibilityScore: 92, featured: true, hackathonProject: true, githubUrl: "#", demoUrl: "#", xUrl: "#" }),
  mk(1, { id: "p2", name: "Core Rewards Quest", slug: "core-rewards-quest", tagline: "Wallet-based rewards onboarding for Core users", description: "A loyalty layer that rewards users for first-time wallet actions like swaps, bridges, and staking — built specifically for the Core wallet experience.", track: "Wallet & Identity", stage: "MVP", teamName: "Otieno Studios", builderIds: ["b2"], imageUrl: core, lastShipped: "2025-04-18", shippingUpdate: "Integrated 3 new dApps for reward tracking", grantReady: true, visibilityScore: 84, featured: true, githubUrl: "#", demoUrl: "#" }),
  mk(2, { id: "p3", name: "Avalanche Campus Connect", slug: "campus-connect", tagline: "Campus builder activation system across Kenya", description: "A platform that helps universities run Avalanche developer programs — clubs, hackathons, leaderboards, and ambassador tracking.", track: "Community Infrastructure", stage: "Traction", teamName: "Campus Connect", builderIds: ["b3", "b7"], imageUrl: campus, lastShipped: "2025-04-19", shippingUpdate: "Onboarded 7 new universities", lookingForCollaborators: true, demoDayReady: true, visibilityScore: 88, featured: true, githubUrl: "#", websiteUrl: "#" }),
  mk(3, { id: "p4", name: "Exion Pay Demo", slug: "exion-pay", tagline: "Real-world stablecoin payments for African merchants", description: "Bridges M-Pesa with Avalanche stablecoins so merchants can settle in USDC instantly while customers pay in KES.", track: "Payments & Stablecoins", stage: "MVP", teamName: "Exion", builderIds: ["b4"], imageUrl: exion, lastShipped: "2025-04-15", shippingUpdate: "Pilot with 12 Nairobi merchants", lookingForFunding: true, grantReady: true, visibilityScore: 81, featured: true, demoUrl: "#" }),
  mk(4, { id: "p5", name: "Builder Grants Tracker", slug: "grants-tracker", tagline: "Track grants and founder opportunities in one place", description: "Aggregates grants, hackathons, accelerators, and bounties from across the Avalanche ecosystem with deadlines and eligibility filters.", track: "Developer Tooling", stage: "Mainnet", teamName: "Indie", builderIds: ["b5"], imageUrl: grants, lastShipped: "2025-04-21", shippingUpdate: "Added 22 new opportunities", demoDayReady: true, visibilityScore: 86, featured: true, githubUrl: "#", demoUrl: "#" }),
  mk(5, { id: "p6", name: "Subnet Sentinel", slug: "subnet-sentinel", tagline: "AI agent monitoring Avalanche subnets in real-time", description: "Autonomous AI agent that watches subnet health, surfaces anomalies, and pings teams via Slack/Telegram with actionable insights.", track: "AI Agents", stage: "Prototype", teamName: "Sentinel AI", builderIds: ["b6"], imageUrl: ai, lastShipped: "2025-04-10", shippingUpdate: "Launched anomaly detection beta", lookingForCollaborators: true, visibilityScore: 74, githubUrl: "#" }),
  mk(0, { id: "p7", name: "Mzizi DeFi", slug: "mzizi-defi", tagline: "Yield primitives tuned for emerging markets", description: "Stablecoin yield vaults with risk profiles designed for first-time DeFi users in Africa.", track: "DeFi", stage: "Testnet", teamName: "Mzizi", builderIds: ["b8"], lastShipped: "2025-04-08", shippingUpdate: "Deployed first vault on Fuji", grantReady: true, visibilityScore: 71, githubUrl: "#" }),
  mk(1, { id: "p8", name: "ID Karibu", slug: "id-karibu", tagline: "On-chain identity for African web3 users", description: "Soulbound identity primitives that let Kenyan users carry verifiable credentials, badges, and reputation across dApps.", track: "Wallet & Identity", stage: "Prototype", teamName: "ID Karibu", builderIds: ["b9"], lastShipped: "2025-04-05", shippingUpdate: "First identity SDK release", lookingForCollaborators: true, visibilityScore: 65, githubUrl: "#" }),
  mk(2, { id: "p9", name: "Shamba Chain", slug: "shamba-chain", tagline: "Tokenized agriculture finance for smallholder farmers", description: "Tokenizes farm receivables so smallholder Kenyan farmers can access working capital from global liquidity providers.", track: "Real World Assets", stage: "MVP", teamName: "Shamba", builderIds: ["b10"], lastShipped: "2025-04-12", shippingUpdate: "Onboarded first co-op of 80 farmers", lookingForFunding: true, grantReady: true, visibilityScore: 79, websiteUrl: "#" }),
  mk(3, { id: "p10", name: "Tujenge SDG", slug: "tujenge-sdg", tagline: "Funding pool for SDG-aligned grassroots projects", description: "Quadratic funding pool tailored to Kenyan SDG initiatives — water, education, energy.", track: "Public Sector / SDGs", stage: "Idea", teamName: "Tujenge", builderIds: ["b3"], lastShipped: "2025-04-01", shippingUpdate: "Concept document published", lookingForCollaborators: true, visibilityScore: 58 }),
  mk(4, { id: "p11", name: "Soko Consumer", slug: "soko", tagline: "Web3 marketplace for digital creators in Kenya", description: "A consumer marketplace where Kenyan creators sell digital goods with stablecoin payouts.", track: "Consumer Apps", stage: "MVP", teamName: "Soko", builderIds: ["b1", "b5"], lastShipped: "2025-04-17", shippingUpdate: "Launched creator dashboard", visibilityScore: 76, githubUrl: "#", demoUrl: "#" }),
  mk(5, { id: "p12", name: "DevHub Kenya", slug: "devhub-kenya", tagline: "Developer tooling & SDK starter for Avalanche builders", description: "Open-source CLI and templates that get a Kenyan developer from zero to deployed on Avalanche in under 10 minutes.", track: "Developer Tooling", stage: "Mainnet", teamName: "DevHub", builderIds: ["b2", "b6"], lastShipped: "2025-04-23", shippingUpdate: "v1.2 with subnet templates", demoDayReady: true, visibilityScore: 90, githubUrl: "#" }),
];

export const submissions: Submission[] = [
  { id: "s1", projectName: "Hisa Vault", submitterName: "John Kariuki", email: "john@example.com", whatsapp: "+254700000001", description: "Stock-pegged vaults on Avalanche.", status: "pending", createdAt: "2025-04-22" },
  { id: "s2", projectName: "Boda Pay", submitterName: "Mary Njeri", email: "mary@example.com", description: "Payments rails for boda riders.", status: "pending", createdAt: "2025-04-21" },
  { id: "s3", projectName: "ChamaDAO", submitterName: "Peter Odhiambo", email: "peter@example.com", description: "DAO tooling for Kenyan investment groups.", status: "approved", stage: "MVP", visibilityScore: 78, grantReadinessScore: 70, createdAt: "2025-04-19" },
  { id: "s4", projectName: "EduChain", submitterName: "Lucy Wambui", email: "lucy@example.com", description: "Verifiable academic credentials.", status: "featured", stage: "Traction", visibilityScore: 88, grantReadinessScore: 82, createdAt: "2025-04-15" },
  { id: "s5", projectName: "GreenLoop", submitterName: "Eric Kimani", email: "eric@example.com", description: "Carbon credits marketplace.", status: "rejected", adminNotes: "Out of scope for current cohort.", createdAt: "2025-04-10" },
];

export interface Quest {
  id: string;
  week: number;
  cohort: "Payments" | "Gaming" | "Agentic AI";
  points: number;
  title: string;
  description: string;
  tallyUrl: string;
  status: "Active" | "Upcoming" | "Closed";
  academyUrl?: string;
}

export const quests: Quest[] = [
  {
    id: "q2-1",
    week: 2,
    cohort: "Payments",
    points: 20,
    title: "Scaffold Your Foundry Payments Project",
    description: "Set up a complete Foundry project for on-chain payments. Initialise forge init, install OpenZeppelin, configure foundry.toml for Fuji, and confirm forge build passes.",
    tallyUrl: "https://tally.so/r/Y5qG65",
    status: "Active",
  },
  {
    id: "q2-2",
    week: 2,
    cohort: "Payments",
    points: 25,
    title: "Write the PaymentSplitter Contract",
    description: "Implement a Solidity PaymentSplitter that accepts an ERC-20 token and splits a payment between two recipients. Import from OpenZeppelin. Emit an event on every split. forge build must pass with zero errors.",
    tallyUrl: "https://tally.so/r/Y5qG65",
    status: "Active",
  },
  {
    id: "q2-3",
    week: 2,
    cohort: "Payments",
    points: 25,
    title: "Deploy to Fuji and Verify On-Chain",
    description: "Deploy PaymentSplitter and Escrow contracts to Fuji C-Chain using forge script and the Avalanche CLI key. Confirm deployment on Snowtrace. Share forge script broadcast output and Snowtrace contract links.",
    tallyUrl: "https://tally.so/r/Y5qG65",
    status: "Active",
  },
  {
    id: "q2-4",
    week: 2,
    cohort: "Payments",
    points: 20,
    title: "Execute a Live Split Payment with Cast",
    description: "Interact with your deployed PaymentSplitter using cast send. Approve the mUSDC spend, execute a 70/30 split, and confirm both recipient balances changed on-chain using cast call.",
    tallyUrl: "https://tally.so/r/Y5qG65",
    status: "Active",
  },
  {
    id: "q2-5",
    week: 2,
    cohort: "Payments",
    points: 30,
    title: "Avalanche Academy — Smart Contracts Certification",
    description: "Complete the Smart Contracts on Avalanche course on Avalanche Academy. Download your certificate PDF and upload it via Tally. This certification counts toward your certified builder status reported to the Avalanche Foundation.",
    tallyUrl: "https://tally.so/r/Y5qG65",
    academyUrl: "https://academy.avax.network",
    status: "Active",
  },
];

export const trackMeta: Record<Track, { icon: string; gradient: string; description: string }> = {
  "Gaming & Onboarding": { icon: "Gamepad2", gradient: "from-brand-red to-brand-orange", description: "Quests, missions and gamified web3 onboarding" },
  "Payments & Stablecoins": { icon: "Wallet", gradient: "from-brand-orange to-brand-red", description: "Stablecoins, remittances, merchant rails" },
  "AI Agents": { icon: "Bot", gradient: "from-brand-purple to-brand-red", description: "Autonomous agents on-chain" },
  "Consumer Apps": { icon: "Smartphone", gradient: "from-brand-blue to-brand-purple", description: "Consumer-grade web3 experiences" },
  "Developer Tooling": { icon: "Code2", gradient: "from-brand-blue to-brand-orange", description: "SDKs, CLIs, dev infrastructure" },
  "Real World Assets": { icon: "Landmark", gradient: "from-brand-orange to-brand-purple", description: "Tokenized real-world value" },
  "Public Sector / SDGs": { icon: "HeartHandshake", gradient: "from-brand-blue to-brand-red", description: "Public good, SDG-aligned innovation" },
  "DeFi": { icon: "TrendingUp", gradient: "from-brand-red to-brand-purple", description: "Yield, lending, derivatives" },
  "Wallet & Identity": { icon: "Fingerprint", gradient: "from-brand-purple to-brand-blue", description: "Wallets, identity, reputation" },
  "Community Infrastructure": { icon: "Users", gradient: "from-brand-orange to-brand-blue", description: "Tools that grow the ecosystem" },
};
