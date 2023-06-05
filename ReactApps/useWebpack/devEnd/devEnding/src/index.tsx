import React from 'react'
import ReactDOM from 'react-dom'

import { RouterProvider } from "react-router-dom"
import { Provider } from 'react-redux'

import browserRouter from './browserRouter'

import "./index.css"
import store from './store'

ReactDOM.render(
  <Provider
    store={store}>
    <RouterProvider 
      router={browserRouter}/>
  </Provider>,
  document.querySelector('#wrapper')
)