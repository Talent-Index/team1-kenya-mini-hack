import { Helmet } from "react-helmet-async";
import { ExternalLink, Send, AlertTriangle, BookOpen } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { ApplyButton, LUMA_URL } from "@/components/ApplyButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TELEGRAM_URL = "https://t.me/avaxDAOAfrica/3";
const TALLY_URL = "https://tally.so/r/rjv4Zo";
const HANDBOOK_URL =
  "https://futuristic-dog-9aa.notion.site/Avalanche-Team1-Kenya-Mini-Hack-2a61447232f181d182fec1d63817b3bd?source=copy_link";
// TODO: Replace WHATSAPP_URL with the real WhatsApp group link when available
const WHATSAPP_URL = "#TODO-whatsapp-group-link";

// ─── STEP DATA ──────────────────────────────────────────────────────────────

const steps = [
  {
    number: "01",
    title: "Create your Avalanche Builders Hub account",
    description:
      "This is Quest 1 of every cohort and a primary KPI for the programme. The Avalanche Foundation tracks certified builder counts — your account creation is what makes you count. Do this before anything else.",
    cta: [{ label: "Open Builders Hub", href: "https://build.avax.network/" }],
    code: null,
    note: null,
  },
  {
    number: "02",
    title: "Install and configure Core Wallet",
    description:
      "Core Wallet is the required wallet for Mini Hack. It is the official Avalanche wallet by Ava Labs. Install the browser extension and configure it on Fuji testnet using the settings below.",
    cta: [{ label: "Get Core Wallet", href: "https://core.app" }],
    code: `Network name: Avalanche Fuji Testnet
RPC URL:      https://api.avax-test.network/ext/bc/C/rpc
Chain ID:     43113
Currency:     AVAX
Explorer:     https://testnet.snowtrace.io`,
    note: null,
  },
  {
    number: "03",
    title: "Get Fuji testnet AVAX",
    description:
      "Visit the faucet and request AVAX to your Core Wallet Fuji address. You need AVAX to deploy contracts and send transactions on Fuji. This is free — testnet AVAX has no real value.",
    cta: [{ label: "Open Faucet", href: "https://core.app/tools/testnet-faucet" }],
    code: null,
    note: null,
  },
  {
    number: "04",
    title: "Fork your cohort template repo",
    description:
      "Go to the template for your cohort and click Fork. Fork it to your personal GitHub account — do not clone it directly. Forking is what lets you open pull requests for your weekly submissions. Pick the cohort you are enrolled in.",
    cta: [
      { label: "Cohort 1 — Payments", href: "https://github.com/Talent-Index/minihack-cohort1-template" },
      { label: "Cohort 2 — Gaming", href: "https://github.com/Talent-Index/minihack-cohort2-template" },
      { label: "Cohort 3 — Agentic AI", href: "https://github.com/Talent-Index/minihack-cohort3-template" },
    ],
    code: null,
    note: null,
  },
  {
    number: "05",
    title: "Set up your local environment",
    description:
      "Clone your fork, install dependencies, copy the environment variable file, and verify your Hardhat config compiles cleanly against Fuji.",
    cta: [],
    code: `git clone git@github.com:YOUR-HANDLE/minihack-cohortN-template.git
cd minihack-cohortN-template
npm install
cp .env.example .env
npx hardhat compile`,
    note: "If the compile runs without errors, your environment is ready. Open .env and fill in your wallet private key and any other values listed. Never commit your .env file — it is already in .gitignore.",
  },
  {
    number: "06",
    title: "Join Telegram and WhatsApp",
    description:
      "Telegram is the primary programme channel. Session links, quest announcements, submission reminders, and community help are all posted there. WhatsApp is used for secondary coordination.",
    cta: [
      { label: "Join Telegram", href: TELEGRAM_URL },
      { label: "Join WhatsApp (link coming soon)", href: WHATSAPP_URL, todo: true },
    ],
    code: null,
    note: null,
  },
  {
    number: "07",
    title: "Submit Quest 1 on Tally",
    description:
      "Once your Builders Hub account is created, take a screenshot of your profile page and submit it as Quest 1 through Tally. This registers you in the programme tracking system and gets you counted as a certified builder.",
    cta: [{ label: "Open Tally", href: TALLY_URL }],
    code: null,
    note: null,
  },
];

// ─── WEEKLY WORKFLOW DATA ────────────────────────────────────────────────────

const workflow = [
  {
    n: 1,
    label: "Pull the latest from main",
    description: "Before you start each week, make sure your fork is up to date.",
    code: `git checkout main
git pull origin main`,
  },
  {
    n: 2,
    label: "Create your weekly branch",
    description:
      "Branch naming is not optional. Use this exact format every week. A PR with the wrong branch name will be flagged before review.",
    code: `git checkout -b week-{N}-{your-github-handle}
# Example:
git checkout -b week-2-scotch`,
  },
  {
    n: 3,
    label: "Build your deliverable",
    description:
      "Do all your work for that week on this branch. Commit often with meaningful commit messages — not 'fix' or 'update' but actual descriptions of what changed. Your commit history is part of how your work is assessed.",
    code: `# Good
git commit -m "add ERC-20 transfer function with balance check"
git commit -m "fix STK Push callback for duplicate transactions"

# Bad
git commit -m "fix"
git commit -m "wip"`,
  },
  {
    n: 4,
    label: "Open a pull request",
    description:
      "When your deliverable is ready, open a PR from your weekly branch into the main branch of YOUR OWN FORK — not into the Talent-Index template repo. Use this exact title format. When you open the PR, a template appears automatically. Fill in every section: what you built, what works, what does not work yet, your Snowtrace link, your deployed URL, and notes for the reviewer. A PR with empty sections will not be reviewed. After opening the PR, the welcome bot posts an automated comment within 30 seconds confirming your submission.",
    code: `# Title format:
[Cohort N Week N] Your Name - Deliverable title

# Example:
[Cohort 1 Week 2] Joseph Njoroge - ERC-20 token with unit tests`,
  },
  {
    n: 5,
    label: "Post your PR link on Telegram",
    description:
      "Copy your PR URL and post it in the Telegram group in the submissions thread. Tag it with your cohort and week number so it is easy to find. This must be done before Sunday midnight EAT.",
    code: null,
  },
  {
    n: 6,
    label: "Complete your weekly quests on Tally",
    description:
      "Each week has up to five quests on Tally. These include Avalanche Academy module completions, certificate uploads, written reflections, and technical tasks. All quests must be completed before Sunday midnight EAT — same deadline as your PR.",
    code: null,
    cta: { label: "Open Tally", href: TALLY_URL },
  },
];

// ─── RUBRIC DATA ─────────────────────────────────────────────────────────────

const rubricRows = [
  { criterion: "Functionality", weight: "35%", detail: "Features work correctly on Fuji testnet" },
  { criterion: "Integration", weight: "25%", detail: "Wallet, API, and on-chain layers connected" },
  { criterion: "Code quality", weight: "20%", detail: "Readable, commented, tested" },
  { criterion: "Documentation", weight: "10%", detail: "README explains what you built and how to run it" },
  { criterion: "Demo", weight: "10%", detail: "Live product walkthrough at Builders Connect" },
];

const gradeBands = [
  { label: "Distinction", range: "90 – 100%" },
  { label: "Merit", range: "75 – 89%" },
  { label: "Pass", range: "60 – 74%" },
  { label: "Incomplete", range: "Below 60%" },
];

// ─── USEFUL LINKS ─────────────────────────────────────────────────────────────

const usefulLinks = [
  { label: "Avalanche Builders Hub", href: "https://build.avax.network/" },
  { label: "Avalanche Academy", href: "https://build.avax.network/academy" },
  { label: "Core Wallet", href: "https://core.app" },
  { label: "Fuji Faucet", href: "https://core.app/tools/testnet-faucet" },
  { label: "Fuji Explorer (Snowtrace)", href: "https://testnet.snowtrace.io" },
  { label: "Tally (Quests)", href: TALLY_URL },
  { label: "Programme Handbook", href: HANDBOOK_URL },
  { label: "Cohort 1 Template", href: "https://github.com/Talent-Index/minihack-cohort1-template" },
  { label: "Cohort 2 Template", href: "https://github.com/Talent-Index/minihack-cohort2-template" },
  { label: "Cohort 3 Template", href: "https://github.com/Talent-Index/minihack-cohort3-template" },
  { label: "GitHub Org", href: "https://github.com/Talent-Index" },
  { label: "Telegram", href: TELEGRAM_URL },
  { label: "Avalanche Docs", href: "https://docs.avax.network" },
  { label: "Hardhat Docs", href: "https://hardhat.org/docs" },
  { label: "ethers.js Docs", href: "https://docs.ethers.org" },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

const GetStarted = () => (
  <div className="container py-12 md:py-16">
    <Helmet>
      <title>Get Started — Team1 Kenya Mini Hack</title>
      <meta
        name="description"
        content="Everything you need to join Mini Hack and make your first submission on Avalanche."
      />
      <link rel="canonical" href="/get-started" />
    </Helmet>

    <SectionHeader
      eyebrow="Builder Onboarding"
      title="From zero to your first deployment."
      description="Follow these steps in order. Each one takes less than 10 minutes. By the end you will have a working environment, a Builders Hub account, and your first Fuji transaction ready to deploy."
    />

    {/* ─── STEP-BY-STEP ─── */}
    <section className="mb-10 sm:mb-16">
      <ol className="space-y-4 sm:space-y-5">
        {steps.map((step) => (
          <li
            key={step.number}
            className="rounded-2xl bg-gradient-card border-hairline p-4 sm:p-6 md:p-8"
          >
            <div className="flex gap-3 sm:gap-5 items-start">
              <div className="shrink-0 h-9 w-9 sm:h-11 sm:w-11 rounded-xl bg-gradient-brand flex items-center justify-center font-mono text-xs sm:text-sm font-bold text-primary-foreground">
                {step.number}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-base sm:text-lg font-semibold tracking-tight mb-1 sm:mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">{step.description}</p>

                {step.code && (
                  <pre className="rounded-xl bg-surface-2 border border-border/60 p-3 sm:p-4 text-xs font-mono text-foreground/80 overflow-x-auto mb-3 sm:mb-4 leading-relaxed whitespace-pre">
                    {step.code}
                  </pre>
                )}

                {step.note && (
                  <p className="text-xs text-muted-foreground leading-relaxed italic mb-4">{step.note}</p>
                )}

                {step.cta && step.cta.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {step.cta.map((c) => (
                      <a
                        key={c.href}
                        href={c.href}
                        target={c.href.startsWith("#") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors ${
                          "todo" in c && c.todo
                            ? "border-amber-500/40 bg-amber-500/10 text-amber-400 cursor-not-allowed"
                            : "border-border bg-secondary/60 hover:bg-secondary hover:border-brand-red/40"
                        }`}
                      >
                        {c.label}
                        {!("todo" in c && c.todo) && <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>

    {/* ─── WEEKLY WORKFLOW ─── */}
    <section className="mb-10 sm:mb-16">
      <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight mb-2">
        Every week, same process.
      </h2>
      <p className="text-muted-foreground text-sm mb-6 sm:mb-8">
        Eight sessions. Four deliverables. One Demo Day. This is the workflow you follow every week from Week 1 to Week 4.
      </p>
      <div className="rounded-2xl bg-gradient-card border-hairline p-4 sm:p-6 md:p-8 space-y-5 sm:space-y-7">
        {workflow.map((item) => (
          <div key={item.n} className="flex gap-3 sm:gap-4 items-start">
            <span className="shrink-0 h-7 w-7 rounded-full bg-brand-red/20 border border-brand-red/40 flex items-center justify-center text-xs font-mono font-bold text-brand-red">
              {item.n}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold mb-1">{item.label}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.description}</p>
              {item.code && (
                <pre className="rounded-lg bg-surface-2 border border-border/60 p-3 text-xs font-mono text-foreground/80 overflow-x-auto whitespace-pre mb-3">
                  {item.code}
                </pre>
              )}
              {"cta" in item && item.cta && (
                <a
                  href={(item.cta as { label: string; href: string }).href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary/60 hover:bg-secondary hover:border-brand-red/40 px-3 py-1.5 text-sm font-medium transition-colors"
                >
                  {(item.cta as { label: string; href: string }).label}
                  <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* ─── LATE SUBMISSION POLICY ─── */}
    <section className="mb-10 sm:mb-16">
      <div className="rounded-2xl border border-amber-500/40 bg-amber-500/5 p-4 sm:p-6 md:p-8">
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
          <h3 className="font-display text-lg font-semibold tracking-tight text-amber-300">Submission deadlines</h3>
        </div>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-amber-400 shrink-0 mt-0.5">·</span>
            <span>
              <strong className="text-foreground">Deadline:</strong> Sunday midnight EAT — both your PR link and your
              Tally quests must be submitted by this time.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-amber-400 shrink-0 mt-0.5">·</span>
            <span>
              <strong className="text-foreground">Late up to 48 hours:</strong> accepted with a 20% grade penalty.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-amber-400 shrink-0 mt-0.5">·</span>
            <span>
              <strong className="text-foreground">Late beyond 48 hours:</strong> zero for that week. You may still
              continue in the programme and submit future weeks.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-amber-400 shrink-0 mt-0.5">·</span>
            <span>
              <strong className="text-foreground">Three consecutive zeros:</strong> removal from the cohort without a
              certificate.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-amber-400 shrink-0 mt-0.5">·</span>
            <span>
              If you have a genuine emergency, message the technical lead on Telegram{" "}
              <strong className="text-foreground">before the deadline</strong>. After the deadline, late appeals are
              not considered.
            </span>
          </li>
        </ul>
      </div>
    </section>

    {/* ─── ASSESSMENT RUBRIC ─── */}
    <section className="mb-10 sm:mb-16">
      <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight mb-4 sm:mb-6">
        How your work is graded
      </h2>

      <div className="overflow-x-auto rounded-2xl mb-6">
        <div className="min-w-[480px] rounded-2xl bg-gradient-card border-hairline overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/60 bg-secondary/30">
                <th className="text-left px-3 sm:px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Criterion
                </th>
                <th className="text-left px-3 sm:px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Weight
                </th>
                <th className="text-left px-3 sm:px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  What reviewers check
                </th>
              </tr>
            </thead>
            <tbody>
              {rubricRows.map((row, i) => (
                <tr
                  key={row.criterion}
                  className={`border-b border-border/40 ${i === rubricRows.length - 1 ? "border-0" : ""}`}
                >
                  <td className="px-3 sm:px-5 py-3 font-medium">{row.criterion}</td>
                  <td className="px-3 sm:px-5 py-3 font-mono text-brand-red font-semibold">{row.weight}</td>
                  <td className="px-3 sm:px-5 py-3 text-muted-foreground">{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {gradeBands.map((g) => (
          <div key={g.label} className="rounded-xl bg-gradient-card border-hairline p-4 text-center">
            <div className="font-display font-semibold tracking-tight text-sm">{g.label}</div>
            <div className="text-xs text-muted-foreground mt-1">{g.range}</div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-border/60 bg-secondary/20 p-5 text-sm text-muted-foreground space-y-2">
        <p>
          <strong className="text-foreground">Week 4 final project</strong> carries 40% of your overall cohort grade.
          Weeks 1 to 3 together carry 60%.
        </p>
        <p>
          Certificates are awarded to builders who achieve a Pass or above{" "}
          <strong className="text-foreground">AND</strong> present at Builders Connect Demo Day. Demo Day attendance
          is mandatory for graduation.
        </p>
      </div>
    </section>

    {/* ─── GETTING HELP ─── */}
    <section className="mb-10 sm:mb-16">
      <div className="rounded-2xl bg-gradient-card border-hairline p-4 sm:p-6 md:p-8">
        <div className="flex items-start gap-3 mb-4">
          <Send className="h-5 w-5 text-[#229ED9] shrink-0 mt-0.5" />
          <h3 className="font-display text-lg font-semibold tracking-tight">Stuck? Here is how to get help.</h3>
        </div>
        <div className="space-y-3 text-sm text-muted-foreground">
          <p>
            Post in the Telegram group with three things:{" "}
            <strong className="text-foreground">what you are trying to do</strong>,{" "}
            <strong className="text-foreground">what you have already tried</strong>, and{" "}
            <strong className="text-foreground">the exact error message</strong> — not a paraphrase, the full text.
            This gives the community enough context to help you quickly.
          </p>
          <p>
            Sessions and office hours run every{" "}
            <strong className="text-foreground">Tuesday and Thursday, 8:00 PM – 9:30 PM EAT</strong> (latest 10:00 PM)
            on a voice call — details posted in Telegram. If you have a blocker, bring it to the session.
          </p>
          <p>
            Tag{" "}
            <a
              href="https://t.me/Joseph_Njoroge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#229ED9] hover:underline"
            >
              @Joseph_Njoroge
            </a>{" "}
            on Telegram only after posting in the group and not getting a response within a reasonable time. The
            community helping each other is part of what makes this programme work.
          </p>
          <p>
            Need a dedicated 1-on-1 session? Book a 15 or 30-minute call directly — bring your blocker, your code,
            and your exact error.
          </p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#229ED9]/40 bg-[#229ED9]/10 hover:bg-[#229ED9]/20 px-3 py-1.5 text-sm font-medium text-[#229ED9] transition-colors"
          >
            <Send className="h-3.5 w-3.5" />
            Join Telegram
          </a>
          <a
            href="https://cal.com/jscotch"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-brand-red/40 bg-brand-red/10 hover:bg-brand-red/20 px-3 py-1.5 text-sm font-medium text-brand-red transition-colors"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Book a call
          </a>
        </div>
      </div>
    </section>

    {/* ─── USEFUL LINKS ─── */}
    <section className="mb-10 sm:mb-16">
      <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight mb-4 sm:mb-6">
        Everything in one place
      </h2>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {usefulLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-xl bg-gradient-card border-hairline px-4 py-3 hover:border-brand-red/40 transition-all hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-2.5">
              <BookOpen className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
              <span className="text-sm font-medium">{link.label}</span>
            </div>
            <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
          </a>
        ))}
      </div>
    </section>

    {/* ─── BOTTOM CTA ─── */}
    <section className="text-center">
      <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-3">Ready to build?</h2>
      <p className="text-muted-foreground text-sm mb-6">
        Apply for Mini Hack or browse the full resource library.
      </p>
      <div className="flex justify-center flex-wrap gap-3">
        <ApplyButton location="get-started" label="Apply on Luma" size="lg" />
        <Button asChild variant="glass" size="lg">
          <Link to="/resources">View Resources</Link>
        </Button>
      </div>
    </section>
  </div>
);

export default GetStarted;
