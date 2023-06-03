import React, { FC } from "react"

import styles from "./Footer.module.css"

const Footer : FC = () => {
  return (
    <>
      <div
        className={`
          ${styles.container} 
          d-flex 
          justify-content-center
        `}>
        Footer
      </div>
    </>
  )
}

export default Footer