import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is Playy free?",
    a: "Yes! Playy is completely free to download and use. Just grab it from the App Store or Google Play and start playing.",
  },
  {
    q: "What sports are available?",
    a: "We currently support padel, football, basketball, tennis, and gym sessions — with more sports being added regularly.",
  },
  {
    q: "How does skill matching work?",
    a: "When you sign up, you set your skill level for each sport. Our algorithm matches you with players at a similar level so every game is competitive and fun.",
  },
  {
    q: "Is Playy only in Dubai?",
    a: "We're launching in Dubai first, but we're expanding to other cities soon. Stay tuned!",
  },
  {
    q: "Is it safe?",
    a: "Absolutely. We use verified profiles and community guidelines to keep Playy a judge-free, respectful environment for everyone.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24" id="faq">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Got <span className="text-gradient">Questions</span>?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
