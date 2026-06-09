import { Link } from "react-router-dom";
import { Send, MessageCircle, Twitter, Github } from "lucide-react";
import logo from "@/assets/team1-logo.png";

// TODO: Replace WHATSAPP_HREF with the real WhatsApp group link when available
const WHATSAPP_HREF = "#TODO-whatsapp-group-link";

const socials = [
  { label: "Telegram", href: "https://t.me/avaxDAOAfrica/3", icon: Send },
  { label: "WhatsApp", href: WHATSAPP_HREF, icon: MessageCircle },
  { label: "X (Twitter)", href: "https://x.com/avaxafrica?s=21", icon: Twitter },
  { label: "GitHub", href: "https://github.com/Talent-Index", icon: Github },
];

export const Footer = () => (
  <footer className="border-t border-border/60 mt-20">
    <div className="container py-12 grid gap-8 md:grid-cols-4">
      <div>
        <Link to="/" className="flex items-center gap-3 mb-3">
          <span className="inline-flex items-center justify-center rounded-lg bg-white px-2 py-1.5 ring-1 ring-brand-red/30">
            <img src={logo} alt="Team1 Kenya" className="h-5 w-auto object-contain" />
          </span>
          <span className="font-display font-semibold tracking-tight">Team1 Kenya</span>
        </Link>
        <p className="text-sm text-muted-foreground max-w-xs">
          Building the future of Web3 from Kenya. Payments, gaming, AI agents — all on Avalanche.
        </p>
        <div className="flex items-center gap-1.5 mt-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
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
          <li><a href="https://luma.com/Team1Africa" target="_blank" rel="noopener noreferrer" className="hover:text-foreground text-muted-foreground">Apply on Luma</a></li>
          <li><a href="https://luma.com/Team1Africa" target="_blank" rel="noopener noreferrer" className="hover:text-foreground text-muted-foreground">RSVP Events</a></li>
          <li><a href="https://github.com/Talent-Index" target="_blank" rel="noopener noreferrer" className="hover:text-foreground text-muted-foreground">GitHub Org</a></li>
          <li><a href="https://build.avax.network/academy" target="_blank" rel="noopener noreferrer" className="hover:text-foreground text-muted-foreground">Avalanche Academy</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Ecosystem</h4>
        <p className="text-sm text-muted-foreground">Powered by Avalanche · Built in Nairobi</p>
        <p className="text-sm text-muted-foreground mt-1">June – August 2026</p>
      </div>
    </div>
    <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} Avalanche Team1 Kenya · Mini Hack Kenya
    </div>
  </footer>
);
