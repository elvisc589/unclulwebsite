import React from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Nationals from './components/Work'
import About from './components/About'
import Reviews from './components/Reviews'
import Lambdas from './components/Lambdas'
import Events from './components/Lambdas'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Selects from './components/Selects'
import Calendar from './components/index'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={
      [<Hero/>,
    <Selects/>,
    <Reviews/>,
   <Calendar/>,
    <Contact/>,
    ]}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/nationals' element={<Nationals/>}/>
      <Route path='/lambdas' element={<Lambdas/>}/>
      <Route path='/events' element={<Calendar/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
