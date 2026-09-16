#!/usr/bin/env node
/**
 * Verifies that prerendered blog routes were emitted with article-specific
 * HTML, so crawlers do not receive the homepage shell for direct blog URLs.
 */
import path from "node:path";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");

async function getBlogPosts() {
  const file = await fs.readFile(
    path.join(projectRoot, "src/data/blogPosts.ts"),
    "utf-8",
  );

  // Capture the surrounding quote character so we only stop at the matching
  // closing quote (titles/excerpts may contain apostrophes like "Dubai's").
  const re = /slug:\s*(["'`])([^]*?)\1[\s\S]*?title:\s*(["'`])([^]*?)\3[\s\S]*?excerpt:\s*(["'`])([^]*?)\5/g;
  return Array.from(file.matchAll(re)).map((match) => ({
    slug: match[2],
    title: match[4],
    excerpt: match[6],
  }));
}

function assertIncludes(html, expected, route, label) {
  if (!html.includes(expected)) {
    throw new Error(`${route} is missing ${label}: ${expected}`);
  }
}

async function run() {
  const posts = await getBlogPosts();

  if (!posts.length) {
    throw new Error("No blog posts found to verify.");
  }

  for (const post of posts) {
    const route = `/blog/${post.slug}/`;
    const file = path.join(distDir, "blog", post.slug, "index.html");
    const html = await fs.readFile(file, "utf-8");

    assertIncludes(html, `<title>${post.title} | Playy Blog</title>`, route, "page title");
    assertIncludes(html, `property="og:url" content="https://joinplayy.com${route}"`, route, "OG URL");
    assertIncludes(html, `rel="canonical" href="https://joinplayy.com${route}"`, route, "canonical URL");
    assertIncludes(html, post.title, route, "article title");
    assertIncludes(html, post.excerpt, route, "article excerpt metadata");

    if (html.includes("Start Playing. Build Your Squad.")) {
      throw new Error(`${route} contains homepage content instead of article content.`);
    }

    console.log(`[verify-prerender] verified ${route}`);
  }
}

run().catch((err) => {
  console.error("[verify-prerender] failed:", err);
  process.exit(1);
});