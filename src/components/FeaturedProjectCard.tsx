import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Project } from "@/types";

export const FeaturedProjectCard = ({ project, index = 0 }: { project: Project; index?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    className="scroll-snap-start shrink-0 w-[320px] md:w-[380px]"
  >
    <Link
      to={`/projects/${project.slug}`}
      className="group block rounded-3xl overflow-hidden bg-gradient-card border-hairline shadow-card hover:shadow-elevate transition-all duration-500 hover:-translate-y-1"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="text-[10px] uppercase tracking-widest font-medium px-2.5 py-1 rounded-full bg-background/70 backdrop-blur border border-border/60">
            {project.track}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="text-[10px] uppercase tracking-widest font-medium px-2.5 py-1 rounded-full bg-gradient-brand text-primary-foreground">
            {project.stage}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-display text-lg font-semibold tracking-tight truncate">{project.name}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{project.tagline}</p>
          </div>
          <span className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full bg-secondary group-hover:bg-gradient-brand transition-colors">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" />{project.location}</span>
          <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />Shipped {new Date(project.lastShipped).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
        </div>
      </div>
    </Link>
  </motion.div>
);
