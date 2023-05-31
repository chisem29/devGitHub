import React, { FC } from "react"
import { Provider } from 'react-redux'
import { Outlet } from "react-router-dom"

import store from './store/index'
import Layout from "./components/layout/Layout"

import "./app.css"

const App : FC = () => {
  return (
    <>
      <Provider
        store={store}>
        <div 
          className="app">
          <Layout>
            <Outlet />
          </Layout>
        </div>
      </Provider>
    </>
  )
}

export default App