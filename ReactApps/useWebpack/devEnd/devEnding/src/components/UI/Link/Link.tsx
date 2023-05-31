import React, { FC } from "react"

import { Link } from "react-router-dom"

import styles from "./Link.module.css"

const LinkCustom : FC<{ innerText : string }> = ({ innerText }) => {
  return (
    <Link
      key={innerText}
      className={styles.link}
      replace
      to={
        innerText.toLocaleLowerCase().includes("home") ? 
        "/" : innerText.toLowerCase()
      }>
      {innerText}
    </Link>
  )
}

export default LinkCustom