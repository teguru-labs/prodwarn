import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,html}"],
  darkMode: "media",
  prefix: "tegu-",
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"]
  }
}
