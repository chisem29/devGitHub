
import { 
  FC, 
} from "react"

import styles from "./AlertCard.module.sass"
import refs from "../../../assets/Refs.json"  

interface bodyOf {
  alertCardOn : Boolean
  toggleAlertCard : React.Dispatch<React.SetStateAction<Boolean>>
}  

const AlertCard : FC<bodyOf> = ({
  alertCardOn,
  toggleAlertCard
}) => {

  return (
    <div
      className={`${styles.AlertCard} ${styles[alertCardOn ? "On" : "Off" ]}`}>
      Your shopping cart is empty
      <div
        onClick={() => {toggleAlertCard((e) => !e)}}
        className={styles.close}>
        <img 
          width={18}
          height={18}
          src={refs.close} />
      </div>
    </div>
  )
}

export default AlertCard