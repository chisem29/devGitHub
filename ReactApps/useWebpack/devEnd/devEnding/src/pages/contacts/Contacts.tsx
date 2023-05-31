import React, { FC, useEffect } from "react"

import styles from "./Contacts.module.css"

import { useLazyGetContactsQuery } from "../../store/services/api"

const Contacts : FC = () => {

  const [
    refetch,
    { 
      data:contacts, 
      isError, 
      isSuccess, 
      isLoading
    }
  ] = useLazyGetContactsQuery()

  useEffect(() => {
    refetch(undefined)
  }, [contacts])

  return (
    <>
      <div
        className={styles.contacts}>
        {isError && <h4> Something went wrong!</h4>}
        {isLoading && <h4> Loading...</h4>}
        {isSuccess && <h4> Successfully!</h4>}
      </div>
    </>
  )
}

export default Contacts