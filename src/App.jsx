import { Route, Routes ,Link } from "react-router"
import Navbar from "./navbar/Navbar"

import About from "./pages/About"
import Hero from "./pages/Hero"
import "./navbar/nav.css"
import Home from './pages/Home'

function App() {
 

  return (
   <div>\
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/"  />        
        <Route path="/about" element={<About/>} />
      </Routes>
      <Hero/>
   </div>
  )
}

export default App
