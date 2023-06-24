import { Router } from "express"

import sneakers from "../data/sneakers.json"

const sneakersRouter = Router()

sneakersRouter.get("/", (req, res) => {
  res.json(sneakers)
})

sneakersRouter.get("/:id", (req, res) => {

  const { id } = req.params

  res.json(sneakers.find(({ name }) => { return name === id }))

})

module.exports = sneakersRouter