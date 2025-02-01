import Cart from "./components/Cart"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Products from "./components/products"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
 

  return (
    
   <>
   <BrowserRouter>
   
   <Navbar />
   <Routes>

    <Route path="/"element = {<Products></Products>}></Route>
    <Route path="/cart"element = {<Cart></Cart>}></Route>
   </Routes>
     
     <Footer/>
   </BrowserRouter>
    
    </>
  )
}

export default App
