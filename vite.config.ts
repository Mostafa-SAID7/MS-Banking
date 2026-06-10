import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), react(), tsConfigPaths()],
  server: {
    middlewareMode: true,
  },
  build: {
    outDir: "dist/client",
    rollupOptions: {
      external: ["node:async_hooks", "node:fs", "node:path"],
      output: {
        globals: {
          "node:async_hooks": "{}",
        },
      },
    },
  },
});
