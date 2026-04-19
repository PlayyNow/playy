import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import pLogo from "@/assets/p-logo.jpeg";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-12">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <img src={pLogo} alt="Playy" className="w-10 h-10 rounded-xl" />
            <span className="text-2xl font-bold text-gradient">Playy</span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <p className="text-sm font-medium text-foreground">Get in touch with us</p>
            <div className="flex items-center gap-6">
              <a
                href="https://www.instagram.com/playy.now/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@playy.now"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.1a8.16 8.16 0 003.76.92V5.58a4.83 4.83 0 01-4-.89z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-end gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link to="/blog" className="hover:text-foreground transition-colors">
              Blog
            </Link>
            <a href="mailto:support@joinplayy.com" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-12 pt-8 border-t border-border/50 text-xs text-muted-foreground">
          <div />
          <div className="flex flex-col items-center gap-2 text-center">
            <p>Stop Scrolling. Start Playing.</p>
            <p>Born in Dubai</p>
          </div>
          <div />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
