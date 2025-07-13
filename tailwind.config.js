/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // 딥 블루
        accent: "#38bdf8", // 아쿠아 블루
        coral: "#fb7185", // 산호 오렌지
        sand: "#fef9c3", // 밝은 베이지
      },
    },
  },
  plugins: [],
};
