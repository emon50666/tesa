
import { useEffect } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Counter from './components/Counter'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Service from './components/Service'
import ServiceTwo from './components/ServiceTwo'

import Slider from './components/Slider'
import Aos from "aos";
import 'aos/dist/aos.css';

function App() {
useEffect(() => {
    Aos.init({
      duration: 2000, // Animation duration in ms
      once: true,     // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <>
     <Hero/>
     <About/>
     <Service/>
    <ServiceTwo/>
     <Portfolio/>
     <Slider/>
     <Counter/>
     <Contact/>
    </>
  )
}

export default App
