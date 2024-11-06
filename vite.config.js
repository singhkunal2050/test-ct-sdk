import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), // Static HTML page
        spa: resolve(__dirname, "spa.html"), // Entry point for SPA
      },
    },
  },
});
