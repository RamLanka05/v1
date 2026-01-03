import { useEffect, useState } from 'react'

export default function Navigation() {
  const [active, setActive] = useState<'projects' | 'experience'>('experience')

  useEffect(() => {
    const mainEl = document.querySelector('main')
    const opts: IntersectionObserverInit = { 
      root: mainEl, 
      rootMargin: '-40% 0px -40% 0px', 
      threshold: 0 
    }
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const id = (e.target as HTMLElement).id
          if (id === 'projects') setActive('projects')
          if (id === 'experience') setActive('experience')
        }
      })
    }, opts)

    const proj = document.getElementById('projects')
    const exp = document.getElementById('experience')
    if (proj) observer.observe(proj)
    if (exp) observer.observe(exp)

    return () => observer.disconnect()
  }, [])

  function scrollToSection(section: 'projects' | 'experience') {
    const mainEl = document.querySelector('main') as HTMLElement | null
    const target = document.getElementById(section)
    if (!mainEl || !target) return

    const targetRect = target.getBoundingClientRect()
    const mainRect = mainEl.getBoundingClientRect()
    const offset = targetRect.top - mainRect.top + mainEl.scrollTop - 16

    mainEl.scrollTo({ top: offset, behavior: 'smooth' })
  }

  return (
    <nav className="w-full h-24 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-4">
        <div className="flex items-center justify-end gap-2">
          <button 
            onClick={() => scrollToSection('experience')} 
            className={`px-4 py-2 rounded-full transition-colors ${
              active === 'experience' 
                ? 'bg-blue-600 text-white' 
                : 'bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className={`px-4 py-2 rounded-full transition-colors ${
              active === 'projects' 
                ? 'bg-blue-600 text-white' 
                : 'bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            Projects
          </button>
        </div>
      </div>
    </nav>
  )
}
