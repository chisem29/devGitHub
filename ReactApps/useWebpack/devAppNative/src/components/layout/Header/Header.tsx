import React, { FC } from "react"
import SideBar from "../SideBar/SideBar"

const Header : FC = () => {
  return (
    <>
      <header
        className="header-app">
        <SideBar />
      </header>
    </>
  )
}

export default Header