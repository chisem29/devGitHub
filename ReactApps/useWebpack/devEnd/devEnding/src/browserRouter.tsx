import React from "react"

import { 
  createBrowserRouter, 
  createRoutesFromChildren,
  Route
} from "react-router-dom"

import App from "./app"

import Contacts from "./pages/contacts/Contacts"
import Home from "./pages/home/Home"
import Error from "./pages/error/error"

const browserRouter = createBrowserRouter(
  createRoutesFromChildren(
    <Route
      element={<App />}>
      <Route
        element={<Home />}
        index />
      <Route
        path="contacts"
        element={<Contacts />} />
      <Route
        path="contacts/:id"
        element={<>sdsdsad</>}
      />
      <Route
        path="*" 
        element={<Error />}
      />
    </Route>
  )
)

export default browserRouter