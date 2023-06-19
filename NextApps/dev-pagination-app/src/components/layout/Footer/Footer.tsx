import { FC } from "react"

import styles from "./Footer.module.sass"

const Footer : FC = () => {
  return (
    <>
      <footer
        className={`
          flex 
          flex-col
          justify-between
          pt-8
          pb-5
          items-center 
          text-[#fff] 
          bg-[#333333]
          text-xs font-sans
          text-center
          h-[180px]
          relative
          ${styles.container}
        `}>
        <p
          className="max-w-[350px]">
          Sample text. Click to select the text box. Click again or double click to start editing the text.
        </p>
        <p>
          <a 
            className="
              underline
              text-[#adcce9]
            " 
            href="#">
            Website Templates{` `}
          </a> 
          created with{` `}
          <a 
            className="
              underline
              text-[#adcce9]
            " 
            href="#">
            Website Builder Software
          </a>
          .
        </p>
      </footer>
    </>
  )
}

export default Footer