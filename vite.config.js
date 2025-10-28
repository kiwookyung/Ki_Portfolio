import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // GitHub Pages 경로 - kiwookyung.github.io로 배포하려면 리포지토리 이름을 kiwookyung.github.io로 변경
});
