/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 0px 120px 0px rgba(0,0,0,0.8);",
      },
    },
  },
  plugins: [],
};
