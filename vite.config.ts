import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    // ポート80にすればWebブラウザ側でポート指定する必要がなくなる
    // httpの場合80,httpsの場合は443を指定する
    port: 3000,
  },
});
