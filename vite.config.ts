import { execFileSync } from "node:child_process";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

function postBuildTasks(): Plugin {
  return {
    name: "post-build-tasks",
    apply: "build",
    closeBundle() {
      const tasks = [
        "scripts/prerender.mjs",
        "scripts/verify-prerender.mjs",
        "scripts/sitemap.mjs",
      ];

      for (const task of tasks) {
        const scriptPath = path.resolve(__dirname, task);
        console.log(`[build] running ${task}`);
        execFileSync(process.execPath, [scriptPath], { stdio: "inherit" });
      }
    },
  };
}

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
    mode !== "development" && postBuildTasks(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
