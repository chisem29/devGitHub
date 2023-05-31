import React from 'react'
import ReactDOM from 'react-dom'
import { RouterProvider } from "react-router-dom"

import browserRouter from './browserRouter'

import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider 
      router={browserRouter}/>
  </React.StrictMode>, 
  document.querySelector('#wrapper')
)