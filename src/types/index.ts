export type ProjectStage =
  | "Idea"
  | "Prototype"
  | "MVP"
  | "Testnet"
  | "Mainnet"
  | "Traction"
  | "Fundraising"
  | "Scaling";

export type Track =
  | "Gaming & Onboarding"
  | "Payments & Stablecoins"
  | "AI Agents"
  | "Consumer Apps"
  | "Developer Tooling"
  | "Real World Assets"
  | "Public Sector / SDGs"
  | "DeFi"
  | "Wallet & Identity"
  | "Community Infrastructure";

export interface Project {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  track: Track;
  stage: ProjectStage;
  location: string;
  teamName: string;
  builderIds: string[];
  imageUrl: string;
  logoUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  xUrl?: string;
  websiteUrl?: string;
  avalancheIntegration: string;
  lastShipped: string;
  shippingUpdate: string;
  lookingForFunding: boolean;
  lookingForCollaborators: boolean;
  grantReady: boolean;
  demoDayReady: boolean;
  visibilityScore: number;
  hasGithub?: boolean;
  hasDemo?: boolean;
  hackathonProject?: boolean;
  tags?: string[];
  featured?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Builder {
  id: string;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  location: string;
  avatarUrl: string;
  githubUrl?: string;
  xUrl?: string;
  linkedinUrl?: string;
  projects: string[];
  openToCollaborate: boolean;
  badges: string[];
  createdAt: string;
}

export interface Submission {
  id: string;
  projectName: string;
  submitterName: string;
  email: string;
  whatsapp?: string;
  description: string;
  links?: string;
  status: "pending" | "approved" | "rejected" | "featured";
  adminNotes?: string;
  stage?: ProjectStage;
  visibilityScore?: number;
  grantReadinessScore?: number;
  createdAt: string;
}
