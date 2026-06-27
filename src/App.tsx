import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import WorkShowcase from './components/WorkShowcase'
import TopBar from './components/TopBar'
import CustomCursor from './components/CustomCursor'
import { Analytics } from "@vercel/analytics/react"
// import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen text-gray-900 dark:text-gray-200 font-sans antialiased">

      <TopBar />
      <CustomCursor />
      <Analytics />
      {/* <SpeedInsights /> */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-0 md:px-12 md:pt-20 md:pb-0 lg:px-24 flex flex-col md:flex-row md:justify-between gap-12">
        
        <header className="md:sticky md:top-0 md:h-screen md:w-1/2 flex flex-col justify-between pt-12 pb-0 md:pt-24 md:pb-0">
          <div>
            <Hero />
            <div className="mt-8 hidden md:block">
              <Navigation />
            </div>
          </div>
        </header>

        <main className="md:w-1/2 flex flex-col gap-24 pt-12 pb-0 md:pt-24 md:pb-0">
          <About />
          <WorkShowcase />
        </main>
      </div>
    </div>
  )
}

export default App