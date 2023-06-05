import React, 
{ 
  FC, 
  useEffect 
} from "react"

import { useParams } from "react-router-dom"

import { useGetContactByIdQuery } from "../../store/services/api"
import HandlerStatus from "../../components/UI/handlerStatus/HandlerStatus"

const Contact : FC = () => {

  const { id } = useParams()
  
  const {
    refetch,
    isError,
    isSuccess,
    isLoading
  } = useGetContactByIdQuery(Number(id))

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

export default Contact