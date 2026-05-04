import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Wanjiru Kamau",
    role: "Full-stack Engineer, PlugPlay Arena",
    quote: "Team1 Kenya gave me visibility that turned into a grant. Within weeks of being listed, I was connected to the Avalanche grants committee.",
    avatar: "https://i.pravatar.cc/80?img=47",
  },
  {
    name: "Brian Otieno",
    role: "Smart Contract Engineer",
    quote: "The cohort structure is brilliant — focused sprints with real mentorship. I shipped more in one month than I did in three months solo.",
    avatar: "https://i.pravatar.cc/80?img=12",
  },
  {
    name: "Faith Achieng",
    role: "Founder, Campus Connect",
    quote: "Being featured on the Talent Index opened doors to investors I never knew were watching the Kenyan ecosystem.",
    avatar: "https://i.pravatar.cc/80?img=45",
  },
];

export const SocialProof = () => (
  <div className="grid gap-4 md:grid-cols-3">
    {testimonials.map((t, i) => (
      <motion.div
        key={t.name}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: i * 0.1 }}
        className="rounded-2xl bg-gradient-card border-hairline p-6"
      >
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, j) => (
            <Star key={j} className="h-3.5 w-3.5 fill-brand-orange text-brand-orange" />
          ))}
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">"{t.quote}"</p>
        <div className="flex items-center gap-3 mt-5 pt-4 border-t border-border/60">
          <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
          <div>
            <p className="text-sm font-medium">{t.name}</p>
            <p className="text-xs text-muted-foreground">{t.role}</p>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);
