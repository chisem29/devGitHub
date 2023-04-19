import React, { FC } from "react"
import styles from "./SideBar.module.sass"

const SideBar : FC  = () => {
  return (
    <div
      className={styles.canvas}>
      <nav
        className={styles.nav}>
        {
          [
            { href : "", inner : "home" },
            { href : "progress", inner : "progress" }
          ].map(({ href, inner }) => 
            <a
              className={styles.link}
              href={`/${href}`}>
              {inner}
            </a>
          )
        }
      </nav>
    </div>
  )
}

export default SideBar