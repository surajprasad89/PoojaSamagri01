import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Navbar from './src/components'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
const app = () => {
  return (
    <div className='app'>
     
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/order' element={<PlaceOrder />} />
     </Routes>
       
    </div>
  )
}

export default app
