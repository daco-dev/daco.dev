/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bgbase: "#0F1729",
        main: "#3ABFF8",
        paraph: "#A3B3BC",
        card: "#1E293B",
      },
    },
  },
  plugins: [],
};
