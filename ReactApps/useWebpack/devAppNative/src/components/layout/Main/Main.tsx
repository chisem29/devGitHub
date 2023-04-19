import React, { FC } from "react"

import { Outlet } from "react-router-dom"

const Main : FC = () => {
  return (
    <>
      <main
        className="main-app">
        <Outlet />
      </main>
    </>
  )
}

export default Main