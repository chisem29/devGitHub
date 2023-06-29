
const { series:ser } = require('gulp')

const build = (...tasks) => {
  return ser(tasks)
}

module.exports = build