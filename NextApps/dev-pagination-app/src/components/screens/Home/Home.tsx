import { FC, useEffect, useState } from 'react'

import { Ubuntu } from "next/font/google"

import styles from "./Home.module.sass"
import SocNets from '@/components/UI/SocNets/SocNets'

const LegendFont = Ubuntu({ weight : "700", subsets : [] })

const Home : FC = () => {

  return (
    <div 
      className={`
        relative
        flex
        justify-center
        lg:items-end
        lg:pb-20
        max-lg:items-center
        ${styles.container}
      `}>
      <div
        className={`
          z-10
          flex gap-x-32
          w-full
          lg:justify-center
          max-lg:flex-col
          max-lg:gap-y-4
          max-lg:gap-x-0
          max-lg:px-20
          max-xs:items-center
        `}>
        <h1
          className={`
            ${LegendFont.className} 
            font-serif 
            text-5xl 
            text-[#fff]
            lg:basis-[350px]
          `}>
          A BREATH OF FRESH AIR
        </h1>
        <div
          className={`
            ${LegendFont.className} 
            font-serif 
            text-[#fff]
            lg:basis-[375px]
            text-[13px]
            tracking-[.1em]
            leading-5
            max-lg:max-w-lg
            flex flex-col
          `}>
          <p>
            SAMPLE TEXT. LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT NULLAM NUNC JUSTO SAGITTIS SUSCIPIT ULTRICES.
          </p>
          <br />
          <p
            className="mb-2">
            IMAGE FROM <a className="underline" href="#">FREEPIK</a>
          </p>
          <SocNets />
        </div>
      </div>
    </div>
  )

}

export default Home