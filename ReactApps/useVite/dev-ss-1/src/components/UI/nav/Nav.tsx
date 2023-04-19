

import { 
  FC,
} from "react"

import styles from "./Nav.module.sass"
import refs from "../../../assets/Refs.json"

interface bodyOf<Type> {
  toggleBar : Type,
  searchBar : Type,
  toggleAlertCard : Type,
  offsetY : number,
  searchOn : Boolean
}

const Nav : FC<bodyOf<React.Dispatch<React.SetStateAction<Boolean>>>> = ({ 
  toggleBar, 
  searchBar, 
  toggleAlertCard,
  offsetY,
  searchOn
}) => { 

  return (
    <div
      className={`${styles.Nav} ${!offsetY ? styles.offsetDown : undefined}`}>
      {
        [
          { src : refs.cart, click : toggleAlertCard, hotKey : true },
          { src : refs.search, click : searchBar, top : true},
          { src : refs.tab, click : toggleBar}
        ].map(({
          src,
          click,
          hotKey=false,
          top=false
        }) =>
        <a
          href={top && searchOn ? "#topHead" : undefined}
          onClick={() => {
            click((e) => !hotKey ? !e : true)
          }}
          className={styles.NavAt}>
          <img 
            src={top ? src : src}/>
        </a>)
      }
    </div>
  )
}

export default Nav