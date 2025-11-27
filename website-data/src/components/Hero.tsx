export default function Hero() {
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
  ]

  return (
    <aside className="w-full min-h-screen h-screen sticky top-0 bg-gray-900 text-white flex flex-col justify-center py-24 px-8">
      <div>
        <h1 className="text-5xl sm:text-6xl font-bold mb-2">Sathvik Ram Lanka</h1>
        <h2 className="text-2xl text-gray-400 mb-6">Full Stack Developer</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-md leading-relaxed">
          I build scalable web applications with modern technologies. Passionate about clean code and great user experiences.
        </p>
        
        {/* Navigation Links */}
        <nav className="mt-12 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-gray-400 hover:text-blue-400 transition-colors font-semibold uppercase text-sm tracking-widest"
            >
              <span className="text-blue-400 mr-2"></span>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  )
}

