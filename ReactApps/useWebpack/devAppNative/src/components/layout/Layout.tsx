import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import Main from "./Main/Main";
import Header from "./Header/Header";

const Layout : FC = () => {
  return (
    <div
      className="app">
      <div
        className="
          container 
          d-flex
          justify-content-center">
        <div 
          className="row">
          <div
            className="col-12">
            <Header />
          </div>
          <div
            className="col-12">
            <Main />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout