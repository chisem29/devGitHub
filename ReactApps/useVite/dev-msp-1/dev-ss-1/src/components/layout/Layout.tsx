
import { FC } from "react"

import Header from './header/Header'
import Main from "./main/Main"

import Footer from "./footer/Footer"

import styles from "./Layout.module.sass"

const Layout : FC = () => {
  return (
    <div
      className={styles.app}>
      <Header />
      <Main />
      <Footer />
      <a
        href="#topHead"
        className={styles.slideTop}>
        <img
          src="https://img.icons8.com/external-simple-line-edt.graphics/1x/external-arrow-arrows-simple-line-edt.graphics-5.png"/>
      </a>
    </div>
  )
}

export default Layout
