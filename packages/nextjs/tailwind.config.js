/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkTheme: "dark",
  darkMode: ["selector", "[data-theme='dark']"],
  // DaisyUI theme colors
  daisyui: {
    themes: [
      {
        light: {
          primary: "#65B3AE", // Teal
          "primary-content": "#000000", // Black for high contrast
          secondary: "#008F6A", // Pale Teal
          "secondary-content": "#FFFFFF", // White
          accent: "#0E2520", // Desaturated Green for accents
          "accent-content": "#FFFFFF", // White for high contrast
          neutral: "#FFFFFF", // White
          "neutral-content": "#000000", // Black
          "base-100": "#FFFFFF", // White background
          "base-200": "#F4F8FF", // Lightened base for variation
          "base-300": "#E0E6E9", // A light grey for subtle content
          "base-content": "#000000", // Black for text
          info: "#65B3AE", // Teal for info
          success: "#008F6A", // Pale Teal for success
          warning: "#FFCF72", // Warm tone for warnings (keeping original)
          error: "#FF8863", // Bright tone for errors (keeping original)

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
      {
        dark: {
          primary: "#008F6A", // Pale Teal, bringing back the green
          "primary-content": "#F9FBFF", // Light content for contrast
          secondary: "#65B3AE", // Desaturated Green as a darker secondary
          "secondary-content": "#F9FBFF", // Light content for contrast
          accent: "#65B3AE", // Teal, a lighter green accent
          "accent-content": "#F9FBFF", // Light content for contrast
          neutral: "#1B2D34", // Darkened but still green-tinged background
          "neutral-content": "#65B3AE", // Teal for contrast
          "base-100": "#1E3A40", // A lighter, yet deep green-tinted background
          "base-200": "#143026", // Darker greenish tone for layering
          "base-300": "#0E2520", // Desaturated Green for depth
          "base-content": "#F9FBFF", // Light text for readability
          info: "#65B3AE", // Teal for info
          success: "#008F6A", // Pale Teal for success
          warning: "#FFCF72", // Warm tone for warnings (keeping original)
          error: "#FF8863", // Bright tone for errors (keeping original)

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "oklch(var(--p))",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
    ],
  },
  theme: {
    extend: {
      boxShadow: {
        center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
};
