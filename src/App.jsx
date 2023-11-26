import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Birds from "./components/Birds";
import Footer from "./components/Footer";
import BirdCardPage from "./components/BirdCardPage";


function App() {
  

  return (
    <BrowserRouter>
      {/* <Routes> */}
        <div className="w-full h-full bg-fixed z-0 bg-home bg-cover bg-no-repeat bg-center">    
              <Navbar/>
              <Routes>
                <Route path="/" element={<Hero/>} />
                <Route path="/birds" element={<Birds/>} >
                </Route>
                <Route path="/birds/:birdId" element={<BirdCardPage/>} />
              </Routes>
              <Footer/>
      </div>
      {/* </Routes> */}
    </BrowserRouter>
  )
}

export default App
