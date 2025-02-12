import { createPreset } from "fumadocs-ui/tailwind-plugin";
import config from "@solana-foundation/solana-lib/tailwind.config";

/** @type {import('tailwindcss').Config} */
export default {
  ...config,
  darkMode: "class",
  presets: [config, createPreset()],
  content: [
    ...config.content,
    "../node_modules/fumadocs-ui/dist/**/*.js",
    // "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/content/**/*.mdx",
  ],
};
