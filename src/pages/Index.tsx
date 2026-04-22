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
          name: "How do I find padel players in Dubai?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Download Playy from the iOS App Store, set your skill level and availability, and the app instantly matches you with nearby padel players in Dubai at your level. You can challenge them to a game, chat, and coordinate where to play — no group chats required.",
          },
        },
        {
          "@type": "Question",
          name: "What sports are available on Playy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Playy is focused on padel — Dubai's fastest-growing sport — and also supports football, basketball, tennis, and gym sessions. More sports are added regularly based on community demand.",
          },
        },
        {
          "@type": "Question",
          name: "How does skill matching work on Playy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "When you sign up you set your skill level for each sport. Playy's matching algorithm then surfaces players nearby at a similar level and availability, so every game is competitive, fair, and fun — not a mismatch.",
          },
        },
        {
          "@type": "Question",
          name: "Is Playy available outside Dubai?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Playy is currently focused on Dubai, UAE, where it was founded. Expansion to other cities in the region is planned — follow @joinplayy on Instagram or TikTok for updates.",
          },
        },
        {
          "@type": "Question",
          name: "Is Playy free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Playy is completely free to download and use on the iOS App Store. There are no subscriptions or hidden fees — just download, set your level, and start playing.",
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
        title="Playy — Dubai Padel Community App | Find Skill-Matched Players"
        description="Playy is a Dubai padel app where players discover skill-matched opponents, challenge them to games, chat, and join community events to build a consistent playing network."
        canonical={SITE_URL + "/"}
        jsonLd={homeJsonLd}
      />
      <Navbar />
      <Hero />
      <HowItWorks />
      <SportsGrid />
      <Benefits />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyBanner />
    </main>
  );
};

export default Index;
