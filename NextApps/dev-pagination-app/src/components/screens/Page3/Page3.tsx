import { FC } from "react"

import { Roboto } from "next/font/google"

import styles from "./Page3.module.sass"

const robotoFont = Roboto({ subsets : [], weight : "700" })

const Page3 : FC = () => {
  return (
    <div
      className={`
        ${styles.container}
        flex
        flex-col
        w-full
        py-10
        bg-[#e5e5e5]
        text-[#111111]
        h-full
        items-center 
        justify-items-end
      `}>
      <div
        className={`
          ${styles.containContent}
          flex 
          flex-col
          relative
          z-1
          mt-16
          max-sm:max-w-[60%]
        `}>
        <img 
          className="
            h-[650px]
            z-0 
            w-[900px]
            relative
            max-xl:w-[700px]
            max-xl:h-[550px]
            max-lg:w-[500px]
            max-lg:h-[450px]
            max-md:h-[40%]
          "
          src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/68f61ecd28af58ac8088fdfb/fsd-min.jpg" />
        <div
          className={`
            max-w-[500px]
            relative 
            top-[-200px]
            xl:start-1/2
            max-xl:end-[-250px]
            max-lg:top-[-100px]
            max-lg:end-[-50px]
            flex
            flex-col
            gap-y-6
            z-2
            ${styles.infoBox}
          `}>
          <ul
            className={`
              list-none
              px-6
              pt-4
              pb-10
              bg-white
              flex
              flex-col
              gap-y-[50px]
              max-md:gap-y-[20px]
              max-md:px-4
            `}>
            {
              [
                "BUSINESS ESSENTIALS",
                "FINANCE & ACCOUNTING",
                "BUSINESS IN SOCIETY"
              ].map((itemLegend, index) => 
                <li
                  className="
                    flex
                    flex-col
                    gap-y-4
                    border-[1px] 
                    border-dashed 
                    border-transparent 
                    border-b-[#111111]
                  "
                  key={index}>
                  <h1
                    className={`
                      text-[#425465] 
                      text-2xl
                      ${robotoFont.className}
                    `}>
                    {itemLegend}
                  </h1>
                  <p
                    className="text-sm font-sans mb-6">
                    Sample text. Click to select the text box. Click again or double click to start editing the text.
                  </p>
                </li>
              )
            }
          </ul>
          <span 
            className="self-end font-sans text-base">
            Image from 
            {` `}
            <a 
              className="underline underline-offset-8" 
              href="#">
              Freepik
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}   

export default Page3