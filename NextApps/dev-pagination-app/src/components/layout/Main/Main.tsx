import { FC, PropsWithChildren } from "react"

import styles from "./Main.module.sass"

const Main : FC<PropsWithChildren> = ({ children }) => {
  return (
    <main
      className={`
        w-full 
        relative 
        h-full
        ${styles.container}
      `}>
      {children}
    </main>
  )
} 

export default Main