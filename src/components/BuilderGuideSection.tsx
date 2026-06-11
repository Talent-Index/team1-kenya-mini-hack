import { ArrowUpRight, BookOpen, Trophy, GitBranch, Send } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const GUIDE_URL =
  "https://github.com/Talent-Index/minihack-cohort1-template/blob/main/CONTRIBUTING_GUIDE.md";
const TRACKER_URL = "https://minihacktracker.vercel.app";
const TEMPLATE_URL = "https://github.com/Talent-Index/minihack-cohort1-template";
const TELEGRAM_URL = "https://t.me/avaxDAOAfrica/3";

const cards = [
  {
    icon: BookOpen,
    title: "Full contribution guide",
    description:
      "Step-by-step instructions for every week of the cohort. How to set up, how to submit, what the grader looks for, and what happens if you are stuck.",
    linkText: "Read the guide",
    href: GUIDE_URL,
  },
  {
    icon: Trophy,
    title: "Live quest leaderboard",
    description:
      "Every Tally submission feeds the leaderboard in real time. Complete a quest and see your name climb the board within minutes.",
    linkText: "View leaderboard",
    href: TRACKER_URL,
  },
  {
    icon: GitBranch,
    title: "Cohort template repo",
    description:
      "Fork this repo to start. It contains starter contracts, deploy scripts, tests, and a pre-configured Fuji environment ready to compile on the first run.",
    linkText: "Fork the template",
    href: TEMPLATE_URL,
  },
];

export const BuilderGuideSection = () => (
  <div>
    <SectionHeader
      eyebrow="Builder Guide"
      title="Everything is documented. You will not get lost."
      description="The submission process, quest breakdowns, grading rubric, and how to open a PR are all written out step by step. Start here."
    />

    <div className="grid gap-4 md:grid-cols-3 mb-6">
      {cards.map((c) => (
        <a
          key={c.href}
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl bg-gradient-card border-hairline p-6 hover:border-brand-red/40 transition-all hover:-translate-y-0.5 flex flex-col gap-4"
        >
          <div className="flex items-start justify-between">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand shadow-glow">
              <c.icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-semibold tracking-tight mb-1.5">{c.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
          </div>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-red group-hover:underline">
            {c.linkText}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </a>
      ))}
    </div>

    {/* Reassurance callout */}
    <div className="rounded-2xl bg-brand-red/5 border border-brand-red/20 p-6 md:p-8 flex flex-col sm:flex-row sm:items-center gap-6">
      <div className="flex-1">
        <h3 className="font-display text-lg font-semibold tracking-tight mb-2">
          Not sure where to start?
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Open the contribution guide, follow the pre-cohort checklist, and post in Telegram if
          anything is unclear. Every step is documented. You do not need to figure this out alone.
        </p>
      </div>
      <div className="flex flex-wrap gap-3 shrink-0">
        <a
          href={GUIDE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg bg-brand-red text-primary-foreground hover:bg-brand-red/90 px-4 py-2 text-sm font-medium transition-colors"
        >
          Open the guide →
        </a>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary/60 hover:bg-secondary px-4 py-2 text-sm font-medium transition-colors"
        >
          <Send className="h-3.5 w-3.5" />
          Ask in Telegram
        </a>
      </div>
    </div>
  </div>
);
