
import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as  Router,Routes,Route } from 'react-router-dom';
import Hero from './pages/Hero';
import About from './pages/About';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import SearchItem from './pages/SearchItem';
import Address from './pages/Address';

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
        <Route path='/search/:term' element={<SearchItem/>} />
        <Route path='/address' element={<Address/>} />
      </Routes>
      <Footer />
      </Router>
    </div>
  )
}

export default App









// import React from "react";
// import Navbar from "./components/Navbar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Hero from "./pages/Hero";
// import About from "./pages/About";
// import ProductDetails from "./pages/ProductDetails";
// import Cart from "./pages/Cart";
// import Footer from "./components/Footer";
// import SearchItem from "./pages/SearchItem";
// import Address from "./pages/Address";
// import Login from "./pages/Login";


// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {/* Protected Routes */}
//         <Route
//           path="/"
//           element={
//             <ProtectedRoute>
//               <Hero />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/products/:id"
//           element={
//             <ProtectedRoute>
//               <ProductDetails />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/about"
//           element={
//             <ProtectedRoute>
//               <About />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/cart"
//           element={
//             <ProtectedRoute>
//               <Cart />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/search/:term"
//           element={
//             <ProtectedRoute>
//               <SearchItem />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/address"
//           element={
//             <ProtectedRoute>
//               <Address />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;
