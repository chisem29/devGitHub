import React from "react"

import { 
  createBrowserRouter, 
  createRoutesFromChildren,
  Route
} from "react-router-dom"

import App from "./app"

import Contacts from "./pages/contacts/Contacts"
import Home from "./pages/home/Home"

const browserRouter = createBrowserRouter(
  createRoutesFromChildren(
    <Route
      element={<App />}>
      <Route
        element={<Home />}
        index/>
      <Route
        path="contacts"
        element={<Contacts />}/>
      <Route
        path="contacts/:id"
        element={<> contact by id </>}
      />
      <Route
        path="web"
        element={<> sdacontact by id </>}
      />
    </Route>
  )
)

export default browserRouter