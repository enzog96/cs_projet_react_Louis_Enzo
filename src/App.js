import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './routes/Home'
import Product from './routes/Product'
import About from './routes/About'
import Contact from './routes/Contact'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes></>
  );
}

export default App;
