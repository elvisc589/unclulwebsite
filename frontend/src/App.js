import React, {useEffect} from 'react'
import Events from './components/Events'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Nationals from './components/Nationals'
import About from './components/About'
import Age from './components/Age'
import Lambdas from './components/Lambdas'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Selects from './components/Selects'
import Calendar from './components/index'
import Chatbot from './components/Chatbot';
import {Routes, Route} from 'react-router-dom'


function App() {
  useEffect(()=> {
    document.title = "UNC LUL"
  },[]);

  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={

      [<Hero/>,
    <Chatbot/>,
    <Selects/>,
    <Age/>,
    <Contact/>,
    ]}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/nationals' element={<Nationals/>}/>
      <Route path='/lambdas' element={<Lambdas/>}/>
      <Route path='/events' element={<Events/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
