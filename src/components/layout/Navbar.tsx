import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Talent Index" },
  { to: "/projects", label: "Projects" },
  { to: "/builders", label: "Builders" },
  { to: "/tracks", label: "Tracks" },
  { to: "/analytics", label: "Analytics" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 glass border-b border-border/60">
      <div className="container flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand shadow-glow">
            <span className="font-display font-bold text-primary-foreground">A</span>
          </span>
          <div className="leading-tight">
            <div className="font-display font-semibold text-sm">Avalanche Team1</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Kenya · Talent Index</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `px-3 py-2 text-sm rounded-md transition-colors ${
                  isActive ? "text-foreground bg-secondary" : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Button asChild variant="brand" size="sm">
            <Link to="/submit">Submit Project</Link>
          </Button>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95">
          <div className="container py-4 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm ${isActive ? "bg-secondary text-foreground" : "text-muted-foreground"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Button asChild variant="brand" className="mt-2">
              <Link to="/submit" onClick={() => setOpen(false)}>Submit Project</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
