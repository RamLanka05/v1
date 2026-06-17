import { useEffect, useState } from 'react'

export default function Navigation() {
  const [active, setActive] = useState<'projects' | 'experience'>('experience')

  useEffect(() => {
    const opts: IntersectionObserverInit = { 
      root: null, // Use the viewport
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
    const target = document.getElementById(section)
    if (!target) return

    // Scroll naturally using the window
    const offset = target.getBoundingClientRect().top + window.scrollY - 100 // 100px padding
    window.scrollTo({ top: offset, behavior: 'smooth' })
  }

  return (
    <nav className="w-full">
      <ul className="flex flex-col gap-4 mt-8">
        <li>
          <button 
            onClick={() => scrollToSection('experience')} 
            className={`group flex items-center py-3 w-max transition-all ${
              active === 'experience' 
                ? 'text-gray-900 dark:text-gray-100 font-bold' 
                : 'text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-200'
            }`}
          >
            <span className={`mr-4 h-px transition-all bg-gray-900 dark:bg-gray-100 ${active === 'experience' ? 'w-16' : 'w-8 group-hover:w-16'}`}></span>
            Experience
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('projects')} 
            className={`group flex items-center py-3 w-max transition-all ${
              active === 'projects' 
                ? 'text-gray-900 dark:text-gray-100 font-bold' 
                : 'text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-200'
            }`}
          >
            <span className={`mr-4 h-px transition-all bg-gray-900 dark:bg-gray-100 ${active === 'projects' ? 'w-16' : 'w-8 group-hover:w-16'}`}></span>
            Projects
          </button>
        </li>
      </ul>
    </nav>
  )
}