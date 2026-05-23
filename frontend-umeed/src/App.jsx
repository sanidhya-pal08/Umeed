import React from 'react'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Reports from './components/Reports'
import About from './components/About'



// const ProtectedRoute = ({ element }) => {
//   const token = localStorage.getItem('token')
//   return token ? element : <Navigate to="/" />
// }




const App = () => {
  return (
    <div>
     <About/>
    </div>
  )
}

export default App
