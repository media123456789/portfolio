import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
// For GitHub Pages: set base to "/your-repo-name/" (e.g., "/trading-site/")
// For other deployments (Vercel, Netlify, home server): keep base as "/"
export default defineConfig(({ mode }) => ({
  // IMPORTANT: Change this to your GitHub repo name for GitHub Pages deployment
  // Example: base: "/my-trading-site/"
  // For Vercel/Netlify/home server, use: base: "/"
  base: "/portfolio",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
