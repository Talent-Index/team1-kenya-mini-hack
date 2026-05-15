import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ApplyButton, LUMA_URL } from "@/components/ApplyButton";
import logo from "@/assets/team1-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/ecosystem", label: "Ecosystem" },
  { to: "/projects", label: "Projects" },
  { to: "/events", label: "Events" },
  { to: "/resources", label: "Resources" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 glass border-b border-border/60">
      <div className="container flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand shadow-glow font-display font-bold text-primary-foreground">
            t<span className="text-brand-red absolute top-1 right-1 text-[10px]">1</span>
          </span>
          <div className="leading-tight">
            <div className="font-display font-semibold text-sm tracking-tight">Team1 Kenya</div>
            <div className="text-[9px] uppercase tracking-[0.22em] text-muted-foreground">Mini Hack · 2026</div>
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
          <ApplyButton location="navbar" label="Apply Now" size="sm" />
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
            <Button asChild variant="brand" className="mt-2 animate-pulse-red">
              <a href={LUMA_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                Apply on Luma
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

