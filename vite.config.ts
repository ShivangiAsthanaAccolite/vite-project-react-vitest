import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // 👋 add the line below to add jsdom to vite
    environment: "jsdom",

    globals: true,
    setupFiles: "./tests/setup.ts", // assuming the test folder is in the root of our project

    reporters: ["json", "junit", "html", "basic"],
    // outputFile: "./test-output.json",
    outputFile: {
      junit: "./junit-report.xml",
      json: "./json-report.json",
    },
    coverage: {
      provider: "istanbul", // or 'v8'
      reporter: ["text", "json", "html"],
    },
  },
});
