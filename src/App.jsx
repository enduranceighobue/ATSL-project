import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import FAQS from './components/FAQS'
import Pricing from './components/Pricing'
import Demo from './components/Demo'
import Contact from './components/Contact'
import Footer from './components/Footer'

import './App.css'

function App() {


  return (
    <>
      <div className='min-h-screen'>
       <Navbar/>
       <Hero/>
       <Features/>
       <FAQS/>
       <Pricing/>
       <Demo/>
       <Contact/>
       <Footer/>
      </div>
    </>
  )
}

export default App
