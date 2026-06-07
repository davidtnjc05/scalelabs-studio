import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import path from "node:path";

const stub = path.resolve(__dirname, "./src/stubs/empty.ts");

export default defineConfig({
  plugins: [
    TanStackRouterVite({
      autoCodeSplitting: true,
      exclude: ["**/lovable/**", "**/email/**"],
    }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@lovable.dev/webhooks-js": stub,
      "@lovable.dev/email-js": stub,
      "@lovable.dev/vite-tanstack-config": stub,
      "@tanstack/react-start": stub,
      "@tanstack/start-storage-context": stub,
    },
  },
});
