import { FC, useState } from "react"

import { Oswald } from "next/font/google"

import styles from "./Page.module.sass"
import dataBody from "@/shared/interfaces/data"

const fontOswald = Oswald({ weight : "400", subsets : []})

const Page5 : FC<{ data : dataBody }> = ({ data }) => {

  const [
    isSpin,
    setSpinner
  ] = useState<boolean>(false)

  return (
    <div
      className={`
        bg-[#77aad9]
        w-full
        h-full
        flex
        justify-center
        pt-14
        sm:pb-52
        max-sm:gap-y-8
        ${styles.container}
        max-lg:flex-col
        px-10
      `}>
      <div
        className={`
          sm:relative
          lg:-right-[100px]
          lg:-bottom-[100px]
          max-lg:-top-[25px]
          flex
          flex-col
          max-lg:order-2
          items-center
        `}>
        <img 
          className="sm:max-w-[475px] relative"
          src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/ae30a308cbe35550a1ff83d9/wqe-min.jpg"/>
        <div
          className="
            max-sm:relative
            sm:absolute
            p-6
            bg-[#332b29]
            basis-[100px]
            max-sm:w-[90%]
            max-sm:-top-[50px]
            sm:-bottom-[30px]
            lg:-end-3/4
            max-w-[700px]
          ">
            <ul
              className="
                flex 
                max-sm:flex-col 
                list-none
                sm:gap-x-6
                max-sm:gap-y-8
                w-full
              ">
              {
                [
                  ["CALL US", "1 (234) 567-891, 1 (234) 987-654", "https://img.icons8.com/?size=1x&id=9730&format=png"],
                  ["LOCATION", "121 Rock Sreet, 21 Avenue, New York, NY 92103-9000", "https://img.icons8.com/?size=1x&id=7880&format=png"],
                  ["BUSINESS HOURS", "Mon – Fri …… 10 am – 8 pm, Sat, Sun ....… Closed", "https://img.icons8.com/?size=1x&id=i5H9k4zUvBNK&format=png"],
                ].map(([ itemTitle, itemInner, itemSrc ]) =>
                  <li 
                    className="
                      flex 
                      flex-col 
                      gap-y-2 
                      text-white
                      text-[13px]
                      sm:basis-1/3
                    ">
                    <div 
                      className="flex max-sm:flex-col max-sm:gap-y-4 sm:gap-x-2">
                      <img src={itemSrc} className={styles.iconInner} />
                      <h5 className="font-bold text-[1rem]"> {itemTitle} </h5>
                    </div>
                    <p className="text-xs leading-5"> {itemInner} </p>
                  </li>
                )
              }
            </ul>
          </div>
      </div>
      <div
        className={`
          ${styles.containForm}
          shadow-[5px_5px_20px_5px_rgba(0,0,0,0.3)]
          bg-white
          pt-6
          pb-12
          lg:pl-[10%]
          lg:pr-12
          max-lg:px-6
          max-sm:px-0
          max-lg:order-1
          lg:self-start
          max-lg:self-end
          max-sm:self-center
        `}>
        <form
          method="GET"
          autoComplete="off"
          action="http://localhost:3000/page5"
          className="flex flex-col items-center gap-y-6">
          <legend
            className={`
              uppercase
              text-[2.25rem]
              ${fontOswald.className}
            `}>
            contact us
          </legend>
          <div
            className={`
              ${styles.inputGroup}
              max-w-[90%]
              w-[350px]
              flex
              flex-col
              gap-y-6
            `}>
            {
              ["Name", "email address"]
                .map(( itemInput, index ) =>
                  <input 
                    maxLength={24}
                    required
                    name={index ? "email" : "name" }
                    type={index ? "email" : "text"}
                    placeholder={`Enter your ${itemInput}`}
                  />
                )
            }
            <textarea
              name="message"
              maxLength={150}
              placeholder="Enter your message" />
          </div>
          <button
            onClick={() => {setSpinner(true)}}
            className="
              bg-[#0000] 
              uppercase 
              font-bold 
              text-sm 
              font-sans 
              border 
              border-black 
              basis-[38px] 
              max-w-full 
              w-[100px]
              hover:bg-black
              hover:text-white 
              transition-all
            ">
            submit
          </button>
          {
            !isSpin ? 
            <div
              className={`
                ${data.name ? "" : "hidden"}
                w-[90%]
                h-auto
                bg-green-700
                text-white
                text-sm
                p-4
                text-center
                ${styles.successStatusMes}
              `}>
              You have sent your message, @{data.name.slice(0, 10)}{data.name.length > 10 && "..."}!
            </div> :
            <div
             className={`
              ${data.name ? "" : "hidden"}
              w-[90%]
              h-auto
            bg-yellow-600
            text-white
              text-sm
              p-4
              text-center
              ${styles.loadingStatusMes}
            `}>
              Loading...
           </div>
          }
          <div
            className="mt-5 text-sm font-sans">
            Image from <a href="#" className="underline underline-offset-8">Freepik</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Page5