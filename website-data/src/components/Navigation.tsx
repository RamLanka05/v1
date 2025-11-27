export default function Navigation() {
  const links = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-950 shadow-sm z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-bold text-lg hover:text-blue-600 transition-colors">
          SRL
        </a>
        <div className="flex gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
