import { 
  FC, 
  useRef,
  useEffect,
  useState,
  useCallback
} from "react"

import styles from "./RangePrice.module.sass"

const RangePrice : FC = () => {

  const [ targetPrice, setPrice ] = useState<number>(50)

  return (
    <form
      className={`form d-flex flex-column p-3 ${styles.form}`}>
      <label 
        id="customRange2" 
        className="form-label">
        <h6 
          className={styles.h6}>
          Price range
        </h6>
      </label>
      <p
        className={styles.smallText}>
          ${targetPrice}
      </p>
      <input 
        onMouseMove={(ev) => {
          setPrice(Number(ev.currentTarget.value))
          let targPercent = (targetPrice* 100) / 9000
          ev.currentTarget.style.background = 
            `
              linear-gradient(90deg, #000 ${targPercent}%, #ddd ${targPercent}%)
            `
        }}
        defaultValue={50}
        type="range" 
        className={`form-range ${styles.priceRange}`}
        min={0} 
        max={9000}
        id="customRange2" />
    </form>
  )
} 

export default RangePrice