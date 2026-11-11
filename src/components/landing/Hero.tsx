import { motion } from "framer-motion";
import { Apple, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Athletes playing sports"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover animate-ken-burns motion-reduce:animate-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            Start Playing.
            <br />
            <span className="text-gradient">Build Your Squad.</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Find players. Join games. Build your squad.
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

export default Hero;
