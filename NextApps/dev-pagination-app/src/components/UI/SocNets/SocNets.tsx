import { FC } from "react"

import Link from "next/link"

import styles from "./SocNets.module.sass"

const SocNets : FC = () => {
  return (
    <div
      className={`
        ${styles.container}
        flex
        gap-x-5
      `}>
      {
        [
          "https://img.icons8.com/?size=512&id=106163&format=png",
          "https://img.icons8.com/?size=1x&id=8824&format=png",
          "https://img.icons8.com/?size=512&id=WDlIZj1YGQtm&format=png",
          "https://img.icons8.com/?size=512&id=16316&format=png",
          "https://img.icons8.com/?size=512&id=x-m7muFV2A25&format=png",
        ].map(( urlImg ) => 
          <Link
            href="#"
            target="_blank">
            <img 
              className={styles.socNet}
              src={urlImg}
              height={25}
              width={25} />
          </Link>
        )
      }
    </div>
  )
}

export default SocNets