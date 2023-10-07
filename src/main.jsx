import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layout/MainLayout.jsx'
import Home from './assets/component/home'
import Details from './assets/component/Details'
import Servises from './assets/component/Servises'




const myCreateRoute = createBrowserRouter([
  {

  path: "/",
  element: <MainLayout></MainLayout> ,

  children:[
  {  
    path : '/',
    element: <Home></Home>,
    loader: () => fetch('/data.json')
  },
  {
    path: 'details/:id',
    element: <Details></Details>,
    loader: ()=> fetch('/data.json')

  },
  {
    path:'/services',
    element: <Servises></Servises>,
    loader: () => fetch('/data.json')
  }
  ]
}
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={myCreateRoute}>  </RouterProvider>
  </React.StrictMode>,
)
