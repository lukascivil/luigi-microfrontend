import { defineConfig } from "vite";

export default defineConfig({
  root: "remote/src",
  server: {
    port: 3002,
  },
  build: {
    // Relative to the root
    outDir: "../dist",
  },
});
