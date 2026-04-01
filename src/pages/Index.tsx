import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import SocialProof from "@/components/landing/SocialProof";
import HowItWorks from "@/components/landing/HowItWorks";
import SportsGrid from "@/components/landing/SportsGrid";
import Benefits from "@/components/landing/Benefits";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import StickyBanner from "@/components/landing/StickyBanner";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
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
