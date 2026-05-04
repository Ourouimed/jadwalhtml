import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.js",
      name: "Jadwal",
      fileName: (format) => `js/jadwal.${format}.js`,
    },
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css" || assetInfo.name === "index.css") {
            return "css/jadwal.css";
          }
          return "css/[name][extname]";
        }
      }
    }
  }
});