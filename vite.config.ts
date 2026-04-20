import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import vitePrerender from "vite-plugin-prerender";
import { componentTagger } from "lovable-tagger";

// Read blog post slugs from src/data/blogPosts.ts so every post gets prerendered.
const getBlogRoutes = (): string[] => {
  try {
    const file = fs.readFileSync(path.resolve(__dirname, "src/data/blogPosts.ts"), "utf-8");
    const slugs = Array.from(file.matchAll(/slug:\s*["'`]([^"'`]+)["'`]/g)).map((m) => m[1]);
    return slugs.map((s) => `/blog/${s}`);
  } catch {
    return [];
  }
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode !== "development" &&
      vitePrerender({
        staticDir: path.join(__dirname, "dist"),
        routes: ["/", "/blog", "/privacy", "/terms", ...getBlogRoutes()],
        postProcess(renderedRoute: { route: string; html: string }) {
          // Ensure absolute asset URLs aren't broken by route nesting.
          renderedRoute.html = renderedRoute.html.replace(
            /(href|src)="(?!https?:|\/\/|\/|#|data:)/g,
            '$1="/',
          );
          return renderedRoute;
        },
        renderer: "@prerenderer/renderer-puppeteer",
        rendererOptions: {
          renderAfterTime: 1500,
          headless: true,
        },
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
