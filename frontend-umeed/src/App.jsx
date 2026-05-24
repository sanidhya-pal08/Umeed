import React from 'react'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Reports from './components/Reports'
import About from './components/About'



const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem('token')
  return token ? element : <Navigate to="/" />
}

const router = createBrowserRouter([
  {path:'/',element:<Login/>},
  {path:'/register', element: <Register/>},
  {path: '/dashboard', element: <ProtectedRoute element={<Home/>} />},
])


const App = () => {
  return <RouterProvider router={router}/>
}

export default App
