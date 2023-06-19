import { FC, useEffect, useState } from 'react'

import styles from "./Nav.module.sass"

import LinkCustom from '../LinkCustom/LinkCustom'

const Nav : FC<{ width : number }> = ({ width }) => {

  const [
    activeNav,
    setActive
  ] = useState<boolean>(false)

  useEffect(() => {
    if (width > 768) {
      setActive(false)
    }
  })

  return (
    <>
      {
        (width > 768) ?
        <nav
          className={`
            gap-x-5 flex
          `}>
          {
            [ "home", "page 2", "page 3", "page 4", "page 5" ]
              .map(( innerText ) => <LinkCustom innerText={innerText}/>)
          }
        </nav> :
        <>
          <div
            className={activeNav ? styles.darkBack : 'hidden'}/>
          <div
            onClick={() => {
              setActive(true)
            }}
            className="cursor-pointer">
            <img 
              width={20}
              height={35}
              src="https://img.icons8.com/?size=1x&id=8113&format=png"/>
          </div>
        </>
      }
      <div
        className={`
          flex flex-col px-4 pt-3 gy-4
          ${styles.onNavBox} 
          ${!activeNav ? '' : styles.activeNav}
        `}>
        <div
          onClick={() => {
            setActive(false)
          }}
          className="cursor-pointer self-end">
          <img 
            width={30}
            height={30}
            src="https://img.icons8.com/?size=512&id=NvQ7QXYyF7eO&format=png"
            className={styles.closeButton}/>
        </div>
        <nav
          className={`
            gap-y-1 flex flex-col self-center
          `}>
          {
            [ "home", "page 2", "page 3", "page 4", "page 5" ]
              .map(( innerText ) => <LinkCustom innerText={innerText} navActiveOn={true}/>)
          }
        </nav>
      </div>
    </>
  )
}

export default Nav