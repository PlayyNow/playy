import { motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";

const sports = [
  {
    name: "Padel",
    emoji: "🎾",
    description: "Dubai's fastest-growing sport — find your skill-matched padel partner now.",
  },
  {
    name: "Football",
    emoji: "⚽",
    description: "Join pickup games and find 5-a-side players near you in Dubai.",
  },
  {
    name: "Basketball",
    emoji: "🏀",
    description: "Find pickup basketball runs and players at your level in Dubai.",
  },
  {
    name: "Tennis",
    emoji: "🏸",
    description: "Connect with tennis partners in Dubai who match your level and schedule.",
  },
];

const SportsGrid = () => {
  return (
    <section className="py-24 bg-secondary/30" id="sports">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your <span className="text-gradient">Sport</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Whatever you play, we've got your squad.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {sports.map((sport, i) => (
            <motion.div
              key={sport.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 text-center cursor-pointer group hover:border-primary/50 border border-border transition-all hover:scale-105"
              onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="text-4xl mb-4 block">{sport.emoji}</span>
              <h3 className="font-bold mb-2">{sport.name}</h3>
              <p className="text-xs text-muted-foreground mb-2 leading-snug">
                {sport.description}
              </p>
              <span className="text-xs text-primary flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Find Players <ArrowRight className="w-3 h-3" />
              </span>
            </motion.div>
          ))}

          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc4hkLEGhBRmQhknW5WZW9KHXxqhuYiKjLYWUXQrx85NZhu_g/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: sports.length * 0.1 }}
            className="bg-card rounded-2xl p-6 text-center cursor-pointer group hover:border-primary/50 border border-border transition-all hover:scale-105 flex flex-col items-center justify-center"
          >
            <span className="text-4xl mb-4 block">
              <Plus className="w-10 h-10 mx-auto text-primary" />
            </span>
            <h3 className="font-bold mb-2">More Sports Coming Soon</h3>
            <p className="text-xs text-muted-foreground mb-2 leading-snug">
              Tell us what you want next
            </p>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default SportsGrid;
