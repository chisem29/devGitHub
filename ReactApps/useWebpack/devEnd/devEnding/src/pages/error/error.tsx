import React, { FC } from "react"
import styles from "./error.module.css"

const Error : FC = () => {
  return (
    <>
      <img 
        className={styles.message}
        src="https://anime-chan.me/uploads/posts/2016-01/1453287052_anime-404-1199770.png" /> 
    </>
  )
}

export default Error
