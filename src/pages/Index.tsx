import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import SportsGrid from "@/components/landing/SportsGrid";
import Benefits from "@/components/landing/Benefits";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import StickyBanner from "@/components/landing/StickyBanner";
import SEO from "@/components/SEO";

const SITE_URL = "https://joinplayy.com";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Playy",
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.png`,
      description:
        "Playy is a Dubai padel community app where players discover skill-matched opponents and build a consistent playing network.",
      foundingLocation: "Dubai, UAE",
      areaServed: { "@type": "City", name: "Dubai" },
      sameAs: [
        "https://apps.apple.com/us/app/playy-find-your-game/id6759396368",
        "https://www.instagram.com/joinplayy",
        "https://www.tiktok.com/@joinplayy",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Playy",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en",
    },
    {
      "@type": "MobileApplication",
      name: "Playy",
      operatingSystem: "iOS",
      applicationCategory: "SportsApplication",
      description:
        "Playy is a Dubai padel community app where players discover skill-matched opponents, challenge them to games, chat, and join community events to build a consistent playing network.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      downloadUrl:
        "https://apps.apple.com/us/app/playy-find-your-game/id6759396368",
    },
    {
      "@type": "HowTo",
      name: "How to find sports players in Dubai with Playy",
      description:
        "Three steps to match with nearby players at your skill level and start playing.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Pick Your Sport",
          text: "Choose from padel, football, basketball, tennis and gym.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Match Your Level",
          text: "Discover players who actually match your skill and availability.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Show Up & Play",
          text: "Coordinate. Meet. Playy.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Playy free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! Playy is completely free to download and use. Just grab it from the App Store and start playing.",
          },
        },
        {
          "@type": "Question",
          name: "What sports are available?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We currently support padel, football, basketball, tennis, and gym sessions — with more sports being added regularly.",
          },
        },
        {
          "@type": "Question",
          name: "How does skill matching work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "When you sign up, you set your skill level for each sport. Our algorithm matches you with players at a similar level so every game is competitive and fun.",
          },
        },
        {
          "@type": "Question",
          name: "Is Playy only in Dubai?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We're launching in Dubai first, but we're expanding to other cities soon.",
          },
        },
        {
          "@type": "Question",
          name: "Is it safe?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We use verified profiles and community guidelines to keep Playy a judge-free, respectful environment for everyone.",
          },
        },
      ],
    },
  ],
};

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SEO
        title="Playy — Find Players. Match Your Level. Just Playy."
        description="Playy is Dubai's social sports app. Match with players by sport, skill level & availability. Padel, football, basketball, tennis & more. Download free."
        canonical={SITE_URL + "/"}
        jsonLd={homeJsonLd}
      />
      <Navbar />
      <Hero />
      <HowItWorks />
      <SportsGrid />
      <Benefits />
      <SocialProof />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyBanner />
    </main>
  );
};

export default Index;
