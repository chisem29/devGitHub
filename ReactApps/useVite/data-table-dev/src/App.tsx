
import styles from './App.module.sass'
import { FC } from 'react'

import Layout from './components/layout/Layout'

const App : FC = () => {
  return (
    <>
      <div
        className={styles.app}>
        <Layout />
      </div>
    </>
  )
}

export default App
