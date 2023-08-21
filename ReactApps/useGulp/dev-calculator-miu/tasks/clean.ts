
const { src:srcClean } = require("gulp")

const cleanGulp = require("gulp-clean")

const clean = () => {
  return srcClean('dist/*')
    .pipe(cleanGulp({force: true}))
}

module.exports = clean