import { motion } from "framer-motion";
import { Wallet, Gamepad2, Bot, Trophy } from "lucide-react";

const cohorts = [
  {
    month: "June",
    title: "Payments",
    description: "Build real-world payment solutions — M-Pesa bridges, stablecoin rails, merchant tools, and cross-border remittance on Avalanche.",
    icon: Wallet,
    gradient: "from-brand-orange to-brand-red",
    status: "upcoming" as const,
  },
  {
    month: "July",
    title: "Gamification for Scaling",
    description: "Design gamified experiences that drive user retention — loyalty systems, quest engines, rewards infrastructure, and engagement loops.",
    icon: Gamepad2,
    gradient: "from-brand-red to-brand-purple",
    status: "upcoming" as const,
  },
  {
    month: "August",
    title: "Agentic Systems",
    description: "Build autonomous AI agents that interact with on-chain data — monitoring, trading, governance, and intelligent automation.",
    icon: Bot,
    gradient: "from-brand-purple to-brand-blue",
    status: "upcoming" as const,
  },
  {
    month: "Aug 28",
    title: "Hackathon Kickoff",
    description: "The culmination — a 48-hour intensive hackathon bringing together the best builders from all three tracks to ship live products.",
    icon: Trophy,
    gradient: "from-brand-blue to-brand-orange",
    status: "upcoming" as const,
  },
];

export const CohortTimeline = () => (
  <div className="relative">
    {/* Vertical line */}
    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-red via-brand-purple to-brand-blue opacity-30" />

    <div className="space-y-12">
      {cohorts.map((c, i) => (
        <motion.div
          key={c.month}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className={`relative flex items-start gap-6 md:gap-12 ${
            i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          {/* Node */}
          <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
            <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${c.gradient} flex items-center justify-center shadow-glow`}>
              <c.icon className="h-5 w-5 text-primary-foreground" />
            </div>
          </div>

          {/* Content */}
          <div className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8 md:ml-auto"}`}>
            <span className={`inline-block text-xs uppercase tracking-[0.2em] font-medium bg-gradient-to-r ${c.gradient} bg-clip-text text-transparent mb-2`}>
              {c.month}
            </span>
            <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight">{c.title}</h3>
            <p className="text-sm text-muted-foreground mt-2 max-w-md">{c.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);
