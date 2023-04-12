import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import Admin from './Admin'
import Login from './Login'
import './assets/style/index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserContext from './UserContext';
import Signup from './Signup'
import User from './User'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/user',
    element: <User />
  },
  {
    path: '/Login',
    element: <Login />
  },
  {
    path: '/Signup',
    element: <Signup />
  }
  // },
  // {
  //   path: '/Admin',
  //   element: <Admin />
  // }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContext>
    <RouterProvider router={router} />
  </UserContext>
)
