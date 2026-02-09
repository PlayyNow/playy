import { motion } from "framer-motion";
import { Target, Users, MapPin } from "lucide-react";

const steps = [
  {
    icon: Target,
    title: "Pick Your Sport",
    description: "Choose from padel, football, basketball, tennis, gym & more.",
    step: "01",
  },
  {
    icon: Users,
    title: "Match Your Level",
    description: "Get paired with players who actually match your skill.",
    step: "02",
  },
  {
    icon: MapPin,
    title: "Show Up & Play",
    description: "Confirmed spots, real times, real people. Just show up.",
    step: "03",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24" id="how-it-works">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Three steps. Zero hassle. All action.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative bg-card rounded-2xl p-8 text-center group hover:bg-card/80 transition-colors"
            >
              <span className="text-6xl font-bold text-primary/10 absolute top-4 right-6">
                {step.step}
              </span>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
