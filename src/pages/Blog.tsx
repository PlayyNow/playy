import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";

const SITE_URL = "https://joinplayy.com";

const Blog = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const [featured, ...rest] = sortedPosts;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast({
      title: "You're in!",
      description: "Thanks for subscribing. Best Dubai sports tips, incoming.",
    });
    setEmail("");
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SEO
        title="Playy Blog — Dubai Padel Tips, Guides & Community"
        description="Guides, tips and stories for padel players in Dubai. Learn the rules, gear up, and find your next game with Playy."
        canonical={`${SITE_URL}/blog`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Playy Blog",
          url: `${SITE_URL}/blog`,
          description:
            "Guides, tips and stories for padel players in Dubai from the Playy community.",
          publisher: {
            "@type": "Organization",
            name: "Playy",
            url: SITE_URL,
          },
          blogPost: blogPosts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: `${SITE_URL}/blog/${p.slug}`,
            datePublished: p.date,
          })),
        }}
      />
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Playy Blog: <span className="text-gradient">Find Your Game.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Tips, guides, and everything Dubai sports.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured hero card */}
      <section className="pb-12 md:pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to={`/blog/${featured.slug}`}
              className="group block bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors"
            >
              <div className="aspect-video w-full overflow-hidden bg-secondary">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 md:p-10">
                <p className="text-sm text-muted-foreground mb-3">{featured.date}</p>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 group-hover:text-gradient transition-all">
                  {featured.title}
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-3xl">
                  {featured.excerpt}
                </p>
                <Button
                  size="lg"
                  className="h-12 px-6 text-base font-semibold rounded-xl gap-2 bg-brand-gradient hover:opacity-90 transition-opacity"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Grid of remaining posts */}
      {rest.length > 0 && (
        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {rest.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group block bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors h-full"
                  >
                    <div className="aspect-[3/2] w-full overflow-hidden bg-secondary">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-foreground transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground mb-5">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Email capture */}
      <section className="py-16 md:py-24 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 max-w-3xl mx-auto">
              Get the best <span className="text-primary">Dubai</span> sports tips in your inbox
            </h2>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-card border-border rounded-xl"
              />
              <Button
                type="submit"
                size="lg"
                className="h-12 px-6 font-semibold rounded-xl bg-brand-gradient hover:opacity-90 transition-opacity"
              >
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;
