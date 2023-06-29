
const { src:srcStyle, dest:destStyle } = require("gulp")

const sass = require("gulp-sass")(require("sass"))
const csso = require("gulp-csso")

const autoPrefixer = require("gulp-autoprefixer")
const concat = require("gulp-concat")

const scss = () => {
  return srcStyle("./src/sass/**.sass")
    .pipe(sass())
    .pipe(autoPrefixer({
      browsers : ["last 2 versions"]
    }))
    .pipe(csso())
    .pipe(concat("index.css"))
    .pipe(destStyle("dist"))
}

module.exports = scss