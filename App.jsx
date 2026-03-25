import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import CoreStrengths from './components/CoreStrengths'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Leadership from './components/Leadership'
import Approach from './components/Approach'
import LookingFor from './components/LookingFor'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <CoreStrengths />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Leadership />
        <Approach />
        <LookingFor />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
