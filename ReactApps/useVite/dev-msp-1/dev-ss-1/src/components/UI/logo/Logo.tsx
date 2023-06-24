import styles from './Logo.module.sass'

import { 
  FC,
} from "react"

const Logo : FC = () => {
  
  return (
    <>
      <div
        className={styles.logo}>
        <div
          className={styles.oneSide}>
          Downy
        </div>
        <div
          className={styles.twoSide}>
          Shoes
        </div>
      </div>
    </>
  )
}

export default Logo