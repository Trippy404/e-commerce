import { Route, Routes ,Link , BrowserRouter } from "react-router-dom"
import Navbar from "./navbar/Navbar"

import About from "./pages/About"
import Hero from "./pages/Hero"
import "./navbar/nav.css"
import Home from './pages/Home'
import ProductDetails from "./pages/ProductDetails"

function App() {
 

  return (
   <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hero" element={<Hero/>} />        
        <Route path="/about" element={<About/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
      </Routes>
      
   </BrowserRouter>
  )
}

export default App
