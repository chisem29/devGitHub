import styles from './Main.module.sass'
import { FC } from "react"

import { Outlet } from 'react-router-dom'

const Main : FC = () => {

  return (
    <div className={styles.mainApp}>
      <Outlet />
    </div>
  )
}

export default Main
