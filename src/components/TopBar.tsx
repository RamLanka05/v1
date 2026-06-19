import { useEffect, useState } from 'react'

export default function TopBar() {

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      // Check if they explicitly saved 'light' in a previous visit
      if (localStorage.getItem('theme') === 'light') return false;
      // Otherwise, force dark mode for everyone!
      return true; 
    }
    return true;
  });
  
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])


  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-6 right-6 sm:top-8 sm:right-8 z-50 p-3 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-800 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )}
    </button>
  )
}