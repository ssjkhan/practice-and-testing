import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh()],
  build: {
    manifest: true,
    rollupOptions: {
      input: "./src/main.tsx",
    },
  },
  server: {
    port: 4001,
  },
});
