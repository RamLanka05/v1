export default function Hero() {
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
  ]

  return (
    <div className="group w-full bg-gray-900 text-white flex items-start justify-start pt-12 px-6 md:px-12 box-border">
    <div className="relative bg-gray-800/60 rounded-[32px] p-12 shadow-2xl w-[90%] max-w-[560px] mx-auto lg:mx-0 lg:ml-4 lg:w-full transition-transform duration-300 border-2 border-white/5 group-hover:border-blue-400/40 group-hover:shadow-[0_24px_48px_rgba(59,130,246,0.14)] overflow-hidden box-border">
        {/* subtle highlight bar under the name that changes color on hover */}
        {/* <div className="h-1 w-28 bg-white/10 rounded mb-6 transition-colors duration-300 group-hover:bg-violet-300/90" /> */}
        <h1 className="text-3xl sm:text-6xl font-bold mb-2">Sathvik Ram Lanka</h1>
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
    </div>
  )
}

