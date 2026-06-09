import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Calendar, Sparkles } from "lucide-react";
import { useRef } from "react";
import poster from "@/assets/minihack-poster.png";
import { ApplyButton } from "@/components/ApplyButton";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";
import { LUMA_URL } from "@/components/ApplyButton";

export const HeroMiniHack = () => {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-50, 50], [8, -8]), { stiffness: 150, damping: 15 });
  const rotateY = useSpring(useTransform(mx, [-50, 50], [-8, 8]), { stiffness: 150, damping: 15 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 100);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 100);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 grid-overlay-red opacity-60 mask-fade-b animate-grid-drift" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-brand-red/20 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/70 to-background" />

      <div className="container relative pt-20 md:pt-28 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full glass border border-brand-red/30 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.22em] text-foreground/80 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red animate-pulse" />
              Team1 Kenya · Mini Hack 2026
            </span>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02]">
              <span className="text-brand-red">Ship</span>{" "}
              <span className="bg-gradient-to-r from-brand-orange via-brand-red to-brand-purple bg-clip-text text-transparent">Real</span>{" "}
              <span className="text-white">Products</span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              A three-cohort builder programme for Kenyan developers shipping real products on Avalanche. Payments. Gaming. Agentic AI.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ApplyButton location="hero" label="Apply on Luma" size="lg" />
              <Button
                asChild
                variant="glass"
                size="lg"
                onClick={() => trackEvent("cta_click", { location: "hero", label: "events" })}
              >
                <a href={LUMA_URL} target="_blank" rel="noopener noreferrer">
                  <Calendar className="h-4 w-4" /> View Events
                </a>
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex -space-x-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-7 w-7 rounded-full border-2 border-background bg-gradient-to-br from-brand-red/60 to-brand-orange/60"
                  />
                ))}
              </div>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-brand-red" />
                Builders already shipping in Nairobi
              </span>
            </div>
          </motion.div>

          {/* RIGHT — Poster */}
          <motion.div
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={() => {
              mx.set(0);
              my.set(0);
            }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
            style={{ perspective: 1200 }}
          >
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative animate-float"
            >
              <div className="absolute -inset-6 rounded-[2rem] bg-brand-red/30 blur-3xl opacity-70" />
              <div className="relative rounded-3xl overflow-hidden border border-brand-red/30 glow-ring-red bg-black">
                <img
                  src={poster}
                  alt="Team1 Kenya Mini Hack 2026 — official poster"
                  className="w-full h-auto"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full glass border border-brand-red/40 px-4 py-1.5 text-[10px] font-mono uppercase tracking-[0.22em] text-foreground">
                June – August 2026 · Nairobi
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
