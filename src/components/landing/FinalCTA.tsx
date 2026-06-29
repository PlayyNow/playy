import { motion } from "framer-motion";
import { Apple, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-secondary/30" id="download">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Your Next Game Is
            <br />
            <span className="text-gradient">One Tap Away</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Join thousands of players in Dubai. Download Playy now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://apps.apple.com/us/app/playy-find-your-game/id6759396368" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="h-14 px-8 text-base font-semibold rounded-xl gap-3 bg-brand-gradient hover:opacity-90 transition-opacity">
                <Apple className="w-5 h-5" />
                Download on App Store
              </Button>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.playynow.app" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="h-14 px-8 text-base font-semibold rounded-xl gap-3 border-2 hover:bg-accent transition-colors">
                <Play className="w-5 h-5" />
                Get it on Google Play
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
