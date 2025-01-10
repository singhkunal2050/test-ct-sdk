import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "clevertap_sw.js", // Path to your service worker
          dest: "", // Destination directory within the dist folder
        },
        {
          src: "manifest.json",
          dest: "",
        },
        {
          src: "assets",
          dest: "",
        },
        {
          src: "staticPages/*.html", // Glob pattern to match all HTML files under staticPages
          dest: "", // Destination root directory in the dist folder
        },
      ],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        spa: resolve(__dirname, "spa.html"),
      },
    },
  },
});
