import Logo from '../../UI/logo/Logo'
import Nav from '../../UI/nav/Nav'
import styles from './Header.module.sass'

import {
  useLocation
} from "react-router-dom"

import { 
  FC,
  useState,
  useEffect
} from "react"

import Menu from '../../UI/menu/Menu'
import SearchInput from '../../UI/searchInput/SearchInput'
import AlertCard from '../../UI/alertCard/AlertCard'
import Carousel from './components/UI/carousel/Carousel'
import useScrollOffset from '../../../hooks/useScrollOffset'

const Header : FC = () => {
  
  const { pathname } = useLocation()

  const [
    targetOffX,
    targetOffY
  ] = useScrollOffset()

  const [
    barOn,
    toggleBar
  ] = useState<Boolean>(false)

  const [
    searchOn,
    searchBar
  ] = useState<Boolean>(false)

  const [
    alertCardOn,
    toggleAlertCard
  ] = useState<Boolean>(false)

  return (
    <div 
      id="topHead"
      className={`
        ${styles.headerApp} 
        ${ pathname == "/" ? styles.onHome : styles.offHome}
      `}>
      <div
        className={styles.stickyHead}>
        <Logo />
        <Nav 
          searchOn={searchOn}
          offsetY={targetOffY}
          toggleAlertCard={toggleAlertCard}
          searchBar={searchBar}
          toggleBar={toggleBar}
        />
      </div>
      <div
        className={styles.backHead}> 
        {
          pathname == "/" ? <Carousel /> :
          <>
            <div
              className={styles.targetNav}>
              <a href="/">home</a> | <span>{pathname.length < 12 ? pathname.replace("/", "") : "single"}</span>
            </div>
            <div
              className={styles.darkBox}>
              <img
                src="https://avatars.mds.yandex.net/i?id=dc97b9872b8b79c63d835cc71f41fa27b2d9f249-8177077-images-thumbs&n=13" />
            </div>
          </>
        }
      </div>
      <>
        <Menu 
          toggleBar={toggleBar}
          barOn={barOn}
        />
        <SearchInput
          searchOn={searchOn} 
        />
        <AlertCard
          alertCardOn={alertCardOn}
          toggleAlertCard={toggleAlertCard}
        />
      </>
    </div>
  )
}

export default Header
