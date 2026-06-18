import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import WorkShowcase from './components/WorkShowcase'
import TopBar from './components/TopBar'

function App() {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen text-gray-900 dark:text-gray-200 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-6 py-12 md:px-12 md:py-20 lg:px-24 flex flex-col md:flex-row md:justify-between gap-12">
        <TopBar />
        <header className="md:sticky md:top-0 md:h-screen md:w-1/2 flex flex-col justify-between py-12 md:py-24">
          <div>
            <Hero />
            <div className="mt-8 hidden md:block">
              <Navigation />
            </div>
          </div>
        </header>

        <main className="md:w-1/2 flex flex-col gap-24 py-12 md:py-24">
          <About />
          <WorkShowcase />
        </main>
      </div>
    </div>
  )
}

export default App