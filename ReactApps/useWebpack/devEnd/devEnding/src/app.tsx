import React, { FC } from "react"
import { Provider } from "react-redux"

import store from "./store/index"
import Layout from "./components/layout/Layout"

import "./app.css"

const App : FC = () => {
  return (
    <>
      <Provider
        store={store}>
        <div
          className="app">
          <Layout />
        </div>
      </Provider>
    </>
  )
}

export default App