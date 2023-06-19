import { FC } from "react"

import styles from "./Page4.module.sass"

import { Montserrat } from "next/font/google"

const montserratFont = Montserrat({ weight : "400", subsets : []})

const Page4 : FC = () => {
  return (
    <div
      className={`
        ${styles.container}
        flex
        items-center
        justify-items-center
        flex-col bg-[#e9f2fa]
        h-full
        sm:pt-64
        sm:pb-40
        pb-10
      `}>
      <div
        className="
          relative
          flex
          flex-col
          gap-y-12
        ">
        <div
          className={`
            sm:absolute
            max-sm:relative
            lg:left-[-125px]
            sm:top-[-200px]
            max-lg:left-0
            max-md:left-[-40px]
            max-sm:left-0
            max-sm:-bottom-16
            ${styles.infoContain}
          `}>
          <ul
            className="
              grid 
              grid-cols-2 
              max-sm:grid-cols-1
              list-none 
              gap-4
            ">
            {
              [
                "", "", "", ""
              ].map((item, index) => 
                <li
                  className="
                    bg-white 
                    flex 
                    flex-col 
                    text-center 
                    justify-items-center
                    gap-y-4
                    max-w-[225px]
                    max-sm:max-w-[250px]
                    pt-6
                    pb-5
                    px-6
                  ">
                  <h1
                    className={`
                      text-[3.25rem]
                      max-sm:text-[2.25rem]
                      ${montserratFont.className}
                    `}>
                    0{index+1}
                  </h1>
                  <p
                    className="
                      font-sans
                      text-sm
                      leading-6
                    ">
                    Sample text. Click to select the text box. Click again or double click to start editing the text.
                  </p>
                  <a
                    className="
                      self-center
                      hover:text-[#d36d69]
                      hover:border-b-black
                      uppercase
                      font-bold
                      text-xs 
                      border-spacing-y-6 
                      border-b-[#478ac9] 
                      border-b-[1px]
                    "
                    href="#">
                    more
                  </a>
                </li>
              )
            }
          </ul>
        </div>
        <div 
          className="
            md:hidden 
            w-[200px] 
            h-[200px] 
            max-sm:hidden
          "/>
        <div
          className={`
            max-sm:max-w-[300px] 
            flex 
            justify-center
            ${styles.imgBg}
          `}>
          <img 
            className={`
              lg:max-w-[750px]
              max-lg:max-w-[660px]
              max-md:max-w-[540px]
              max-sm:max-w-[85%]
            `}
            src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/389d13e30ffb5b11979b226b/fddg-min.jpg"/>
        </div>
        <div
          className={`
            sm:relative
            lg:left-[-125px]
            max-md:left-[-40px]
            font-sans
            text-[14px]
          `}>
          Image from <a href="#" className="underline underline-offset-8">Freepic</a>
        </div>
      </div>
    </div>
  )
}

export default Page4