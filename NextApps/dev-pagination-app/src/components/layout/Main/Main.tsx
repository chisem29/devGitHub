import { FC, ReactNode } from "react"

import styles from "./Main.module.sass"

const Main : FC<{children? : ReactNode}> = ({children}) => {
  return (
    <main
      className={`w-full flex justify-center ${styles.container}`}>
      {children}
    </main>
  )
} 

export default Main