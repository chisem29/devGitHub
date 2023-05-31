import React, { FC, useEffect } from "react"

import { useLazyGetContactsQuery } from "../../store/services/api"
import { Outlet } from "react-router-dom"

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
      <Outlet />
    </>
  )
}

export default Contacts