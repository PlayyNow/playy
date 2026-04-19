import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast({
      title: "You're in!",
      description: "Thanks for subscribing. Best Dubai sports tips, incoming.",
    });
    setEmail("");
  };

  if (!post) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <Navbar />
        <section className="pt-40 pb-24 container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <Link to="/blog" className="text-primary hover:underline">
            Back to Blog
          </Link>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <article className="pt-32 pb-24 md:pt-40">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>

            <p className="text-sm text-muted-foreground mb-3">{post.date}</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              {post.title}
            </h1>

            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-secondary mb-10 border border-border">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>

            <div className="text-lg text-muted-foreground leading-relaxed [&>*+*]:mt-6 after:content-[''] after:table after:clear-both">
              {post.content.map((block, i) => {
                if (block.type === "heading") {
                  return (
                    <h2
                      key={i}
                      className="text-2xl md:text-3xl font-bold tracking-tight text-foreground pt-6"
                    >
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "cta") {
                  return (
                    <div
                      key={i}
                      className="not-prose mt-10 p-6 md:p-8 rounded-2xl border border-border bg-card"
                    >
                      <p className="text-lg md:text-xl font-semibold text-foreground mb-5">
                        {block.text}
                      </p>
                      <a href={block.href} target="_blank" rel="noopener noreferrer">
                        <Button
                          size="lg"
                          className="h-12 px-6 text-base font-semibold rounded-xl gap-2 bg-brand-gradient hover:opacity-90 transition-opacity"
                        >
                          {block.label}
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                  );
                }
                if (block.type === "image") {
                  const isFloat = block.float === "left" || block.float === "right";
                  if (isFloat) {
                    const floatClass =
                      block.float === "left"
                        ? "md:float-left md:mr-6 md:mb-4"
                        : "md:float-right md:ml-6 md:mb-4";
                    return (
                      <figure
                        key={i}
                        className={`not-prose w-full md:w-1/2 my-6 ${floatClass}`}
                      >
                        <div className="aspect-[3/2] w-full rounded-xl border border-border bg-card flex items-center justify-center overflow-hidden">
                          {block.src ? (
                            <img src={block.src} alt={block.alt} className="w-full h-full object-cover" />
                          ) : (
                            <span className="text-sm text-muted-foreground/70">Image coming soon</span>
                          )}
                        </div>
                      </figure>
                    );
                  }
                  return (
                    <figure key={i} className="not-prose my-12 w-full md:w-[70%] mx-auto">
                      <div className="aspect-video w-full overflow-hidden rounded-2xl border border-border bg-card">
                        {block.src ? (
                          <img src={block.src} alt={block.alt} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-sm text-muted-foreground/70">Image coming soon</span>
                          </div>
                        )}
                      </div>
                    </figure>
                  );
                }
                return <p key={i}>{block.text}</p>;
              })}
            </div>
          </motion.div>
        </div>
      </article>

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

export default BlogPost;
