import Projects from './Projects'
import Experience from './Experience'

export default function WorkShowcase() {
  return (
    <div className="mb-8">
      <Experience />
      <div className="h-16" />
      <Projects />
    </div>
  )
}
