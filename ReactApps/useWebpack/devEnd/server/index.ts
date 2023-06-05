import express from "express"
import routerContacts from "./router/contacts"

const cors = require("cors")

const PORT = 3001

const app = express()

app
  .use(express.json())
  .use(cors())
  .use(routerContacts)
  .listen(PORT, () => { console.log(`server started on port ${PORT}`) })