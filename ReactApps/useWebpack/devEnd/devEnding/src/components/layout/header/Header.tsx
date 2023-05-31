
import React, { FC } from "react"
import Link from "react-router-dom"

import styles from "./Header.module.css"

import LinkCustom from "../../UI/Link/Link"

const Header : FC = () => {
  return (
    <>
      <div
        className={`
          ${styles.menu} 
          d-flex 
          justify-content-around 
          align-items-center
        `}>
        <h3>
          Logo
        </h3>
        <nav
          className={`
            ${styles.navigation} 
            d-flex
          `}>
          {
            [
              "home", "contacts"
            ].map((innerNav) => 
              <LinkCustom 
                innerText={innerNav}
              />
            )
          }
        </nav>
      </div>
    </>
  )
}

export default Header