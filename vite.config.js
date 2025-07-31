import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    lib: {
      entry: {
        main: "src/index.js",
        utils: "src/utils/index.js",
      },
      name: "lnlink-sdk",
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "nostr-tools"],
      output: {
        exports: "named",
        format: "esm",
        preserveModules: true,
        inlineDynamicImports: false,
        globals: {
          react: "React",
          "nostr-tools": "NostrTools",
        },
      },
    },
  },
  plugins: [react()],
});
