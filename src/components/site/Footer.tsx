import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <span
                className="grid h-9 w-9 place-items-center rounded-lg text-sm font-bold text-primary-foreground"
                style={{ background: "var(--gradient-hero)" }}
              >
                DX
              </span>
              <span className="text-lg font-semibold text-foreground">DesRIX</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Enterprise-grade IT services for European businesses — cloud, AI, and scalable infrastructure.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" hash="devops" className="hover:text-foreground">DevOps</Link></li>
              <li><Link to="/services" hash="cloud" className="hover:text-foreground">Cloud Computing</Link></li>
              <li><Link to="/services" hash="call-center" className="hover:text-foreground">Call Center & BPO</Link></li>
              <li><Link to="/services" hash="agentic-ai" className="hover:text-foreground">Agentic AI</Link></li>
              <li><Link to="/services" hash="white-label" className="hover:text-foreground">White-label Development</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Request consultation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Headquarters</h3>
            <address className="mt-4 space-y-1 text-sm not-italic text-muted-foreground">
              <div>Ganību dambis 24D</div>
              <div>Ziemeļu rajons, Rīga, LV-1005</div>
              <div>Latvia</div>
              <div className="pt-2">
                <a href="tel:+37129693533" className="hover:text-foreground">+371 29 693 533</a>
              </div>
            </address>
            <div className="mt-4 flex items-center gap-3">
              <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-foreground"><Twitter className="h-4 w-4" /></a>
              <a href="#" aria-label="GitHub" className="text-muted-foreground hover:text-foreground"><Github className="h-4 w-4" /></a>
              <a href="mailto:hello@desrix.eu" aria-label="Email" className="text-muted-foreground hover:text-foreground"><Mail className="h-4 w-4" /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} DesRIX. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/" hash="privacy" className="hover:text-foreground">Privacy Policy</Link>
            <Link to="/" hash="terms" className="hover:text-foreground">Terms</Link>
            <span>GDPR-ready · EU</span>
          </div>
        </div>
      </div>
    </footer>
  );
}