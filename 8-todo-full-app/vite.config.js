import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue2";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      vue: path.resolve(
        __dirname,
        "./node_modules/vue/dist/vue.runtime.esm.js"
      ),
    },
    dedupe: ["vuetify", "vue"],
  },
  plugins: [vue()],
});
