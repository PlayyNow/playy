import { useState, useEffect } from "react";
import { Apple, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const StickyBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-lg border-t border-border p-4"
        >
          <div className="flex gap-3">
            <a href="https://apps.apple.com/us/app/playy-find-your-game/id6759396368" target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button size="sm" className="w-full gap-2 rounded-xl font-semibold bg-brand-gradient hover:opacity-90">
                <Apple className="w-4 h-4" /> App Store
              </Button>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.playynow.app" target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button size="sm" variant="outline" className="w-full gap-2 rounded-xl font-semibold border-2 hover:bg-accent transition-colors">
                <Play className="w-4 h-4" /> Google Play
              </Button>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyBanner;
