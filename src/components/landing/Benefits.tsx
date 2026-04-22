import { motion } from "framer-motion";
import { MessageSquareOff, BarChart3, Users, CalendarHeart } from "lucide-react";

const benefits = [
  {
    icon: MessageSquareOff,
    title: "No More Group Chat Chaos",
    description: "Organized games, confirmed players, zero back-and-forth.",
  },
  {
    icon: BarChart3,
    title: "Skill-Matched Games",
    description: "Play with people at your level, every time.",
  },
  {
    icon: Users,
    title: "Connect Beyond the Court",
    description: "Chat with players you meet, follow your regular squad, and build a consistent playing network in Dubai.",
  },
  {
    icon: CalendarHeart,
    title: "Community Events",
    description: "Join or host padel events in Dubai — meet new players and grow your network beyond one-on-one games.",
  },
];

const Benefits = () => {
  return (
    <section className="py-24" id="benefits">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why <span className="text-gradient">Playy</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            We're not another social app. We're your shortcut to the court.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5 bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
