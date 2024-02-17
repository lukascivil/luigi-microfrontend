import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

export default defineConfig({
  server: {
    port: 3003,
  },
  preview: {
    port: 3003,
  },
  plugins: [react(), viteTsconfigPaths()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      formats: ["es"],
    },
    outDir: "dist",
  },
});
