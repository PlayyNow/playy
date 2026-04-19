import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

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

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              {post.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default BlogPost;
