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
    <div className="antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-white flex max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 gap-14">
      {/* Left column */}
      <aside className="w-[36%] min-w-[320px] flex justify-end">
        <div className="max-w-[560px] w-full">
          <Hero />
        </div>
      </aside>

      {/* Right column: main content scrolls */}
      <main className="flex-1 bg-white dark:bg-gray-950">
        <div className="max-w-xl mx-auto">
          <About />
          <Experience />
          <Projects />
        </div>
      </main>
    </div>
  )
}

export default App
