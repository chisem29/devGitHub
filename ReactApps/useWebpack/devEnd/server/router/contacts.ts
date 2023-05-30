import express from "express"

import contacts from "../data/contacts.json"

const routerContacts = express.Router()

routerContacts.get("/contacts", (req, res) => {
  res.json(contacts)
})

routerContacts.get("/contacts/:id", (req, res) => {
  res.json(contacts.find(({ id } : { id : number}) => { 
    if ( id === Number(req.params.id) ) { 
      return true 
    } 
  }))
})

export default routerContacts