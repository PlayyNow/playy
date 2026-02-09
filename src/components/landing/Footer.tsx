import { Instagram } from "lucide-react";
import playyLogo from "@/assets/playy-logo-full.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <img src={playyLogo} alt="Playy" className="h-10 mb-2" />
            <p className="text-sm text-muted-foreground">Stop Scrolling. Start Playing.</p>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/playy.now/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.tiktok.com/@playy.now" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.1a8.16 8.16 0 003.76.92V5.58a4.83 4.83 0 01-4-.89z" />
              </svg>
            </a>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>

        <div className="text-center mt-8 text-xs text-muted-foreground">
          Made with ❤️ in Dubai
        </div>
      </div>
    </footer>
  );
};

export default Footer;
