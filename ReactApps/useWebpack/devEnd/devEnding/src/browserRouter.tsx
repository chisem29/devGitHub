import React from "react"

import { 
  createBrowserRouter, 
  createRoutesFromElements,
  Route
} from "react-router-dom"

import App from "./app"

import Contacts from "./pages/contacts/Contacts"
import Home from "./pages/home/Home"
import Error from "./pages/error/Error"
import Contact from "./pages/contact/Contact"

const browserRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<App />}>
      <Route
        element={<Home />}
        index />
      <Route
        path="contacts"
        element={<Contacts />} />
      <Route 
        element={<Contact />}
        path="contacts/:id" />
      <Route
        path="*" 
        element={<Error />} />
    </Route>
  )
)

export default browserRouter