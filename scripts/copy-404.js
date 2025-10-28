// Windows/Linux 호환 404.html 복사 스크립트
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, "..", "dist");
const indexHtml = path.join(distPath, "index.html");
const targetHtml = path.join(distPath, "404.html");

try {
  if (!fs.existsSync(indexHtml)) {
    console.error("❌ dist/index.html 파일을 찾을 수 없습니다.");
    process.exit(1);
  }

  fs.copyFileSync(indexHtml, targetHtml);
  console.log("✅ 404.html 파일이 생성되었습니다.");
} catch (error) {
  console.error("❌ 파일 복사 중 오류:", error);
  process.exit(1);
}
