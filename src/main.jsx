import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layout/MainLayout.jsx'
import Home from './assets/component/home'
import Details from './assets/component/Details'
import Servises from './assets/component/Servises'
import Login from './assets/component/registration/Login'
import SingUp from './assets/component/registration/SingUp'




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
    path: "login",
    element: <Login></Login>

  },
  {
    path: '/singup',
    element: <SingUp></SingUp>

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
  },
  
  ]
}
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={myCreateRoute}>  </RouterProvider>
  </React.StrictMode>,
)
