import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import path from "node:path";

const STUB_ID = "\0virtual:stub";
const LOVABLE_PKGS = [
  "@lovable.dev/webhooks-js",
  "@lovable.dev/email-js",
  "@lovable.dev/vite-tanstack-config",
  "@tanstack/react-start",
  "@tanstack/start-storage-context",
    "node:async_hooks",
];

function stubBackendRoutes() {
  return {
    name: "stub-backend-routes",
    resolveId(id) {
            if (LOVABLE_PKGS.some(pkg => id === pkg || id.startsWith(pkg + '/'))) {
        return { id: STUB_ID, syntheticNamedExports: true };
      }
    },
    load(id) {
      if (id === STUB_ID) {
        return "export default {};";
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
