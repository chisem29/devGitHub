import React, { FC, useEffect, } from "react"

import { 
  useGetContactByIdQuery, 
  useGetContactsQuery 
} from "../../store/services/api"

const Layout : FC = () => {

  const { 
    refetch, 
    data, 
    isLoading, 
    isError, 
    isSuccess,
  } = useGetContactsQuery(undefined)

  useEffect(() => {
    refetch()
  }, [data])

  console.log(data)

  return (
    <div>
      <h1>LAYOUT</h1>
      <h3>{isError && "Error! Something went wrong..."}</h3>
      <h3>{isLoading && "Loading..."}</h3>
      <h3>{isSuccess && "Success!! Data has loaded!"}</h3>
      <button
        type="button"
        onClick={() => { refetch() }}>
        refetch
      </button>
    </div>
  )
}

export default Layout