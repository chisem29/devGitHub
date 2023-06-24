import express from "express"

const cors = require("cors")

const app = express()

const sneakersRouter = require("./routers/sneakers")

app
  .options("*", cors({ origin: 'http://localhost:5173', optionsSuccessStatus: 200 }))
  .use(cors({ origin: "http://localhost:5173", optionsSuccessStatus: 200 }))
  .use("/sneakers", sneakersRouter)
  .listen(3002, () => console.log("go"))