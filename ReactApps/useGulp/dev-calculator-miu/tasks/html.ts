
const { src, dest } = require("gulp")
const include = require("gulp-file-include")
const htmlmin = require("gulp-htmlmin")

const html = () => {
  return src("./src/components/pages/**.html")
    .pipe(include({
      prefix : "@@"
    }))
    .pipe(htmlmin({
      collapseWhitespace : true
    }))
    .pipe(dest("dist"))
}

module.exports = html