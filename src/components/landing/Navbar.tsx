import { Button } from "@/components/ui/button";
import pLogo from "@/assets/p-logo.jpeg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src={pLogo} alt="Playy" className="w-8 h-8 rounded-lg" />
          <span className="text-xl font-bold text-gradient">Playy</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
          <a href="#sports" className="hover:text-foreground transition-colors">Sports</a>
          <a href="#benefits" className="hover:text-foreground transition-colors">Why Playy</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </div>
        <Button size="sm" className="rounded-xl font-semibold bg-brand-gradient hover:opacity-90 transition-opacity">
          Download
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
