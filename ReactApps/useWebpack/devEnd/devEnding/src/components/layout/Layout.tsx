import React, { FC, PropsWithChildren  } from "react"

import Main from "./main/Main"
import Header from "./header/Header"
import Footer from "./footer/Footer"

import styles from "./Layout.module.css"

const Layout : FC<PropsWithChildren> = ({
  children
}) => {

  return (
    <div
      className={`
        ${styles.layout} 
        container-fluid
        d-flex
        flex-column
        justify-content-between
      `}>
      <div className="row">
        <div className="col-12">
          <header
            className={`${styles.header}`}>
            <Header />
          </header> 
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <main
            className={`${styles.main}`}>
            <Main>
              {children}
            </Main>
          </main>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <footer
            className={`${styles.footer}`}>
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Layout