import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/section/Navbar';
import MobileMenu from './components/section/MobileMenu';
import Home from './components/section/Home';
import About from './components/section/About';
import FeaturedProjects from './components/section/FeaturedProjects'
import Contact from './components/section/Contact';
import './index.css';
import Footer from './components/section/Footer';


function App() {

  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
        <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-black text-gray-100`}>

          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home />
          <About />
          <FeaturedProjects />
          <Contact />
          <Footer />
          
        </div>
    </>
  )
}

export default App
