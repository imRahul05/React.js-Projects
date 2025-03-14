import React from 'react'
import { Routes,Route } from 'react-router'
import Login from './Pages/Login'
import Home from './Pages/Home'
import CartPage from './Pages/CartPage'
import PrivateRoute from './PrivateRoute/PrivateRoute'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path='/cart' element={<PrivateRoute><CartPage /></PrivateRoute>} />
      </Routes>
    </>
  )
}

export default App