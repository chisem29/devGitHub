import { useQuery } from 'react-query'
import { FC } from 'react'

import { Noto_Sans_SC } from "next/font/google"

import styles from "./Home.module.css"
import services from "@/services/index.service"

import Card from '@/components/UI/Card/Card'
import cardsBody from '@/shared/interfaces/cards'

const NS = Noto_Sans_SC({ weight :  "400", preload : false })

const Home : FC<cardsBody<string>> = ({ cards }) => {
  
  const {
    data:cardsBeta, 
  } = useQuery({
    queryKey : ["cards"],
    queryFn : () => services.getAllCards(),
    select : ({ cards }) => cards,
    initialData : { cards },
  })

  return (
    <div 
      className="
        flex
        flex-col
        items-center 
        gap-y-4
        min-w-full
      ">
      <div>
        <h1
          className={`text-2xl ${NS.className}`}>
          Cards
        </h1>
      </div>
      <div
        className="
          font-mono 
          text-sm 
          flex 
          min-w-full
          justify-center
          items-center
          gap-x-5
          gap-y-6 
          sm:flex-row 
          max-sm:flex-col
        ">
        {
          cardsBeta?.map(({
            title,
            description
          }, index) => 
            <Card 
              {...{title, description, index}}
            />
          )
        }
      </div>
    </div>
  )

}

export default Home