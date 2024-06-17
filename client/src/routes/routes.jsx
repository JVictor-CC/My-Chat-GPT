import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Login from '../pages/Login'
import Chat from '../pages/Chat'
import Register from '../pages/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: 'chat',
    element: <Chat />,
  },
  {
    path: 'register',
    element: <Register />,
  },
])

const MyRoutes = () => {
  return <RouterProvider router={router} />
}

export default MyRoutes
