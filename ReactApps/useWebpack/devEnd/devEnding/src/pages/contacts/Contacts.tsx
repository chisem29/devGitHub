import React, 
{ 
  FC, 
  useEffect, 
} from "react"

import styles from "./Contacts.module.css"

import { useLazyGetContactsQuery } from "../../store/services/api"

import HandlerStatus from "../../components/UI/handlerStatus/HandlerStatus"

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
    console.log(contacts)
  }, [contacts])

  return (
    <>
      <HandlerStatus
        isError={isError}
        isSuccess={isSuccess}
        isLoading={isLoading}
      />
    </>
  )
}

export default Contacts