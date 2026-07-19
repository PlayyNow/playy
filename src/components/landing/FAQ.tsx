import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How do I find padel players in Dubai?",
    a: "Download Playy from the iOS App Store, set your skill level and availability, and the app instantly matches you with nearby padel players in Dubai at your level. You can challenge them to a game, chat, and coordinate where to play — no group chats required.",
  },
  {
    q: "What sports are available on Playy?",
    a: "Playy is focused on padel — Dubai's fastest-growing sport — and also supports football, basketball, tennis, and gym sessions. More sports are added regularly based on community demand.",
  },
  {
    q: "How does skill matching work on Playy?",
    a: "When you sign up you set your skill level for each sport. Playy's matching algorithm then surfaces players nearby at a similar level and availability, so every game is competitive, fair, and fun — not a mismatch.",
  },
  {
    q: "Is Playy available outside Dubai?",
    a: "Playy is currently focused on Dubai, UAE, where it was founded. Expansion to other cities in the region is planned — follow @joinplayy on Instagram or TikTok for updates.",
  },
  {
    q: "Is Playy free to use?",
    a: "Yes. Playy is completely free to download and use on both the iOS App Store and Google Play Store. There are no subscriptions or hidden fees — just download, set your level, and start playing.",
  },
  {
    q: "Is Playy on Android?",
    a: "Yes. Playy is available on both iOS via the Apple App Store and Android via Google Play. Download free on either platform and start finding players near you today.",
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

        {/*
          Native <details> so answers are present in server-rendered HTML
          without requiring JS. Crawlers (LLMs, search) can read every
          answer on initial load. The structured FAQPage schema lives in
          the JSON-LD on src/pages/Index.tsx — do NOT also add microdata
          here, or Google Search Console will report a duplicate FAQPage.
        */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <details
              key={i}
              open={i === 0}
              className="group bg-card rounded-xl border border-border px-6 open:border-primary/30 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-left font-semibold py-5">
                <span>{faq.q}</span>
                <ChevronDown className="w-4 h-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
              </summary>
              <div
                className="text-muted-foreground pb-5"
              >
                <p>{faq.a}</p>
              </div>
            </details>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
