
const { task, series } = require('gulp')

const html = require("./tasks/html.ts")
const sass = require("./tasks/sass.ts")
const build = require("./tasks/build.ts")
const server = require("./tasks/server.ts")

task("build", build(sass, html))
task("dev", series(sass, html, server([
  { task : sass, url : "src/sass/**.sass" }, 
  { task : html, url : "src/components/pages/**.html" },
  { task : html, url : "src/components/layout/**.html" }
])))