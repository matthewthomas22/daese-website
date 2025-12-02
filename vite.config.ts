import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  // To check the command if it is development or building the program
  const isProd = command === "build";

  return {
    plugins: [react(), tailwindcss()],
    // 👇🏼 conditional when building the app
    base: isProd ? "/daese-website/" : "/",
  };
});
