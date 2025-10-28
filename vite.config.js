import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Ki_Portfolio/", // GitHub Pages 경로 - Repository 이름과 일치해야 함
});
