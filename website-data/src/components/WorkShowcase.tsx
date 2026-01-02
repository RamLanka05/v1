import { useEffect, useRef, useState } from 'react'
import { projects, experience } from '../data/work'
import Projects from './Projects'
import Experience from './Experience'

export default function WorkShowcase() {
  const [active, setActive] = useState<'projects' | 'experience'>('experience')
  const barRef = useRef<HTMLDivElement | null>(null)

  // position the fixed bar horizontally above the showcase content
  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    const updatePos = () => {
      const container = document.querySelector('main .max-w-xl') as HTMLElement | null
      if (container) {
        const rect = container.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        // set left to centerX and use translateX(-50%) via inline transform
        bar.style.left = `${centerX}px`
        bar.style.width = `${Math.min(rect.width, 720)}px`
        bar.style.transform = 'translateX(-50%)'
      } else {
        // fallback: center in viewport
        bar.style.left = '50%'
        bar.style.width = ''
        bar.style.transform = 'translateX(-50%)'
      }
    }

    updatePos()
    window.addEventListener('resize', updatePos)
    const ro = new ResizeObserver(updatePos)
    const container = document.querySelector('main .max-w-xl')
    if (container) ro.observe(container)

    return () => {
      window.removeEventListener('resize', updatePos)
      ro.disconnect()
    }
  }, [])
//   const projectsRef = useRef<HTMLElement | null>(null)
//   const experienceRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const opts = { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 }
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

  function scrollToItem(section: 'projects' | 'experience', id?: string) {
    // const container = document.querySelector('main') || window
    const target = id ? document.getElementById(id) : document.getElementById(section)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const activeItems = active === 'projects' ? projects : experience

  return (
    <div className="mb-8">
      <div ref={barRef} className="fixed top-4 z-50 px-4 py-3 bg-transparent backdrop-blur-sm rounded-2xl" style={{ left: '50%', maxWidth: '720px' }}>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button onClick={() => scrollToItem('projects')} className={`px-3 py-1 rounded-full ${active === 'projects' ? 'bg-blue-600 text-white' : 'bg-transparent text-gray-700 dark:text-gray-300'}`}>
              Projects
            </button>
            <button onClick={() => scrollToItem('experience')} className={`px-3 py-1 rounded-full ${active === 'experience' ? 'bg-blue-600 text-white' : 'bg-transparent text-gray-700 dark:text-gray-300'}`}>
              Experience
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-3 overflow-x-auto">
            {activeItems.map((it) => (
              <button
                key={(it as any).id}
                onClick={() => scrollToItem(active, (it as any).id)}
                className="flex-shrink-0 px-3 py-1 rounded-full bg-transparent text-sm text-gray-700 dark:text-gray-200 hover:scale-105 transform transition"
              >
                {('title' in it && (it as any).title) || (it as any).role}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Experience />
        <Projects />
      </div>
    </div>
  )
}
