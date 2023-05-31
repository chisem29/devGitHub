import React, { 
  FC,
  PropsWithChildren,
} from "react"

import styles from "./Main.module.css"

const Main : FC<PropsWithChildren> = ({ children }) => {

  return (
    <>
      <div
        className={`
          ${styles.container} 
          d-flex 
          justify-content-center
        `}> 
        { children }
      </div>
    </>
  )
}

export default Main