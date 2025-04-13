import React from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginSignup from './pages/LoginSignup';
import Cart from './pages/Cart';
import Category from './pages/Category';
import Product from './pages/Product';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/category/:type' element={<Category/>}/>
          <Route path='/product/:name' element={<Product/>}/>
        </Routes>
      </div>
    </Router>

  )
}

export default App