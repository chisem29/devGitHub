import React, { FC } from "react"

import styles from "./HandlerStatus.module.css"

import handlerStatusBody from "../../../shared/interfaces/handlerStatus"

const HandlerStatus : FC<handlerStatusBody> = ({ isError, isSuccess, isLoading }) => {
  return (
    <>
      <div
        className={styles.containerStatus}>
        {isError && <h4> Something went wrong!</h4>}
        {isLoading && <h4> Loading...</h4>}
        {isSuccess && <h4> Successfully!</h4>}
      </div>
    </>
  )
}

export default HandlerStatus