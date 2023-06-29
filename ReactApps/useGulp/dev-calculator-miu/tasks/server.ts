const { watch, series } = require("gulp")
const sync = require('browser-sync').create()

const server = (tasksWithUrl : Array<{ task : any, url : string }>) => () => {
  sync.init({
    server : "dist"
  })
  tasksWithUrl.forEach(({ task, url }) => {
    watch(url, series(task))
      .on("change", sync.reload)
      .on("error", () => console.warn(`Error ${task.name}`))
  })
}

module.exports = server