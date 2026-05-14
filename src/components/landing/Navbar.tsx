import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import pLogo from "@/assets/p-logo.jpeg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={pLogo} alt="Playy logo" className="w-8 h-8 rounded-lg" />
          <span className="text-xl font-bold text-gradient">Playy</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <Link to="/#how-it-works" className="hover:text-foreground transition-colors">How It Works</Link>
          <Link to="/#sports" className="hover:text-foreground transition-colors">Sports</Link>
          <Link to="/#benefits" className="hover:text-foreground transition-colors">Why Playy</Link>
          <Link to="/#faq" className="hover:text-foreground transition-colors">FAQ</Link>
        </div>
        <a href="https://apps.apple.com/us/app/playy-find-your-game/id6759396368" target="_blank" rel="noopener noreferrer">
          <Button size="sm" className="rounded-xl font-semibold bg-brand-gradient hover:opacity-90 transition-opacity">
            Download
          </Button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
