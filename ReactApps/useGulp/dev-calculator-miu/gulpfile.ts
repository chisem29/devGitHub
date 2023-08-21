
const { task, series } = require('gulp')

const html = require("./tasks/html.ts")
const sass = require("./tasks/sass.ts")
const build = require("./tasks/build.ts")
const server = require("./tasks/server.ts")
const typescrypt = require("./tasks/typescrypt.ts")
const clean = require("./tasks/clean.ts")
const prettier = require("./tasks/prettier.ts")

task("build", build(clean, sass, typescrypt, html, prettier))
task("dev", series(clean, sass, typescrypt, html, prettier, server([
  { task : sass, url : "src/sass/**.sass" }, 
  { task : html, url : "src/components/pages/**.html" },
  { task : html, url : "src/components/layout/**.html" },
  { task : typescrypt, url : "src/ts/**.ts" },
  { task : prettier, url : "src/ts/**.ts"},
  { task : prettier, url : "src/sass/**.sass"},
])))
