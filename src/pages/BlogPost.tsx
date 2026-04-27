import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { blogPosts } from "@/data/blogPosts";
import ShareButtons from "@/components/blog/ShareButtons";

const SITE_URL = "https://joinplayy.com";

/**
 * Renders paragraph text and converts patterns like
 *   "anchor text (https://example.com)"
 * into a real inline <a> on "anchor text" pointing to the URL.
 * The URL itself is removed from the visible text.
 * Falls back to plain text when no pattern is present.
 */
/**
 * Renders paragraph text and turns markdown-style `[anchor](url)`
 * patterns into real inline anchors.
 */
const renderParagraph = (text: string) => {
  const regex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
  const parts: Array<string | JSX.Element> = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    const [full, anchor, url] = match;
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const isExternal = !url.startsWith(SITE_URL);
    parts.push(
      <a
        key={`lnk-${key++}`}
        href={url}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
      >
        {anchor}
      </a>,
    );
    lastIndex = match.index + full.length;
  }

  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts.length ? parts : text;
};

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
        <SEO
          title="Post not found | Playy Blog"
          description="The blog post you are looking for could not be found."
          canonical={`${SITE_URL}/blog`}
        />
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

  const canonical = `${SITE_URL}/blog/${post.slug}`;
  const isoDate = new Date(post.date).toISOString();
  const seoTitle = `${post.title} | Playy Blog`;
  // Always prefer the explicit absolute ogImage URL so social
  // crawlers get a stable, hash-free path.
  const absoluteImage = post.ogImage;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        image: absoluteImage,
        datePublished: isoDate,
        dateModified: isoDate,
        wordCount: post.content.reduce((n, b) => {
          if (b.type === "paragraph" || b.type === "heading") {
            return n + b.text.split(/\s+/).length;
          }
          return n;
        }, 0),
        author: {
          "@type": "Organization",
          name: "Playy",
          url: SITE_URL,
        },
        publisher: {
          "@type": "Organization",
          name: "Playy",
          logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.png` },
        },
        about: [
          { "@type": "Place", name: "Dubai" },
          { "@type": "Thing", name: "Sports" },
        ],
        mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL + "/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${SITE_URL}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: canonical,
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SEO
        title={seoTitle}
        description={post.excerpt}
        canonical={canonical}
        image={absoluteImage}
        type="article"
        publishedTime={isoDate}
        jsonLd={jsonLd}
      />
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
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              {post.title}
            </h1>

            <ShareButtons url={canonical} title={post.title} className="mb-10" />

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
                return <p key={i}>{renderParagraph(block.text)}</p>;
              })}
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <ShareButtons url={canonical} title={post.title} />
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
