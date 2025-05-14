import React from 'react'
import Navbar from './components/Navbar'
import MainHome from './components/MainHome'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Varifymodel from './components/models/Varifymodel'
import HomeUp from './components/models/HomeUp'
import AboutUp from './components/models/AboutUp'
import SkillsUp from './components/models/SkillsUp'
import ProjectUp from './components/models/ProjectUp'
import AllUpmodels from './components/AllUpmodels'
import ToastCont from './components/ToastCont'

function App() {
  return (
    <>

      <Navbar />
      <MainHome />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Varifymodel />
      <AllUpmodels />
      <ToastCont />


    </>
  )
}

export default App