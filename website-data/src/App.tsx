import './App.css'
import { useEffect, useRef } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import WorkShowcase from './components/WorkShowcase'

function App() {
  const mainRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let rafId: number | null = null
    let targetY = 0
    let currentY = 0
    let targetX = 0
    let currentX = 0

    const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v))

    const animate = () => {
      const el = mainRef.current
      if (!el) return

      currentY += (targetY - currentY) * 0.15
      currentX += (targetX - currentX) * 0.15

      el.scrollTo({ top: currentY, left: currentX })

      if (Math.abs(targetY - currentY) > 0.5 || Math.abs(targetX - currentX) > 0.5) {
        rafId = requestAnimationFrame(animate)
      } else {
        rafId = null
      }
    }

    const wheelHandler = (e: WheelEvent) => {
      const el = mainRef.current
      if (!el) return
      if (e.ctrlKey) return
      e.preventDefault()

      const maxY = el.scrollHeight - el.clientHeight
      const maxX = el.scrollWidth - el.clientWidth

      // initialize targets to current scroll positions if first interaction
      if (rafId === null) {
        currentY = el.scrollTop
        currentX = el.scrollLeft
        targetY = currentY
        targetX = currentX
      }

      // accumulate delta for inertia feel, allow smaller step for smoother feel
      targetY = clamp(targetY + e.deltaY * 0.9, 0, Math.max(0, maxY))
      targetX = clamp(targetX + e.deltaX * 0.9, 0, Math.max(0, maxX))

      if (rafId === null) {
        rafId = requestAnimationFrame(animate)
      }
    }

    window.addEventListener('wheel', wheelHandler, { passive: false })

    const prevHtmlOverflow = document.documentElement.style.overflow
    const prevBodyOverflow = document.body.style.overflow
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('wheel', wheelHandler)
      if (rafId) cancelAnimationFrame(rafId)
      document.documentElement.style.overflow = prevHtmlOverflow
      document.body.style.overflow = prevBodyOverflow
    }
  }, [])

  return (
    <div className="antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-white flex max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 gap-x-8 items-start h-screen">
      {/* Left column: Bio - Sticky */}
      <aside className="sticky top-0 h-screen lg:w-[36%] w-auto min-w-[320px] flex flex-col items-center justify-start lg:px-8 z-20 bg-white dark:bg-gray-950">
        <div className="flex flex-col items-start px-2 pt-4 overflow-y-auto">
          <Hero />
          <About />
        </div>
      </aside>

      {/* Right column: Scrollable content */}
      <main ref={mainRef} className="flex-1 bg-white dark:bg-gray-950 lg:pl-12 overflow-y-auto h-screen">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-0">
          <WorkShowcase />
        </div>
      </main>
    </div>
  )
}

export default App
