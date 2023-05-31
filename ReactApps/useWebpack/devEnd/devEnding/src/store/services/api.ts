import { 
  createApi, 
  fetchBaseQuery 
} from "@reduxjs/toolkit/query/react"

import contactBody from "../../shared/interfaces/contact"

export const api = createApi({
  reducerPath : "api",
  baseQuery : fetchBaseQuery({ 
    baseUrl : "http://localhost:3001/", 
    mode : "no-cors",
  }),
  endpoints : build => ({
    getContactById : build.query<contactBody, number>({
      query : id => ({ 
        url : `contacts/${id}`, 
        method : "GET", 
      }),
    }),
    getContacts : build.query<Array<contactBody>, undefined>({
      query : () => `contacts`
    })
  })
})

export const { 
  useGetContactByIdQuery, 
  useLazyGetContactsQuery 
} = api
