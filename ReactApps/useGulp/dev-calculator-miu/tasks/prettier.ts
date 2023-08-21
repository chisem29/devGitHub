
const { src:srcPr, dest:destPr } = require("gulp")
const prettierGl = require("gulp-prettier")

const prettier = () => {
  return srcPr("./**.ts")
    .pipe(prettierGl(".prettierrc"))
    .pipe(destPr("dist"))
}

module.exports = prettier