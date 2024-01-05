import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import CartPage from './pages/CartPage'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header'

const App = () => {
  return <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/cart' element={<CartPage />} />
    </Routes>

  </BrowserRouter>
}

export default App