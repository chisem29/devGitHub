import { FC } from "react"

import { Roboto , Open_Sans} from "next/font/google"

import styles from "./Page2.module.sass"

const RobotoFont = Roboto({ weight : "700", subsets : [] })
const OpenSansFont = Open_Sans({ weight : "300", subsets : [] })

const Page2 : FC = () => {
  return (
    <div
      className={`
        py-20
        flex 
        w-full 
        justify-center
        max-md:flex-col
        max-md:items-center
        relative
      `}>
      <div
        className={`
          relative
          z-10
          ${styles.imgsContainer}
        `}>
        <div>
          <img 
            src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/a9417566b54a5632bdaec777/rsd-min.jpg"/>
        </div>
        <div>
          <img 
            src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/dd2eab3f2a4d50dab5a2637f/ice-cream-bowl-dessert-with-chocolate-cream-strawberries_181624-4908.jpg"/>
        </div>
      </div>
      <div
        className={`
          ${styles.infoContainer} 
          relative
          justify-self-end
          basis-[450px]
          justify-center
          items-center
          bg-black
          text-white 
          md:translate-x-[-60px]
          md:translate-y-[100px]
          flex
          flex-col
          px-7
        `}>
        <div
          className="
            flex
            flex-col
            items-start
            gap-y-6
            max-md:max-w-[250px]
          ">
          <h1
            className={`
              ${RobotoFont.className}
              text-4xl font-serif
            `}>
            Ice Cream Cafe
          </h1>
          <p
            className={`
              max-w-[300px]
              ${OpenSansFont.className} 
              leading-6
            `}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            <br/><br/>
            <span
              className={`
                 text-[15px]
              `}>
              Image from <a className="underline underline-offset-2">Freepic</a>
            </span>
          </p>
          <button
            className={`uppercase px-4 bg-[#be303e] font-sans tracking-[0.175rem] basis-[38px] rounded-3xl text-sm`}>
            learn more
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page2