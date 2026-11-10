#!/usr/bin/env node
/**
 * Post-build prerender step.
 *
 * Crawls each route in headless Chrome, lets the React app run (which
 * causes our SEO component's useEffect to inject per-route <title>,
 * <meta>, OG/Twitter tags and JSON-LD), then snapshots the resulting
 * HTML to dist/<route>/index.html.
 *
 * Social crawlers (X, Facebook, WhatsApp, LinkedIn) can now read the
 * correct og:image/og:title/og:description for every blog post even
 * though they don't execute JavaScript.
 */
import path from "node:path";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import Prerenderer from "@prerenderer/prerenderer";
import PuppeteerRenderer from "@prerenderer/renderer-puppeteer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");

// Read blog slugs straight from the data file (cheap regex parse so we
// don't have to spin up the asset pipeline just to import the module).
async function getBlogRoutes() {
  const file = await fs.readFile(
    path.join(projectRoot, "src/data/blogPosts.ts"),
    "utf-8",
  );
  const slugs = Array.from(file.matchAll(/slug:\s*["'`]([^"'`]+)["'`]/g)).map(
    (m) => m[1],
  );
  return slugs.map((s) => `/blog/${s}`);
}

async function run() {
  const blogRoutes = await getBlogRoutes();
  const routes = ["/", "/blog", "/privacy", "/terms", ...blogRoutes];

  console.log(`[prerender] rendering ${routes.length} routes...`);

  // On Vercel the build machine has no system Chrome, so use the serverless
  // Chromium build bundled in @sparticuz/chromium. Locally, puppeteer's own Chrome.
  let launchOptions = { args: ["--no-sandbox", "--disable-setuid-sandbox"] };
  if (process.env.VERCEL || process.env.USE_SERVERLESS_CHROMIUM) {
    const chromium = (await import("@sparticuz/chromium")).default;
    launchOptions = { args: chromium.args, executablePath: await chromium.executablePath() };
  }

  const prerenderer = new Prerenderer({
    staticDir: distDir,
    renderer: new PuppeteerRenderer({
      // Wait long enough for React to mount and SEO useEffect to run.
      renderAfterTime: 2000,
      headless: true,
      maxConcurrentRoutes: 4,
      launchOptions,
    }),
  });

  try {
    await prerenderer.initialize();
    const rendered = await prerenderer.renderRoutes(routes);

    for (const r of rendered) {
      // route examples: "/", "/blog", "/blog/some-slug"
      const outDir =
        r.route === "/" ? distDir : path.join(distDir, r.route);
      await fs.mkdir(outDir, { recursive: true });
      const outFile = path.join(outDir, "index.html");
      await fs.writeFile(outFile, r.html.trim());
      console.log(`[prerender] wrote ${path.relative(distDir, outFile)}`);
    }
  } finally {
    await prerenderer.destroy();
  }

  console.log("[prerender] done.");
}

run().catch((err) => {
  console.error("[prerender] failed:", err);
  process.exit(1);
});