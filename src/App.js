import React from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Reviews from './components/Reviews'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Selects from './components/Selects'
import About from './components/About'

function App() {
  return (
    <div>
    <TopBar/>
    <Navbar/>
    <Hero/>
    <Work/>
    <Reviews/>
    <Selects/>
    <About/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
