import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const positionRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const targetPositionRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const isHoveringRef = useRef<boolean>(false)
  const [isMobile, setIsMobile] = useState(false)
  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    // Check if device is mobile/touch
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsMobile(true)
      return
    }

    const handleMouseMove = (e: MouseEvent): void => {
      targetPositionRef.current = { x: e.clientX, y: e.clientY }

      // Check if hovering over clickable element
      const target = e.target as HTMLElement
      const isClickable = !!(
        target.closest('a') ||
        target.closest('button')
      )

      isHoveringRef.current = isClickable
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Smooth animation loop using requestAnimationFrame
    const animate = () => {
      const dot = dotRef.current
      const ring = ringRef.current
      if (!dot || !ring) {
        animationFrameRef.current = requestAnimationFrame(animate)
        return
      }

      const { x: currentX, y: currentY } = positionRef.current
      const { x: targetX, y: targetY } = targetPositionRef.current

      // Smooth interpolation for the ring (lag effect)
      const ease = 0.15
      positionRef.current.x = currentX + (targetX - currentX) * ease
      positionRef.current.y = currentY + (targetY - currentY) * ease

      const isHovering = isHoveringRef.current
      const scale = isHovering ? 1.5 : 1

      // Update dot (instant, moves with the target position)
      dot.style.transform = `translate(${targetX}px, ${targetY}px) translate(-50%, -50%) scale(${isHovering ? 0 : 1})`
      dot.style.opacity = targetX === 0 && targetY === 0 ? '0' : '1'

      // Update ring (smooth lag, scales on hover)
      ring.style.transform = `translate(${positionRef.current.x}px, ${positionRef.current.y}px) translate(-50%, -50%) scale(${scale})`
      ring.style.backgroundColor = isHovering ? 'var(--color-primary)' : 'transparent'
      ring.style.opacity = targetX === 0 && targetY === 0 ? '0' : isHovering ? '0.2' : '1'

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  if (isMobile) return null

  return (
    <>
      {/* Hide the default cursor */}
      <style>{`
        html, body, * {
          cursor: none !important;
        }
      `}</style>

      {/* Inner Dot: Shrunk to w-2 h-2, added intense primary glow */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-50 shadow-[0_0_10px_2px_var(--color-primary)]"
        style={{
          willChange: 'transform, opacity',
        }}
      />

      {/* Outer Ring: Tightly snapped to w-5 h-5, slightly thicker border*/}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-3 h-3 border-[1.5px] border-primary/80 rounded-full pointer-events-none z-50"
        style={{
          willChange: 'transform, opacity, background-color',
          transition: 'border-color 200ms ease-out',
        }}
      />
    </>
  )
}