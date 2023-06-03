import { 
  configureStore, 
  combineReducers 
} from "@reduxjs/toolkit"

import { setupListeners } from '@reduxjs/toolkit/query'

import { api } from "./services/api" 

const store = configureStore({
  reducer : combineReducers({
    [api.reducerPath] : api.reducer
  }),
  middleware : getDefaultMiddleware => 
    getDefaultMiddleware().concat(api.middleware)
})

setupListeners(store.dispatch)

export default store