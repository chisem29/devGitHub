/** @type {import('tailwindcss').Config} */
module.exports = { 
  purge: ["./src/**/**/**.css", "./**/**.html"], 
  theme: { extend: {}, }, variants: { extend: {}, }, 
  plugins: [
    require("tailwindcss"),
    require("autoprefixer")
  ],
}