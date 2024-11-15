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
          src: "serviceworker.js",
          dest: "",
        },
        {
          src: "manifest.json",
          dest: "",
        },
        {
          src: "assets",
          dest: "",
        },
      ],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        test: resolve(__dirname, "test.html"),
        spa: resolve(__dirname, "spa.html"),
        apn: resolve(__dirname, "apn.html"),
      },
    },
  },
});
