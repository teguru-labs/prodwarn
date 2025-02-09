import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,html}"],
  darkMode: "media",
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"]
  }
}
