
import React from 'react';

import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Outlet, 
  Route,
  useParams
} from 'react-router-dom';

import './App.sass';

import ErrorRouter from './pages/ErrorRouter/ErrorRouter';
import App from "./App"
import Progress from './pages/Progress/Progress';
import Home from './pages/Home/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <App/>
      }>
      <Route 
        index
        element={
          <Home />
        } 
      />
      <Route
        path="/progress"
        element={
          <Outlet/>
        }>
        <Route 
          index
          element={
            <Progress />
          }/>
      </Route>
      <Route 
        path="*"
        element={
          <ErrorRouter />
        } />
    </Route>
  )
)

export default router;