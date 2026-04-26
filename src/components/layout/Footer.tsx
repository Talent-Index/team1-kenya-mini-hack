import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="border-t border-border/60 mt-20">
    <div className="container py-12 grid gap-8 md:grid-cols-4">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="h-8 w-8 rounded-lg bg-gradient-brand flex items-center justify-center font-display font-bold">A</span>
          <span className="font-display font-semibold">Team1 Kenya</span>
        </div>
        <p className="text-sm text-muted-foreground max-w-xs">
          The intelligence layer for Avalanche builders, founders and products shipping from Kenya.
        </p>
      </div>
      <div>
        <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Discover</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/projects" className="hover:text-foreground text-muted-foreground">Projects</Link></li>
          <li><Link to="/builders" className="hover:text-foreground text-muted-foreground">Builders</Link></li>
          <li><Link to="/tracks" className="hover:text-foreground text-muted-foreground">Tracks</Link></li>
          <li><Link to="/analytics" className="hover:text-foreground text-muted-foreground">Analytics</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Builders</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/submit" className="hover:text-foreground text-muted-foreground">Submit a project</Link></li>
          <li><Link to="/admin" className="hover:text-foreground text-muted-foreground">Admin</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Ecosystem</h4>
        <p className="text-sm text-muted-foreground">Powered by Avalanche · Built in Nairobi</p>
      </div>
    </div>
    <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} Avalanche Team1 Kenya · Talent Index
    </div>
  </footer>
);
