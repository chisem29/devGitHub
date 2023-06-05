import React, { FC } from "react"
import { Outlet } from "react-router-dom"

import Layout from "./components/layout/Layout"

import "./app.css"

const App : FC = () => {
  return (
    <>
      <div 
        className="app">
        <Layout>
          <Outlet />
        </Layout>
      </div>
    </>
  )
}

export default App