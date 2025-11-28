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
  <div className="antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-white flex max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 gap-x-40 items-start lg:h-screen">
      {/* Left column */}
      <aside className="sticky top-0 h-screen lg:w-[36%] w-auto min-w-[320px] flex items-start justify-start lg:px-8 z-20">
        <div className="w-full lg:max-w-[36vw] px-2">
          <Hero />
        </div>
      </aside>

      {/* Right column: main content scrolls */}
      <main className="flex-1 bg-white dark:bg-gray-950 lg:pl-12 overflow-y-auto h-full">
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
