import { FC } from "react"

import styles from "./Header.module.sass"

import useWindowSize from "@/hooks/useWindowSize"
import Nav from "@/components/UI/Nav/Nav"

const Header : FC = () => {

  const [ width ] = useWindowSize()

  return (
    <>
      <header
        className={`
          ${styles.container}
          w-full flex justify-around items-center
        `}>
        <div
          className="cursor-pointer">
          <img
            alt="logo"
            height={27}
            width={54}
            src={"https://capp.nicepage.com/33be56fb51f1dec03c62e9ee2e538126c81a4059/images/default-logo.png"} />
        </div>
        <Nav 
          width={width}/>
      </header>
    </>
  )

}

export default Header