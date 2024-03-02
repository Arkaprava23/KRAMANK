import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import SignupPage2 from './pages/SignupPage2'
import ProductPage from './pages/ProductPage'
import ContactUs from './pages/ContactPage'
import Verification from './pages/Verification'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/signup2" element={<SignupPage2/>} />

      <Route path="/products" element={<ProductPage/>} />
      <Route path="/contact" element={<ContactUs/>} />
      <Route path="/verify" element={<Verification/>} />
      
    </Routes>
  )
}

export default App
