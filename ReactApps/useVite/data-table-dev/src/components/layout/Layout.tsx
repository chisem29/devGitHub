
import styles from './Layout.module.sass'
import { FC } from 'react'

import Main from './main/Main'

const Layout : FC = () => {
  return (
    <>
      <div
        className={styles.layout}>
        { /* Без Header, Footer */ }
        <Main />
      </div>
    </>
  )
}

export default Layout
