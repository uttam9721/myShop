
import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as  Router,Routes,Route } from 'react-router-dom';
import Hero from './pages/Hero';
import About from './pages/About';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero/>} />
        <Route path='/products/:id' element={<ProductDetails/>} />
        <Route path='/about' element={<About/>} />    
        <Route path='/cart' element={<Cart/>} />    
      </Routes>
      <Footer />
      </Router>
    </div>
  )
}

export default App
