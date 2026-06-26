import Projects from './Projects'
import Experience from './Experience'
import GitHubCommits from './GitHubCommits'

export default function WorkShowcase() {
  return (
    <div className="mb-8">
      <Experience />
      <div className="h-16" />
      <Projects />
      <div className="h-16" />
      <GitHubCommits />
      <div className="my-8" />
    </div>
  )
}
