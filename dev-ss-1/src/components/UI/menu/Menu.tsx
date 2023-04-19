import { 
  FC,
} from "react"

import styles from "./Menu.module.sass"
import refs from "../../../assets/Refs.json"

interface bodyOf {
  barOn : Boolean,
  toggleBar : React.Dispatch<React.SetStateAction<Boolean>>
}

const Menu : FC<bodyOf> = ({ 
  barOn, 
  toggleBar
}) => { 

  return (
    <div
      className={`${styles.Menu} ${styles[!barOn ? "Off" : "On"]}`}>
      <div
        onClick={() => {toggleBar((e) => !e)}}
        className={styles.closeButton}>
        <img 
          src={refs.close}/>
      </div>
      <nav
        className={styles.infoNavs}>
        {
          [
            "Home",
            "About",
            "Team",
            "Shop Now",
            "Contact"
          ].map((name) => 
            <a 
              href={`/${name.toLowerCase().replaceAll(" ", "&").replace("home", "")}`}>
              {name}
            </a>
          )     
        }
      </nav>
    </div>
  )
}

export default Menu