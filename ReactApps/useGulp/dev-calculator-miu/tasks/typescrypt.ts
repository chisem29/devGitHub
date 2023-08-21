
const { src:srcTs, dest:destTs } = require("gulp")
const ts = require("gulp-typescript")

const tsProject = ts.createProject("./tsconfig.json")

const typescrypt = () => {
  return tsProject
    .src()
    .pipe(tsProject()).js
    .pipe(destTs("dist"))
}

module.exports = typescrypt 