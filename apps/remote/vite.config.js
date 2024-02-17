import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  root: "src",
  server: {
    port: 3002,
  },
  plugins: [
    react({
      jsxRuntime: "classic",
    }),
    viteTsconfigPaths(),
  ],
  build: {
    outDir: "../dist",
  },
});
