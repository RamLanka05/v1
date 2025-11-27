// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'

function App() {
  return (
    <div className="antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <Navigation />
      <Hero />
      <main>
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  )
}

export default App
