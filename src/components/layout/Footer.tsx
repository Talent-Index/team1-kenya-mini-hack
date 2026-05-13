import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="border-t border-border/60 mt-20">
    <div className="container py-12 grid gap-8 md:grid-cols-4">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="h-8 w-8 rounded-lg bg-gradient-brand flex items-center justify-center font-display font-bold text-primary-foreground">A</span>
          <span className="font-display font-semibold">Team1 Kenya</span>
        </div>
        <p className="text-sm text-muted-foreground max-w-xs">
          Building the future of Web3 from Kenya. Payments, gaming, AI agents — all on Avalanche.
        </p>
      </div>
      <div>
        <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Discover</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/ecosystem" className="hover:text-foreground text-muted-foreground">Ecosystem Map</Link></li>
          <li><Link to="/projects" className="hover:text-foreground text-muted-foreground">Projects</Link></li>
          <li><Link to="/events" className="hover:text-foreground text-muted-foreground">Events</Link></li>
          <li><Link to="/resources" className="hover:text-foreground text-muted-foreground">Resources</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Builders</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/apply" className="hover:text-foreground text-muted-foreground">Apply to Mini Hack</Link></li>
          <li><a href="https://lu.ma/Team1Africa" target="_blank" rel="noopener noreferrer" className="hover:text-foreground text-muted-foreground">RSVP Events</a></li>
          <li><a href="https://github.com/Talent-Index" target="_blank" rel="noopener noreferrer" className="hover:text-foreground text-muted-foreground">GitHub</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Ecosystem</h4>
        <p className="text-sm text-muted-foreground">Powered by Avalanche · Built in Nairobi</p>
        <p className="text-sm text-muted-foreground mt-1">June – August 2026</p>
      </div>
    </div>
    <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} Avalanche Team1 Kenya · Mini Hack
    </div>
  </footer>
);
