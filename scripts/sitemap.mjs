#!/usr/bin/env node
/**
 * Generates dist/sitemap.xml after the Vite build.
 *
 * Lists the static routes plus every blog post slug parsed from
 * src/data/blogPosts.ts. Run as part of `build` so the live site
 * always ships a fresh sitemap for search and AI crawlers.
 */
import path from "node:path";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const SITE = "https://joinplayy.com";

// Returns [{ slug, lastmod }] using each post's own publication date —
// never the build date, so <lastmod> stays truthful.
async function getBlogPosts() {
  const file = await fs.readFile(
    path.join(projectRoot, "src/data/blogPosts.ts"),
    "utf-8",
  );
  return Array.from(
    file.matchAll(
      /slug:\s*["'`]([^"'`]+)["'`][\s\S]*?date:\s*["'`]([^"'`]+)["'`]/g,
    ),
  ).map((m) => {
    const d = new Date(m[2]);
    return {
      slug: m[1],
      lastmod: Number.isNaN(d.getTime())
        ? undefined
        : d.toISOString().split("T")[0],
    };
  });
}

function urlEntry(loc, { changefreq = "monthly", priority = "0.7", lastmod } = {}) {
  return `  <url>
    <loc>${loc}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ""}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

async function run() {
  const today = new Date().toISOString().split("T")[0];
  const slugs = await getBlogSlugs();

  const urls = [
    urlEntry(`${SITE}/`, { changefreq: "weekly", priority: "1.0", lastmod: today }),
    urlEntry(`${SITE}/blog/`, { changefreq: "weekly", priority: "0.9", lastmod: today }),
    urlEntry(`${SITE}/privacy/`, { changefreq: "yearly", priority: "0.3" }),
    urlEntry(`${SITE}/terms/`, { changefreq: "yearly", priority: "0.3" }),
    ...slugs.map((s) =>
      urlEntry(`${SITE}/blog/${s}/`, {
        changefreq: "monthly",
        priority: "0.8",
        lastmod: today,
      }),
    ),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;

  await fs.mkdir(distDir, { recursive: true });
  await fs.writeFile(path.join(distDir, "sitemap.xml"), xml);
  console.log(`[sitemap] wrote sitemap.xml with ${urls.length} URLs`);
}

run().catch((err) => {
  console.error("[sitemap] failed:", err);
  process.exit(1);
});
