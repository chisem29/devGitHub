import React, { FC } from "react"
import styles from "./Actor.module.sass"

export interface actorOf {
  rating : number,
  age : number,
  name : string
}

const Actor : FC<actorOf> = ({
  rating,
  age,
  name
}) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.header}>More</div>
        <div className={styles.main}>
          <h5>{name}</h5>
          <h5>{rating}</h5>
          <h5>{age}</h5>
        </div>
        <div className={styles.footer}>Footer</div>
      </div>
    </>
  )
}

export default Actor