import { FC } from "react"

import styles from "./Card.module.sass"
import cardBody from "@/shared/interfaces/card"

const Card : FC<cardBody<string> & {index? : number}> = ({
  description,
  title,
  index=0
}) => {
  return (
    <div
      className={`
        flex 
        flex-col 
        justify-center 
        items-center 
        py-8 
        border-2 
        border-gray-400 
        rounded-lg 
        sm:basis-[250px] 
        max-sm:w-[200px]
        ${styles.card}
      `}>
      <h3
        className="
          font-semibold 
          text-xl 
          font-sans 
          text-gray-200 
          text-center 
        ">
        {
          title.split(" ").slice(0, -1).join(" ") + " "
        }
        {
          <span
            className={
              [
                "text-stone-500", 
                "text-sky-900", 
                "text-yellow-900"
              ][index]
            }>
            {title.split(" ").at(-1)}
          </span>
        }
      </h3>
      <p>
        <a 
          className="
            text-gray-300 
            hover:underline 
            hover:underline-offset-2 
            transition-all 
            duration-300 
            hover:text-gray-400
            text-center
          "
          target="_blank"
          href="#">{description}</a>
      </p>
    </div>
  )
}

export default Card