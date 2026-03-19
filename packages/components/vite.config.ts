import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src/**/*"],
      outDir: "dist",
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "TaiDesign",
      formats: ["es", "cjs"],
      fileName: (format) =>
        format === "es" ? "tai-design.es.js" : "tai-design.cjs.js",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "framer-motion"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
          "framer-motion": "FramerMotion",
        },
      },
    },
    outDir: "dist",
    sourcemap: true,
    minify: false,
  },
});
