import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import path from "node:path";

// Plugin: ersetzt alle lovable/email Backend-Routen durch leere Stubs
function stubBackendRoutes() {
  return {
    name: "stub-backend-routes",
    resolveId(id, importer) {
      if (
        importer &&
        (importer.includes("/routes/lovable/") ||
          importer.includes("/routes/email/"))
      ) {
        return "\0virtual:stub";
      }
      if (
        id.includes("/routes/lovable/") ||
        id.includes("/routes/email/") ||
        id.includes("@lovable.dev") ||
        id.includes("@tanstack/react-start") ||
        id.includes("@tanstack/start-storage-context")
      ) {
        return "\0virtual:stub";
      }
    },
    load(id) {
      if (id === "\0virtual:stub") {
        return `export default {};
export const Route = { options: {} };
export const createServerFn = () => () => {};
export const createMiddleware = () => () => {};
export const json = (d) => d;
export const redirect = (u) => ({ url: u });
export const useServerFn = (f) => f;
export const WebhookError = class extends Error {};
export const verifyWebhookRequest = () => Promise.resolve({});
`;
      }
    },
  };
}

export default defineConfig({
  plugins: [
    stubBackendRoutes(),
    TanStackRouterVite({ autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
