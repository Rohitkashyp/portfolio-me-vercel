import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Fullpageloder from './components/Fullpageloder'
import { useEffect } from 'react'


function App() {

const [loading,setLoading] = useState(true)

useEffect(()=>{
  setTimeout(()=>{
    setLoading(false)
  },2000)
},[])

  return (
    <> 
   {
    loading  ? (
      <Fullpageloder/>
    ):(
   <> 
       <ToastContainer/>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Services/>
      <Experience/>
      <Contact/>
      <Footer/>
   </>
    )
   }
  
    </>
  )
}

export default App






