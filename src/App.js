import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './routes/Home'
import Productpage from './routes/Productpage'
import About from './routes/About'
import Contact from './routes/Contact'
import Basket from './routes/Basket'
import Heart from './routes/Heart'
import React from 'react';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product" element={<Productpage/>}/>
      <Route path="/about"  element={<About/>} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/heart" element={<Heart/>}/>
      <Route path="/basket" element={<Basket/>}/>
    </Routes>
    </>
  );
}

export default App;
