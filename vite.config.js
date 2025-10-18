import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/assembly/",
  plugins: [react()],
  server: { open: true },
});
