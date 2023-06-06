import React, { FC } from "react"

import { useParams } from "react-router-dom"

import { useGetContactByIdQuery } from "../../store/services/api"
import HandlerStatus from "../../components/UI/handlerStatus/HandlerStatus"

//https://nicepage.com/css-templates/preview/three-popular-services-510987?device=desktop

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