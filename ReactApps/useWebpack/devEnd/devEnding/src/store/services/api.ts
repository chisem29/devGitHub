import { 
  createApi, 
  fetchBaseQuery 
} from "@reduxjs/toolkit/query/react"

import contactBody from "../../shared/interfaces/contact"

export const api = createApi({
  reducerPath : "api",
  baseQuery : fetchBaseQuery({ 
    baseUrl : "http://localhost:3001/", 
    mode : "no-cors"
  }),
  endpoints : ({ query }) => ({
    getContactById : query<contactBody, number>({
      query : id => ({ 
        url : `contacts/${id}`, 
        method : "GET", 
      }),
    }),
    getContacts : query<Array<contactBody>, any>({
      query : () => `contacts`,
    })
  })
})

export const useGetContactByIdQuery = api.endpoints.getContactById.useQuery
export const useLazyGetContactsQuery = api.endpoints.getContacts.useLazyQuery
