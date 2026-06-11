import { Helmet } from "react-helmet-async";
import {
  GitBranch, CheckSquare, ExternalLink, Send, AlertTriangle,
  BookOpen, Globe, Trophy,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const GUIDE_URL =
  "https://github.com/Talent-Index/minihack-cohort1-template/blob/main/CONTRIBUTING_GUIDE.md";
const TRACKER_URL = "https://minihacktracker.vercel.app";
const TALLY_URL = "https://tally.so/r/rjv4Zo";
const TELEGRAM_URL = "https://t.me/avaxDAOAfrica/3";
const TEMPLATE_URL = "https://github.com/Talent-Index/minihack-cohort1-template";
const GITHUB_ORG_URL = "https://github.com/Talent-Index";
const HANDBOOK_URL =
  "https://futuristic-dog-9aa.notion.site/Avalanche-Team1-Kenya-Mini-Hack-2a61447232f181d182fec1d63817b3bd";

// ─── DATA ────────────────────────────────────────────────────────────────────

const workflowSteps = [
  {
    n: "01",
    label: "Pull the latest from the template",
    description:
      "Before starting each week, sync your fork to get any new starter code added for that week.",
    code: `git fetch upstream\ngit checkout main\ngit merge upstream/main\ngit push origin main`,
  },
  {
    n: "02",
    label: "Create your weekly branch",
    description: "Branch naming is not optional. Use this exact format every week.",
    code: `git checkout -b week-{N}-{your-github-handle}\n# Example:\ngit checkout -b week-2-scotch`,
  },
  {
    n: "03",
    label: "Do your work on that branch",
    description:
      "Build the deliverable, write tests, commit often with meaningful messages. Your commit history is visible to reviewers.",
    code: `# Good examples:\ngit commit -m "add ERC-20 PaymentSplitter with split logic"\ngit commit -m "deploy PaymentSplitter to Fuji testnet"`,
  },
  {
    n: "04",
    label: "Open a pull request on your fork",
    description:
      "Push your branch then open a PR from it into your own fork's main branch. Use the correct title format. Fill in every field — a blank PR will not be reviewed. The automated bot confirms your submission within 30 seconds.",
    code: `git push origin week-{N}-{your-github-handle}\n\n# PR title format:\n[Cohort 1 Week N] Your Name - Deliverable title`,
  },
  {
    n: "05",
    label: "Share your PR link in Telegram",
    description:
      "Copy the PR URL and post it in the Telegram submissions thread before Sunday midnight EAT.",
    cta: { label: "Join Telegram →", href: TELEGRAM_URL },
  },
  {
    n: "06",
    label: "Complete your quests on Tally",
    description:
      "Go to the Tally form and submit evidence for each quest. Include your GitHub PR link. All quests must be done before Sunday midnight EAT — same deadline as your PR.",
    cta: { label: "Open Tally →", href: TALLY_URL },
  },
];

const rubricRows = [
  { criterion: "Functionality", weight: "35%", detail: "Features work correctly on Fuji testnet" },
  { criterion: "Integration", weight: "25%", detail: "Wallet, API, and on-chain layers connected" },
  { criterion: "Code quality", weight: "20%", detail: "Readable, commented, and tested" },
  { criterion: "Documentation", weight: "10%", detail: "README explains what you built and how to run it" },
  { criterion: "Demo", weight: "10%", detail: "Live product walkthrough at Builders Connect" },
];

const gradeBands = [
  { label: "Distinction", range: "90 – 100%" },
  { label: "Merit", range: "75 – 89%" },
  { label: "Pass", range: "60 – 74%" },
  { label: "Incomplete", range: "Below 60%" },
];

const quickLinks = [
  { label: "Programme site", href: "https://team1kenyaminihack.vercel.app" },
  { label: "Quest leaderboard", href: TRACKER_URL },
  { label: "Tally quests", href: TALLY_URL },
  { label: "Cohort 1 template", href: TEMPLATE_URL },
  { label: "GitHub org", href: GITHUB_ORG_URL },
  { label: "Programme handbook", href: HANDBOOK_URL },
  { label: "Telegram", href: TELEGRAM_URL },
  { label: "Builders Hub", href: "https://build.avax.network/" },
  { label: "Fuji faucet", href: "https://core.app/tools/testnet-faucet" },
  { label: "Snowtrace", href: "https://testnet.snowtrace.io" },
  { label: "Avalanche docs", href: "https://docs.avax.network" },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

const Guide = () => (
  <div className="container py-12 md:py-16">
    <Helmet>
      <title>Builder Guide — Team1 Kenya Mini Hack</title>
      <meta
        name="description"
        content="Everything you need to submit your Mini Hack quests, open a GitHub PR, track your leaderboard position, and graduate with a certificate."
      />
      <link rel="canonical" href="/guide" />
    </Helmet>

    {/* ─── HEADER ─── */}
    <SectionHeader
      eyebrow="Builder Guide"
      title="You will not get lost."
      description="The full process for every week of Mini Hack is documented below. Read this once and refer back whenever you need it. If something is still unclear, post in Telegram — do not guess."
    />

    {/* ─── TWO-TRACK SUBMISSION ─── */}
    <section className="mb-12 md:mb-16">
      <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-2">
        Every week you submit two things.
      </h2>
      <p className="text-sm text-muted-foreground mb-6">
        Both are required. One without the other is an incomplete submission.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {/* GitHub PR */}
        <div className="rounded-2xl bg-gradient-card border-hairline p-6">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand shadow-glow mb-4">
            <GitBranch className="h-5 w-5 text-primary-foreground" />
          </div>
          <h3 className="font-display font-semibold tracking-tight text-lg mb-3">
            Your GitHub pull request
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            This is your actual code. Push your weekly branch to your fork and open a PR against
            your own fork's main branch.
          </p>
          <pre className="rounded-xl bg-surface-2 border border-border/60 p-3 text-xs font-mono text-foreground/80 overflow-x-auto mb-4 whitespace-pre">
            {`[Cohort 1 Week N] Your Name - Deliverable title`}
          </pre>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Fill in every section of the PR template. A blank PR will not be reviewed. The
            automated bot confirms your submission within 30 seconds of opening.
          </p>
        </div>

        {/* Tally */}
        <div className="rounded-2xl bg-gradient-card border-hairline p-6">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand shadow-glow mb-4">
            <CheckSquare className="h-5 w-5 text-primary-foreground" />
          </div>
          <h3 className="font-display font-semibold tracking-tight text-lg mb-3">
            Your Tally quest submission
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            This is your evidence — screenshots, Snowtrace links, terminal output, certificate PDFs,
            reflections. Each quest is a field in that week's Tally form.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Include your GitHub PR link in every Tally submission. Your submissions feed the
            leaderboard automatically.
          </p>
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-4 text-center">
        Both must be submitted before Sunday midnight EAT. One without the other is an incomplete
        submission.
      </p>
    </section>

    {/* ─── WEEKLY WORKFLOW ─── */}
    <section className="mb-12 md:mb-16">
      <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-2">
        Same process every week.
      </h2>
      <p className="text-sm text-muted-foreground mb-8">Six steps. Every week. No exceptions.</p>
      <div className="rounded-2xl bg-gradient-card border-hairline p-4 sm:p-6 md:p-8 space-y-7">
        {workflowSteps.map((step) => (
          <div key={step.n} className="flex gap-4 items-start">
            <span className="shrink-0 h-9 w-9 rounded-xl bg-gradient-brand flex items-center justify-center font-mono text-xs font-bold text-primary-foreground">
              {step.n}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold mb-1">{step.label}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {step.description}
              </p>
              {"code" in step && step.code && (
                <pre className="rounded-lg bg-surface-2 border border-border/60 p-3 text-xs font-mono text-foreground/80 overflow-x-auto whitespace-pre mb-3">
                  {step.code}
                </pre>
              )}
              {"cta" in step && step.cta && (
                <a
                  href={step.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary/60 hover:bg-secondary hover:border-brand-red/40 px-3 py-1.5 text-sm font-medium transition-colors"
                >
                  {step.cta.label}
                  <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* ─── GRADING ─── */}
    <section className="mb-12 md:mb-16">
      <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-6">
        How your work is graded.
      </h2>
      <div className="overflow-x-auto rounded-2xl mb-6">
        <div className="min-w-[480px] rounded-2xl bg-gradient-card border-hairline overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/60 bg-secondary/30">
                {["Criterion", "Weight", "What reviewers check"].map((h) => (
                  <th
                    key={h}
                    className="text-left px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rubricRows.map((row, i) => (
                <tr
                  key={row.criterion}
                  className={`border-b border-border/40 ${i === rubricRows.length - 1 ? "border-0" : ""}`}
                >
                  <td className="px-5 py-3 font-medium">{row.criterion}</td>
                  <td className="px-5 py-3 font-mono text-brand-red font-semibold">{row.weight}</td>
                  <td className="px-5 py-3 text-muted-foreground">{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {gradeBands.map((g) => (
          <div
            key={g.label}
            className="rounded-xl bg-gradient-card border-hairline p-4 text-center"
          >
            <div className="font-display font-semibold tracking-tight text-sm">{g.label}</div>
            <div className="text-xs text-muted-foreground mt-1">{g.range}</div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-border/60 bg-secondary/20 p-5 text-sm text-muted-foreground space-y-2">
        <p>
          <strong className="text-foreground">Week 4 final project</strong> carries 40% of your
          overall cohort grade. Weeks 1 to 3 together carry 60%.
        </p>
        <p>
          Certificates are awarded to builders who achieve a Pass or above{" "}
          <strong className="text-foreground">AND</strong> present at Builders Connect Demo Day.
          Demo Day attendance is mandatory for graduation.
        </p>
      </div>
    </section>

    {/* ─── LATE POLICY ─── */}
    <section className="mb-12 md:mb-16">
      <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-4">
        Deadlines matter.
      </h2>
      <div className="rounded-2xl border border-amber-500/40 bg-amber-500/5 p-6 md:p-8">
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
          <h3 className="font-display text-lg font-semibold tracking-tight text-amber-300">
            Submission deadlines
          </h3>
        </div>
        <ul className="space-y-3 text-sm text-muted-foreground">
          {[
            {
              label: "Deadline:",
              text: "Sunday midnight EAT — both your PR link and your Tally quests must be submitted by this time.",
            },
            {
              label: "Late up to 48 hours:",
              text: "accepted with a 20% grade penalty.",
            },
            {
              label: "Late beyond 48 hours:",
              text: "zero for that week. You may still continue in the programme and submit future weeks.",
            },
            {
              label: "Three consecutive zeros:",
              text: "removal from the cohort without a certificate.",
            },
          ].map((item) => (
            <li key={item.label} className="flex gap-2">
              <span className="text-amber-400 shrink-0 mt-0.5">·</span>
              <span>
                <strong className="text-foreground">{item.label}</strong> {item.text}
              </span>
            </li>
          ))}
          <li className="flex gap-2">
            <span className="text-amber-400 shrink-0 mt-0.5">·</span>
            <span>
              If you have a genuine emergency, message{" "}
              <a
                href="https://t.me/Joseph_Njoroge"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#229ED9] hover:underline"
              >
                @scotch
              </a>{" "}
              on Telegram <strong className="text-foreground">before the deadline</strong>. After
              the deadline, late appeals are not considered.
            </span>
          </li>
        </ul>
      </div>
    </section>

    {/* ─── GETTING HELP ─── */}
    <section className="mb-12 md:mb-16">
      <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-4">
        Stuck? Here is how to get unblocked.
      </h2>
      <div className="rounded-2xl bg-gradient-card border-hairline p-6 md:p-8">
        <div className="flex items-start gap-3 mb-4">
          <Send className="h-5 w-5 text-[#229ED9] shrink-0 mt-0.5" />
          <h3 className="font-display text-lg font-semibold tracking-tight">
            Post in Telegram first.
          </h3>
        </div>
        <div className="space-y-3 text-sm text-muted-foreground">
          <p>
            Post in Telegram with three things:{" "}
            <strong className="text-foreground">what you are trying to do</strong>,{" "}
            <strong className="text-foreground">what you have already tried</strong>, and{" "}
            <strong className="text-foreground">the exact error message</strong> — not a paraphrase,
            the full text.
          </p>
          <p>
            Office hours run every{" "}
            <strong className="text-foreground">Thursday from 6:00 PM to 7:00 PM EAT</strong> on a
            voice call before the main session. Bring your blockers there.
          </p>
          <p>
            Tag{" "}
            <a
              href="https://t.me/Joseph_Njoroge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#229ED9] hover:underline"
            >
              @scotch
            </a>{" "}
            on Telegram only after posting in the group and not getting a response within a
            reasonable time.
          </p>
        </div>
        <div className="mt-5">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#229ED9]/40 bg-[#229ED9]/10 hover:bg-[#229ED9]/20 px-3 py-1.5 text-sm font-medium text-[#229ED9] transition-colors"
          >
            <Send className="h-3.5 w-3.5" />
            Join Telegram →
          </a>
        </div>
      </div>
    </section>

    {/* ─── FULL GUIDE CTA ─── */}
    <section className="mb-12 md:mb-16">
      <div className="rounded-2xl bg-brand-red/5 border border-brand-red/20 p-8 md:p-12 text-center">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand shadow-glow mb-4">
          <BookOpen className="h-5 w-5 text-primary-foreground" />
        </div>
        <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-3">
          Want every detail for every week?
        </h2>
        <p className="text-muted-foreground text-sm max-w-xl mx-auto mb-6">
          The full contribution guide on GitHub has week-by-week quest breakdowns, all cast commands
          for Week 2, the Daraja setup for Week 3, and every Snowtrace link format you need.
        </p>
        <a
          href={GUIDE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg bg-brand-red text-primary-foreground hover:bg-brand-red/90 px-5 py-2.5 text-sm font-semibold transition-colors"
        >
          Read the full guide on GitHub →
        </a>
      </div>
    </section>

    {/* ─── QUICK LINKS ─── */}
    <section>
      <h2 className="font-display text-xl font-semibold tracking-tight mb-4">Quick links</h2>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {quickLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-xl bg-gradient-card border-hairline px-4 py-3 hover:border-brand-red/40 transition-all hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-2.5">
              <Globe className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
              <span className="text-sm font-medium">{link.label}</span>
            </div>
            <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
          </a>
        ))}
      </div>
    </section>
  </div>
);

export default Guide;
