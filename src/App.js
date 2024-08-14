import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Cursor from "./components/Cursor";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Particles from "react-tsparticles";
import particlesBgOptions from './particles_bg.json';
import gsap, {Power4} from "gsap";
import ReactModal from "react-modal";
import RiseLoader from "react-spinners/RiseLoader";
import About from "./pages/About"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"
import Blog from "./pages/Blog"

ReactModal.setAppElement('#root');

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true)
  useEffect(() => {
    gsap.fromTo('.main-content', {y:500, opacity:0},{y:0, opacity:1, duration:1, ease:Power4.out})

    if (loading) {
      setTimeout(() => {
        gsap.fromTo('.page-cover',{height:'100%'},{height:0, duration:1})
      }, 3000);
    }else{
      gsap.fromTo('.page-cover',{height:'100%'},{height:0, duration:1})
    }
    

  }, [useLocation().pathname])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, []);
  

  return (
    <div className={`relative z-0 ${darkMode ? 'dark' : ''}`}>
      <div className="flex h-[100vh] w-[100vw]">
        <Cursor/>
        
        <div className="flex-1 w-full h-[90vh] lg:h-full main-content">
          <Routes>
            <Route path='/' element={<Home darkMode={darkMode}/>}/>
              <Route path='/about' element={<About darkMode={darkMode}/>}/>
            <Route path='/portfolio' element={<Portfolio darkMode={darkMode}/>}/>
            <Route path='/contact' element={<Contact darkMode={darkMode}/>}/>
            <Route path='/blog' element={<Blog darkMode={darkMode}/>}/>
          </Routes>
        </div>
        <div className="lg:basis-[10%] h-[10vh] lg:h-full">
          <Navigation darkMode={darkMode} setDarkMode={setDarkMode}/>
        </div>
      </div>
      {darkMode && <Particles id="tsparticlesbg" options={particlesBgOptions}/>}
      <div className='fixed w-full h-full bottom-0 left-0 dark:bg-gray bg-grayMedium z-[999] page-cover flex items-center justify-center'>
      {loading && <RiseLoader color={'#ffb400'} loading={true} speedMultiplier={0.5} size={20}/>}
      </div>
    </div>
  );
}

export default App;
