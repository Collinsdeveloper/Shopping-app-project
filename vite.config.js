import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,        // ✅ THIS FIXES YOUR ERROR
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
  },
});
