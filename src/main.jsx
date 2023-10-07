import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layout/MainLayout.jsx'
import Home from './assets/component/home'




const myCreateRoute = createBrowserRouter([
  {

  path: "/",
  element: <MainLayout></MainLayout> ,

  children:[
  {  
    path : '/',
    element: <Home></Home>
  }
  ]
}
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={myCreateRoute}>  </RouterProvider>
  </React.StrictMode>,
)
