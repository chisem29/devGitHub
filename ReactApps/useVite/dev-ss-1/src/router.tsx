
import {
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
} from "react-router-dom"


import Layout from './components/layout/Layout'
 
import Home from './components/screens/home/Home'
import About from './components/screens/about/About'
import Error from './components/screens/home/error/Error'
import ShopNow from './components/screens/shop&now/ShopNow'
import Contact from './components/screens/contact/Contact'
import Single from './components/screens/single/Single'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<Layout />}
      path="/">
      <Route 
        index
        element={<Home />}
      />
      <Route 
        path="about"
        element={<About />}
      />
      <Route 
        path="shop&now"
        element={<ShopNow />}>
      </Route>
      <Route
        path="shop&now/:id"
        element={<Single />}
      />
      <Route 
        path="contact"
        element={<Contact />}
      />
      <Route
        path="*"
        element={<Error />}/>
    </Route>
  )
)

export default router