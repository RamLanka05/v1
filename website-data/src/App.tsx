// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'

function App() {
  return (
    <div className="antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-white flex">
      {/* Left column: change `w-1/3` or `min-w-[320px]` to move/resize the hero */}
      <aside className="w-1/2 min-w-[320px]">
        <Hero />
      </aside>

      {/* Right column: main content scrolls */}
      <main className="flex-1 bg-white dark:bg-gray-950">
        <div className="max-w-2xl mx-auto">
          <About />
          <Experience />
          <Projects />
        </div>
      </main>
    </div>
  )
}

export default App
